const user = require('../data/user');
const course = require('../data/course');
const professor = require('../data/professor');
const connection = require('../config/mongoConnection');
const { ObjectId } = require('mongodb');

const main = async () => {
    const db = await connection.connectToDb();
    await db.dropDatabase();
    
    let user1 = undefined
    try {
        let createUser = await user.createUser("zihengZhu", "123456789");
        user1 = createUser.insertedId;
    } catch (e) {
        console.log(e);
    } 

    let user2 = undefined
    try {
        let createUser = await user.createUser("zihengZhu", "123456789");
        user2 = createUser.insertedId;
    } catch (e) {
        console.log(e);
    }

    let user3 = undefined
    try {
        let createUser = await user.createUser("zihengZhu", "123456789");
        user3 = createUser.insertedId;
    } catch (e) {
        console.log(e);
    }


    
    let course1 = undefined;
    try {
        let createCourse = await course.createCourse(
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
            'https://somepicture.com' // picture
        )
        course1 = createCourse._id.toString()
        
        


    } catch (e) {
        console.log(e);
    }

   
    
    connection.closeConnection();
    console.log('Done!');
}

main();