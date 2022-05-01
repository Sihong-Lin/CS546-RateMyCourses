const express = require('express');
const router = express.Router();
const home = require('../data/home');

//Backstage页面初始化
router.get('/', async (req, res) => {
    const departmentReviews = await home.getDepartmentReviewsCount()
    const departments = departmentReviews[0]
    const courseReviews = departmentReviews[1];
    const professorReviews = departmentReviews[2]
    res.render('backstage', { title: 'RateMyCourses - Backstage', departments:departments, courseReviews:courseReviews, professorReviews:professorReviews    });
});


module.exports = router;
