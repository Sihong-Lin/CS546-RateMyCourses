const mongoCollections = require('../config/mongoCollections');
const professors = mongoCollections.professors;
const users = mongoCollections.users;
const { ObjectId } = require('mongodb');
const userData = require('../data/user')
const { check } = require('prettier');
const inputCheck = require('./inputCheck');
const professorReviewDBfunction = require('../data/professorReview');

async function getAllProfessors() {
    const professorCollection = await professors();
    let professorList = await professorCollection
        .find({}, {
            projection: {
                _id: 1,
                professorName: 1,
                department: 1,
                introduction: 1,
                rating: 1,
                picture: 1,
            }
        }
        )
        .toArray();
    professorList.forEach(professor => {
        professor._id = professor._id.toString()
    })
    return professorList;
}

async function getAllProfs() {
    const professorCollection = await professors();
    let professorList = await professorCollection
        .find({})
        .toArray();
    professorList.forEach(professor => {
        professor._id = professor._id.toString()
    })
    return professorList;
}

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
async function createProfessor(professorName, department, introduction, picture) {

    professorName = inputCheck.checkProfessorName(professorName);
    department = inputCheck.checkDepartment(department);
    introduction = inputCheck.checkIntroduction(introduction);
    picture = inputCheck.checkProfessorPicture(picture);

    const professorsCollection = await professors();
    let newProfessor = {
        // professorName: professorName,
        department: department,
        introduction: introduction,
        picture: picture,
        reviews: [],
        courses: [],
        rating: null
    };

    const newInsertInformation = await professorsCollection.updateOne(
        { professorName: professorName },
        { $setOnInsert: newProfessor },
        { upsert: true }
    );
    if (newInsertInformation.upsertedCount === 0) throw `Professor ${professorName} already exists`;
    return await this.getProfById(
        newInsertInformation.upsertedId.toString()
    );
}

async function getProfById(id) {
    id = inputCheck.checkUserId(id);

    const profCollection = await professors();
    const professor = await profCollection.findOne({ _id: ObjectId(id) });
    if (!professor) throw 'Professor not found';
    professor._id = professor._id.toString()
    let professorReviews = professor.reviews;
    for (let i = 0; i < professorReviews.length; i++) {
        let userId = professorReviews[i].userId
        const userCollection = await users();
        const user = await userCollection.findOne({ _id: ObjectId(userId) });
        if (!user) throw 'User not found';
        professorReviews[i].profilePicture = user.profilePicture;
    }
    return professor;
}

async function getTop5Professors() {
    let professorList = await getAllProfessors();
    let res = professorList.sort((a, b) => b.rating - a.rating).slice(0, 5);
    return res;
}

async function updateProf(id, updatedProf) {
    id = inputCheck.checkUserId(id);
    let profUpdateInfo = updatedProf;
    /*
    let profUpdateInfo = {
        professorName: updatedProf.professorName,
        department: updatedProf.department,
        introduction: updatedProf.introduction,
        picture: updatedProf.picture,
        // delete review?
    };
    */
    const profCollection = await professors();
    const updateInfo = await profCollection.updateOne(
        { _id: ObjectId(id) },
        { $set: profUpdateInfo }
    );
    if (!updateInfo.matchedCount && !updateInfo.modifiedCount)
        throw 'Update failed';
    return await this.getProfById(id);
}

async function removeProf(id) {
    id = inputCheck.checkUserId(id)

    const profCollection = await professors();
    const userCollection = await users();
    const professor = await getProfById(id)
    const professorReviews = professor.reviews
    for (let i = 0; i < professorReviews.length; i++) {
        const pid = professorReviews[i].professorId
        const uid = professorReviews[i].userId
        try {
            await professorReviewDBfunction.deleteProfessorReview(uid, pid)
            const userUpdateInfo = await userCollection.updateOne(
                { _id: ObjectId(uid) },
                { $pull: { professorReviews: { professorId: pid } } }
            )
        } catch (e) {
            throw e 
        }
    }
    const deletionInfo = await profCollection.deleteOne({
        _id: ObjectId(id),
    });
    if (deletionInfo.deletedCount === 0) {
        throw `Could not delete professor with id of ${id}`;
    }
    return { deleted: true };
}

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

async function addProfReview(uid, pid, comment, rating) {

    uid = inputCheck.checkUserId(uid);
    pid = inputCheck.checkUserId(pid);
    comment = inputCheck.checkComment(comment);
    rating = inputCheck.checkRating(rating);
    const professorName = (await getProfById(pid)).professorName
    const department = (await getProfById(pid)).department
    const userCollection = await users();
    const profCollection = await professors();
    const user = await userData.getUser(uid)

    const profReview = {
        _id: ObjectId(),
        userId: uid,
        professorId: pid,
        professorName: professorName,
        username: user.username,
        comment: comment,
        rating: rating,
    };

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

    try {
        await professorReviewDBfunction.createProfessorReview(uid, pid, department)
    } catch (e) {
        throw e
    }
    profReview._id = profReview._id.toString();
    return profReview;
}

async function getProfReview(reviewId) {
    const profCollection = await professors();
    const prof = await profCollection.findOne(
        { reviews: { $elemMatch: { _id: ObjectId(reviewId) } } }
    );
    if (!prof) throw "review does not exist"
    let review = prof.reviews.find(e => e._id.toString() === reviewId )
    return review;
}

async function updateProfReview(rid, uid, pid, comment, rating) {
    uid = inputCheck.checkUserId(uid); 
    rid = inputCheck.checkUserId(rid);
    pid = inputCheck.checkUserId(pid);
    comment = inputCheck.checkComment(comment);
    rating = inputCheck.checkRating(rating);

    const profCollection = await professors();
    const userCollection = await users();
    

    const updateInfo = await profCollection.updateOne(
        { _id: ObjectId(pid),  "reviews._id": ObjectId(rid)},
        { $set: { 
                "reviews.$.comment": comment,
                "reviews.$.rating": rating
            }
        });
    
    const updateProfessorReviewInUser = await userCollection.updateOne(
        {_id: ObjectId(uid),"professorReviews._id" : ObjectId(rid)}, 
        {
            $set: {
                "professorReviews.$.comment" : comment,
                "professorReviews.$.rating" : rating
            }
        }
    )

    if (!updateInfo.matchedCount && !updateInfo.modifiedCount)
        throw 'Update failed';
    /*
    if (updateProfessorReviewInUser.modifiedCount === 0) {
        throw 'could not edit professor review in user';
    }
    */
    return await this.getProfReview(rid);
}

async function removeProfReview(id) {

    id = inputCheck.checkUserId(id);

    const profCollection = await professors();
    const userCollection = await users();

    // find out the professor document this review belongs to
    const prof = await profCollection.findOne({ "reviews._id": ObjectId(id) });
    const user = await userCollection.findOne({ "professorReviews._id": ObjectId(id) });
    if (!prof && !user) throw "review does not exist";
    // delete the review from the reviews
    await profCollection.updateOne({ _id: prof._id }, { $pull: { reviews: { _id: ObjectId(id) } } })
    await userCollection.updateOne({ _id: user._id }, { $pull: { professorReviews: { _id: ObjectId(id) } } })
    // re-calculate avg rating
    await profCollection.updateOne({ _id: ObjectId(prof._id) }, [{ $set: { rating: { $avg: "$reviews.rating" } } }])
    /*
    const ids = await profCollection.aggregate([
        { $unwind: '$reviews' },
        { $match: { 'reviews._id': id } },
        { $project: { _id: 0, userId: '$reviews.userId', professorId: '$reviews.professorId' } }
    ]).toArray()
    await professorReviewDBfunction.deleteProfessorReview(ids[0].userId, ids[0].professorId)
    */
    return { deleted: true };
}

async function getDepartments() {
    const profCollection = await professors();
    const dpts = await profCollection.distinct('department');
    return dpts;
}

async function countProfessors() {
    const profCollection = await professors();
    const count = await profCollection.countDocuments()
    return count
}

async function updateAllImage() {
    const profCollection = await professors();
    await profCollection.updateMany({}, { $set: { "picture": "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2022-04/220419-nicholas-meriwether-se-1206p-374c94.jpg" } });
    return { updated: true };
}

async function getProfessorByKeywords(department, keyword) {
    const departmentProfessors = await getProfessorByDepartment(department)
    if (keyword == undefined) return departmentProfessors
    let professorList = []
    departmentProfessors.forEach(professor => {
        const professorName = professor.professorName
        if (matchKeyword(professorName, keyword)) {
            professorList.push(professor)
        }
    })
    return professorList
}

function matchKeyword(courseName, keyword) {
    const words = courseName.split(" ");
    for (let i = 0; i < words.length; i++) {
        if (words[i].indexOf(keyword) != -1) {
            return true;
        }
    }
    return false;
}

async function getTop5ProfessorsByMajor(major) {
    const departmentProfessors = await getProfessorByDepartment(major)
    let res = departmentProfessors.sort((a, b) => b.rating - a.rating).slice(0, 5);
    return res;
}

async function getProfessorByDepartment(department) {
    const professorCollection = await professors();
    let professorList = await professorCollection.find({}).toArray();
    let departmentProfessors = []
    professorList.forEach(professor => {
        if (professor.department.toLowerCase() == department.toLowerCase()) {
            departmentProfessors.push(professor);
        }
    })
    return departmentProfessors
}

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
    getDepartments,
    countProfessors,
    getTop5ProfessorsByMajor,
    getProfessorByKeywords,
    updateAllImage,
}