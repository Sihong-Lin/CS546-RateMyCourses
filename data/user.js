const bcrypt = require('bcrypt');
const inputCheck = require('./inputCheck');
const saltRound = 16;
const mongoCollections = require('../config/mongoCollections');
const { ObjectId } = require('mongodb');
const courses = mongoCollections.courses;
const users = mongoCollections.users;
const courseDBFunction = require('../data/course');
const { get } = require('express/lib/request');

module.exports = {
    createUser,
    checkUser,
    getUser,
    createCourseReview,
    deleteCourseReview
};
async function checkUsernameRepeat(username) {
    const userCollection = await users();
    let user = await userCollection.findOne({username: username})
    if(user === null) {
        return username
    } else {
        throw 'this username already existed'
    }   
}

async function createUser(username, password) {
    try {
        username = inputCheck.checkUserName(username)
        username = await checkUsernameRepeat(username)
        password = inputCheck.checkPassword(password)
    } catch (e) {
        throw e
    }
    const userCollection = await users();
    let newUser = {
        username: username.toLowerCase(),
        password: await bcrypt.hash(password, saltRound),
        courseReviews: [],
        professorReviews: [],
        restrictStatus: false,
        profilePicture: "",
        role: "student"
    }
    const insertInfo = await userCollection.insertOne(newUser);
    if (!insertInfo.acknowledged || !insertInfo.insertedId) {
        throw 'Could not create user.';
    }

    return { userInserted: true, insertedId: insertInfo.insertedId.toString()};
}

async function checkUser(username, password) {
    try {
        username = inputCheck.checkUserName(username)
        password = inputCheck.checkPassword(password)
    } catch (e) {
        throw e
    }
    const userCollection = await users();
    let userInfo = await userCollection.findOne({username: username.toLowerCase()})
    if(userInfo === null) {
        throw 'Either the username or password is invalid'
    }
    let encrypted_password = userInfo.password
    let passwordMatch = await bcrypt.compare(password, encrypted_password)
    if (!passwordMatch) {
        throw 'Either the username or password is invalid'
    } else {
        return {authenticated: true}
    }
}

async function getUser(userId) {
    userId = inputCheck.checkUserId(userId);
    const userCollection = await users();
    let user = await userCollection.findOne({ _id: ObjectId(userId) });
    if (user === null) throw 'No user with that id';
    return user;
}

async function createCourseReview(userId, courseId, comment, metrics, rating) {
    try {
        userId = inputCheck.checkUserId(userId)
        courseId = inputCheck.checkCourseId(courseId)
        comment = inputCheck.checkComment(comment)
        metrics = inputCheck.checkMetrics(metrics)
        rating = inputCheck.checkRating(rating)
        courseReviewIsNoExisted(userId, courseId)
    } catch (e) {
        throw e
    }

    let newCourseReview = {
        userId: userId,
        courseId: courseId,
        comment: comment,
        metrics: metrics,
        rating: rating
    }
    
    // add review to user
    const userCollection = await users();
    const userUpdateInfo = await userCollection.updateOne(
        {_id: ObjectId(userId)},
        { $push: { courseReviews: newCourseReview}}
    )
    if (!userUpdateInfo.matchedCount && !userUpdateInfo.modifiedCount){
        throw 'fail to add course Review in user';
    }

    // add review to course
    try {
        await courseDBFunction.createCourseReview(courseId, newCourseReview)
    }
    catch(e) {
        throw e
    }
    return { courseReviewInserted: true}; 
}

async function deleteCourseReview(userId, courseId) {
    try {
        userId = inputCheck.checkUserId(userId)
        courseId = inputCheck.checkCourseId(courseId)
    } catch (e) {
        throw e
    }

    
    // delete review to user
    const userCollection = await users();
    const userUpdateInfo = await userCollection.updateOne(
        {_id: ObjectId(userId)},
        { $pull: {courseReviews:{courseId:courseId}}}
    )
    if (!userUpdateInfo.matchedCount && !userUpdateInfo.modifiedCount){
        throw 'fail to delete course Review in user';
    }

    // delete review to course
    try {
        await courseDBFunction.deleteCourseReview(userId, courseId)
    }
    catch(e) {
        throw e
    }
    return { courseReviewDelete: true}; 
}


async function courseReviewIsNoExisted(userId, courseId) {
    const user = getUser(userId);
    const reviews = user.courseReviews
    for(let i = 0; i < reviews.lengnth; i++) {
        if(reviews[i].courseId == courseId) {
            throw 'user already make a review to this course'
        }
    }
    return true;
}

