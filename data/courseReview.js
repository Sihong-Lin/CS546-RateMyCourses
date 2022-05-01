const mongoCollections = require('../config/mongoCollections');
const inputCheck = require('./inputCheck');
const courseReview = mongoCollections.courseReview;
const { ObjectId } = require('mongodb');

module.exports = {
    createCourseReview,
    countCourseReview,
    countCourseReviewByDepartment
}

async function createCourseReview(userId, courseId, courseOwner) {

    try {
        userId = inputCheck.checkUserId(userId);
        courseId = inputCheck.checkCourseId(courseId);
        courseOwner = inputCheck.checkCourseOwner(courseOwner);
    } catch (e) {
        throw e
    }

    const newReview = {
        userId: userId,
        courseId: courseId,
        courseOwner: courseOwner
    }

    const courseReviewCollection = await courseReview();
    const newInsertInformation = await courseReviewCollection.insertOne(newReview);
    if (!newInsertInformation.acknowledged || !newInsertInformation.insertedId) {
        throw 'Could not add review to courseReview';
    }
    const newId = newInsertInformation.insertedId.toString();
    return newId
}


async function countCourseReview() {
    const courseReviewCollection = await courseReview();
    const count = await courseReviewCollection.countDocuments()
    return count
}


async function countCourseReviewByDepartment() {
    const courseReviewCollection = await courseReview();
    const courseReviewCursor = await courseReviewCollection.find()
    const allCourseReview =  await courseReviewCursor.toArray()
    const departmentCourseReviewCount = new Map()
    allCourseReview.forEach(review => {
        let program = courseOwnerToDepartment(review.courseOwner)
        if(!departmentCourseReviewCount.has(program)) {
            departmentCourseReviewCount.set(program, 0)
        }
        departmentCourseReviewCount.set(program, departmentCourseReviewCount.get(program) + 1)
    });
    return departmentCourseReviewCount
}

function courseOwnerToDepartment(courseOwner) {
    // Computer Science Program ==> Computer Science 
    // Finance Program ==> Finance
    const arr = courseOwner.split(" ");
    let department = ""
    for(let i = 0; i < arr.length - 1; i++) {
        department += arr[i] + " ";
    }
    return department.trim();
}




 

