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
            res.render('partials/professor_comment', profReview);
        } else {
            console.log("entering redirect");
            res.redirect("../public/401.html");
        }
    } catch (e) {
        console.log(e);
    }
});

router.put('/:id', async (req, res) => {
    let { id } = req.params;
    let updatedProf = req.body
    try {
        if (req.session.user && req.session.user.role === 'manager') {
            let updated = await home.updateProf(id, updatedProf);
            console.log(updated);
            res.redirect('/professorManage')
        } else {
            console.log("entering redirect");
            res.redirect("../public/401.html");
        }
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;
