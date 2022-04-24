const bcrypt = require('bcrypt');
const inputCheck = require('./inputCheck');
const saltRound = 16;
const mongoCollections = require('../config/mongoCollections');
const users = mongoCollections.users;

module.exports = {
    createUser,
    checkUser,
};
async function checkUsernameRepeat(username) {
    const userCollection = await users();
    let user = await userCollection.findOne({username: username})
    if(user === null) {
        return username
    } else {
        throw 'this username already existed'
    }   
}


async function createUser(username, password) {
    try {
        username = inputCheck.checkUserName(username)
        username = await checkUsernameRepeat(username)
        password = inputCheck.checkPassword(password)
    } catch (e) {
        throw e
    }
    const userCollection = await users();
    let newUser = {
        username: username.toLowerCase(),
        password: await bcrypt.hash(password, saltRound),
        courseReviews: [],
        professorReviews: [],
        restrictStatus: false,
        profilePicture: "",
        role: "student"
    }
    const insertInfo = await userCollection.insertOne(newUser);
    if (!insertInfo.acknowledged || !insertInfo.insertedId) {
        throw 'Could not create user.';
    }

    return { userInserted: true, insertedId: insertInfo.insertedId };
}

async function checkUser(username, password) {
    try {
        username = inputCheck.checkUserName(username)
        password = inputCheck.checkPassword(password)
    } catch (e) {
        throw e
    }
    const userCollection = await users();
    let userInfo = await userCollection.findOne({username: username.toLowerCase()})
    if(userInfo === null) {
        throw 'Either the username or password is invalid'
    }
    let encrypted_password = userInfo.password
    let passwordMatch = await bcrypt.compare(password, encrypted_password)
    if (!passwordMatch) {
        throw 'Either the username or password is invalid'
    } else {
        return {authenticated: true}
    }
}


