const express = require('express');
const router = express.Router();
const home = require('../data/home');
const course = require('../data/course');
const user = require('../data/user');
const inputCheck = require('../data/inputCheck');

//页面初始化
router.get('/', async (req, res) => {
    let userList = await home.getAllUsers();
    res.render('userManage', { 
        title: 'RateMyCourses - User Manage', 
        allUsers: userList
    });
});


router.put('/status/:id', async (req, res) => {  
    const userId = req.params.id;

    try {
        userRestrictStatus = await user.setUserRestrictStatus(userId);
    } catch (e) {
        res.status(500).json(e);
        return
    }
    
    res.status(200).json({userRestrictStatus });

});

router.delete('/:id', async (req, res) => {  
    const userId = req.params.id;
    try {
        removeUserStatus = await user.removeUser(userId);
    } catch (e) {
        res.status(500).json(e);
        return
    }
    
    res.status(200).json({removeUserStatus});
});


module.exports = router;
