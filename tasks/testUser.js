const user = require('../data/user');
const course = require('../data/course');
const professor = require('../data/professor');
const connection = require('../config/mongoConnection');
const { ObjectId } = require('mongodb');

const main = async () => {
    const db = await connection.connectToDb();
    await db.dropDatabase();
    let firstUserId = undefined
    console.log("1. Create first user");
    try {
        let createUser = await user.createUser(
            "zihengZhu",
            "123456789"
        )

        const insertStatus = createUser.userInserted
        firstUserId = createUser.insertedId
        if(insertStatus) {
            console.log("First user created successfully, user id is: " + firstUserId);
        }else {
            console.log("First user fail to insert")
        }
    } catch (e) {
        console.log(e);
    } 
    

    console.log("2. log in first user");
    try {
        let checkUser = await user.checkUser(
            "zihengZhu",
            "123456789"
        )

        const checkStatus = checkUser.authenticated
        if(checkStatus) {
            console.log(`First user login successfully`);
        }else {
            console.log("First user fail to login")
        }
    } catch (e) {
        console.log(e);
    } 

    await connection.closeConnection();
    console.log('Done!');
}

main();