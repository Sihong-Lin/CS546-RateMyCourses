const bcrypt = require('bcrypt');
const saltRound = 16;
const mongoCollections = require('../config/mongoCollections');
const users = mongoCollections.users;

module.exports = {
    createUser,
    checkUser,
};

async function createUser(username, password) {
    if (arguments.length != 2)
        throw 'Both username and password must be supplied.';
    if (!checkUsername(username)) throw 'Provided username is invalid.';
    if (!checkPassword(password)) throw 'Provided password is invalid.';

    const userCollection = await users();
    const res = await userCollection.find({}).toArray();
    if (res.length == 0) {
        await userCollection.createIndex({ username: 'text' });
    }

    const checkDuplicate = await userCollection.findOne({
        $text: {
            $search: username,
            $caseSensitive: false,
        },
    });
    if (checkDuplicate) {
        throw 'Provided username already exists.';
    }

    let newUser = {
        username: username.toLowerCase(),
        password: await bcrypt.hash(password, saltRound),
        courseReviews: [],
        professorReviews: [],
        restrictStatus: false,
        profilePicture: '',
        role: 'admin',
    };

    const insertInfo = await userCollection.insertOne(newUser);
    if (insertInfo.insertedCount === 0) {
        throw 'Could not create user.';
    }

    return { userInserted: true, insertedId: insertInfo.insertedId };
}

async function checkUser(username, password) {
    if (arguments.length != 2)
        throw 'Both username and password must be supplied.';
    if (!checkUsername(username)) throw 'Provided username is invalid.';
    if (!checkPassword(password)) throw 'Provided password is invalid.';

    const userCollection = await users();
    const res = await userCollection.find({}).toArray();
    if (res.length == 0) {
        await userCollection.createIndex({ username: 'text' });
    }

    const checkResult = await userCollection.findOne({
        $text: {
            $search: username,
            $caseSensitive: false,
        },
    });
    if (!checkResult) {
        throw 'Either the username or password is invalid.';
    }

    if (!(await bcrypt.compare(password, checkResult.password))) {
        throw 'Either the username or password is invalid.';
    }

    return { authenticated: true };
}

function checkUsername(input) {
    if (input == undefined) return false;
    if (typeof input != 'string') return false;
    input = input.trim();
    if (input.length == 0) return false;
    if (!/^[a-zA-Z0-9]{4,}$/.test(input)) return false;
    return true;
}

function checkPassword(input) {
    if (input == undefined) return false;
    if (typeof input != 'string') return false;
    if (input.length < 6) return false;
    if (/[ ]{1,}/.test(input)) return false;
    return true;
}
