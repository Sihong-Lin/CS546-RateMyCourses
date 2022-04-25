const express = require('express');
const router = express.Router();
const home = require('../data/home');

router.get('/', async (req, res) => {
    let professorList = await home.getTop3Professors();
    res.render('home', { 
                    title: 'RateMyCourses - Home',
                    topProfessors: professorList});
});


module.exports = router;
