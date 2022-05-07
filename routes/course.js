
const express = require('express');
const router = express.Router();
const course = require('../data/course');
const user = require('../data/user');
const inputCheck = require('../data/inputCheck');
const xss = require('xss');

const isLoggedIn = function (req) {
    if(req.session.user != undefined) {
        return true;
    } else {
        return false;
    }
};


router.get('/', async (req, res) => {
    res.redirect('courses');
});

router.get('/:id', async (req, res) => { // show course
    let courseDetail = undefined
    try {
        courseDetail = await course.getCourse(xss(req.params.id));
        res.render('course', { title: courseDetail.courseName, courseDetail: courseDetail});
    } catch (e) {
        console.log(e);
        res.render('404')
        return
    }
    
});

router.post('/:id', async (req, res) => { // create course review
    if (!isLoggedIn(req)) {
        res.status(401).json("You are not authroized to post a comment");
        return;
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
        reviewCreateStatus = await user.createCourseReview(xss(userId), xss(courseId), xss(comment), metrics, rating);
    } catch (e) {
        console.log(e);
        res.status(400).json(e);
        return
    }
    
    res.status(200).json({reviewCreateStatus });
});

router.delete('/:id', async (req, res) => {  
    let courseId = undefined;
    try {
        courseId = inputCheck.checkCourseId(xss(req.params.id));
    } catch (e) {
        console.log(e);
        throw e
    }
    try {
        removeCourseStatus = await course.removeCourse(xss(courseId));
    } catch (e) {
        console.log(e);
        res.status(500).json(e);
        return
    }
    
    res.status(200).json({removeCourseStatus });
    
});



router.put('/deleteCourseReview', async (req, res) => {  
    let userId = undefined
    let courseId = undefined
    let reviewDeleteStatus = undefined
    try {
        userId = inputCheck.checkUserId(xss(req.body.userId));
        courseId = inputCheck.checkCourseId(xss(req.body.courseId))
    } catch (e) {
        console.log(e);
        throw e
    }
    
    try {
        reviewDeleteStatus = await user.deleteCourseReview(xss(userId), xss(courseId));
    } catch (e) {
        console.log(e);
        res.status(500).json(e);
        return
    }
    
    res.status(200).json({reviewDeleteStatus: true});
    
});


router.put('/editCourseReview/', async (req, res) => {  
    let userId = undefined
    let courseId = undefined
    let newComment
    try {
        userId = inputCheck.checkUserId(xss(req.body.userId))
        courseId = inputCheck.checkCourseId(xss(req.body.courseId))
        newComment = inputCheck.checkComment(xss(req.body.newComment))
    } catch (e) {
        console.log(e);
        throw e
    }
    let reviewEditStatus = undefined
    try {
        reviewEditStatus = await course.updateCourseReviewComment(xss(userId), xss(courseId), xss(newComment))
    } catch (e) {
        console.log(e);
        res.status(500).json(e);
        return
    }
    
    res.status(200).json({reviewEditStatus: true});
    
});

router.put('/edit/:id', async (req, res) => {  // edit course
    const courseId = inputCheck.checkCourseId(xss(req.params.id))
    const courseBody = req.body
    if(!courseBody) {
        res.status(400).json({error : 'You must provide data to update a course'})
        return
    }
    let courseName = undefined
    let academicLevel = undefined
    let courseOwner = undefined
    let type = undefined
    let units = undefined
    let description = undefined
    let instructionalFormats = undefined
    let syllabus = undefined
    let courseware = undefined
    let picture = undefined

    try {
        courseName = inputCheck.checkCourseName(xss(courseBody.courseName))
    }catch(e) {
        console.log(e);
        res.status(400).json(e);
        return
    }

    try {
        academicLevel = inputCheck.checkAcademicLevel(xss(courseBody.academicLevel))
    }catch(e) {
        console.log(e);
        res.status(400).json(e);
        return
    }

    try {
        courseOwner = inputCheck.checkCourseOwner(xss(courseBody.courseOwner))
    }catch(e) {
        console.log(e);
        res.status(400).json(e);
        return
    }

    try {
        type = inputCheck.checkType(xss(courseBody.type))
    }catch(e) {
        console.log(e);
        res.status(400).json(e);
        return
    }

    try {
      //  gradingBasis = inputCheck.checkGradingBasis(courseBody.gradingBasis)
    }catch(e) {
        console.log(e);
        res.status(400).json(e);
        return
    }

    try {
        units = inputCheck.checkUnits(courseBody.units)
    }catch(e) {
        console.log(e);
        res.status(400).json(e);
        return
    }

    try {
        description = inputCheck.checkDescription(xss(courseBody.description))
    }catch(e) {
        console.log(e);
        res.status(400).json(e);
        return
    }

    try {
     //   typicalPeriodsOffered = inputCheck.checkTypicalPeriodsOffered(courseBody.typicalPeriodsOffered)
    }catch(e) {
        console.log(e);
        res.status(400).json(e);
        return
    }

    try {
        instructionalFormats = inputCheck.checkInstructionalFormats(xss(courseBody.instructionalFormats))
    }catch(e) {
        console.log(e);
        res.status(400).json(e);
        return
    }

    try {
        syllabus = inputCheck.checkSyllabus(xss(courseBody.syllabus))
    }catch(e) {
        console.log(e);
        res.status(400).json(e);
        return
    }

    try {
        courseware = inputCheck.checkCourseware(xss(courseBody.courseware))
    }catch(e) {
        console.log(e);
        res.status(400).json(e);
        return
    }

    try {
        picture = inputCheck.checkCoursePicture(courseBody.picture)
    }catch(e) {
        console.log(e);
        res.status(400).json(e);
        return
    }

    try {
        const newCourse = await course.updateCourse(
            xss(courseId),
            xss(courseName),
            xss(academicLevel), 
            xss(courseOwner), 
            xss(type), 
          //  gradingBasis,
            units,
            xss(description),
          //  typicalPeriodsOffered,
            xss(instructionalFormats),
            xss(syllabus),
            xss(courseware),
            xss(picture))
        res.json(newCourse);
    }catch (e) {
        console.log(e);
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
        courseName = inputCheck.checkCourseName(xss(courseBody.courseName))
    }catch(e) {
        console.log(e);
        res.status(400).json(e);
        return
    }

    try {
        academicLevel = inputCheck.checkAcademicLevel(xss(courseBody.academicLevel))
    }catch(e) {
        console.log(e);
        res.status(400).json(e);
        return
    }

    try {
        courseOwner = inputCheck.checkCourseOwner(xss(courseBody.courseOwner))
    }catch(e) {
        console.log(e);
        res.status(400).json(e);
        return
    }

    try {
        type = inputCheck.checkType(xss(courseBody.type))
    }catch(e) {
        console.log(e);
        res.status(400).json(e);
        return
    }

    try {
       // gradingBasis = inputCheck.checkGradingBasis(courseBody.gradingBasis)
    }catch(e) {
        console.log(e);
        res.status(400).json(e);
        return
    }

    try {
        units = inputCheck.checkUnits(courseBody.units)
    }catch(e) {
        console.log(e);
        res.status(400).json(e);
        return
    }

    try {
        description = inputCheck.checkDescription(xss(courseBody.description))
    }catch(e) {
        console.log(e);
        res.status(400).json(e);
        return
    }

    try {
      //  typicalPeriodsOffered = inputCheck.checkTypicalPeriodsOffered(courseBody.typicalPeriodsOffered)
    }catch(e) {
        console.log(e);
        res.status(400).json(e);
        return
    }

    try {
        instructionalFormats = inputCheck.checkInstructionalFormats(xss(courseBody.instructionalFormats))
    }catch(e) {
        console.log(e);
        res.status(400).json(e);
        return
    }

    try {
        syllabus = inputCheck.checkSyllabus(xss(courseBody.syllabus))
    }catch(e) {
        console.log(e);
        res.status(400).json(e);
        return
    }

    try {
        courseware = inputCheck.checkCourseware(xss(courseBody.courseware))
    }catch(e) {
        console.log(e);
        res.status(400).json(e);
        return
    }

    try {
        picture = inputCheck.checkCoursePicture(xss(courseBody.picture))
    }catch(e) {
        console.log(e);
        res.status(400).json(e);
        return
    }
 

    try {
        const newCourse = await course.createCourse(
            xss(courseName),
            xss(academicLevel), 
            xss(courseOwner), 
            xss(type), 
           // gradingBasis,
            units,
            xss(description),
          //  typicalPeriodsOffered,
            xss(instructionalFormats),
            xss(syllabus),
            xss(courseware),
            xss(picture))
        res.json(newCourse);
    }catch (e) {
        console.log(e);
        res.sendStatus(500)
        return
    }
})




module.exports = router;
