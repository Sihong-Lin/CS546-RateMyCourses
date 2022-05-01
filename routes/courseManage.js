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

//新增course
router.post('/', async (req, res) => { // create new course
    let courseBody = req.body
    if(!courseBody) {
        res.status(400).json({error : 'You must provide data to create a course'})
        return
    }
    let courseName = undefined
    let academicLevel = undefined
    let courseOwner = undefined
    let type = undefined
    let gradingBasis = undefined
    let units = undefined
    let description = undefined
    let typicalPeriodsOffered = undefined
    let instructionalFormats = undefined
    let syllabus = undefined
    let courseware = undefined
    let picture = undefined

    try {
        courseName = inputCheck.checkCourseName(courseBody.courseName)
    }catch(e) {
        res.status(400).json(e);
        return
    }

    try {
        academicLevel = inputCheck.checkAcademicLevel(courseBody.academicLevel)
    }catch(e) {
        res.status(400).json(e);
        return
    }

    try {
        courseOwner = inputCheck.checkCourseOwner(courseBody.courseOwner)
    }catch(e) {
        res.status(400).json(e);
        return
    }

    try {
        type = inputCheck.checkType(courseBody.type)
    }catch(e) {
        res.status(400).json(e);
        return
    }

    try {
        gradingBasis = inputCheck.checkGradingBasis(courseBody.gradingBasis)
    }catch(e) {
        res.status(400).json(e);
        return
    }

    try {
        units = inputCheck.checkUnits(courseBody.units)
    }catch(e) {
        res.status(400).json(e);
        return
    }

    try {
        description = inputCheck.checkDescription(courseBody.description)
    }catch(e) {
        res.status(400).json(e);
        return
    }

    try {
        typicalPeriodsOffered = inputCheck.checkTypicalPeriodsOffered(courseBody.typicalPeriodsOffered)
    }catch(e) {
        res.status(400).json(e);
        return
    }

    try {
        instructionalFormats = inputCheck.checkInstructionalFormats(courseBody.instructionalFormats)
    }catch(e) {
        res.status(400).json(e);
        return
    }

    try {
        syllabus = inputCheck.checkSyllabus(courseBody.syllabus)
    }catch(e) {
        res.status(400).json(e);
        return
    }

    try {
        courseware = inputCheck.checkCourseware(courseBody.courseware)
    }catch(e) {
        res.status(400).json(e);
        return
    }

    try {
        picture = inputCheck.checkCoursePicture(courseBody.picture)
    }catch(e) {
        res.status(400).json(e);
        return
    }

    try {
        const newCourse = await course.createCourse(
            courseName,
            academicLevel, 
            courseOwner, 
            type, 
            gradingBasis,
            units,
            description,
            typicalPeriodsOffered,
            instructionalFormats,
            syllabus,
            courseware,
            picture)
        res.json(newCourse);
    }catch (e) {
        res.sendStatus(500)
        return
    }
})  

module.exports = router;
