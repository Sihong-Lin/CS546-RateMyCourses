const express = require('express');
const router = express.Router();
const home = require('../data/home');

router.get('/', async (req, res) => {
    let professorList = await home.top3Professors();
    console.log(professorList);
    res.render('home', { 
                    title: 'RateMyCourses - Home',
                    professorPicture1: professorList[0].picture                    ,
                    professorName1: professorList[0].professorName,
                    ProfessorDepartment1: professorList[0].department,
                    ProfessorIntroduction1: professorList[0].introduction,
                    professorPicture2: professorList[1].picture,
                    professorName2: professorList[1].professorName,
                    ProfessorDepartment2: professorList[1].department,
                    ProfessorIntroduction2: professorList[1].introduction,
                    professorPicture3: professorList[2].picture,
                    professorName3: professorList[2].professorName,
                    ProfessorDepartment3: professorList[2].department,
                    ProfessorIntroduction3: professorList[2].introduction
    });
});


module.exports = router;
