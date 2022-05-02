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
        let createUser = await user.createUser("user1", "aaa@gmail.com", "Computer Science", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2K9xcJVlIG31wI5COY_Qep5GahOMmCmLYEQ&usqp=CAU", "123456");
        user1 = createUser.insertedId;
    } catch (e) {
        console.log(e);
    } 

    let user2 = undefined
    try {
        let createUser = await user.createUser("user2", "aaa@gmail.com", "Computer Science", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM7y6bqoR4ypvuCak8H_ZVl7oqspxE6MxK3g&usqp=CAU", "123456");
        user2 = createUser.insertedId;
    } catch (e) {
        console.log(e);
    }

    let user3 = undefined
    try {
        let createUser = await user.createUser("user3", "aaa@gmail.com", "Computer Science", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQstkseuO__x9bRa_ycRdOnCH0YcGaZhSF0wA&usqp=CAU", "123456");
    } catch (e) {
        console.log(e);
    }


    // Add Courses

    
    let course1 = undefined;
    try {
        let createCourse = await course.createCourse(
            'CS 546 Web Programming', // courseName
            'Graduate', // academicLevel
            'Computer Science Program', // courseOwner
            'Core', // type
            3, // units
            'This course will provide students with a first strong approach of internet programming. It will give the basic knowledge on how the Internet works and how to create advanced web sites by the use of script languages, after learning the basics of HTML. The course will teach the students how to create a complex global site through the creation of individual working modules, giving them the skills required in any business such as proper team work and coordination between groups.', // description
            'Lecture', // instructionalFormats
            'https://web.stevens.edu/academic_files/courses/syllabus/CS546syl.pdf', // syllabus
            'https://github.com/graffixnyc/CS-546', // courseware
            'https://d1ymz67w5raq8g.cloudfront.net/Pictures/1024x536/P/web/n/z/b/onlinecourses_shutterstock_490891228_2000px_728945.jpg' // picture
        )
        course1 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course2 = undefined;
    try {
        let createCourse = await course.createCourse(
            'CS 521 TCP/IP Networking', // courseName
            'Graduate', // academicLevel
            'Computer Science Program', // courseOwner
            'Elective', // type
            3, // units
            'Introduction to IP networking. Examination of all layers of the OSI stack. Detailed examination of the IP, ICMP, UDP, and TCP protocols. Basic concepts of network design: end-to-end principle, routing, encapsulation, flow control, congestion control, and security. Detailed coverage of TCP. Some treatment of important Internet applications and services. Emphasis on network layer and above. Assignments focus on protocols and software.', // description
            'Lecture', // instructionalFormats
            'https://web.stevens.edu/academic_files/courses/syllabus/CS521syl.pdf', // syllabus
            'https://www.studocu.com/en-us/course/stevens-institute-of-technology/tcpip-networking/4691927', // courseware（复制课名随便找点相关网址粘上去）
            'https://www.smartpassiveincome.com/wp-content/uploads/2020/04/How-to-Create-an-Online-Course.png' // picture
        )
        course2 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }

    
    //Computer Science 15条

    //Biomedical Engineering 9条

    //Mechanical Engineering 5条

    //Electrical Engineering 8条

    //Management 5条

    //Business Intelligence and Analytics 8条

    //Finance 5条

    //Physics & Engineering Physic 6条

    //Chemistry 4条

    //Materials Engineering 5条

    //Civil Engineering 2条

    //Environmental Engineering 3








    //Add reviews：100条
    


    await user.createCourseReview(
        user1,      //这个先不改，只改最后三个属性性
        course1,    //这个先不改，只改最后三个属性性
        "The lectures are quite easy to understand and so are the Labs. Only need to make sure that you are not careless while working on labs or else you'll lose points and that is something that the professor is always clear about. If you dedicatedly work on the labs and the project, you can easily score an Best professor at Stevens",
        {difficulty: "Easy", chanceToGetA: 'Low', workLoad: 'Less'},
        4.5   //0.0-5.0
    )
    //Difficulty (Easy / Medium / Hard)
    //Chance of getting A (Low / Medium / High)
    //Workload (Low / Medium / Lots)

   
    


    connection.closeConnection();
    console.log('Done!');
}

main();