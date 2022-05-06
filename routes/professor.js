const express = require('express');
const router = express.Router();
const home = require('../data/home');
const professor = require('../data/professor');

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

router.put('/editProfessorReview/', async (req, res) => {  
    let userId = req.body.userId;
    let professorId = req.body.professorId;
    let reviewId = req.body.reviewId;
    let newComment = req.body.newComment;
    let reviewEditStatus = undefined
    try {
        reviewEditStatus = await professor.updateProfReview(userId, reviewId, professorId, newComment)
    } catch (e) {
        res.status(500).json(e);
        return
    }
    
    res.status(200).json({reviewEditStatus: true});
    
});

router.post('/', async (req, res) => {
    try {
        if (req.session.user) {
            let professor = await home.createProfessor(req.body.professorName, req.body.department, req.body.introduction, req.body.picture);
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
        let professor = await home.getProfById(id);
        if (!professor.rating) {
            professor.rating = 0
        } else {
            professor.rating = professor.rating.toPrecision(2)
        }
        res.render('professorDetail', professor);
    } catch (e) {
        console.log(e);
    }
});

// clean up this route
router.post('/:id', async (req, res) => {
    let { id } = req.params;
    let comment = req.body.comment;
    let rating = parseInt(req.body.rating);
    try {
        if (req.session.user) {
            let uid = req.session.user.userId;
            let profReview = await home.addProfReview(uid, id, comment, rating);
            res.status(200).render('partials/professor_comment', profReview);
        } else {
            console.log("entering redirect");
            res.status(401).send("You are not authroized to post a comment")
        }
        // return res.end();
    } catch (e) {
        console.log(e);
    }
});


router.put('/:id', async (req, res) => {
    let { id } = req.params;
    let updatedProf = req.body
    try {
        if (req.session.user) {
            let updated = await home.updateProf(id, updatedProf);
            res.status(200).json("professro successfully updated");
        } else {
            console.log("entering redirect");
            res.redirect("../public/401.html");
        }
        return res.end();
    } catch (e) {
        console.log(e);
    }
});

router.delete('/:id', async (req, res) => {
    let { id } = req.params;
    try {
        if (req.session.user) {
            let deleteInfo = await home.removeProf(id);
            res.status(200).send("Professor successfully deleted");
        } else {
            res.status(401).send("You are not authorized to delete a professor");
        }
        return;
    } catch (e) {
        console.log(e);
    }
});

router.get('/comments/:id', async (req, res) => {
    let { id } = req.params;
    try {
        if (req.session.user) {
            let review = await home.getProfReview(id);
            res.status(200).json(review);
        } else {
            res.status(401).send("You are not authorized to view this content")
        }
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
});

router.put('/comments/:id', async (req, res) => {
    let { id } = req.params;
    try {
        if (req.session.user) {
            let updatedReview = await home.updateProfReview(id, req.body.professorId, req.body.comment, req.body.rating);
            res.status(200).json(updatedReview);
        } else {
            res.status(401).send("You are not authorized to delete this content")
        }
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
});

router.delete('/comments/:id', async (req, res) => {
    let { id } = req.params;
    try {
        if (req.session.user) {
            let deleteInfo = await home.removeProfReview(id);
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