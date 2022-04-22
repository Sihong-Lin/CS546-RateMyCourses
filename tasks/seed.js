const user = require('../data/user');
const course = require('../data/course');
const professor = require('../data/professor');
const connection = require('../config/mongoConnection');
const { ObjectId } = require('mongodb');

const main = async () => {
    const db = await connection.connectToDb();
    await db.dropDatabase();
    console.log('1. Create a course)');

    try {

        let user1 = await user.createUser(
            "jguo32",
            "123456"
        );
        console.log(user1);

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
            [
                { difficulty: 'Medium' },
                { chanceToGetA: 'High' },
                { workLoad: 'Hard' },
            ], // metrics
            []
        ); // courseReview

        let name =  "Eric Koskinen"
        let intro = "My research yields techniques that improve the way programmers develop reliable and efficient concurrent software for multi-core and distributed systems."
        let professor1 = await professor.createProfessor(
            name,
            intro,
            ['CS516', 'CS511']
        );
        console.log(professor1);

        console.log('Course has added');
        
        let uid = user1.insertedId.toString()
        let pid = professor1._id.toString();
        let review = "nice!";

        let review1 = await professor.addProfReview(uid, pid, review, 5);
        console.log(review1);

    } catch (e) {
        console.log(e);
    }

    await connection.closeConnection();
    console.log('Done!');
};
main();
