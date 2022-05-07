const express = require('express');
const router = express.Router();
const user = require('../data/user');
const xss = require('xss');

router.get('/', async (req, res) => {
    if(req.session.user) {
        res.render('account')
    } else {
        res.render('login', { title: 'login' });
    }
    
});

router.post('/', async (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    try {
        if (!username || !password)
            throw 'Both username and password must be supplied.';
        if (!checkUsername(xss(username))) throw 'Provided username is invalid.';
        if (!checkPassword(xss(password))) throw 'Provided password is invalid.';
    } catch (err) {
        res.status(400).json(err);
        return;
    } 
    try {
        const result = await user.checkUser(xss(username), xss(password));
        if (result.authenticated == true) {
            req.session.user = { username: username , userId : result.userId , role : result.role};
            res.status(200).json({ login: true });
            return;
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
