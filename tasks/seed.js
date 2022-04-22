
const course = require('../data/course');
const connection = require('../config/mongoConnection');
const main = async () => {
    const db = await connection.connectToDb();
    await db.dropDatabase();
    console.log("1. Create a course)"); 
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
            "https://github.com/graffixnyc/CS-546", // courseware
            [{difficulty: "Medium"}, {chanceToGetA: "High"}, {workLoad: "Hard" }], // metrics
            []) // courseReview
        console.log('Course has added');
      } catch (e) {
        console.log(e);
    }
    await connection.closeConnection();
    console.log('Done!');
}
main();
