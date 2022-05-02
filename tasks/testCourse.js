const user = require('../data/user');
const course = require('../data/course');
const professor = require('../data/professor');
const connection = require('../config/mongoConnection');
const { ObjectId } = require('mongodb');

const main = async () => {
    const db = await connection.connectToDb();
    // await db.dropDatabase();

    console.log("1. Create first course"); 
    let firstCourseId = undefined
    let secondCourseId = undefined
    try {
        let course1 = await course.createCourse(
            'CS 546 Web Programming', // courseName
            'Graduate', // academicLevel
            'Computer Science Program', // courseOwner
            'Core', // type
        //    ['Audit', 'Graded', 'Pass/Fail'], // gradingBasis
            3, // units
            'This course will provide students with a first strong approach of internet programming', // description
        //    ['Fall Semester', 'Spring Semester', 'Summer Session'], // typicalPeriodsOffered
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
        //    ['Audit', 'Graded', 'Pass/Fail'], // gradingBasis
            3, // units
            'This course will provide students with a first strong approach of database system', // description
        //    ['Fall Semester', 'Spring Semester', 'Summer Session'], // typicalPeriodsOffered
            'Lecture', // instructionalFormats
            'https://web.stevens.edu/academic_files/courses/syllabus/CS546syl.pdf', // syllabus
            'https://github.com/graffixnyc/CS-546', // courseware
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
        let changeStatus = await course.updateCourseName(secondCourseId, 'CS 561 Database System')
        console.log(changeStatus)
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

    console.log("5. Change second course courseOwner "); 
    try {
        let changeStatus = await course.updateCourseOwner(secondCourseId, 'EE program')
        console.log(changeStatus)
    } catch (e) {
        console.log(e);
    }

    console.log("6. Change second course type "); 
    try {
        let changeStatus = await course.updateCourseType(secondCourseId, 'Core')
        console.log(changeStatus)
    } catch (e) {
        console.log(e);
    }

    console.log("6. Change second course GradingBasis "); 
    try {
        let changeStatus = await course.updateCourseGradingBasis(secondCourseId, ["Graded", "Pass/Fail"],)
        console.log(changeStatus)
    } catch (e) {
        console.log(e);
    }

    console.log("7. Change second course units "); 
    try {
        let changeStatus = await course.updateCourseUnites(secondCourseId, 4,)
        console.log(changeStatus)
    } catch (e) {
        console.log(e);
    }

    console.log("7. Change second course description "); 
    try {
        let changeStatus = await course.updateCourseDescription(secondCourseId, "TBD",)
        console.log(changeStatus)
    } catch (e) {
        console.log(e);
    }

    console.log("8. Change second course typical Periods Offered "); 
    try {
        let changeStatus = await course.updateCourseTypicalPeriodsOffered(secondCourseId, ["Fall Semester", "Spring Semester"])
        console.log(changeStatus)
    } catch (e) {
        console.log(e);
    }

    console.log("9. Change second course Instructional Formats "); 
    try {
        let changeStatus = await course.updateCourseInstructionalFormats(secondCourseId, "online lecture")
        console.log(changeStatus)
    } catch (e) {
        console.log(e);
    }

    console.log("10. Change second course syllabus "); 
    try {
        let changeStatus = await course.updateCourseSyllabus(secondCourseId, 'https://web.stevens.edu/academic_files/courses/syllabus/CS561syl.pdf')
        console.log(changeStatus)
    } catch (e) {
        console.log(e);
    }


    console.log("10. Change second course courseware "); 
    try {
        let changeStatus = await course.updateCourseCourseware(secondCourseId, 'https://github.com/graffixnyc/CS-561')
        console.log(changeStatus)
    } catch (e) {
        console.log(e);
    }

    await connection.closeConnection();
    console.log('Done!');

    
}

main()