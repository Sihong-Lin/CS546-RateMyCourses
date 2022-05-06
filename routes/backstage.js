const express = require('express');
const router = express.Router();
const home = require('../data/home');
const user = require('../data/user')
const course = require('../data/course')
const professor = require('../data/professor')
const courseReview = require('../data/courseReview')
const professorReview = require('../data/professorReview')
//Backstage页面初始化
router.get('/', async (req, res) => {
    if (!isLoggedIn(req)) {
        res.redirect("../401.html");
        return
    }
    const departmentReviews = await home.getDepartmentReviewsCount()
    const majorNumberOfStudents = await user.countUserByMajor()
    const numberOfCourses = await course.countCourses();
    const numberOfProfessors = await professor.countProfessors();
    const numberOfCourseReviews = await courseReview.countCourseReview();
    const numberOfProfessorReviews = await professorReview.countProfessorReview();
    const numberOfUsers = await user.countUsers()
    const major = majorNumberOfStudents[0]
    const numberOfstudentsByMajor = majorNumberOfStudents[1]
    const departments = departmentReviews[0]
    const courseReviews = departmentReviews[1];
    const professorReviews = departmentReviews[2]
    const top5Courses = await home.getTop5Courses()
    const top5Professors = await home.getTop5Professors()
    const studentMajorDistribution = await user.studentMajorDistribution()
    res.render('backstage', { 
        title: 'RateMyCourses - Backstage', 
        numberOfUsers : numberOfUsers,
        numberOfCourses: numberOfCourses,
        numberOfProfessors: numberOfProfessors,
        numberOfCourseReviews: numberOfCourseReviews,
        numberOfProfessorReviews: numberOfProfessorReviews,
        avgProfessorReview: (numberOfProfessorReviews/numberOfProfessors).toFixed(2),
        avgCourseReview: (numberOfCourseReviews/numberOfCourses).toFixed(2),
        departments:departments, 
        courseReviews:courseReviews, 
        professorReviews:professorReviews,
        top5Courses: top5Courses,
        top5Professors: top5Professors,
        major: major,
        numberOfstudentsByMajor: numberOfstudentsByMajor,
        studentMajorDistribution: studentMajorDistribution
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
