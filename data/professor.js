const mongoCollections = require('../config/mongoCollections');
const professors = mongoCollections.professors;
const users = mongoCollections.users;
const { ObjectId } = require('mongodb');

const exportMethods = {
    /*
        Professor: {
            “_id”: ObjectId(“624724af974aef308ff7cc6a”),
            “professorName”: ​​“Patrick, Hill”,
            “department”: “Computer Science”,
            “introduction”: “Professor in the Computer Science department at Stevens Institute of 
                            Technology”
            “rating”: 4.5,
            “reviews” : ["62215a7ebd69a460a6193411", "62215a7ebd69a460a6193412"],
            “courses” : ["62215a7ebd69a460a6193413", "62215a7ebd69a460a6193414"],
            “picture”: “http://georgetownheckler.com/wp-content/uploads/2016/09/prof.jpg”
        }
    */
    async createProfessor(professorName, department, introduction, picture) {
        try {
            professorName = inputCheck.checkProfessorName(professorName);
            department = inputCheck.checkDepartment(department);
            introduction = inputCheck.checkIntroduction(introduction);
            picture = inputCheck.checkPicture(picture);
        } catch (e) {
            throw e
        }
        const professorsCollection = await professors();
        let newProfessor = {
            professorName: professorName,
            department: department,
            introduction: introduction,
            picture: picture,
            professorReviews: [],
            courses: [],
            overallRating: 0
        };

        const newInsertInformation = await professorsCollection.insertOne(newProfessor);
        if (newInsertInformation.insertedCount === 0) throw 'Insert failed!';
        return await this.getProfById(
            newInsertInformation.insertedId.toString()
        );
    },

    async getProfById(id) {
        const profCollection = await professors();
        const professor = await profCollection.findOne({ _id: ObjectId(id) });
        if (!professor) throw 'Professor not found';
        return professor;
    },

    async updateProf(id, updatedProf) {
        // TODO: input validation

        let profUpdateInfo = {
            name: updatedProf.name,
            intro: updatedProf.intro,
            // delete review?
        };
        const profCollection = await professors();
        const updateInfo = await profCollection.updateOne(
            { _id: ObjectId(id) },
            { $set: profUpdateInfo }
        );
        if (!updateInfo.matchedCount && !updateInfo.modifiedCount)
            throw 'Update failed';
        return await this.getProfById(id);
    },

    async removeUser(id) {
        // TODO: validate id

        const profCollection = await professors();
        const deletionInfo = await userCollection.deleteOne({
            _id: ObjectId(id),
        });
        if (deletionInfo.deletedCount === 0) {
            throw `Could not delete professor with id of ${id}`;
        }
        return true;
    },

    /* 
    ProfessoReview: {
        “_id”: ObjectId(“624724af974aef308ff7cc6b”),
        “userId”: "62215a7ebd69a460a6193418",
        “professorId”: "624724af974aef308ff7cc6a",
        “comment”: “At first I thought Hill was super arrogant, and was about to give a low score. 
            But now, having taken both CS546 and CS554, I think that these classes prepared 
            me more than anything for the workforce. Even if the assignments can be a heavy 
            load at times, nothing ever felt unfair. I've also thought Hill is likable now, despite 
            my initial reaction.”
        “rating”: 5
    }
    */

    async addProfReview(uid, pid, comment, rating) {
        // TODO: input validation
        const profReview = {
            _id: ObjectId(),
            userId: ObjectId(uid),
            professorId: Object(pid),
            comment: comment,
            rating: rating,
        };
        const userCollection = await users();
        const profCollection = await professors();

        // insert review into user
        const userUpdateInfo = await userCollection.updateOne(
            { _id: ObjectId(uid) },
            { $push: { professorReviews: profReview } }
        );
        if (!userUpdateInfo.modifiedCount && !userUpdateInfo.matchedCount)
            throw `No user found with ID of ${uid}`;

        // insert prof review into professor
        const profUpdateInfo = await profCollection.updateOne(
            { _id: ObjectId(pid) },
            { $push: { reviews: profReview } }
        );
        if (!profUpdateInfo.modifiedCount && !profUpdateInfo.matchedCount)
            throw `No professor found with ID of ${pid}`;

        // set average rating
        await profCollection.updateOne({ _id: ObjectId(pid) }, [
            { $set: { rating: { $avg: '$reviews.rating' } } },
        ]);

        return profReview;
    },
};

module.exports = exportMethods;
