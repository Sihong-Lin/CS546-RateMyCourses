const user = require('../data/user');
const course = require('../data/course');
const courseReviewDB = require('../data/courseReview')
const professorReviewDB = require('../data/professorReview')
const home = require('../data/home')
const professor = require('../data/professor');
const connection = require('../config/mongoConnection');
const { ObjectId } = require('mongodb');
const inputCheck = require("../data/inputCheck");
const { courses } = require('../config/mongoCollections');

const departmentReivew = async () => {
    
    const db = await connection.connectToDb();
    await db.dropDatabase();

    let adminId = undefined
    let firstUserId = undefined
    let secondUserId = undefined
    let thirdUserId = undefined
    let fourthUserId = undefined
    let fifthUserId = undefined
    let sixtUserId = undefined

    let firstCourseId = undefined
    let secondCourseId = undefined
    let thirdCourseId = undefined
    let fourthCourseId = undefined
    let fifthCourseId = undefined

    let firstProfId = undefined
    let secondProfId = undefined
    let thirdProfId = undefined

    firstProfId = (await professor.createProfessor(
        'Eric Koskinen', 
        "Computer Science",
        "My research yields techniques that improve the way programmers develop",
        "url to picture"
    ))._id.toString()

    secondProfId = (await professor.createProfessor(
        'John Egg', 
        "Mechanical Engineering",
        "My research for egg improve the way programmers develop",
        "url to picture"
    ))._id.toString()

    thirdProfId = (await professor.createProfessor(
        'Ben hill', 
        "Biomedical Engineering",
        "My research to hill improve the way programmers develop",
        "url to picture"
    ))._id.toString()

    adminId = (await user.createAdmin( //(username, email, major, profilePicture, password)
        "admin",
        "admin@gmail.com",
        "Computer Science",
        "https://freesvg.org/img/administrator.png",
        "123456"
    )).insertedId

    firstUserId = (await user.createUser( //(username, email, major, profilePicture, password)
        "meicheng du",
        "email url",
        "Chemistry",
        "picture url",
        "123456789"
    )).insertedId

    secondUserId = (await user.createUser(
        "wuyifan",
        "email url",
        "Mechanical Engineering",
        "picture url",
        "123456789"
    )).insertedId

    thirdUserId = (await user.createUser(
        "jangjinfu",
        "email url",
        "computer science",
        "picture url",
        "123456789"
    )).insertedId
    
    fourthUserId = (await user.createUser(
        "ziheng zhu",
        "email url",
        "computer science",
        "picture url",
        "123456789"
    )).insertedId

    fifthUserId = (await user.createUser( //(username, email, major, profilePicture, password)
        "qian yu",
        "email url",
        "Chemistry",
        "picture url",
        "123456789"
    )).insertedId

    sixtUserId = (await user.createUser( //(username, email, major, profilePicture, password)
        "xing chen",
        "email url",
        "Materials Engineering",
        "picture url",
        "123456789"
    )).insertedId

    


    firstCourseId = (await course.createCourse( // CS program
        'CS 546 Web Programming', // courseName
        'Graduate', // academicLevel
        'Computer Science', // courseOwner
        'Core', // type
        3, // units
        'This course will provide students with a first strong approach of internet programming', // description
        'Lecture', // instructionalFormats
        'https://web.stevens.edu/academic_files/courses/syllabus/CS546syl.pdf', // syllabus
        'https://github.com/graffixnyc/CS-546', // courseware
        'static/picture/course-2.jpg' // picture
    ))._id.toString()

    secondCourseId = (await course.createCourse( // CS program
        'CS 561 Database System', // courseName
        'Graduate', // academicLevel
        'Computer Science Program', // courseOwner
        'Core', // type
        3, // units
        'Database is just databse', // description
        'Lecture', // instructionalFormats
        'https://web.stevens.edu/academic_files/courses/syllabus/CS561syl.pdf', // syllabus
        'https://github.com/graffixnyc/CS-561', // courseware
        'static/picture/course-2.jpg' // picture
    ))._id.toString()

    thirdCourseId = (await course.createCourse( // ME program
        'ME 333 Mechanical System', // courseName
        'Graduate', // academicLevel
        'Mechanical Engineering', // courseOwner
        'Core', // type
        3, // units
        'Database is just databse', // description
        'Lecture', // instructionalFormats
        'https://web.stevens.edu/academic_files/courses/syllabus/ME-333syl.pdf', // syllabus
        'https://github.com/graffixnyc/ME-333', // courseware
        'static/picture/course-2.jpg' // picture
    ))._id.toString()

    fourthCourseId = (await course.createCourse( // ME program
        'ME 561 Mechanical Programming', // courseName
        'Graduate', // academicLevel
        'Mechanical Engineering Program', // courseOwner
        'Core', // type
        3, // units
        'Database is just databse', // description
        'Lecture', // instructionalFormats
        'https://web.stevens.edu/academic_files/courses/syllabus/CS561syl.pdf', // syllabus
        'https://github.com/graffixnyc/CS-561', // courseware
        'static/picture/course-2.jpg' // picture
    ))._id.toString()

    fifthCourseId = (await course.createCourse( // ME program
        'FN 561 Finance Accounting', // courseName
        'Graduate', // academicLevel
        'Finance Program', // courseOwner
        'Core', // type
        3, // units
        'Database is just databse', // description
        'Lecture', // instructionalFormats
        'https://web.stevens.edu/academic_files/courses/syllabus/CS561syl.pdf', // syllabus
        'https://github.com/graffixnyc/CS-561', // courseware
        'static/picture/course-2.jpg' // picture
    ))._id.toString()

    let u1c1 = await user.createCourseReview( //first user review to first course 
        firstUserId,
        firstCourseId,
        "The lectures are quite easy to understand and so are the Labs. Only need to make sure that you are not careless while working on labs or else you'll lose points and that is something that the professor is always clear about. If you dedicatedly work on the labs and the project, you can easily score an Best professor at Stevens",
        {difficulty: "Easy", chanceToGetA: 'Low', workLoad: 'Less'},
        5
    )

    let u2c1 = await user.createCourseReview( 
        secondUserId,
        firstCourseId,
        "The lectures are quite easy to understand and so are the Labs. Only need to make sure that you are not careless while working on labs or else you'll lose points and that is something that the professor is always clear about. If you dedicatedly work on the labs and the project, you can easily score an Best professor at Stevens",
        {difficulty: "Easy", chanceToGetA: 'Low', workLoad: 'Less'},
        4
    )

    let u3c1 = await user.createCourseReview( 
        thirdUserId,
        firstCourseId,
        "The lectures are quite easy to understand and so are the Labs. Only need to make sure that you are not careless while working on labs or else you'll lose points and that is something that the professor is always clear about. If you dedicatedly work on the labs and the project, you can easily score an Best professor at Stevens",
        {difficulty: "Easy", chanceToGetA: 'Low', workLoad: 'Less'},
        4
    )

    let u2c2 = await user.createCourseReview( 
        secondUserId,
        secondCourseId,
        "The lectures are quite easy to understand and so are the Labs. Only need to make sure that you are not careless while working on labs or else you'll lose points and that is something that the professor is always clear about. If you dedicatedly work on the labs and the project, you can easily score an Best professor at Stevens",
        {difficulty: "Easy", chanceToGetA: 'Low', workLoad: 'Less'},
        4
    )

    let u3c2 = await user.createCourseReview( 
        thirdUserId,
        secondCourseId,
        "The lectures are quite easy to understand and so are the Labs. Only need to make sure that you are not careless while working on labs or else you'll lose points and that is something that the professor is always clear about. If you dedicatedly work on the labs and the project, you can easily score an Best professor at Stevens",
        {difficulty: "Easy", chanceToGetA: 'Low', workLoad: 'Less'},
        4
    )

    let u1c3 = await user.createCourseReview( 
        firstUserId,
        thirdCourseId,
        "The lectures are quite easy to understand and so are the Labs. Only need to make sure that you are not careless while working on labs or else you'll lose points and that is something that the professor is always clear about. If you dedicatedly work on the labs and the project, you can easily score an Best professor at Stevens",
        {difficulty: "Easy", chanceToGetA: 'Low', workLoad: 'Less'},
        4
    )

    let u2c3 = await user.createCourseReview( 
        secondUserId,
        thirdCourseId,
        "The lectures are quite easy to understand and so are the Labs. Only need to make sure that you are not careless while working on labs or else you'll lose points and that is something that the professor is always clear about. If you dedicatedly work on the labs and the project, you can easily score an Best professor at Stevens",
        {difficulty: "Easy", chanceToGetA: 'Low', workLoad: 'Less'},
        4
    )

    let u3c4 = await user.createCourseReview( 
        thirdUserId,
        fourthCourseId,
        "The lectures are quite easy to understand and so are the Labs. Only need to make sure that you are not careless while working on labs or else you'll lose points and that is something that the professor is always clear about. If you dedicatedly work on the labs and the project, you can easily score an Best professor at Stevens",
        {difficulty: "Easy", chanceToGetA: 'Low', workLoad: 'Less'},
        4
    )

    let u3c5 = await user.createCourseReview( 
        thirdUserId,
        fifthCourseId,
        "The lectures are quite easy to understand and so are the Labs. Only need to make sure that you are not careless while working on labs or else you'll lose points and that is something that the professor is always clear about. If you dedicatedly work on the labs and the project, you can easily score an Best professor at Stevens",
        {difficulty: "Easy", chanceToGetA: 'Low', workLoad: 'Less'},
        4
    )


    let u1p1 = await professor.addProfReview( 
        firstUserId,
        firstProfId,
        "Prof is good guy",
        4
    )

    let u1p2 = await professor.addProfReview( 
        firstUserId,
        secondProfId,
        "Prof is bad guy",
        1
    )

    let u1p3 = await professor.addProfReview( 
        firstUserId,
        thirdProfId,
        "Prof is bad guy",
        1
    )

    let u2p1 = await professor.addProfReview( 
        secondUserId,
        firstProfId,
        "Prof is bad guy",
        1
    )

    let u2p2 = await professor.addProfReview( 
        secondUserId,
        secondProfId,
        "Prof is good guy",
        5
    )

    let u3p3 = await professor.addProfReview( 
        thirdUserId,
        thirdProfId,
        "Prof is good guy",
        5
    )
    
    console.log(inputCheck.checkCourseware("http://georgetownheckler.com/wp-content/uploads/2016/09/prof.jpg"))
    // let dc1 = await course.removeCourse(firstCourseId)
    // let dc2 = await course.removeCourse(secondCourseId)
    // let dc3 = await course.removeCourse(thirdCourseId)
    // let dc4 = await course.removeCourse(fourthCourseId) 
    // let dc5 = await course.removeCourse(fifthCourseId) 
    // let map = await user.countUserByMajor()
    // console.log(map)
    // let mapSort = await user.studentMajorDistribution()
    // console.log(mapSort)
    // let res = await home.getDepartmentReviewsCount()
    // console.log(res)
    // console.log(typeof(res))
    // console.log(Array.isArray(res));
    // let a = await home.getAllCourses()
    // console.log(a);
    // let u1dc1 = await user.deleteCourseReview(firstUserId, firstCourseId);
    // let u1dp1 = await professor.removeProfReview(u1p1._id.toString());
    // let res2 = await home.getDepartmentReviewsCount()
    // console.log(res2)
    // let res3 = await professorReviewDB.avgProfessorReview()
    // let res4 = await courseReviewDB.avgCourseReview()
    // console.log(res3)
    // console.log(res4)
    // let res = await course.getTop5CourseByMajor("finance")

    // let res = await professor.getTop5ProfessorsByMajor("computer science")
    // console.log(res);
    connection.closeConnection();
    console.log('Done!');
}

departmentReivew()

const restrictUserTest = async () => {
    const db = await connection.connectToDb();
    await db.dropDatabase();
    
    let firstCourseId = (await course.createCourse( 
        'CS 546 Web Programming', // courseName
        'Graduate', // academicLevel
        'Computer Science Program', // courseOwner
        'Core', // type
        ['Audit', 'Graded', 'Pass/Fail'], // gradingBasis
        3, // units
        'This course will provide students with a first strong approach of internet programming', // description
        ['Fall Semester', 'Spring Semester', 'Summer Session'], // typicalPeriodsOffered
        'Lecture', // instructionalFormats
        'https://web.stevens.edu/academic_files/courses/syllabus/CS546syl.pdf', // syllabus
        'https://github.com/graffixnyc/CS-546', // courseware
        'static/picture/course-2.jpg' // picture
    ))._id.toString()

    let secondCourseId = (await course.createCourse( 
        'CS 561 Database System', // courseName
        'Graduate', // academicLevel
        'Computer Science Program', // courseOwner
        'Core', // type
        ['Audit', 'Graded', 'Pass/Fail'], // gradingBasis
        3, // units
        'Database is just databse', // description
        ['Fall Semester', 'Spring Semester', 'Summer Session'], // typicalPeriodsOffered
        'Lecture', // instructionalFormats
        'https://web.stevens.edu/academic_files/courses/syllabus/CS561syl.pdf', // syllabus
        'https://github.com/graffixnyc/CS-561', // courseware
        'static/picture/course-2.jpg' // picture
    ))._id.toString()

    let firstUserId = (await user.createUser( // create user, default restrictStatus "false"
        "zhuziheng",
        "123456789"
    )).insertedId

    let u1c1 = await user.createCourseReview( // user write review
        firstUserId,
        firstCourseId,
        "The lectures are quite easy to understand and so are the Labs. Only need to make sure that you are not careless while working on labs or else you'll lose points and that is something that the professor is always clear about. If you dedicatedly work on the labs and the project, you can easily score an Best professor at Stevens",
        {difficulty: "Easy", chanceToGetA: 'Low', workLoad: 'Less'},
        4
    )

    changeRestrictStatus = await user.setUserRestrictStatus(firstUserId, true) // set user restrictStatus to "true"
    console.log(changeRestrictStatus)
    
    try {
        let u1c2 = await user.createCourseReview( // user should not be able to write review
        firstUserId,
        secondCourseId,
        "The lectures are quite easy to understand and so are the Labs. Only need to make sure that you are not careless while working on labs or else you'll lose points and that is something that the professor is always clear about. If you dedicatedly work on the labs and the project, you can easily score an Best professor at Stevens",
        {difficulty: "Easy", chanceToGetA: 'Low', workLoad: 'Less'},
        4)
    } catch (e) {
        console.log(e)
    }
    

    connection.closeConnection();
    console.log('Done!');
}


function mergeDepartmentReview(departmentCourseReviewCount, departmentProfessorReviewCount) {
    const map = new Map()
    departmentCourseReviewCount.forEach(function(value, key) {
        if(!map.has(key)) {
            map.set(key, {courseReviews: 0, professorReviews: 0});
        }
        map.get(key).courseReviews += value
    })

    departmentProfessorReviewCount.forEach(function(value, key) {
        if(!map.has(key)) {
            map.set(key, {courseReviews: 0, professorReviews: 0});
        }
        map.get(key).professorReviews += value
    })

    let department = []
    let courseReviews = []
    let professorReviews = []
    const obj = Object.fromEntries(map)
    Object.entries(obj).forEach(([key, value]) => {
        department.push(key)
        courseReviews.push(value.courseReviews)
        professorReviews.push(value.professorReviews)
    })
    const departmentString = "[" + department.join(',') + "]"
    const courseReviewsString = "[" + courseReviews.join(',') + "]"
    const professorReviewsString = "[" + professorReviews.join(',') + "]"
    return [departmentString, courseReviewsString, professorReviewsString]
}

//restrictUserTest()
