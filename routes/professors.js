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
        console.log(professor)
        if (!professor.overallRating) professor.overallRating = 0;
        res.render('professorDetail', professor);
    } catch (e) {
        console.log(e);
    }
});


// clean up this route
router.post('/:id', async (req, res) => {
    let { id } = req.params;
    comment = req.body.comment;
    if (!req.session.user) res.redirect('/login');
    uid = req.session.user.userId
    rating = parseInt(req.body.rating)
    try {
        home.addProfReview(uid, id, comment, rating)
    } catch (e) {
        console.log(e);
    }
});




module.exports = router;
