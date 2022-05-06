const mongoCollections = require('../config/mongoCollections');
const users = mongoCollections.users;
const courses = mongoCollections.courses;
const professors = mongoCollections.professors;
const { ObjectId } = require('mongodb');

const courseReviewDB = require('../data/courseReview')
const professorReviewDB = require('../data/professorReview')

const {
    getAllProfessors,
    getAllProfs,
    createProfessor,
    getProfById,
    getTop5Professors,
    updateProf,
    removeProf,
    addProfReview,
    getProfReview,
    updateProfReview,
    removeProfReview,
    getDepartments,
} = require('../data/professor');


module.exports = {
    getAllProfessors,
    getAllProfs,
    createProfessor,
    getProfById,
    getTop5Professors,
    updateProf,
    removeProf,
    addProfReview,
    getProfReview,
    updateProfReview,
    removeProfReview,
    getTop5Courses,
    getAllCourses,
    getAllUsers,
    searchCoursesByMajor,
    getDepartments,
    getDepartmentReviewsCount
};

async function getAllCourses() {
    const courseCollection = await courses();
    let courseList = await courseCollection
        .find({})
        .toArray();
    for (let i = 0; i < courseList.length; i++) {
        let courseName = courseList[i].courseName;
        let arr = courseName.split(" ");
        courseList[i].courseIndex = arr[0] + " " + arr[1];
        courseList[i].courseName = arr.slice(2).join(" ");
    }
    courseList.forEach(course => {
        course._id = course._id.toString()
    })
    return courseList;
}

async function getAllUsers() {
    const userCollection = await users();
    let userList = await userCollection
        .find({})
        .toArray();
    userList.forEach(user => {
        user._id = user._id.toString()
    })
    return userList;
}

async function getTop5Courses() {
    let courseList = await getAllCourses();
    let res = courseList.sort((a, b) => b.overallRating - a.overallRating).slice(0, 5);
    return res;
}

async function getDepartmentReviewsCount() {
    const departmentCourseReviewCount = await courseReviewDB.countCourseReviewByDepartment()
    const departmentProfessorReviewCount = await professorReviewDB.countProfessorReviewByDepartment()
    const res = mergeDepartmentReview(departmentCourseReviewCount, departmentProfessorReviewCount)
    return res
}

function mergeDepartmentReview(departmentCourseReviewCount, departmentProfessorReviewCount) {
    const map = new Map()
    departmentCourseReviewCount.forEach(function (value, key) {
        if (!map.has(key)) {
            map.set(key, { courseReviews: 0, professorReviews: 0 });
        }
        map.get(key).courseReviews += value
    })

    departmentProfessorReviewCount.forEach(function (value, key) {
        if (!map.has(key)) {
            map.set(key, { courseReviews: 0, professorReviews: 0 });
        }
        map.get(key).professorReviews += value
    })

    let department = []
    let courseReviews = []
    let professorReviews = []
    const obj = Object.fromEntries(map)
    Object.entries(obj).forEach(([key, value]) => {
        department.push(key)
        courseReviews.push(value.courseReviews)
        professorReviews.push(value.professorReviews)
    })
    // const departmentString = "[" + department.join(',') + "]"
    // const courseReviewsString = "[" + courseReviews.join(',') + "]"
    // const professorReviewsString = "[" + professorReviews.join(',') + "]"
    const departmentString = department.join(',')
    const courseReviewsString = courseReviews.join(',')
    const professorReviewsString = professorReviews.join(',')
    return [departmentString, courseReviewsString, professorReviewsString]
}

async function searchCoursesByMajor(major) {

}



