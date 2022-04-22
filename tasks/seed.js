
const course = require('../data/course');
const connection = require('../config/mongoConnection');
const main = async () => {
    const db = await connection.connectToDb();
    await db.dropDatabase();
    let courseToDelete = undefined
    console.log("1. Create a course"); 
    try {
        let course1 = await course.createCourse(
            "CS 546 Web Programming", // courseName
            "Graduate", // academicLevel
            "Computer Science Program", // courseOwner
            "Core", // type
            ["Audit", "Graded", "Pass/Fail"], // gradingBasis
            3, // units
            "This course will provide students with a first strong approach of internet programming", // description
            ["Fall Semester", "Spring Semester", "Summer Session"], // typicalPeriodsOffered
            "Lecture", // instructionalFormats
            "https://web.stevens.edu/academic_files/courses/syllabus/CS546syl.pdf", // syllabus
            "https://github.com/graffixnyc/CS-546") // courseware
            
        console.log('First course has added');
        courseToDelete = course1
        //console.log(course1);
      } catch (e) {
        console.log(e);
    }

    console.log("2. Create an other course");  
    try {
        let course2 = await course.createCourse(
            "CS 561 Database System", // courseName
            "Graduate", // academicLevel
            "Computer Science Program", // courseOwner
            "Core", // type
            ["Audit", "Graded", "Pass/Fail"], // gradingBasis
            3, // units
            "This course will provide students with a first strong approach of internet programming", // description
            ["Fall Semester", "Spring Semester", "Summer Session"], // typicalPeriodsOffered
            "Lecture", // instructionalFormats
            "https://web.stevens.edu/academic_files/courses/syllabus/CS561syl.pdf", // syllabus
            "https://github.com/graffixnyc/CS-561") // courseware
        console.log('Sceond course has added');
        //console.log(course1);
      } catch (e) {
        console.log(e);
    }
    console.log("3. delete first course");  
    try {
        await course.removeCourse(courseToDelete._id.toString());
        //console.log(course1);
      } catch (e) {
        console.log(e);
    }

    await connection.closeConnection();
    console.log('Done!');
}
main();
