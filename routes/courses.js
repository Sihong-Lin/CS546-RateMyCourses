const express = require('express');
const router = express.Router();
const home = require('../data/home');
const courseDB = require('../data/course');
const inputCheck = require('../data/inputCheck');
const xss = require('xss');
//Courses页面初始化
router.get('/', async (req, res) => {
    let courseList = await home.getAllCourses();
    res.render('courses', { title: 'RateMyCourses - Courses', allCourses: courseList});
});

router.post('/', async (req, res) => {
    const body = req.body;
    let department = undefined
    let keyword = undefined
    try {
        department = inputCheck.checkDepartment(xss(body.department))
        keyword = body.keyword
        let courseList = await courseDB.getCoursesByKeywords(xss(department), xss(keyword));
        res.json(courseList);
      
    } catch (e) {
        res.status(500).json(e);
        return
    }
   
});


module.exports = router;
