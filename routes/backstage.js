const express = require('express');
const router = express.Router();
const home = require('../data/home');

//Backstage页面初始化
router.get('/', async (req, res) => {
    res.render('backstage', { title: 'RateMyCourses - Backstage'});
});


module.exports = router;
