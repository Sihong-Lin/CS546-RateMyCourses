const user = require('../data/user');
const course = require('../data/course');
const professor = require('../data/professor');
const connection = require('../config/mongoConnection');
const { ObjectId } = require('mongodb');

const main = async () => {
    const db = await connection.connectToDb();
    await db.dropDatabase();

    console.log("1. Create first course"); 
    let firstCourseId = undefined
    let secondCourseId = undefined
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


    console.log("2. Create second course"); 
    try {
        let course2 = await course.createCourse(
            'CS 561 Database', // courseName
            'Graduate', // academicLevel
            'Computer Science Program', // courseOwner
            'Core', // type
            ['Audit', 'Graded', 'Pass/Fail'], // gradingBasis
            3, // units
            'This course will provide students with a first strong approach of database system', // description
            ['Fall Semester', 'Spring Semester', 'Summer Session'], // typicalPeriodsOffered
            'Lecture', // instructionalFormats
            'https://web.stevens.edu/academic_files/courses/syllabus/CS561syl.pdf', // syllabus
            'https://github.com/graffixnyc/CS-561', // courseware
        )
        secondCourseId = course2._id.toString()
        console.log(course2);
    } catch (e) {
        console.log(e);
    }

    console.log("3. Delete first course"); 
    try {
        let deleteStatus = await course.removeCourse(firstCourseId)
        console.log(deleteStatus);
    } catch (e) {
        console.log(e);
    }

    console.log("3. Rename second course"); 
    try {
        let renameStatus = await course.updateCourseName(secondCourseId, 'CS 561 Database System')
        console.log(renameStatus)
    } catch (e) {
        console.log(e);
    }

    console.log("4. Change second course academic level "); 
    try {
        let changeStatus = await course.updateCourseAcademicLevel(secondCourseId, 'undergraduate')
        console.log(changeStatus)
    } catch (e) {
        console.log(e);
    }

    await connection.closeConnection();
    console.log('Done!');
}

main()