const mongoCollections = require('../config/mongoCollections');
const inputCheck = require('./inputCheck');
const courses = mongoCollections.courses;
const { ObjectId } = require('mongodb');
const { course } = require('.');

async function createCourse(courseName, academicLevel, courseOwner, type,
    gradingBasis, units, description, typicalPeriodsOffered,
    instructionalFormats, syllabus, courseware) {
    try {
        courseName = inputCheck.checkCourseName(courseName);
        academicLevel = inputCheck.checkAcademicLevel(academicLevel);
        courseOwner = inputCheck.checkCourseOwner(courseOwner);
        type = inputCheck.checkType(type);
        gradingBasis = inputCheck.checkGradingBasis(gradingBasis);
        units = inputCheck.checkUnits(units);
        description = inputCheck.checkDescription(description);
        typicalPeriodsOffered = inputCheck.checkTypicalPeriodsOffered(typicalPeriodsOffered);
        instructionalFormats = inputCheck.checkInstructionalFormats(instructionalFormats);
        syllabus = inputCheck.checkSyllabus(syllabus);
        courseware = inputCheck.checkCourseware(courseware);
    } catch (e) {
        throw e
    }


    let count = { difficulty: { Easy: 0, Medium: 0, Hard: 0 }, chanceToGetA: { Low: 0, Medium: 0, High: 0 }, workLoad: { Less: 0, Medium: 0, Lots: 0 } }
    let metrics = { difficulty: "N/A", chanceToGetA: "N/A", workLoad: "N/A" }
    let courseReview = []
    let averageRating = 0;
    const newCourse = {
        courseName: courseName,
        academicLevel: academicLevel,
        courseOwner: courseOwner,
        type: type,
        gradingBasis: gradingBasis,
        units: units,
        description: description,
        typicalPeriodsOffered: typicalPeriodsOffered,
        instructionalFormats: instructionalFormats,
        syllabus: syllabus,
        courseware: courseware,
        count: count,
        metrics: metrics,
        courseReview: courseReview,
        averageRating: averageRating
    };
    const courseCollection = await courses();
    const newInsertInformation = await courseCollection.insertOne(newCourse);
    if (!newInsertInformation.acknowledged || !newInsertInformation.insertedId) {
        throw 'Could not add course';
    }
    const newId = newInsertInformation.insertedId.toString();
    return this.getCourse(newId)
}

async function getCourse(courseId) {
    courseId = inputCheck.checkCourseId(courseId);
    const courseCollection = await courses();
    let course = await courseCollection.findOne({ _id: ObjectId(courseId) });
    if (course === null) throw 'No course with that id';
    return course;
}

async function removeCourse(courseId) {
    try {
        courseId = inputCheck.checkCourseId(courseId);
    } catch (e) {
        throw e
    }
    const courseCollection = await courses();
    const course = await this.getCourse(courseId)
    const courseName = course.courseName
    const deletionInfo = await courseCollection.deleteOne({ _id: ObjectId(courseId) });
    if (deletionInfo.deletedCount === 0) {
        throw `Could not delete courseName with id of ${courseId}`;
    }
    return courseName + ' has been successfully deleted!'
}


async function updateCourseName(courseId, newCourseName) {
    try {
        courseId = inputCheck.checkCourseId(courseId);
        newCourseName = inputCheck.checkCourseName(newCourseName);
    } catch(e) {
        throw e
    }
    const courseCollection = await courses();
    const course = await courseCollection.findOne({ _id: ObjectId(courseId) })
    if (course === null) throw 'No Course with that id'
    const oldCourseName = course.courseName
    const updateInfo = await courseCollection.updateOne(
        {_id: ObjectId(courseId)},
        {$set: {courseName: newCourseName}}
    )
    if (!updateInfo.matchedCount && !updateInfo.modifiedCount) throw 'Update failed';
    return oldCourseName + " is changed to " + newCourseName
}

async function updateCourseAcademicLevel(courseId, newAcademicLevel) {
    try {
        courseId = inputCheck.checkCourseId(courseId);
        newAcademicLevel = inputCheck.checkCourseName(newAcademicLevel);
    } catch(e) {
        throw e
    }
    const courseCollection = await courses();
    const course = await courseCollection.findOne({ _id: ObjectId(courseId) })
    if (course === null) throw 'No Course with that id'
    const oldAcademicLevel = course.academicLevel
    const updateInfo = await courseCollection.updateOne(
        {_id: ObjectId(courseId)},
        {$set: {academicLevel: newAcademicLevel}}
    )
    if (!updateInfo.matchedCount && !updateInfo.modifiedCount) throw 'Update failed';
    return oldAcademicLevel + " is changed to " + newAcademicLevel
}

async function updateCourseAcademicLevel(courseId, newAcademicLevel) {
    try {
        courseId = inputCheck.checkCourseId(courseId);
        newAcademicLevel = inputCheck.checkCourseName(newAcademicLevel);
    } catch(e) {
        throw e
    }
    const courseCollection = await courses();
    const course = await courseCollection.findOne({ _id: ObjectId(courseId) })
    if (course === null) throw 'No Course with that id'
    const oldAcademicLevel = course.academicLevel
    const updateInfo = await courseCollection.updateOne(
        {_id: ObjectId(courseId)},
        {$set: {academicLevel: newAcademicLevel}}
    )
    if (!updateInfo.matchedCount && !updateInfo.modifiedCount) throw 'Update failed';
    return oldAcademicLevel + " is changed to " + newAcademicLevel
}

module.exports = {
    createCourse,
    getCourse,
    removeCourse,
    updateCourseName,
    updateCourseAcademicLevel
}