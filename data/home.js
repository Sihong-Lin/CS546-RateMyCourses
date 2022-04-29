const mongoCollections = require('../config/mongoCollections');
const users = mongoCollections.users;
const courses = mongoCollections.courses;
const professors = mongoCollections.professors;
const { ObjectId } = require('mongodb');

module.exports = {
    getTop5Courses,
    getAllCourses,
    getTop3Professors,
    getAllProfessors,
    searchCoursesByMajor,
    professors,
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
                            professorReviews: 1,
                            courses: 1,
                            reviews: 1
                        } }
        )
        .toArray();
    professorList.forEach(professor => {
        professor._id = professor._id.toString()
    })
    return professorList;
}

async function getTop5Courses() {
    let courseList = await getAllCourses();
    let res = courseList.sort((a, b) => b.overallRating - a.overallRating).slice(0,5);
    return res;
}

async function getTop3Professors() {
    let professorList = await getAllProfessors();
    let res = professorList.sort((a, b) => b.overallRating - a.overallRating).slice(0,3);
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



