const express = require('express');
const router = express.Router();
const home = require('../data/home');

//Professors页面初始化
router.get('/', async (req, res) => {
    let professorList = await home.getAllProfessors();
    let dpts = await home.getDepartments();
    res.render('professors', { 
        title: 'RateMyCourses - Courses', 
        allProfessors: professorList,
        dpts: dpts
    });
});

router.post('/', async (req, res) => {
    console.log(req.body.professorName);
    try {
        if (req.session.user) {
            let professor = await home.createProfessor(req.body.professorName, req.body.department, req.body.introduction, req.body.picture);
            console.log(professor);
        } else {
            console.log("You are not authorized to create professor")
        }
        return res.end();
    } catch (e) {
        console.log(e);
    }
});

router.get('/:id', async (req, res) => {
    let { id } = req.params;
    console.log(id);
    try {
        let professor = await home.getProfById(id);
        // console.log(professor);
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
            console.log(profReview);
            res.status(200).render('partials/professor_comment', profReview);
        } else {
            console.log("entering redirect");
            const path = require('path');
            res.status(401).sendFile(path.join(__dirname, '../public', '401.html'));
        }
        return res.end();
    } catch (e) {
        console.log(e);
    }
});

// this route updates professor successfully, but ajax never go on to callback after this
router.put('/:id', async (req, res) => {
    let { id } = req.params;
    let updatedProf = req.body
    try {
        if (req.session.user) {
            let updated = await home.updateProf(id, updatedProf);
        } else {
            console.log("entering redirect");
            res.redirect("../public/401.html");
        }
        return res.end();
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;
