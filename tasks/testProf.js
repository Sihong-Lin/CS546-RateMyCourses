const user = require('../data/user');
const course = require('../data/course');
const professor = require('../data/professor');
const connection = require('../config/mongoConnection');
const { ObjectId } = require('mongodb');
const { removeProfReview } = require('../data/professor');

const main = async () => {
    const db = await connection.connectToDb();
    await db.dropDatabase();
    try {
        // add user
        let user1 = await user.createUser('jguo32', "aaa@gmail.com", "Computer Science", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2K9xcJVlIG31wI5COY_Qep5GahOMmCmLYEQ&usqp=CAU", '123456');

        // add a professor
        let name = 'Eric Koskinen';
        let department = "Computer Science";
        let intro =
            'My research yields techniques that improve the way programmers develop reliable and efficient concurrent software for multi-core and distributed systems.';
        let pic = "url to picture"
        let professor1 = await professor.createProfessor(name, department, intro, pic);
        console.log(professor1);

        // add a professor reviews
        let uid = user1.insertedId.toString();
        let pid = professor1._id.toString();
        let review = 'nice!';

        let review1 = await professor.addProfReview(uid, pid, review, 5);
        let review2 = await professor.addProfReview(uid, pid, review, 4);
        let review3 = await professor.addProfReview(uid, pid, review, 3);
        let prof1 = await professor.getProfById(pid);
        console.log(review1);
        console.log(prof1);

        let review1Id = review1._id.toString();
        let delettionInfo = await removeProfReview(review1Id);
        console.log(delettionInfo);
        console.log(await professor.getProfById(pid))


        // update professor
        professor1.introduction = "My research yields techniques that improve the way programmers develop reliable and efficient concurrent software for multi-core and distributed systems";
        await professor.updateProf(pid, professor1);
        console.log(await professor.getProfById(pid))

    } catch (e) {
        console.log(e);
    }

    await connection.closeConnection();
    console.log('Done!');
};
main();