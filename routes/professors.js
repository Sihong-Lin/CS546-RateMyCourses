const express = require('express');
const router = express.Router();
const home = require('../data/home');

//Professors页面初始化
router.get('/', async (req, res) => {
    let professorList = await home.getAllProfessors();
    res.render('professors', { 
        title: 'RateMyCourses - Courses', 
        allProfessors: professorList,
        partial: "professor-scripts"
    });
});


module.exports = router;
