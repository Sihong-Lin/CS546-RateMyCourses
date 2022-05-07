const express = require('express');
const router = express.Router();
const user = require('../data/user');
const xss = require('xss');

router.get('/', async (req, res) => {
    if (!isLoggedIn(req)) {
        res.redirect("../401.html");
        return
    }

    let userId = req.session.user.userId;
    let userInfo = await user.getUserById(xss(userId));

    let professorReviews = await user.getProfessorReviewById(xss(userId));
    let courseReviews = await user.getCourseReviewById(xss(userId));

    let topCourses = await user.getTopCoursesByUserId(xss(userId));
    res.render('account', 
                { 
                    title: 'RateMyCourses - Account',
                    userInfo: userInfo,
                    professorReviews: professorReviews,
                    courseReviews: courseReviews,
                    topCourses: topCourses
                }
    );
});



const isLoggedIn = function (req) {
    if(req.session.user != undefined) {
        return true;
    } else {
        return false;
    }
};


module.exports = router;
