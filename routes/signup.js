const express = require('express');
const router = express.Router();
const user = require('../data/user');

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
        if (!username || !password)
            throw 'Both username and password must be supplied.';
        if (!checkUsername(username)) throw 'Provided username is invalid.';
        if (!checkPassword(password)) throw 'Provided password is invalid.';
    } catch (err) {
        res.status(400).json(err);
        return;
    }
    try {
        const result = await user.createUser(username, email, major, profilePicture, password);
        if (result.userInserted == true) {
            res.status(200).json({ signup: true });
        } else {
            res.status(500).render('signup', {
                error: 'Internal Server Error',
            });
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
