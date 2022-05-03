const express = require('express');
const router = express.Router();
const user = require('../data/user');

router.get('/', async (req, res) => {
    if (!isLoggedIn(req)) {
        res.redirect("../401.html");
        return
    }

    let userId = req.session.user.userId;
    let userInfo = await user.getUserById(userId);


    await user.

 //   let topProfessors = await home.getTop5Professors();
  //  let topCourses = await home.getTop5Courses();
    res.render('account', 
                { 
                    title: 'RateMyCourses - Account',
                    userInfo: userInfo
                  //  topCourses: topCourses,
                }
    );
});

const isLoggedIn = function (req) {
    if(req.session.user != undefined) {
        return true;
    } else {
        return false;
    }
};


module.exports = router;
