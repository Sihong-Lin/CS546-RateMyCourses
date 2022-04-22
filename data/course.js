const mongoCollections = require('../config/mongoCollections');
const professors = mongoCollections.professors;
const users = mongoCollections.users;
const { ObjectId } = require('mongodb');

const exportMethods = {
    /*
        Courses: {
           "_id": "62222e3457e362991824996e",
           "course": "CS 546 Web Programming",
           "academicLevel": "Graduate",
           "courseOwner": "Computer Science Program",
           "type": "Core",
           "gradingBasis": ["Audit", "Graded", "Pass/Fail"],
           "units": 3,
           "description": "This course will provide students with a first strong approach of internet 
                   programming. It will give the basic knowledge on how the Internet works and how to 
                   create advanced web sites by the use of script languages, after learning the basics 
                   of HTML. The course will teach the students how to create a complex global site 
                   through the creation of individual working modules, giving them the skills required 
                   in any business such as proper team work and coordination between groups.", 
           "typicalPeriodsOffered": ["Fall Semester", "Spring Semester", "Summer Session"],
           "instructionalFormats": "Lecture",
           "syllabus": "https://web.stevens.edu/academic_files/courses/syllabus/CS546syl.pdf",
           "courseware": "https://github.com/graffixnyc/CS-546",
           "metrics": {
                      "difficulty": "Medium",
                      "chanceToGetA": "High",
                      "workLoad": "Hard"
             },
           "courseReview": ["62222e3b57e362991824996f", "62222e4a57e3629918249970"]
        }
    */

    async createCourse(course, academicLevel, courseOwner, type, gradingBasis, units, description, typicalPeriodsOffered, instructionalFormats) {
        // TODO: input validation

        const profCollection = await professors();
        let newProf = {
            professorName: name,
            Introduction: intro,
            rating: 0,
            reviews: [],
            courses: courses,
        };

        const newInsertInformation = await profCollection.insertOne(newProf);
        if (newInsertInformation.insertedCount === 0) throw 'Insert failed!';
        return await this.getProfById(
            newInsertInformation.insertedId.toString()
        );
    },

    async getProfById(id) {
        const profCollection = await professors();
        const professor = await userCollection.findOne({ _id: ObjectId(id) });
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
