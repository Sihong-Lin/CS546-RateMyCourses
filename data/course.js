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

async function updateCourseOwner(courseId, newCourseOwner) {
    try {
        courseId = inputCheck.checkCourseId(courseId);
        newCourseOwner = inputCheck.checkCourseOwner(newCourseOwner);
    } catch(e) {
        throw e
    }
    const courseCollection = await courses();
    const course = await courseCollection.findOne({ _id: ObjectId(courseId) })
    if (course === null) throw 'No Course with that id'
    const oldCourseOwner = course.courseOwner
    const updateInfo = await courseCollection.updateOne(
        {_id: ObjectId(courseId)},
        {$set: {courseOwner: newCourseOwner}}
    )
    if (!updateInfo.matchedCount && !updateInfo.modifiedCount) throw 'Update failed';
    return oldCourseOwner + " is changed to " + newCourseOwner
}

async function updateCourseType(courseId, newType) {
    try {
        courseId = inputCheck.checkCourseId(courseId);
        newType = inputCheck.checkCourseOwner(newType);
    } catch(e) {
        throw e
    }
    const courseCollection = await courses();
    const course = await courseCollection.findOne({ _id: ObjectId(courseId) })
    if (course === null) throw 'No Course with that id'
    const oldType = course.type
    const updateInfo = await courseCollection.updateOne(
        {_id: ObjectId(courseId)},
        {$set: {type: newType}}
    )
    if (!updateInfo.matchedCount && !updateInfo.modifiedCount) throw 'Update failed';
    return oldType + " is changed to " + newType
}

async function updateCourseGradingBasis(courseId, newGradingBasis) {
    try {
        courseId = inputCheck.checkCourseId(courseId);
        newGradingBasis = inputCheck.checkGradingBasis(newGradingBasis);
    } catch(e) {
        throw e
    }
    const courseCollection = await courses();
    const course = await courseCollection.findOne({ _id: ObjectId(courseId) })
    if (course === null) throw 'No Course with that id'
    const oldGradingBasis = course.gradingBasis
    const updateInfo = await courseCollection.updateOne(
        {_id: ObjectId(courseId)},
        {$set: {gradingBasis: newGradingBasis}}
    )
    if (!updateInfo.matchedCount && !updateInfo.modifiedCount) throw 'Update failed';
    return oldGradingBasis + " is changed to " + newGradingBasis
}

async function updateCourseUnites(courseId, newUnits) {
    try {
        courseId = inputCheck.checkCourseId(courseId);
        newUnits = inputCheck.checkUnits(newUnits);
    } catch(e) {
        throw e
    }
    const courseCollection = await courses();
    const course = await courseCollection.findOne({ _id: ObjectId(courseId) })
    if (course === null) throw 'No Course with that id'
    const oldUnits = course.units
    const updateInfo = await courseCollection.updateOne(
        {_id: ObjectId(courseId)},
        {$set: {units: newUnits}}
    )
    if (!updateInfo.matchedCount && !updateInfo.modifiedCount) throw 'Update failed';
    return oldUnits + " is changed to " + newUnits
}


async function updateCourseDescription(courseId, newDescription) {
    try {
        courseId = inputCheck.checkCourseId(courseId);
        newDescription = inputCheck.checkDescription(newDescription);
    } catch(e) {
        throw e
    }
    const courseCollection = await courses();
    const course = await courseCollection.findOne({ _id: ObjectId(courseId) })
    if (course === null) throw 'No Course with that id'
    const oldDescription = course.description
    const updateInfo = await courseCollection.updateOne(
        {_id: ObjectId(courseId)},
        {$set: {description: newDescription}}
    )
    if (!updateInfo.matchedCount && !updateInfo.modifiedCount) throw 'Update failed';
    return oldDescription + " is changed to " + newDescription
}

async function updateCourseTypicalPeriodsOffered(courseId, newTypicalPeriodsOffered) {
    try {
        courseId = inputCheck.checkCourseId(courseId);
        newTypicalPeriodsOffered = inputCheck.checkTypicalPeriodsOffered(newTypicalPeriodsOffered);
    } catch(e) {
        throw e
    }
    const courseCollection = await courses();
    const course = await courseCollection.findOne({ _id: ObjectId(courseId) })
    if (course === null) throw 'No Course with that id'
    const oldTypicalPeriodsOffered = course.typicalPeriodsOffered
    const updateInfo = await courseCollection.updateOne(
        {_id: ObjectId(courseId)},
        {$set: {typicalPeriodsOffered: newTypicalPeriodsOffered}}
    )
    if (!updateInfo.matchedCount && !updateInfo.modifiedCount) throw 'Update failed';
    return oldTypicalPeriodsOffered + " is changed to " + newTypicalPeriodsOffered
}

async function updateCourseInstructionalFormats(courseId, newInstructionalFormats) {
    try {
        courseId = inputCheck.checkCourseId(courseId);
        newInstructionalFormats = inputCheck.checkInstructionalFormats(newInstructionalFormats);
    } catch(e) {
        throw e
    }
    const courseCollection = await courses();
    const course = await courseCollection.findOne({ _id: ObjectId(courseId) })
    if (course === null) throw 'No Course with that id'
    const oldInstructionalFormats = course.instructionalFormats
    const updateInfo = await courseCollection.updateOne(
        {_id: ObjectId(courseId)},
        {$set: {instructionalFormats: newInstructionalFormats}}
    )
    if (!updateInfo.matchedCount && !updateInfo.modifiedCount) throw 'Update failed';
    return oldInstructionalFormats + " is changed to " + newInstructionalFormats
}


async function updateCourseSyllabus(courseId, newSyllabus) {
    try {
        courseId = inputCheck.checkCourseId(courseId);
        newSyllabus = inputCheck.checkSyllabus(newSyllabus);
    } catch(e) {
        throw e
    }
    const courseCollection = await courses();
    const course = await courseCollection.findOne({ _id: ObjectId(courseId) })
    if (course === null) throw 'No Course with that id'
    const oldSyllabus = course.syllabus
    const updateInfo = await courseCollection.updateOne(
        {_id: ObjectId(courseId)},
        {$set: {syllabus: newSyllabus}}
    )
    if (!updateInfo.matchedCount && !updateInfo.modifiedCount) throw 'Update failed';
    return oldSyllabus + " is changed to " + newSyllabus
}

async function updateCourseCourseware(courseId, newCourseware) {
    try {
        courseId = inputCheck.checkCourseId(courseId);
        newCourseware = inputCheck.checkCourseware(newCourseware);
    } catch(e) {
        throw e
    }
    const courseCollection = await courses();
    const course = await courseCollection.findOne({ _id: ObjectId(courseId) })
    if (course === null) throw 'No Course with that id'
    const oldCourseware = course.courseware
    const updateInfo = await courseCollection.updateOne(
        {_id: ObjectId(courseId)},
        {$set: {courseware: newCourseware}}
    )
    if (!updateInfo.matchedCount && !updateInfo.modifiedCount) throw 'Update failed';
    return oldCourseware + " is changed to " + newCourseware
}

module.exports = {
    createCourse,
    getCourse,
    removeCourse,
    updateCourseName,
    updateCourseAcademicLevel,
    updateCourseOwner,
    updateCourseType,
    updateCourseGradingBasis,
    updateCourseUnites,
    updateCourseDescription,
    updateCourseTypicalPeriodsOffered,
    updateCourseInstructionalFormats,
    updateCourseSyllabus,
    updateCourseCourseware
}