const { ObjectId } = require('mongodb');

module.exports = {
    /*User data input check*/
    checkUserName,
    checkPassword,
    checkUserId,
    checkComment,
    checkMetrics,
    checkRating,
    /*Course data input check*/
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
    checkCourseId,
    checkCoursePicture,
    /*Professor data input check*/
    checkProfessorName,
    checkDepartment,
    checkIntroduction,
    checkProfessorPicture
}


/* input checking for user */
function checkUserName(userName) {
    if (userName == undefined) throw 'You must provided userName';
    if (typeof userName != 'string') throw 'userName is not a string';
    userName = userName.trim();
    if (userName.length == 0) throw 'userName cannot be an empty string or just spaces';
    //if (!/^[a-zA-Z0-9]{4,}$/.test(userName)) throw 'userName is not vaild';
    return userName;
}

function checkPassword(password) {
    if (password == undefined) throw 'You must provided password';
    if (typeof password != 'string') throw 'password is not a string';
    password = password.trim();
    if (password.length < 6) throw 'password should be at least 6 characters long';
    if (/[ ]{1,}/.test(password)) throw 'password cannot contain space'
    return password;
}

function checkUserId(userId) {
    if (!userId) throw 'You must provide a userId to search for';
    if (typeof userId !== 'string') throw 'userId must be a string';
    if (userId.trim().length === 0) {
        throw 'userId cannot be an empty string or just spaces';
    }
    if (!ObjectId.isValid(userId)) throw 'invalid object ID';
    return userId
}

function checkComment(comment) {
    if(!comment) throw 'You must provided comment'
    if (typeof comment !== 'string') throw 'comment is not a string';
    comment = comment.trim();
    if (comment.trim().length === 0) {
        throw 'comment cannot be an empty string or just spaces';
    }
    return comment;
}

function checkMetrics(metrics) {
    if(!metrics) throw 'You must provided metrics'
    if(typeof metrics !== 'object') throw 'metrics is not a object'
    if(!('difficulty' in metrics)) throw 'You must rate difficulty'
    if(!('chanceToGetA' in metrics)) throw 'You must rate chanceToGetA'
    if(!('workLoad' in metrics)) throw 'You must rate workLoad'
    const difficulty = metrics.difficulty
    const chanceToGetA = metrics.chanceToGetA
    const workLoad = metrics.workLoad
    if(!((difficulty === 'Easy') || (difficulty === 'Medium') || (difficulty === 'Hard'))) {
        throw 'difficulty must be easy/medium/hard'
    }
    if(!((chanceToGetA === 'Low') || (chanceToGetA === 'Medium') || (chanceToGetA === 'High'))) {
        throw 'chanceToGetA must be low/medium/high'
    }
    if(!((workLoad !== 'Less') || (workLoad !== 'Medium') || (workLoad !== 'Plenty'))) {
        throw 'workLoad must be less/medium/plenty'
    }
    return metrics
}

function checkRating(rating) {
    if(!rating) throw 'You must provided rating'
    if(typeof(rating) !== 'number' || rating < 0 || rating > 5) {
        throw 'rating is not a number from 0 to 5'
    }
    return Number(rating.toFixed(1))
}

/* input checking for course */
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
    if(typeof(gradingBasis) === 'string') return [gradingBasis]
    else if(!Array.isArray(gradingBasis)) throw 'GradingBasis must be an array'
    if(gradingBasis.length === 0) throw 'gradingBasis cannot be empty'
    return gradingBasis
}

function checkUnits(units) {
    if(!units) throw 'You must provided unit'
    units = parseInt(units)
    if(!Number.isInteger(units)) throw 'unit is not a integer'
    if(units < 1 || units > 4) throw 'unit must in range of 1 to 4'
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
    if(typeof(typicalPeriodsOffered) === 'string') return [typicalPeriodsOffered]
    else if(!Array.isArray(typicalPeriodsOffered)) throw 'typicalPeriodsOffered must be an array'
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
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator  
    if(!!pattern.test(courseware)) {
        return courseware
    } else {
        throw 'invaild courseware url'
    }
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

function checkCoursePicture(coursePicture) {
    // if(!coursePicture) throw 'You must provided course picture'
    // if(typeof(coursePicture) !== 'string') throw 'Course Picture is not a string'
    // var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    // '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    // '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    // '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    // '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    // '(\\#[-a-z\\d_]*)?$','i'); // fragment locator  
    // if(!!pattern.test(coursePicture)) {
    //     return coursePicture
    // } else {
    //     throw 'invaild course picture url'
    // }
    return coursePicture
}
/* input checking for professor */

function checkProfessorName(professorName){
    if (!professorName) throw 'You must provided professor name';
    if (typeof professorName !== 'string') throw 'professor name is not a string';
    professorName = professorName.trim();
    if (professorName.trim().length === 0) {
        throw 'professor name cannot be an empty string or just spaces';
    }
    return professorName;
}

function checkDepartment(department) {
    if(!department) throw 'You must provided department'
    if(typeof(department) !== 'string') throw 'department is not a string'
    department = department.trim();
    if (department.trim().length === 0) {
        throw 'department cannot be an empty string or just spaces';
    }
    return department
}

function checkIntroduction(introduction) {
    if(!introduction) throw 'You must provided introduction'
    if(typeof(introduction) !== 'string') throw 'introduction is not a string'
    introduction = introduction.trim();
    if (introduction.trim().length === 0) {
        throw 'introduction cannot be an empty string or just spaces';
    }
    return introduction
}

function checkProfessorPicture(professorPicture) {
    // if(!professorPicture) throw 'You must provided course picture'
    // if(typeof(professorPicture) !== 'string') throw 'Course Picture is not a string'
    // var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    // '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    // '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    // '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    // '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    // '(\\#[-a-z\\d_]*)?$','i'); // fragment locator  
    // if(!!pattern.test(professorPicture)) {
    //     return professorPicture
    // } else {
    //     throw 'invaild professor picture url'
    // }
    return professorPicture
}