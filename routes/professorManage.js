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
    let professorList = await home.getAllProfs();
    professorList.forEach(professor => {

        if (!professor.rating) {
            professor.rating = 0
        } else {
            professor.rating = professor.rating.toPrecision(2)
        }
        // professor.numberOfCourses = professor.courses.length;

        // professor.numberOfReview = professor.reviews.length;
    })
    res.render('professorManage', { 
        title: 'RateMyCourses - Professor Manage', 
        allProfessors: professorList
    });
});


router.post('/', async (req, res) => {
    
})  

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
