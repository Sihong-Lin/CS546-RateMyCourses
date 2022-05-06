const bcrypt = require('bcrypt');
const inputCheck = require('./inputCheck');
const sd = require('silly-datetime');
const saltRound = 1;
const mongoCollections = require('../config/mongoCollections');
const { ObjectId } = require('mongodb');
const courses = mongoCollections.courses;
const professors = mongoCollections.professors;
const users = mongoCollections.users;
const courseDBFunction = require('../data/course');
const courseReviewDBFunction = require('../data/courseReview');
const professorReviewDBFunction = require('../data/professorReview');
const { get } = require('express/lib/request');
const res = require('express/lib/response');


module.exports = {
    createUser,
    createAdmin,
    checkUser,
    getUser,
    createCourseReview,
    deleteCourseReview,
    setUserRestrictStatus,
    changeUserRole,
    removeUser,
    countUsers,
    countUserByMajor,
    studentMajorDistribution,
    getProfessorReviewById,
    getCourseReviewById,
    getUserById,
    getTopCoursesByUserId
};

async function getTopCoursesByUserId(id) {
    let user = await getUserById(id);
    let courseList = await courseDBFunction.getTop5CourseByMajor(user.major);
    for (let i = 0; i < courseList.length; i++) {
        let courseName = courseList[i].courseName;
        let arr = courseName.split(" ");
        courseList[i].courseIndex = arr[0] + " " + arr[1];
        courseList[i].courseName = arr.slice(2).join(" ");
    }
    courseList.forEach(course => {
        course._id = course._id.toString()
    })
    return courseList;

}


async function removeUser(userId) {
    try {
        userId = inputCheck.checkUserId(userId);
    } catch (e) {
        throw e
    }
    const user = await getUserById(userId)
    const professorReviews = user.professorReviews
    const courseReviews = user.courseReviews
    try {
        await deleteProfessorReviewsByUser(professorReviews)
        await deleteCourseReviewsByUser(courseReviews)
    } catch (e) {
        throw e
    }
    const userCollection = await users();
    const deletionInfo = await userCollection.deleteOne({ _id: ObjectId(userId) });
    if (deletionInfo.deletedCount === 0) {
        throw `Could not delete user with id of ${userId}`;
    }
    return 'The user has been successfully deleted!'
}

async function deleteProfessorReviewsByUser(professorReviews) {
    for (let i = 0; i < professorReviews.length; i++) {
        const pid = professorReviews[i].professorId
        const uid = professorReviews[i].userId
        const professorCollection = await professors()
        try {
            await professorReviewDBFunction.deleteProfessorReview(uid, pid)
            await professorCollection.updateOne(
                { _id: ObjectId(pid) },
                { $pull: { reviews: { userId: uid } } }
            )
            await professorCollection.updateOne({ _id: ObjectId(pid)}, [{$set: {rating: {$avg: "$reviews.rating"}}}])
        } catch (e) {
            throw e
        }
    }
    return { allProfessorReviewsDelete: true }
}

async function deleteCourseReviewsByUser(courseReviews) {
    for (let i = 0; i < courseReviews.length; i++) {
        const cid = courseReviews[i].courseId
        const uid = courseReviews[i].userId
        const courseCount = courseReviews[i].metrics
        const courseCollection = await courses()
        try {
            await courseReviewDBFunction.deleteCourseReview(uid, cid)
            await courseCollection.updateOne(
                { _id: ObjectId(cid) },
                { $pull: { courseReviews: { userId: uid } } }
            )
            await courseDBFunction.updateCourseRating(cid)
            await courseDBFunction.decreaseCourseCount(cid,courseCount)
        } catch (e) {
            throw e
        }
    }
    return { allCourseReviewsDelete: true }
}



async function getUserById(id) {
    id = inputCheck.checkUserId(id);
    const userCollection = await users();
    const user = await userCollection.findOne({ _id: ObjectId(id) });
    if (!user) throw 'User not found';
    user._id = user._id.toString()
    return user;
}

async function setUserRestrictStatus(userId) {
    const user = await getUserById(userId)
    const userCollection = await users();
    const updateInfo = await userCollection.updateOne(
        { _id: ObjectId(userId) },
        { $set: { restrictStatus: !user.restrictStatus } }
    );
    if (!updateInfo.matchedCount && !updateInfo.modifiedCount) {
        throw 'Update user restrict status failed';
    }
    return { updateRestrictStatus: true }
}

async function changeUserRole(userId) {
    const user = await getUserById(userId)
    const userCollection = await users();
    let updatedRole = user.role == "student" ? "administrator" : "student";
    const updateInfo = await userCollection.updateOne(
        { _id: ObjectId(userId) },
        { $set: { role: updatedRole } }
    );
    if (!updateInfo.matchedCount && !updateInfo.modifiedCount) {
        throw 'Update user role failed';
    }
    return { updateRestrictStatus: true }
}

async function setLastLogin(userId) {
    const userCollection = await users();
    const updateInfo = await userCollection.updateOne(
        { _id: ObjectId(userId) },
        { $set: { lastLogin: sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss') } }
    );
    if (!updateInfo.matchedCount && !updateInfo.modifiedCount) {
        throw 'Update user user last login information failed';
    }
    return { updateLastLogin: true }
}

async function checkUsernameRepeat(username) {
    const userCollection = await users();
    let user = await userCollection.findOne({ username: username })
    if (user === null) {
        return username
    } else {
        throw 'this username already existed'
    }
}

async function createUser(username, email, major, profilePicture, password) {
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
        profilePicture: profilePicture,
        email: email,
        major: major,
        registrationTime: sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss'),
        lastLogin: "-",
        role: "student"
    }
    const insertInfo = await userCollection.insertOne(newUser);
    if (!insertInfo.acknowledged || !insertInfo.insertedId) {
        throw 'Could not create user.';
    }

    return { userInserted: true, insertedId: insertInfo.insertedId.toString() };
}

async function checkUser(username, password) {
    try {
        username = inputCheck.checkUserName(username)
        password = inputCheck.checkPassword(password)
    } catch (e) {
        throw e
    }
    const userCollection = await users();
    let userInfo = await userCollection.findOne({ username: username.toLowerCase() })
    if (userInfo === null) {
        throw 'Either the username or password is invalid'
    }
    let encrypted_password = userInfo.password
    let passwordMatch = await bcrypt.compare(password, encrypted_password)
    if (!passwordMatch) {
        throw 'Either the username or password is invalid'
    } else {
        let res = await setLastLogin(userInfo._id.toString());
        if (res.updateLastLogin) {
            return { authenticated: true, userId: userInfo._id.toString(), role: userInfo.role };
        }
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
    let user = undefined
    let username = undefined
    let courseName = (await courseDBFunction.getCourse(courseId)).courseName
    try {
        user = await getUser(userId)
    } catch (e) {
        throw e
    }

    const restrictStatus = user.restrictStatus
    if (restrictStatus) {
        throw 'user restrict to write review'
    } else {
        username = user.username
    }

    try {
        userId = inputCheck.checkUserId(userId)
        courseId = inputCheck.checkCourseId(courseId)
        comment = inputCheck.checkComment(comment)
        metrics = inputCheck.checkMetrics(metrics)
        rating = inputCheck.checkRating(rating)
    } catch (e) {
        throw e
    }

    if (await courseReviewIsExisted(userId, courseId)) {
        throw 'User already make comment to course'
    }

    let newCourseReview = {
        username: username,
        userId: userId,
        courseName: courseName,
        courseId: courseId,
        comment: comment,
        metrics: metrics,
        rating: rating
    }

    // add review to user
    const userCollection = await users();
    const userUpdateInfo = await userCollection.updateOne(
        { _id: ObjectId(userId) },
        { $push: { courseReviews: newCourseReview } }
    )
    if (!userUpdateInfo.matchedCount && !userUpdateInfo.modifiedCount) {
        throw 'fail to add course Review in user';
    }

    // add review to course
    let courseOwner = undefined
    try {
        await courseDBFunction.createCourseReview(courseId, newCourseReview)
        courseOwner = (await courseDBFunction.getCourse(courseId)).courseOwner
    }
    catch (e) {
        throw e
    }

    // add review to courseReview
    try {
        await courseReviewDBFunction.createCourseReview(userId, courseId, courseOwner)
    } catch (e) {
        throw e
    }
    return { courseReviewInserted: true };
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
        { _id: ObjectId(userId) },
        { $pull: { courseReviews: { courseId: courseId } } }
    )
    if (userUpdateInfo.modifiedCount == 0) {
        throw 'user dont have course Review to this course';
    }

    // delete review to course
    try {
        await courseDBFunction.deleteCourseReview(userId, courseId)
        await courseReviewDBFunction.deleteCourseReview(userId, courseId)
    }
    catch (e) {
        throw e
    }
    return { courseReviewDelete: true };
}




async function courseReviewIsExisted(userId, courseId) {
    const user = await getUser(userId);
    const reviews = user.courseReviews
    for (let i = 0; i < reviews.length; i++) {
        if (reviews[i].courseId == courseId) {
            return true;
        }
    }
    return false;
}

async function countUsers() {
    const userCollection = await users();
    const count = await userCollection.countDocuments()
    return count
}


async function countUserByMajor() {
    const userCollection = await users();
    const userCursor = await userCollection.find()
    const allUsers = await userCursor.toArray()
    const majorUserCount = new Map()
    allUsers.forEach(user => {
        let major = user.major
        if (!majorUserCount.has(major)) {
            majorUserCount.set(major, 0)
        }
        majorUserCount.set(major, majorUserCount.get(major) + 1)
    });
    const obj = Object.fromEntries(majorUserCount)
    let major = []
    let numberOfStudent = []
    Object.entries(obj).forEach(([key, value]) => {
        major.push(key)
        numberOfStudent.push(value)
    })
    const majorString = major.join(',')
    const numberOfStudentString = numberOfStudent.join(',')

    return [majorString, numberOfStudentString]
}

async function studentMajorDistribution() {
    const userCollection = await users();
    const totalUserAmount = await userCollection.countDocuments()
    const userCursor = await userCollection.find()
    const allUsers = await userCursor.toArray()
    const majorUserCount = new Map()
    allUsers.forEach(user => {
        let major = user.major
        if (!majorUserCount.has(major)) {
            majorUserCount.set(major, 0)
        }
        majorUserCount.set(major, majorUserCount.get(major) + 1)
    });
    let res = []
    for (const pair of majorUserCount.entries()) {
        var object = { major: pair[0], numberOfStudent: pair[1], precentage: (pair[1] / totalUserAmount * 100).toFixed(2) }
        res.push(object)
    }
    res.sort((a, b) => b.numberOfStudent - a.numberOfStudent)
    return res
}

async function getCourseReviewById(userId) {
    const user = await getUserById(userId);
    return user.courseReviews
}

async function getProfessorReviewById(userId) {
    const user = await getUserById(userId);
    return user.professorReviews
}








async function createAdmin(username, email, major, profilePicture, password) {
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
        profilePicture: profilePicture,
        email: email,
        major: major,
        registrationTime: sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss'),
        lastLogin: "-",
        role: "administrator"
    }
    const insertInfo = await userCollection.insertOne(newUser);
    if (!insertInfo.acknowledged || !insertInfo.insertedId) {
        throw 'Could not create user.';
    }

    return { userInserted: true, insertedId: insertInfo.insertedId.toString() };
}
