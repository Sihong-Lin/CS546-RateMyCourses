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
        let user1 = await user.createUser('jguo32', '123456');
        console.log(user1);


    
        let professor1 = await professor.createProfessor('professor 1', 'intro 1', [
            'CS100',
            'CS101',
        ]);
        let uid1 = user1.insertedId.toString();
        let pid1 = professor1._id.toString();
        let review1 = await professor.addProfReview(uid1, pid1, 'review 1', 5);
        console.log(review1);

        let professor2 = await professor.createProfessor('professor 2', 'intro 2', [
            'CS200',
            'CS201',
        ]);
        let uid2 = user1.insertedId.toString();
        let pid2 = professor2._id.toString();
        let review2 = await professor.addProfReview(uid2, pid2, 'review 2', 4.5);

        let professor3 = await professor.createProfessor('professor 3', 'intro 3', [
            'CS300',
            'CS301',
        ]);
        let uid3 = user1.insertedId.toString();
        let pid3 = professor3._id.toString();
        let review3 = await professor.addProfReview(uid3, pid3, 'review 3', 1.58);

        let professor4 = await professor.createProfessor('professor 4', 'intro 4', [
            'CS400',
            'CS401',
        ]);
        let uid4 = user1.insertedId.toString();
        let pid4 = professor4._id.toString();
        let review4 = await professor.addProfReview(uid4, pid4, 'review 4', 3.5);

        let professor5 = await professor.createProfessor('professor 5', 'intro 5', [
            'CS500',
            'CS501',
        ]);
        await professor.addProfReview(user1.insertedId.toString(), professor5._id.toString(), 'review 6', 2.5);

        let professor6 = await professor.createProfessor('professor 6', 'intro 6', [
            'CS600',
            'CS601',
        ]);
        await professor.addProfReview(user1.insertedId.toString(), professor6._id.toString(), 'review 5', 3.2);


        let professor7 = await professor.createProfessor('professor 7', 'intro 7', [
            'CS700',
            'CS801',
        ]);
        await professor.addProfReview(user1.insertedId.toString(), professor7._id.toString(), 'review 7', 2.9);

        let professor8 = await professor.createProfessor('professor 8', 'intro 8', [
            'CS800',
            'CS801',
        ]);
        await professor.addProfReview(user1.insertedId.toString(), professor8._id.toString(), 'review 8', 1.5);



    } catch (e) {
        console.log(e);
    }

    await connection.closeConnection();
    console.log('Done!');
};
main();
