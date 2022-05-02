const user = require('../data/user');
const course = require('../data/course');
const professor = require('../data/professor');
const connection = require('../config/mongoConnection');
const { ObjectId } = require('mongodb');
const inputCheck = require("../data/inputCheck")


const main = async () => {
    
    const db = await connection.connectToDb();
    await db.dropDatabase();
    let firstUserId = undefined
    
    console.log("1. Create first user");
    try {
        let createUser = await user.createUser(
            "zihengZhu",
            "aaa@gmail.com", 
            "Computer Science", 
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2K9xcJVlIG31wI5COY_Qep5GahOMmCmLYEQ&usqp=CAU",
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

    let secondUserId = undefined
    console.log("2. Create second user");
    try {
        let createUser = await user.createUser(
            "somebody",
            "aaa@gmail.com", 
            "Computer Science", 
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2K9xcJVlIG31wI5COY_Qep5GahOMmCmLYEQ&usqp=CAU",
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
    
    let thirdUserId = undefined
    console.log("3. Create third user");
    try {
        let createUser = await user.createUser(
            "JiangJinFu",
            "aaa@gmail.com", 
            "Computer Science", 
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2K9xcJVlIG31wI5COY_Qep5GahOMmCmLYEQ&usqp=CAU",
            "123456789"
        )
        const insertStatus = createUser.userInserted
        thirdUserId = createUser.insertedId
        if(insertStatus) {
            console.log("third user created successfully, user id is: " + thirdUserId);
        }else {
            console.log("third user fail to insert")
        }
    } catch (e) {
        console.log(e);
    } 


    let firstCourseId = undefined
    console.log("4. Create first course"); 
    
    try {
        let course1 = await course.createCourse(
            'CS 546 Web Programming', // courseName
            'Graduate', // academicLevel
            'Computer Science Program', // courseOwner
            'Core', // type
          //  ['Audit', 'Graded', 'Pass/Fail'], // gradingBasis
            3, // units
            'This course will provide students with a first strong approach of internet programming', // description
         //   ['Fall Semester', 'Spring Semester', 'Summer Session'], // typicalPeriodsOffered
            'Lecture', // instructionalFormats
            'https://web.stevens.edu/academic_files/courses/syllabus/CS546syl.pdf', // syllabus
            'https://github.com/graffixnyc/CS-546', // courseware
            'static/picture/course-2.jpg' // picture
        )
        firstCourseId = course1._id.toString()
        console.log(course1);
    } catch (e) {
        console.log(e);
    }

    let secondCourseId = undefined
    console.log("2. Create second course"); 
    try {
        let course2 = await course.createCourse(
            'CS 561 Database', // courseName
            'Graduate', // academicLevel
            'Computer Science Program', // courseOwner
            'Core', // type
           // ['Audit', 'Graded', 'Pass/Fail'], // gradingBasis
            3, // units
            'This course will provide students with a first strong approach of database system', // description
           // ['Fall Semester', 'Spring Semester', 'Summer Session'], // typicalPeriodsOffered
            'Lecture', // instructionalFormats
            'https://web.stevens.edu/academic_files/courses/syllabus/CS546syl.pdf', // syllabus
            'https://github.com/graffixnyc/CS-546', // courseware
            'static/picture/course-3.jpg' // picture
        )
        secondCourseId = course2._id.toString()
        console.log(course2);
    } catch (e) {
        console.log(e);
    }
    
    console.log("5. first user add course review to first course ");
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

    console.log("6. second user add course review to first course ");
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

    console.log("7. third user add course review to first course ");
    try {
        let newCourseReview = await user.createCourseReview(
            thirdUserId,
            firstCourseId,
            "The lectures is awesome",
            {difficulty: "Easy", chanceToGetA: 'High', workLoad: 'Plenty'},
            4.9999
        )
        const insertStatus = newCourseReview.courseReviewInserted
        if(insertStatus) {
            console.log("Third course Review created successfully");
        }else {
            console.log("Third course Review fail to insert")
        }
    } catch (e) {
        console.log(e);
    } 

    // console.log("6. first user delete course review to first course ");
    // try {
    //     let deleteCourseReview = await user.deleteCourseReview(
    //         firstUserId,
    //         firstCourseId,
    //     )
    //     const deleteStatus = deleteCourseReview.courseReviewDelete
    //     if(deleteStatus) {
    //         console.log("first course Review delete successfully");
    //     }else {
    //         console.log("first course Review fail to delete")
    //     }
    // } catch (e) {
    //     console.log(e);
    // } 

    // console.log("10. second user add course review again to first course ");
    // try {
    //     let newCourseReview = await user.createCourseReview(
    //         secondUserId,
    //         firstCourseId,
    //         "The lectures is suck",
    //         {difficulty: "Hard", chanceToGetA: 'Low', workLoad: 'Plenty'},
    //         1.111
    //     )
    //     const insertStatus = newCourseReview.courseReviewInserted
    //     if(insertStatus) {
    //         console.log("Second course Review created successfully");
    //     }else {
    //         console.log("Second course Review fail to insert")
    //     }
    // } catch (e) {
    //     console.log(e);
    // }


    console.log("count course");
    let count = undefined
    try {
        let count = await course.countCourses()
           
    } catch (e) {
        console.log(e);
    } 
    console.log("total course are:" + count)
    

    connection.closeConnection();
    console.log('Done!');
}

main();