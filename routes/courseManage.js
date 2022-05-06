const express = require('express');
const router = express.Router();
const home = require('../data/home');
const course = require('../data/course');
const user = require('../data/user');
const inputCheck = require('../data/inputCheck');

//页面初始化
router.get('/', async (req, res) => {
    if (!isLoggedIn(req)) {
        res.redirect("../401.html");
        return
    }
    let courseList = await home.getAllCourses();
    res.render('courseManage', { 
        title: 'RateMyCourses - Course Manage', 
        allCourses: courseList
    });
});

const isLoggedIn = function (req) {
    if(req.session.user != undefined) {
        if (req.session.user.role != "administrator") {
            return false;
        }
        return true;
    } else {
        return false;
    }
};



module.exports = router;
