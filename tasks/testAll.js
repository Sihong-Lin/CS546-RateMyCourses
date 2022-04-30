const user = require('../data/user');
const course = require('../data/course');
const courseReviewDB = require('../data/courseReview')
const professor = require('../data/professor');
const connection = require('../config/mongoConnection');
const { ObjectId } = require('mongodb');
const inputCheck = require("../data/inputCheck")

const departmentReivew = async () => {
    
    const db = await connection.connectToDb();
    await db.dropDatabase();
    let firstUserId = undefined
    let secondUserId = undefined
    let thirdUserId = undefined

    let firstCourseId = undefined
    let secondCourseId = undefined
    let thirdCourseId = undefined
    let fourthCourseId = undefined

    firstUserId = (await user.createUser(
        "zhuziheng",
        "123456789"
    )).insertedId

    secondUserId = (await user.createUser(
        "wuyifan",
        "123456789"
    )).insertedId

    thirdUserId = (await user.createUser(
        "jangjinfu",
        "123456789"
    )).insertedId

    firstCourseId = (await course.createCourse( // CS program
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

    secondCourseId = (await course.createCourse( // CS program
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

    thirdCourseId = (await course.createCourse( // ME program
        'ME 333 Mechanical System', // courseName
        'Graduate', // academicLevel
        'Mechanical Engineering Program', // courseOwner
        'Core', // type
        ['Audit', 'Graded', 'Pass/Fail'], // gradingBasis
        3, // units
        'Database is just databse', // description
        ['Fall Semester', 'Spring Semester', 'Summer Session'], // typicalPeriodsOffered
        'Lecture', // instructionalFormats
        'https://web.stevens.edu/academic_files/courses/syllabus/ME-333syl.pdf', // syllabus
        'https://github.com/graffixnyc/ME-333', // courseware
        'static/picture/course-2.jpg' // picture
    ))._id.toString()

    

    fourthCourseId = (await course.createCourse( // ME program
        'ME 561 xxx xxx', // courseName
        'Graduate', // academicLevel
        'Mechanical Engineering Program', // courseOwner
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

    const totalReviews = await courseReviewDB.countCourseReview()
    console.log("total reviews are: " + totalReviews)
    const departmentCourseReviewCount = await courseReviewDB.getAllCourseReview()
    console.log(departmentCourseReviewCount)
    connection.closeConnection();
    console.log('Done!');
}

//departmentReivew()

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


restrictUserTest()
