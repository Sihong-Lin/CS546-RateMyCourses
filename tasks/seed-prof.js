const user = require('../data/user');
const course = require('../data/course');
const professor = require('../data/professor');
const connection = require('../config/mongoConnection');
const { ObjectId } = require('mongodb');


const main = async () => {
    const db = await connection.connectToDb();
    await db.dropDatabase();

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

    try {
        let user1 = await user.createUser('jguo32', "aaa@gmail.com", "Computer Science", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2K9xcJVlIG31wI5COY_Qep5GahOMmCmLYEQ&usqp=CAU", '123456');
        /*
        let professor1 = await professor.createProfessor(
            'Eric Koskinen',
            "Computer Science",
            'My research yields techniques that improve the way programmers develop reliable and efficient concurrent software for multi-core and distributed systems.',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor1._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 5);
        }
        */

    } catch (e) {
        console.log(e);
    }

    await connection.closeConnection();
    console.log('Done!');
};
main();