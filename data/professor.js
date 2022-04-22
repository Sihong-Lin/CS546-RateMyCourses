const mongoCollections = require('../config/mongoCollections');
const professors = mongoCollections.professors;
const {ObjectId} = require('mongodb');

const exportMethods = {

    /*
        Professor: {
            “_id”: ObjectId(“624724af974aef308ff7cc6a”),
            “professorName”: ​​“Patrick, Hill”,
            “Introduction”: “Professor in the Computer Science department at Stevens Institute of 
                            Technology”
            “rating”: 4.5,
            “reviews” : ["62215a7ebd69a460a6193411", "62215a7ebd69a460a6193412"],
            “courses” : ["62215a7ebd69a460a6193413", "62215a7ebd69a460a6193414"]
        }
    */
    async createProfessor(name, intro, courses) {
        // TODO: check input here

        const professorCollection = await professors();
        let newProf = {
            professorName: name,
            Introduction: intro,
            rating: 0,
            reviews: [],
            courses: courses
        }

        const newInsertInformation = await professorCollection.insertOne(newProf);
        if (newInsertInformation.insertedCount === 0) throw 'Insert failed!';
        return await this.getProfById(newInsertInformation.insertedId.toString());
    },

    async getProfById(id) {
        const professorCollection = await professors();
        const professor = await userCollection.findOne({_id: ObjectId(id)});
        if (!professor) throw "Professor not found";
        return professor
    }
}

module.exports = exportMethods;