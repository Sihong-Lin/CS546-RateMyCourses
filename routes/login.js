const express = require('express');
const router = express.Router();
const user = require('../data/user');

router.get('/', async (req, res) => {
    res.render('login', { title: 'login' });
});

router.post('/', async (req, res) => {
    let username = req.body.usernameInput;
    let password = req.body.passwordInput;
    console.log(username)
    console.log(password)
    try {
        if (!username || !password)
            throw 'Both username and password must be supplied.';
        //if (!checkUsername(username)) throw 'Provided username is invalid.';
        //if (!checkPassword(password)) throw 'Provided password is invalid.';
    } catch (err) {
        res.status(400).render('login', {
            hasError: true,
            title: 'login',
            error: err,
        });
        return;
    } 
    try {
        const result = await user.checkUser(username, password);
        if (result.authenticated == true) {
           // req.session.user = { username: username };
            res.redirect('/');
        } else {
            res.status(500).render('login', { error: 'Internal Server Error' });
            return;
        }
    } catch (err) {
        res.status(400).render('login', {
            hasError: true,
            title: 'login',
            error: err,
        });
        return;
    }
});

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

module.exports = router;
