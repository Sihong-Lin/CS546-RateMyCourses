const mongoCollections = require('../config/mongoCollections');
const users = mongoCollections.users;
const courses = mongoCollections.courses;
const professors = mongoCollections.professors;
const { ObjectId } = require('mongodb');

const {
    getAllProfessors,
    createProfessor,
    getProfById,
    getTop3Professors,
    updateProf,
    removeProf,
    addProfReview,
    removeProfReview,
    getDepartments,
} = require('../data/professor')

module.exports = {
    getAllProfessors,
    createProfessor,
    getProfById,
    getTop3Professors,
    updateProf,
    removeProf,
    addProfReview,
    removeProfReview,
    getTop5Courses,
    getAllCourses,
    searchCoursesByMajor,
    getDepartments,
};

async function getAllCourses() {
    const courseCollection = await courses();
    let courseList = await courseCollection
        .find({},{ 
            projection: { _id: 1, 
                            courseName: 1,
                            metrics: 1,
                            type: 1,
                            overallRating: 1,
                            picture: 1,
                            description: 1
                        } }
        )
        .toArray(); 
    for (let i = 0; i < courseList.length; i++) {
        let courseName = courseList[i].courseName;
        let arr = courseName.split(" ");
        courseList[i].courseIndex = arr[0] + " " +arr[1];
        courseList[i].courseName = arr.slice(2).join(" ");
    }
    courseList.forEach(course => {
        course._id = course._id.toString()
    })
    return courseList;
}

async function getTop5Courses() {
    let courseList = await getAllCourses();
    let res = courseList.sort((a, b) => b.overallRating - a.overallRating).slice(0,5);
    return res;
}



async function searchCoursesByMajor(major) {
    
}

const main = async () => {
    try {
        //console.log(await getAllCourses());
    } catch(e) {
        console.log(e);
    }
   
}

main();



