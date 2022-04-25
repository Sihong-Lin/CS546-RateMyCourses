const user = require('../data/user');
const course = require('../data/course');
const professor = require('../data/professor');
const connection = require('../config/mongoConnection');
const { ObjectId } = require('mongodb');

const main = async () => {
    const db = await connection.connectToDb();
    await db.dropDatabase();
    let firstUserId = undefined
    let firstCourseId = undefined
    console.log("1. Create first user");
    try {
        let createUser = await user.createUser(
            "zihengZhu",
            "123456789"
        )

        const insertStatus = createUser.userInserted
        firstUserId = createUser.insertedId
        if(insertStatus) {
            console.log("First user created successfully, user id is: " + firstUserId);
        }else {
            console.log("First user fail to insert")
        }
    } catch (e) {
        console.log(e);
    } 

    console.log("2. Create first course"); 
    
    try {
        let course1 = await course.createCourse(
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
        )
        firstCourseId = course1._id.toString()
        console.log(course1);
    } catch (e) {
        console.log(e);
    }
    
    console.log("3. first user add course review to first course ");
    try {
        let newCourseReview = await user.createCourseReview(
            firstUserId,
            firstCourseId,
            "The lectures are quite easy to understand and so are the Labs. Only need to make sure that you are not careless while working on labs or else you'll lose points and that is something that the professor is always clear about. If you dedicatedly work on the labs and the project, you can easily score an Best professor at Stevens",
            {difficulty: "Easy", chanceToGetA: 'Low', workLoad: 'Less'},
            4.5
        )
        const insertStatus = newCourseReview.courseReviewInserted
        // courseReviewId = insertStatus.insertedId  subdocument dont have _id
        if(insertStatus) {
            console.log("first course Review created successfully");
        }else {
            console.log("first course Review fail to insert")
        }
    } catch (e) {
        console.log(e);
    } 


    let secondUserId = undefined
    console.log("4. Create second user");
    try {
        let createUser = await user.createUser(
            "somebody",
            "123456789"
        )
        const insertStatus = createUser.userInserted
        secondUserId = createUser.insertedId
        if(insertStatus) {
            console.log("Second user created successfully, user id is: " + secondUserId);
        }else {
            console.log("Second user fail to insert")
        }
    } catch (e) {
        console.log(e);
    } 

    console.log("5. second user add course review to first course ");
    try {
        let newCourseReview = await user.createCourseReview(
            secondUserId,
            firstCourseId,
            "The lectures is suck",
            {difficulty: "Hard", chanceToGetA: 'Low', workLoad: 'Plenty'},
            1.111
        )
        const insertStatus = newCourseReview.courseReviewInserted
        if(insertStatus) {
            console.log("Second course Review created successfully");
        }else {
            console.log("Second course Review fail to insert")
        }
    } catch (e) {
        console.log(e);
    } 


    // console.log("2. log in first user");
    // try {
    //     let checkUser = await user.checkUser(
    //         "zihengZhu",
    //         "123456789"
    //     )

    //     const checkStatus = checkUser.authenticated
    //     if(checkStatus) {
    //         console.log(`First user login successfully`);
    //     }else {
    //         console.log("First user fail to login")
    //     }
    // } catch (e) {
    //     console.log(e);
    // } 

    connection.closeConnection();
    console.log('Done!');
}

main();