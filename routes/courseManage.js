const express = require('express');
const router = express.Router();
const home = require('../data/home');
const course = require('../data/course');
const user = require('../data/user');
const inputCheck = require('../data/inputCheck');

//页面初始化
router.get('/', async (req, res) => {
    let courseList = await home.getAllCourses();
    res.render('courseManage', { 
        title: 'RateMyCourses - Course Manage', 
        allCourses: courseList
    });
});



module.exports = router;
