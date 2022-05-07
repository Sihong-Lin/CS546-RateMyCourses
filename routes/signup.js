const express = require('express');
const router = express.Router();
const user = require('../data/user');
const inputCheck = require('../data/inputCheck');
const xss = require('xss');

router.get('/', (req, res) => {
    if (req.session.user) {
        return res.redirect('/private');
    } else {
        return res.render('signup', { title: 'signup' });
    }
});

router.post('/', async (req, res) => {
    let username = req.body.username;
    let email = req.body.email;
    let major = req.body.major;
    let profilePicture = req.body.profilePicture;
    let password = req.body.password;
    try {
        inputCheck.checkUserName(xss(username))
        inputCheck.checkEmail(xss(email))
        inputCheck.checkDepartment(xss(major))
        inputCheck.checkCoursePicture(xss(profilePicture))
        inputCheck.checkPassword(xss(password))
        if (!username || !password)
            throw 'Both username and password must be supplied.';
        if (!checkUsername(xss(username))) throw 'Provided username is invalid.';
        if (!checkPassword(xss(password))) throw 'Provided password is invalid.';
    } catch (err) {
        res.status(400).json(err);
        return;
    }
    try {
        const result = await user.createUser(xss(username), xss(email), xss(major), xss(profilePicture), xss(password));
        if (result.userInserted == true) {
            res.status(200).json({ signup: true });
        } else {
            res.status(500).json('Internal Server Error');
            return;
        }
    } catch (err) {
        res.status(400).json(err);
        return;
    }
});

function checkUsername(input) {
    if (input == undefined) return false;
    if (typeof input != 'string') return false;
    input = input.trim();
    if (input.length == 0) return false;
    return true;
}

function checkPassword(input) {
    if (input == undefined) return false;
    if (typeof input != 'string') return false;
    input = input.trim();
    if (input.length == 0) return false;
    return true;
}

module.exports = router;
