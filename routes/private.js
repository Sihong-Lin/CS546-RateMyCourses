
const express = require('express');
const router = express.Router();
const user = require('../data/user');
const inputCheck = require('../data/inputCheck');
const xss = require('xss');


router.post('/course', async (req, res) => {
    let reviewBody = req.body
    if(!reviewBody) {
        res.status(400).json({error : 'You must provide data to create a course review'})
        return
    }
    let username = undefined
    let userId = undefined
    let courseId = undefined
    let comment = undefined
    let metrics = undefined
    let rating = undefined

    try {
        username = inputCheck.checkUserName(xss(reviewBody.username))
    }catch(e) {
        res.status(400).json(e);
        return
    }

    try {
        userId = inputCheck.checkUserId(xss(reviewBody.userId))
    }catch(e) {
        res.status(400).json(e);
        return
    }

    try {
        courseId = inputCheck.checkCourseId(xss(reviewBody.courseId))
    }catch(e) {
        res.status(400).json(e);
        return
    }

    try {
        comment = inputCheck.checkComment(xss(reviewBody.comment))
    }catch(e) {
        res.status(400).json(e);
        return
    }

    try {
        metrics = inputCheck.checkMetrics(reviewBody.metrics)
    }catch(e) {
        res.status(400).json(e);
        return
    }

    try {
        rating = inputCheck.checkRating(reviewBody.rating)
    }catch(e) {
        res.status(400).json(e);
        return
    }

    try {
        const newReview = await user.createCourseReview(
            xss(userId),
            xss(courseId),
            xss(comment),
            metrics,
            rating)
        res.json(newReview);
    }catch (e) {
        console.log(e);
        res.sendStatus(500)
        return
    }
});



module.exports = router;
