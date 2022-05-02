const express = require('express');
const router = express.Router();
const home = require('../data/home');

//Courses页面初始化
router.get('/', async (req, res) => {
    let courseList = await home.getAllCourses();
    res.render('courses', { title: 'RateMyCourses - Courses', allCourses: courseList});
});


module.exports = router;
