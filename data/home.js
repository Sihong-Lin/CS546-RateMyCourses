const mongoCollections = require('../config/mongoCollections');
const users = mongoCollections.users;
const courses = mongoCollections.courses;
const professors = mongoCollections.professors;
const { ObjectId } = require('mongodb');

module.exports = {
    topCourses,
    top3Professors,
    searchCoursesByMajor
};

async function topCourses() {


}

async function top3Professors() {
    const professorCollection = await professors();
    let professorList = await professorCollection
        .find({},{ 
            projection: { _id: 1, 
                            professorName: 1,
                            introduction: 1,
                            rating: 1,
                            picture: 1 
                        } }
        )
        .toArray(); 
    let res = professorList.sort((a, b) => b.rating - a.rating).slice(0,3);
    return res;
}

async function searchCoursesByMajor(major) {
    
}

const main = async () => {
    console.log(await top3Professors());
}

main();



