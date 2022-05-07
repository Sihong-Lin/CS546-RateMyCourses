
const express = require('express');
const router = express.Router();
const user = require('../data/user');
const inputCheck = require('../data/inputCheck');


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
        username = inputCheck.checkUserName(reviewBody.username)
    }catch(e) {
        res.status(400).json(e);
        return
    }

    try {
        userId = inputCheck.checkUserId(reviewBody.userId)
    }catch(e) {
        res.status(400).json(e);
        return
    }

    try {
        courseId = inputCheck.checkCourseId(reviewBody.courseId)
    }catch(e) {
        res.status(400).json(e);
        return
    }

    try {
        comment = inputCheck.checkComment(reviewBody.comment)
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
            userId,
            courseId,
            comment,
            metrics,
            rating)
        res.json(newReview);
    }catch (e) {
        res.sendStatus(500)
        return
    }
});



module.exports = router;
