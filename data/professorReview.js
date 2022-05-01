const mongoCollections = require('../config/mongoCollections');
const inputCheck = require('./inputCheck');
const professorReview = mongoCollections.professorReview;
const { ObjectId } = require('mongodb');

module.exports = {
    createProfessorReview,
    countProfessorReview,
    countProfessorReviewByDepartment
}


async function createProfessorReview(userId, professorId, department) {

    try {
        userId = inputCheck.checkUserId(userId);
        professorId = inputCheck.checkUserId(professorId);
        department = inputCheck.checkDepartment(department);
    } catch (e) {
        throw e
    }

    const newReview = {
        userId: userId,
        professorId: professorId,
        department: department
    }

    const professorReviewCollection = await professorReview();
    const newInsertInformation = await professorReviewCollection.insertOne(newReview);
    if (!newInsertInformation.acknowledged || !newInsertInformation.insertedId) {
        throw 'Could not add review to professorReview';
    }
    const newId = newInsertInformation.insertedId.toString();
    return newId
}

async function countProfessorReview() {
    const professorReviewCollection = await professorReview();
    const count = await professorReviewCollection.countDocuments()
    return count
}

async function countProfessorReviewByDepartment() {
    const professorReviewCollection = await professorReview();
    const professorReviewCursor = await professorReviewCollection.find()
    const allProfessorReview =  await professorReviewCursor.toArray()
    const departmentProfessorReviewCount = new Map()
    allProfessorReview.forEach(review => {
        let department = review.department
        if(!departmentProfessorReviewCount.has(department)) {
            departmentProfessorReviewCount.set(department, 0)
        }
        departmentProfessorReviewCount.set(department, departmentProfessorReviewCount.get(department) + 1)
    });
    return departmentProfessorReviewCount
}

