const mongoCollections = require('../config/mongoCollections');
const users = mongoCollections.users;
const courses = mongoCollections.courses;
const professors = mongoCollections.professors;
const { ObjectId } = require('mongodb');

module.exports = {
    getTopCourses,
    getAllCourses,
    getTop3Professors,
    getAllProfessors,
    searchCoursesByMajor
};

async function getTopCourses() {


}

async function getAllCourses() {
    
}

async function getTop3Professors() {
    const professorCollection = await professors();
    let professorList = await professorCollection
        .find({},{ 
            projection: { _id: 1, 
                            professorName: 1,
                            department: 1,
                            introduction: 1,
                            rating: 1,
                            picture: 1,
                        } }
        )
        .toArray(); 
    let res = professorList.sort((a, b) => b.rating - a.rating).slice(0,3);
    return res;
}


async function getAllProfessors() {
    const professorCollection = await professors();
    let professorList = await professorCollection
        .find({},{ 
            projection: { _id: 1, 
                            professorName: 1,
                            department: 1,
                            introduction: 1,
                            rating: 1,
                            picture: 1,
                        } }
        )
        .toArray(); 
    return professorList;
}

async function searchCoursesByMajor(major) {
    
}

const main = async () => {
    try {
        //console.log(await top3Professors());
    } catch(e) {
        console.log(e);
    }
   
}

main();



