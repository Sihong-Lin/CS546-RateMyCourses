const express = require('express');
const router = express.Router();
const user = require('../data/user');

router.get('/', async (req, res) => {
    if (!isLoggedIn(req)) {
        res.redirect("../401.html");
        return
    }

    let userId = req.session.user.userId;
    let userInfo = await user.getUserById(userId);

    let professorReviews = await user.getProfessorReviewById(userId);
    let courseReviews = await user.getCourseReviewById(userId);

    console.log(professorReviews)
    console.log(courseReviews)

    res.render('account', 
                { 
                    title: 'RateMyCourses - Account',
                    userInfo: userInfo
                    //professorReviews: professorReviews,
                   // courseReviews: courseReviews
                }
    );
});

router.get('/', async (req, res) => {
    let courseList = await home.getAllCourses();
    res.render('courses', { title: 'RateMyCourses - Courses', allCourses: courseList});
});

const isLoggedIn = function (req) {
    if(req.session.user != undefined) {
        return true;
    } else {
        return false;
    }
};


module.exports = router;
