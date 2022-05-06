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


    try {
        console.log(111)
        const body = req.body;
        let courseList = await courseDB.getCoursesByKeywords(body.department, body.keyword);
        res.render('courses', { title: 'RateMyCourses - Courses', allCourses: courseList});
      
    } catch (e) {
        res.status(500).json(e);
        return
    }
    console.log(111)
   
});


module.exports = router;
