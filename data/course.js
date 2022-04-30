const mongoCollections = require('../config/mongoCollections');
const inputCheck = require('./inputCheck');
const courses = mongoCollections.courses;
const { ObjectId } = require('mongodb');


async function createCourse(courseName, academicLevel, courseOwner, type,
    gradingBasis, units, description, typicalPeriodsOffered,
    instructionalFormats, syllabus, courseware, picture) {
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
        picture = inputCheck.checkCoursePicture(picture);
    } catch (e) {
        throw e
    }


    let count = { difficulty: { Easy: 0, Medium: 0, Hard: 0 }, chanceToGetA: { Low: 0, Medium: 0, High: 0 }, workLoad: { Less: 0, Medium: 0, Plenty: 0 } }
    let metrics = { difficulty: "unkonwn", chanceToGetA: "unkonwn", workLoad: "unkonwn" }
    let courseReviews = []
    let overallRating = 0;
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
        picture: picture,
        count: count,
        metrics: metrics,
        courseReviews: courseReviews,
        overallRating: overallRating
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

async function updateCourse(courseId, courseName, academicLevel, courseOwner, type,
    gradingBasis, units, description, typicalPeriodsOffered,
    instructionalFormats, syllabus, courseware, picture) {
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
        picture = inputCheck.checkCoursePicture(picture);
    } catch (e) {
        throw e
    }
    const oldCourse = await getCourse(courseId);
    let count = oldCourse.count
    let metrics = oldCourse.metrics
    let courseReviews = oldCourse.courseReviews
    let overallRating = oldCourse.overallRating
    const courseCollection = await courses();
    
    let updatedCourse = {
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
        picture: picture,
        count: count,
        metrics: metrics,
        courseReviews: courseReviews,
        overallRating: overallRating
    }
    
    const updatedInfo = await courseCollection.replaceOne(
        { _id: ObjectId(courseId) },
        updatedCourse
    );
    if (updatedInfo.modifiedCount === 0) {
        throw 'could not update course successfully';
    }
    return await this.getCourse(courseId)
}

async function createCourseReview(courseId, newCourseReview) {
    const courseCollection = await courses();
    const courseUpdateInfo = await courseCollection.updateOne(
        { _id: ObjectId(courseId) },
        { $push: { courseReviews: newCourseReview } }
    )
    if (!courseUpdateInfo.matchedCount && !userUpdateInfo.modifiedCount) {
        throw 'fail to add course Review in course';
    } else {
        try {
            await updateCourseRating(courseId)
            await updateCourseCount(courseId, newCourseReview.metrics)
        } catch (e) {
            throw e
        }
    }
    return { courseReviewInsertedToCourse: true }
}

async function deleteCourseReview(userId, courseId) {
    const courseCollection = await courses();
    const reviews = (await getCourse(courseId)).courseReviews;
    let reviewToDelete = undefined
    for (let i = 0; i < reviews.length; i++) {
        if (reviews[i].userId == userId) {
            reviewToDelete = reviews[i]
            break;
        }
    }
    const courseUpdateInfo = await courseCollection.updateOne(
        { _id: ObjectId(courseId) },
        { $pull: { courseReviews: { userId: userId } } }
    )
    if (!courseUpdateInfo.matchedCount && !userUpdateInfo.modifiedCount) {
        throw 'fail to delete course Review in course';
    } else {
        try {
            await updateCourseRating(courseId)
            await decreaseCourseCount(courseId, reviewToDelete.metrics)
        } catch (e) {
            throw e
        }
    }
    return { courseReviewInsertedToCourse: true }
}

async function updateCourseCount(courseId, newUserMetrics) {
    let course = await getCourse(courseId)
    const courseCollection = await courses()
    let count = course.count
    const userDifficulty = newUserMetrics.difficulty
    const userChanceToGetA = newUserMetrics.chanceToGetA
    const userWorkLoad = newUserMetrics.workLoad
    count.difficulty[userDifficulty] = count.difficulty[userDifficulty] + 1
    count.chanceToGetA[userChanceToGetA] = count.chanceToGetA[userChanceToGetA] + 1
    count.workLoad[userWorkLoad] = count.workLoad[userWorkLoad] + 1
    const updateInfo = await courseCollection.updateOne(
        { _id: ObjectId(courseId) },
        { $set: { count: count } }
    );
    if (!updateInfo.matchedCount && !updateInfo.modifiedCount) {
        throw 'Update failed';
    } else {
        try {
            await updateCourseMetrics(courseId)
        } catch (e) {
            throw e
        }
    }
    return { updateCount: true }
}

async function decreaseCourseCount(courseId, deleteUserMetrics) {
    let course = await getCourse(courseId)
    const courseCollection = await courses()
    let count = course.count
    const userDifficulty = deleteUserMetrics.difficulty
    const userChanceToGetA = deleteUserMetrics.chanceToGetA
    const userWorkLoad = deleteUserMetrics.workLoad
    count.difficulty[userDifficulty] = count.difficulty[userDifficulty] - 1
    count.chanceToGetA[userChanceToGetA] = count.chanceToGetA[userChanceToGetA] - 1
    count.workLoad[userWorkLoad] = count.workLoad[userWorkLoad] - 1
    const updateInfo = await courseCollection.updateOne(
        { _id: ObjectId(courseId) },
        { $set: { count: count } }
    );
    if (!updateInfo.matchedCount && !updateInfo.modifiedCount) {
        throw 'Update failed';
    } else {
        try {
            await updateCourseMetrics(courseId)
        } catch (e) {
            throw e
        }
    }
    return { updateCount: true }
}

async function updateCourseMetrics(courseId) {
    let course = await getCourse(courseId)
    const courseCollection = await courses()
    let metrics = course.metrics
    let count = course.count
    let difficulty = countDifficulty(count.difficulty); //return easy/medium/hard
    let chanceToGetA = countChanceToGetA(count.chanceToGetA); //return low/medium/high
    let workLoad = countworkLoad(count.workLoad); // return less/medium/plenty
    metrics.difficulty = difficulty
    metrics.chanceToGetA = chanceToGetA
    metrics.workLoad = workLoad
    const updateInfo = await courseCollection.updateOne(
        { _id: ObjectId(courseId) },
        { $set: { metrics: metrics } }
    );
    if (!updateInfo.matchedCount && !updateInfo.modifiedCount) {
        throw 'Update failed';
    }
    return { updateCourseMetrics: true }
}

function countDifficulty(difficulty) {
    if (difficulty.Hard > difficulty.Medium && difficulty.Hard > difficulty.Easy) {
        return 'Hard'
    } else if (difficulty.Medium > difficulty.Hard && difficulty.Medium > difficulty.Easy) {
        return 'Medium'
    } else if (difficulty.Easy > difficulty.Medium && difficulty.Easy > difficulty.Hard) {
        return 'Easy'
    } else {
        if (difficulty.Hard === difficulty.Easy) {
            return 'Medium'
        } else if (difficulty.Hard === difficulty.Medium) {
            return 'Hard'
        } else if (difficulty.Easy === difficulty.Medium) {
            return 'Medium'
        }
    }
    return 'unknown'
}

function countChanceToGetA(chanceToGetA) {
    if (chanceToGetA.High > chanceToGetA.Medium && chanceToGetA.High > chanceToGetA.Low) {
        return 'High'
    } else if (chanceToGetA.Medium > chanceToGetA.High && chanceToGetA.Medium > chanceToGetA.Low) {
        return 'Medium'
    } else if (chanceToGetA.Low > chanceToGetA.Medium && chanceToGetA.Low > chanceToGetA.High) {
        return 'Low'
    } else {
        if (chanceToGetA.High === chanceToGetA.Low) {
            return 'Medium'
        } else if (chanceToGetA.High === chanceToGetA.Medium) {
            return 'High'
        } else if (chanceToGetA.Low === chanceToGetA.Medium) {
            return 'Medium'
        }
    }
    return 'unknown'
}

function countworkLoad(workLoad) {
    if (workLoad.Plenty > workLoad.Medium && workLoad.Plenty > workLoad.Less) {
        return 'Plenty'
    } else if (workLoad.Medium > workLoad.Plenty && workLoad.Medium > workLoad.Less) {
        return 'Medium'
    } else if (workLoad.Less > workLoad.Medium && workLoad.Less > workLoad.Plenty) {
        return 'Less'
    } else {
        if (workLoad.Plenty === workLoad.Less) {
            return 'Medium'
        } else if (workLoad.Plenty === workLoad.Medium) {
            return 'Plenty'
        } else if (workLoad.Less === workLoad.Medium) {
            return 'Medium'
        }
    }
    return 'unknown'
}

async function updateCourseRating(courseId) {
    let course = await getCourse(courseId)
    const courseCollection = await courses()
    let reviews = course.courseReviews
    let sum = 0;
    reviews.forEach(object => {
        sum += object.rating
    });
    let avg = undefined
    if (reviews.length == 0) {
        avg = 0;
    } else {
        avg = sum / reviews.length
    }

    const updateInfo = await courseCollection.updateOne(
        { _id: ObjectId(courseId) },
        { $set: { overallRating: avg.toFixed(1) } }
    );
    if (!updateInfo.matchedCount && !updateInfo.modifiedCount) {
        throw 'Update failed';
    }
    return { updateOverallRating: true }
}

//async function getCoursesByKeywords(department, courseName)
async function countCourses() {
    const courseCollection = await courses();
    const count = await courseCollection.countDocuments()
    return count
}
module.exports = {
    createCourse,
    getCourse,
    removeCourse,
    updateCourse,
    createCourseReview, // create course review function will call call back function update rating, count and metrics
    deleteCourseReview,
    countCourses
}