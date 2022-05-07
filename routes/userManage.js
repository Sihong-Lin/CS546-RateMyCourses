const express = require('express');
const router = express.Router();
const home = require('../data/home');
const course = require('../data/course');
const user = require('../data/user');
const inputCheck = require('../data/inputCheck');
const xss = require('xss');

//页面初始化
router.get('/', async (req, res) => {
    if (!isLoggedIn(req)) {
        res.redirect("../401.html");
        return
    }
    let userList = await home.getAllUsers();
    res.render('userManage', { 
        title: 'RateMyCourses - User Manage', 
        allUsers: userList
    });
});


router.put('/status/:id', async (req, res) => {  
    const userId = req.params.id;

    try {
        inputCheck.checkUserId(xss(userId))
        userRestrictStatus = await user.setUserRestrictStatus(xss(userId));
    } catch (e) {
        res.status(500).json(e);
        return
    }
    
    res.status(200).json({userRestrictStatus });

});

router.put('/role/:id', async (req, res) => {  
    const userId = req.params.id;

    try {
        inputCheck.checkUserId(xss(userId))
        userRole = await user.changeUserRole(xss(userId));
    } catch (e) {
        res.status(500).json(e);
        return
    }
    
    res.status(200).json({ userRole });

});

router.delete('/:id', async (req, res) => {  
    const userId = req.params.id;
    try {
        inputCheck.checkUserId(xss(userId))
        removeUserStatus = await user.removeUser(xss(userId));
    } catch (e) {
        res.status(500).json(e);
        return
    }
    
    res.status(200).json({removeUserStatus});
});


const isLoggedIn = function (req) {
    if(req.session.user != undefined) {
        if (req.session.user.role != "administrator") {
            return false;
        }
        return true;
    } else {
        return false;
    }
};

module.exports = router;
