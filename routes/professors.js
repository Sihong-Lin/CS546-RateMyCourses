const express = require('express');
const router = express.Router();
const home = require('../data/home');

//Professors页面初始化
router.get('/', async (req, res) => {
    let professorList = await home.getAllProfessors();
    res.render('professors', { 
        title: 'RateMyCourses - Courses', 
        allProfessors: professorList
    });
});

router.get('/:id', async (req, res) => {
    let { id } = req.params;
    console.log(id);
    try {
        let professor = await home.getProfById(id);
        if (!professor.rating) {
            professor.rating = 0.0
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
    console.log("1");
    if (!req.session.user) {
        res.redirect('/login');
        return;
    }
    console.log("2");
    uid = req.session.user.userId;
    comment = req.body.comment;
    rating = parseInt(req.body.rating);
    try {
        let profReview = await home.addProfReview(uid, id, comment, rating);
        console.log(profReview);
        res.redirect(`/professors/${id}`);
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;
