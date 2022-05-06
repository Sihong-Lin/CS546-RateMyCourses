
const express = require('express');
const router = express.Router();
const course = require('../data/course');
const user = require('../data/user');
const inputCheck = require('../data/inputCheck');

const isLoggedIn = function (req) {
    if(req.session.user != undefined) {
        return true;
    } else {
        return false;
    }
};


router.get('/', async (req, res) => {
    res.redirect('home');
});

router.get('/:id', async (req, res) => { // show course
    let courseDetail = undefined
    try {
        courseDetail = await course.getCourse(req.params.id);
        res.render('course', { title: courseDetail.courseName, courseDetail: courseDetail});
    } catch (e) {
        res.render('404')
        return
    }
    
});

router.post('/:id', async (req, res) => { // create course review
    if (!isLoggedIn(req)) {
        res.redirect("../401.html");
        return
    }
    const loginUser = req.session.user
    const reviewBody = req.body;
    const userId = loginUser.userId
    const courseId = req.params.id;
    const comment = reviewBody.comment;
    const rating = parseInt(reviewBody.rating);
    // const metrics = reviewBody.metrics;s
    const difficulty = reviewBody.Difficulty;
    const chanceToGetA = reviewBody.ChanceToGetA;
    const workLoad = reviewBody.WorkLoad;
    const metrics = {difficulty: difficulty, chanceToGetA: chanceToGetA, workLoad: workLoad}
    let reviewCreateStatus = undefined
    try {
        reviewCreateStatus = await user.createCourseReview(userId, courseId, comment, metrics, rating);
    } catch (e) {
        res.status(500).json(e);
        return
    }
    
    res.status(200).json({reviewCreateStatus });
});

router.delete('/:id', async (req, res) => {  
    const courseId = req.params.id;

    try {
        removeCourseStatus = await course.removeCourse(courseId);
    } catch (e) {
        res.status(500).json(e);
        return
    }
    
    res.status(200).json({removeCourseStatus });
    
    
    /*
    const userId = "6269c572c594dd340156efec";
    const courseId = req.params.id;
    let reviewDeleteStatus = undefined
    try {
        reviewDeleteStatus = await user.deleteCourseReview(userId, courseId);
    } catch (e) {
        res.status(500).json(e);
        return
    }
    
    res.status(200).json({reviewDeleteStatus });
    */
});



router.put('/deleteCourseReview', async (req, res) => {  
 
    let userId = req.body.userId;
    let courseId = req.body.courseId;
    let reviewDeleteStatus = undefined
    try {
        reviewDeleteStatus = await user.deleteCourseReview(userId, courseId);
    } catch (e) {
        res.status(500).json(e);
        return
    }
    
    res.status(200).json({reviewDeleteStatus: true});
    
});


router.put('/editCourseReview/', async (req, res) => {  
    let userId = req.body.userId;
    let courseId = req.body.courseId;
    let newComment = req.body.newComment;
    let reviewEditStatus = undefined
    try {
        reviewEditStatus = await course.updateCourseReviewComment(userId, courseId, newComment)
    } catch (e) {
        res.status(500).json(e);
        return
    }
    
    res.status(200).json({reviewEditStatus: true});
    
});

router.put('/edit/:id', async (req, res) => {  // edit course
    const courseId = req.params.id
    const courseBody = req.body
    if(!courseBody) {
        res.status(400).json({error : 'You must provide data to update a course'})
        return
    }
    let courseName = undefined
    let academicLevel = undefined
    let courseOwner = undefined
    let type = undefined
   // let gradingBasis = undefined
    let units = undefined
    let description = undefined
  //  let typicalPeriodsOffered = undefined
    let instructionalFormats = undefined
    let syllabus = undefined
    let courseware = undefined
    let picture = undefined

    try {
        courseName = inputCheck.checkCourseName(courseBody.courseName)
    }catch(e) {
        res.status(400).json(e);
        return
    }

    try {
        academicLevel = inputCheck.checkAcademicLevel(courseBody.academicLevel)
    }catch(e) {
        res.status(400).json(e);
        return
    }

    try {
        courseOwner = inputCheck.checkCourseOwner(courseBody.courseOwner)
    }catch(e) {
        res.status(400).json(e);
        return
    }

    try {
        type = inputCheck.checkType(courseBody.type)
    }catch(e) {
        res.status(400).json(e);
        return
    }

    try {
      //  gradingBasis = inputCheck.checkGradingBasis(courseBody.gradingBasis)
    }catch(e) {
        res.status(400).json(e);
        return
    }

    try {
        units = inputCheck.checkUnits(courseBody.units)
    }catch(e) {
        res.status(400).json(e);
        return
    }

    try {
        description = inputCheck.checkDescription(courseBody.description)
    }catch(e) {
        res.status(400).json(e);
        return
    }

    try {
     //   typicalPeriodsOffered = inputCheck.checkTypicalPeriodsOffered(courseBody.typicalPeriodsOffered)
    }catch(e) {
        res.status(400).json(e);
        return
    }

    try {
        instructionalFormats = inputCheck.checkInstructionalFormats(courseBody.instructionalFormats)
    }catch(e) {
        res.status(400).json(e);
        return
    }

    try {
        syllabus = inputCheck.checkSyllabus(courseBody.syllabus)
    }catch(e) {
        res.status(400).json(e);
        return
    }

    try {
        courseware = inputCheck.checkCourseware(courseBody.courseware)
    }catch(e) {
        res.status(400).json(e);
        return
    }

    try {
        picture = inputCheck.checkCoursePicture(courseBody.picture)
    }catch(e) {
        res.status(400).json(e);
        return
    }

    try {
        const newCourse = await course.updateCourse(
            courseId,
            courseName,
            academicLevel, 
            courseOwner, 
            type, 
          //  gradingBasis,
            units,
            description,
          //  typicalPeriodsOffered,
            instructionalFormats,
            syllabus,
            courseware,
            picture)
        res.json(newCourse);
    }catch (e) {
        res.sendStatus(500).json({e})
        return
    }
});

router.post('/', async (req, res) => { // create new course
    let courseBody = req.body
    if(!courseBody) {
        res.status(400).json({error : 'You must provide data to create a course'})
        return
    }
    let courseName = undefined
    let academicLevel = undefined
    let courseOwner = undefined
    let type = undefined
   // let gradingBasis = undefined
    let units = undefined
    let description = undefined
  //  let typicalPeriodsOffered = undefined
    let instructionalFormats = undefined
    let syllabus = undefined
    let courseware = undefined
    let picture = undefined

    try {
        courseName = inputCheck.checkCourseName(courseBody.courseName)
    }catch(e) {
        res.status(400).json(e);
        return
    }

    try {
        academicLevel = inputCheck.checkAcademicLevel(courseBody.academicLevel)
    }catch(e) {
        res.status(400).json(e);
        return
    }

    try {
        courseOwner = inputCheck.checkCourseOwner(courseBody.courseOwner)
    }catch(e) {
        res.status(400).json(e);
        return
    }

    try {
        type = inputCheck.checkType(courseBody.type)
    }catch(e) {
        res.status(400).json(e);
        return
    }

    try {
       // gradingBasis = inputCheck.checkGradingBasis(courseBody.gradingBasis)
    }catch(e) {
        res.status(400).json(e);
        return
    }

    try {
        units = inputCheck.checkUnits(courseBody.units)
    }catch(e) {
        res.status(400).json(e);
        return
    }

    try {
        description = inputCheck.checkDescription(courseBody.description)
    }catch(e) {
        res.status(400).json(e);
        return
    }

    try {
      //  typicalPeriodsOffered = inputCheck.checkTypicalPeriodsOffered(courseBody.typicalPeriodsOffered)
    }catch(e) {
        res.status(400).json(e);
        return
    }

    try {
        instructionalFormats = inputCheck.checkInstructionalFormats(courseBody.instructionalFormats)
    }catch(e) {
        res.status(400).json(e);
        return
    }

    try {
        syllabus = inputCheck.checkSyllabus(courseBody.syllabus)
    }catch(e) {
        res.status(400).json(e);
        return
    }

    try {
        courseware = inputCheck.checkCourseware(courseBody.courseware)
    }catch(e) {
        res.status(400).json(e);
        return
    }

    try {
        picture = inputCheck.checkCoursePicture(courseBody.picture)
    }catch(e) {
        res.status(400).json(e);
        return
    }
 

    try {
        const newCourse = await course.createCourse(
            courseName,
            academicLevel, 
            courseOwner, 
            type, 
           // gradingBasis,
            units,
            description,
          //  typicalPeriodsOffered,
            instructionalFormats,
            syllabus,
            courseware,
            picture)
        res.json(newCourse);
    }catch (e) {
        res.sendStatus(500)
        return
    }
})  




module.exports = router;
