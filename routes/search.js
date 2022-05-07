const express = require('express');
const router = express.Router();
const course = require('../data/course');

router.get('/', async (req, res) => {
    let majors = await course.getAllMajor();
    res.render('search', 
                { 
                    title: 'RateMyCourses - Search',
                    majors: majors,
                }
    );
});


module.exports = router;