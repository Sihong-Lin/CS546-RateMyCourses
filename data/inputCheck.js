function checkCourseName(courseName) {
    if (!courseName) throw 'You must provided courseName';
    if (typeof courseName !== 'string') throw 'courseName is not a string';
    courseName = courseName.trim();
    if (courseName.trim().length === 0) {
        throw 'courseName cannot be an empty string or just spaces';
    }
    return courseName;
}

function checkAcademicLevel(academicLevel) {
    return academicLevel;
}

function checkCourseOwner(relecourseOwneraseDate) {
    return relecourseOwneraseDate;
}

function checkType(type) {
    return type;
}

function checkGradingBasis(gradingBasis) {
    if (!gradingBasis) throw 'You must provided gradingBasis';
    if (!Array.isArray(gradingBasis)) throw 'GradingBasis must be an array';
    return gradingBasis;
}

function checkUnits(units) {
    if (!units) throw 'You must provided unit';
    if (typeof units !== 'number') throw 'unit is not a string';
    return units;
}

function checkDescription(description) {
    return description;
}

function checkTypicalPeriodsOffered(typicalPeriodsOffered) {
    return typicalPeriodsOffered;
}

function checkInstructionalFormats(instructionalFormats) {
    return instructionalFormats;
}

function checkSyllabus(syllabus) {
    return syllabus;
}

function checkCourseware(courseware) {
    return courseware;
}

function checkMetrics(metrics) {
    return metrics;
}

function checkCourseReview(courseReview) {
    return courseReview;
}

module.exports = {
    checkCourseName,
    checkAcademicLevel,
    checkCourseOwner,
    checkType,
    checkGradingBasis,
    checkUnits,
    checkDescription,
    checkTypicalPeriodsOffered,
    checkInstructionalFormats,
    checkSyllabus,
    checkCourseware,
    checkMetrics,
    checkCourseReview,
};
