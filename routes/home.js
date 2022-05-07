const express = require('express');
const router = express.Router();
const home = require('../data/home');

router.get('/', async (req, res) => {
    let topProfessors = await home.getTop5Professors();
    let topCourses = await home.getTop5Courses();
    res.render('home', 
                { 
                    title: 'RateMyCourses - Home',
                    topProfessors: topProfessors,
                    topCourses: topCourses,
                }
    );
});


module.exports = router;
