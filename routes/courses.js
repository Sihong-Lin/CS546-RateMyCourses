const express = require('express');
const router = express.Router();
const home = require('../data/home');
const courseDB = require('../data/course');
const xss = require('xss');

//Courses页面初始化
router.get('/', async (req, res) => {
    let courseList = await home.getAllCourses();
    res.render('courses', { title: 'RateMyCourses - Courses', allCourses: courseList});
});

router.post('/', async (req, res) => {


    try {
        const body = req.body;
        let courseList = await courseDB.getCoursesByKeywords(xss(body.department), xss(body.keyword));
        res.json(courseList);
      
    } catch (e) {
        res.status(500).json(e);
        return
    }
   
});


module.exports = router;
