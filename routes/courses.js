const express = require('express');
const router = express.Router();
const home = require('../data/home');
const courseDB = require('../data/course');

//Courses页面初始化
router.get('/', async (req, res) => {
    let courseList = await home.getAllCourses();
    res.render('courses', { title: 'RateMyCourses - Courses', allCourses: courseList});
});

router.post('/', async (req, res) => {
    const body = req.body;
    let courseList = await courseDB.getCoursesByKeywords(body.department, body.keyword);
    res.render('courses', { title: 'RateMyCourses - Courses', allCourses: courseList});
});


module.exports = router;
