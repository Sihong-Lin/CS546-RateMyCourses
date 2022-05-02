const express = require('express');
const router = express.Router();
const home = require('../data/home');
const course = require('../data/course');
const user = require('../data/user');
const inputCheck = require('../data/inputCheck');

//页面初始化
router.get('/', async (req, res) => {
    let professorList = await home.getAllProfessors();
    res.render('professorManage', { 
        title: 'RateMyCourses - Professor Manage', 
        allProfessors: professorList
    });
});


router.post('/', async (req, res) => {
    
})  

module.exports = router;
