const express = require('express');
const router = express.Router();
const home = require('../data/home');
const course = require('../data/course');
const user = require('../data/user');
const inputCheck = require('../data/inputCheck');

//页面初始化
router.get('/', async (req, res) => {
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
    console.log(professorList[0])
    res.render('professorManage', { 
        title: 'RateMyCourses - Professor Manage', 
        allProfessors: professorList
    });
});


router.post('/', async (req, res) => {
    
})  

module.exports = router;
