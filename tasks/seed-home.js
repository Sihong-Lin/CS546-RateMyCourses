const user = require('../data/user');
const course = require('../data/course');
const professor = require('../data/professor');
const connection = require('../config/mongoConnection');
const { ObjectId } = require('mongodb');

const main = async () => {
    const db = await connection.connectToDb();
    await db.dropDatabase();
    let courseToDelete = undefined
    console.log("1. Create a course"); 
    try {
        let user1 = await user.createUser('jguo32', "aaa@gmail.com", "Computer Science", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2K9xcJVlIG31wI5COY_Qep5GahOMmCmLYEQ&usqp=CAU", '123456');
        console.log(user1);


        let professor3 = await professor.createProfessor('111111111 2222222222 3333333333', 'dep3', 'intro 3', "http://georgetownheckler.com/wp-content/uploads/2016/09/prof.jpg");
        await professor.addProfReview(user1.insertedId.toString(), professor3._id.toString(), 'review 3', 1.58);

        let professor4 = await professor.createProfessor('professor 4', 'dep4', 'intro 4', "https://qph.fs.quoracdn.net/main-qimg-6a0f553dac29b8e7fe6bf01983b20959-lq");
        let review4 = await professor.addProfReview(user1.insertedId.toString(), professor4._id.toString(), 'review 4', 3.5);

        let professor5 = await professor.createProfessor('professor 5', 'dep5', 'intro 5', "https://st2.depositphotos.com/3258807/8987/i/950/depositphotos_89870030-stock-photo-young-male-professor-is-posing.jpg");
        await professor.addProfReview(user1.insertedId.toString(), professor5._id.toString(), 'review 6', 2.5);

        let professor6 = await professor.createProfessor('professor 6', 'dep6', 'intro 6', "https://admissionado.com/wp-content/uploads/2016/04/college_professors_blog_post.jpg");
        await professor.addProfReview(user1.insertedId.toString(), professor6._id.toString(), 'review 5', 3.2);


        let professor7 = await professor.createProfessor('professor 7', 'dep7', 'intro 7', "http://dailynous.com/wp-content/uploads/2020/03/meriwether-nicholas-2-1.jpg");
        await professor.addProfReview(user1.insertedId.toString(), professor7._id.toString(), 'review 7', 2.9);

        let professor8 = await professor.createProfessor('professor 8', 'dep8', 'intro 8', "https://nypost.com/wp-content/uploads/sites/2/2022/04/professor-wins-lawsuit-149.jpg");
        await professor.addProfReview(user1.insertedId.toString(), professor8._id.toString(), 'review 8', 1.5);



        await course.createCourse(
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
            'https://www.smartpassiveincome.com/wp-content/uploads/2020/04/How-to-Create-an-Online-Course.png'
        );

        await course.createCourse(
            'CS 111 aaaaaass dffdf dfd', // courseName
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
            'https://www.smartpassiveincome.com/wp-content/uploads/2020/04/How-to-Create-an-Online-Course.png' 
        );// courseReview

        await course.createCourse(
            'CS 222 5252525d', // courseNa55me
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
            'https://www.smartpassiveincome.com/wp-content/uploads/2020/04/How-to-Create-an-Online-Course.png'
        );

        await course.createCourse(
            'CS 333 uuuud fdfdf', // courseNa55me
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
            'https://www.smartpassiveincome.com/wp-content/uploads/2020/04/How-to-Create-an-Online-Course.png'
        );

        await course.createCourse(
            'CS 444 fgtg dsgs dgs', // courseNa55me
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
            'https://www.smartpassiveincome.com/wp-content/uploads/2020/04/How-to-Create-an-Online-Course.png'
        );

        await course.createCourse(
            'CS 555 fddgs 11111111111', // courseNa55me
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
            'https://www.smartpassiveincome.com/wp-content/uploads/2020/04/How-to-Create-an-Online-Course.png'
        );

        await course.createCourse(
            'CS 666 fddgs 1dddvfvse11111', // courseNa55me
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
            'https://www.smartpassiveincome.com/wp-content/uploads/2020/04/How-to-Create-an-Online-Course.png'
        );
        

    } catch (e) {
        console.log(e);
    }

    console.log("done")
    await connection.closeConnection();
    console.log('Done!');
};
main();
