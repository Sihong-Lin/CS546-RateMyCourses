const { ObjectId } = require('mongodb');




function checkCourseName(courseName) {
    if(!courseName) throw 'You must provided courseName'
    if(typeof(courseName) !== 'string') throw 'courseName is not a string'
    courseName = courseName.trim();
    if (courseName.trim().length === 0) {
        throw 'courseName cannot be an empty string or just spaces';
    }
    return courseName;
}

function checkAcademicLevel(academicLevel) {
    if(!academicLevel) throw 'You must provided academicLevel'
    if(typeof(academicLevel) !== 'string') throw 'academicLevel is not a string'
    academicLevel = academicLevel.trim();
    if (academicLevel.trim().length === 0) {
        throw 'academicLevel cannot be an empty string or just spaces';
    }
    return academicLevel
}

function checkCourseOwner(courseOwner) {
    if(!courseOwner) throw 'You must provided courseOwner'
    if(typeof(courseOwner) !== 'string') throw 'courseOwner is not a string'
    courseOwner = courseOwner.trim();
    if (courseOwner.trim().length === 0) {
        throw 'courseOwner cannot be an empty string or just spaces';
    }
    return courseOwner
}

function checkType(type) {
    if(!type) throw 'You must provided type'
    if(typeof(type) !== 'string') throw 'type is not a string'
    type = type.trim();
    if (type.trim().length === 0) {
        throw 'type cannot be an empty string or just spaces';
    }
    return type
}

function checkGradingBasis(gradingBasis) {
    if(!gradingBasis) throw 'You must provided gradingBasis'
    if(!Array.isArray(gradingBasis)) throw 'GradingBasis must be an array'
    if(gradingBasis.length === 0) throw 'gradingBasis cannot be empty'
    return gradingBasis
}

function checkUnits(units) {
    if(!units) throw 'You must provided unit'
    if(typeof(units) !== 'number') throw 'unit is not a number'
    return units
}

function checkDescription(description) {
    if(!description) throw 'You must provided description'
    if(typeof(description) !== 'string') throw 'description is not a string'
    description = description.trim();
    if (description.trim().length === 0) {
        throw 'description cannot be an empty string or just spaces';
    }
    return description
}

function checkTypicalPeriodsOffered(typicalPeriodsOffered) {
    if(!typicalPeriodsOffered) throw 'You must provided typicalPeriodsOffered'
    if(!Array.isArray(typicalPeriodsOffered)) throw 'typicalPeriodsOffered must be an array'
    if(typicalPeriodsOffered.length === 0) throw 'typicalPeriodsOffered cannot be empty'
    return typicalPeriodsOffered
}

function checkInstructionalFormats(instructionalFormats) {
    if(!instructionalFormats) throw 'You must provided instructionalFormats'
    if(typeof(instructionalFormats) !== 'string') throw 'instructionalFormats is not a string'
    instructionalFormats = instructionalFormats.trim();
    if (instructionalFormats.trim().length === 0) {
        throw 'instructionalFormats cannot be an empty string or just spaces';
    }
    return instructionalFormats
}

function checkSyllabus(syllabus) {
    if(!syllabus) throw 'You must provided syllabus'
    if(typeof(syllabus) !== 'string') throw 'syllabus is not a string'
    syllabus = syllabus.trim();
    if (syllabus.trim().length === 0) {
        throw 'syllabus cannot be an empty string or just spaces';
    }
    return syllabus
}

function checkCourseware(courseware) {
    if(!courseware) throw 'You must provided courseware'
    if(typeof(courseware) !== 'string') throw 'courseware is not a string'
    courseware = courseware.trim();
    if (courseware.trim().length === 0) {
        throw 'courseware cannot be an empty string or just spaces';
    }
    return courseware
}

function checkCourseId(courseId) {
    if (!courseId) throw 'You must provide a courseId to search for';
    if (typeof courseId !== 'string') throw 'courseId must be a string';
    if (courseId.trim().length === 0) {
        throw 'courseId cannot be an empty string or just spaces';
    }
    courseId = courseId.trim();
    if (!ObjectId.isValid(courseId)) throw 'invalid object ID';
    return courseId
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
    checkCourseId
}