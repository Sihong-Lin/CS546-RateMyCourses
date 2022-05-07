const express = require('express');
const router = express.Router();
const home = require('../data/home');
const inputCheck = require('./inputCheck');
const xss = require('xss');

//Professors页面初始化
router.get('/', async (req, res) => {
    let professorList = await home.getAllProfessors();
    let dpts = await home.getDepartments();
    // console.log(professorList[0])
    res.render('professors', { 
        title: 'RateMyCourses - Courses', 
        allProfessors: professorList,
        dpts: dpts
    });
});

router.post('/', async (req, res) => {
    try {
        let professorName = inputCheck.checkUserName(xss(req.body.professorName));
        let department = inputCheck.checkDepartment(xss(req.body.department));
        let introduction = inputCheck.checkIntroduction(xss(req.body.introduction));
        let picture = inputCheck.checkProfessorPicture(xss(req.body.picture));

        if (req.session.user) {
            let professor = await home.createProfessor(xss(professorName), xss(department), xss(introduction), xss(picture));
            res.status(200).json(professor);
        } else {
            console.log("You are not authorized to create professor")
            res.status(401).send("You are not authorized to create professor");
        }
    } catch (e) {
        res.status(400).send(e);
    }
});

router.get('/:id', async (req, res) => {
    let { id } = req.params;
    try {
        inputCheck.checkUserId(id);
        let professor = await home.getProfById(xss(id));
        if (!professor.rating) {
            professor.rating = 0
        } else {
            professor.rating = professor.rating.toPrecision(2)
        }
        res.status(200).render('professorDetail', professor);
    } catch (e) {
        res.status(404).send(e);
    }
});

// clean up this route
router.post('/:id', async (req, res) => {
    let { id } = req.params;
    let comment = req.body.comment;
    let rating = parseInt(req.body.rating);

    try {
        inputCheck.checkUserId(xss(id));
        inputCheck.checkComment(xss(comment));
        let rating = inputCheck.checkRating(rating)

        if (req.session.user) {
            let uid = req.session.user.userId;
            let profReview = await home.addProfReview(xss(uid), xss(id), xss(comment), xss(rating));
            res.status(200).render('partials/professor_comment', profReview);
        } else {
            console.log("entering redirect");
            res.status(401).send("You are not authroized to post a comment")
        }
        // return res.end();
    } catch (e) {
        res.status(500).send(e);
    }
});


router.put('/:id', async (req, res) => {
    let { id } = req.params;
    let updatedProf = req.body

    let profProperty = {
        professorName: "",
        department: "",
        introduction: "",
        picture: ""
    };

    try {
        inputCheck.checkUserId(xss(id));
        Object.entries(updatedProf).forEach(key => {
            if (!(profProperty.hasOwnProperty(key[0]))) throw "Invalid field";
        })
        if (req.session.user) {
            let updated = await home.updateProf(xss(id), xss(updatedProf));
            res.status(200).json("professro successfully updated");
        } else {
            console.log("entering redirect");
            res.status(401).send("You are not authorized to edit professor");
        }
    } catch (e) {
        res.status(500).send(e);
    }
});

router.delete('/:id', async (req, res) => {
    let { id } = req.params;
    try {
        inputCheck.checkUserId(xss(id));
        if (req.session.user) {
            let deleteInfo = await home.removeProf(xss(id));
            res.status(200).send("Professor successfully deleted");
        } else {
            res.status(401).send("You are not authorized to delete a professor");
        }
        return;
    } catch (e) {
        res.status(500).send(e);
    }
});

router.get('/comments/:id', async (req, res) => {
    let { id } = req.params;
    try {
        inputCheck.checkUserId(xss(id));
        if (req.session.user) {
            let review = await home.getProfReview(xss(id));
            res.status(200).json(review);
        } else {
            res.status(401).send("You are not authorized to view this content")
        }
    } catch (e) {
        console.log(e);
        res.status(404).send(e);
    }
});

router.put('/comments/:id', async (req, res) => {
    let { id } = req.params;
    try {
        let id = inputCheck.checkUserId(xss(id));
        let professorId = inputCheck.checkUserId(xss(req.body.professorId));
        let comment = inputCheck.checkComment(xss(req.body.comment));
        let rating = inputCheck.checkRating(xss(req.body.rating));

        if (req.session.user) {
            let updatedReview = await home.updateProfReview(id, xss(req.session.user.userId), xss(professorId), xss(comment), xss(rating));
            res.status(200).json(updatedReview);
        } else {
            res.status(401).send("You are not authorized to edit this content")
        }
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
});

router.delete('/comments/:id', async (req, res) => {
    let { id } = req.params;
    try {
        inputCheck.checkUserId(xss(id));
        if (req.session.user) {
            let deleteInfo = await home.removeProfReview(xss(id));
            res.status(200).json(deleteInfo);
        } else {
            res.status(401).send("You are not authorized to delete this content")
        }
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
});


module.exports = router;
