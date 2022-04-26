const express = require('express');
const router = express.Router();
const course = require('../data/course');


router.get('/', async (req, res) => {
    res.redirect('home');
});

router.get('/:id', async (req, res) => {
    let courseDetail = await course.getCourse(req.params.id);
    res.render('course', { title: courseDetail.courseName, courseDetail: courseDetail});
});

module.exports = router;
