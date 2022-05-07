const user = require('../data/user');
const course = require('../data/course');
const professor = require('../data/professor');
const connection = require('../config/mongoConnection');
const { ObjectId } = require('mongodb');
const { removeProfReview } = require('../data/professor');

const main = async () => {
    const db = await connection.connectToDb();
    await db.dropDatabase();
    try {
        // add user
        let user1 = await user.createUser('jguo32', "aaa@gmail.com", "Computer Science", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2K9xcJVlIG31wI5COY_Qep5GahOMmCmLYEQ&usqp=CAU", '123456');







    //Computer Science 15条

       /*
        let professor1 = await professor.createProfessor(
            'HanTian',
            "Computer Science",
            'All of the ML profs at Stevens know what they're talking about, 
    but Tian Han is actually able to communicate the concepts clearly, which is huge. 
    The HWs are hard but fair, but the midterm and final are both especially scary.',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor1._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 5);
        }
        */
          /*
        let professor2 = await professor.createProfessor(
            'Edward Amoroso',
            "Computer Science",
            'He teaches with a very fun and laid back style. He only does notes on the board. You must attend all classes and take very good notes in detail. 
            His midterm is critical to do good and based on the notes. There is a final project presentation too. 
            It is not a demanding class but his grading criteria is random and does not guarantee A.',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor2._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 4.8);
        }
        */
          /*
        let professor3 = await professor.createProfessor(
            'Eduardo Bonelli',
            "Computer Science",
            'Very caring professor who obviously knows the subject very well. He can go a bit fast,
             but if you ask him to re-explain things he will and it's generally worth it. You should definitely pay attention in class,
             because while the work is tough if you pay attention and participate you'll be fine. You should also attend class because of weekly quizzes.',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor3._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 4.2);
        }
        */
          /*
        let professor4 = await professor.createProfessor(
            'Dominic Duggan',
            "Computer Science",
            'You actually will learn a lot in his class, and Prof. Duggan is a good teacher. 
            But it's simply not worth it to take this class! 
            Some of the homework assignments (given weekly) take up to 15 hours to complete.
             If you finish an assignment within 10 hours you'll probably feel good about yourself. 
             Save yourself a lot of anxiety and frustration. Avoid!',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor4._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 2);
        }
        */
          /*
        let professor5 = await professor.createProfessor(
            'Enrique Dunn',
            "Computer Science",
            'Very Solid professor. The concepts covered were interesting, but it can be hard to pay attention over zoom.',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor5._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 3.3);
        }
        */
          /*
        let professor6 = await professor.createProfessor(
            'Igor Faynberg',
            "Computer Science",
            'Professor Igor is really helpful and is always accessible outside the class. 
            If you work on the given assignments and ask him questions it is an easy A.',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor6._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 3.8);
        }
        */
          /*
        let professor7 = await professor.createProfessor(
            'Shudong Hao',
            "Computer Science",
            'He's honestly an awesome professor!
             All you needed to do was either pay attention during lectures or watch the lecture recordings and take notes. 
            He goes out of his way to connect with students and provide help when we ask for it. ',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor7._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 3.6);
        }
        */
          /*
        let professor8 = await professor.createProfessor(
            'Samuel Kim',
            "Computer Science",
            'Great Professor .Very Knowledgeable and amazingly explains the concepts.',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor8._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 3.6);
        }
        */
          /*
        let professor9 = await professor.createProfessor(
            'Samantha Kleinberg',
            "Computer Science",
            'Computer science class but using a computer is forbidden in the class. She does not have any sympathy for students.',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor9._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 1.5);
        }
        */
          /*
        let professor10 = await professor.createProfessor(
            'Eric Koskinen',
            "Computer Science",
            'Professor Koskinen is good at teaching the material but gets some points off for there being a general disconnect between homeworks and lecture material.',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor10._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 4);
        }
        */
          /*
        let professor11 = await professor.createProfessor(
            'Xueqing Liu',
            "Computer Science",
            'This professor gets some unwarranted criticism tbh. Yes the class is hard, and the lectures can be a little hard to stay engaged in.',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor11._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 1.5);
        }
        */
       /*
        let professor12 = await professor.createProfessor(
            'Philippe Meunie',
            "Computer Science",
            'Professor Meunier was an absolutely wonderful professor to work with. 
            The pacing of his class is great and his lectures were simple and easy to understand.',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor12._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 4.8);
        }
        */
       /*
        let professor13 = await professor.createProfessor(
            'Philippos Mordohai',
            "Computer Science",
            'Great professor. He does a good job of helping you to understand the material.',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor13._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 3.2);
        }
        */
       /*
        let professor14 = await professor.createProfessor(
            'Antonio Nicolos',
            "Computer Science",
            'Professor Nicolosi is extremely unorganized. 
            Grading structure/syllabus was not provided until right before final exam. ',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor14._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 2);
        }
        */
       /*
        let professor15 = await professor.createProfessor(
            'Yue Nin',
            "Computer Science",
            'Not a terrible professor, but the assignments are hard. ',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor15._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 2.3);
        }
        */
      

    

    //Biomedical Engineering 9条 ok
         /*
        let professor16 = await professor.createProfessor(
            'Guodong Wang',
            "Biomedical Engineering",
            'Good professor, the assignments are usefull. ',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor15._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 3);
        }
        */
        /*
        let professor17 = await professor.createProfessor(
            'Alfred Ascione',
            "Biomedical Engineering",
            'Very kind professor and give you good lecture. ',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor17._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 4.5);
        }
        */
        /*
        let professor18 = await professor.createProfessor(
            'Helen Blank',
            "Biomedical Engineering",
            'professor is very good, she is a good people. ',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor18._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 3.3);
        }
        */
        /*
        let professor19 = await professor.createProfessor(
            'Valerie Franco',
            "Biomedical Engineering",
            'Not a bad professor',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor19._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 4.3);
        }
        */
        /*
        let professor20 = await professor.createProfessor(
            'Yu Gan',
            "Biomedical Engineering",
            'All you needed to do was either pay attention during lectures or watch the lecture recordings and take notes, but the assignments are hard. ',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor20._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 3.7);
        }
        */
        /*
        let professor21 = await professor.createProfessor(
            'Jia Di',
            "Biomedical Engineering",
            'You will learn something valuable from this man. ',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor15._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 2.9);
        }
        */
        /*
        let professor22 = await professor.createProfessor(
            'Carrie Perlman',
            "Biomedical Engineering",
            'professor is good at lecture but score giving is low ',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor22._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 4.2);
        }
        */
        /*
        let professor23 = await professor.createProfessor(
            'Alex Sniderman',
            "Biomedical Engineering",
            'He really is kind to help students ',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor23._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 4.6);
        }
        */
        /*
        let professor24 = await professor.createProfessor(
            'Becky Tucci',
            "Biomedical Engineering",
            'Amazing at teaching style. you can learn alot in this class. ',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor24._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 2.3);
        }
        */

    //Mechanical Engineering 5条 ok
      /*
        let professor25 = await professor.createProfessor(
            'Elsayed Aziz',
            "Mechanical Engineering",
            'This guy is really not a great teacher. Reads directly off slides, doesn't relay the material across to the students effectively at all.',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor25._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 3.5);
        }
        */
         /*
        let professor26 = await professor.createProfessor(
            'Chang-Hwan Cho',
            "Mechanical Engineering",
            'A lot of the course is based around consistent homework and groupwork',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor26._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 4.3);
        }
        */
         /*
        let professor27 = await professor.createProfessor(
            'Raymond Chaplin',
            "Mechanical Engineering",
            'He is pretty chill and laid back. The course was not that bad but he was always available to help during group breakout sessions.',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor27._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 1.8);
        }
        */
         /*
        let professor28 = await professor.createProfessor(
            'James Curcio',
            "Mechanical Engineering",
            'Material for this class was mathematically intensive.',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor28._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 2.7);
        }
        */
         /*
        let professor28 = await professor.createProfessor(
            'Sven Esche',
            "Mechanical Engineering",
            'This guy is really not a great teacher. Reads directly off slides, doesn't relay the material across to the students effectively at all.',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor28._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 4.4);
        }
        */

    //Electrical Engineering 8条
      /*
        let professor29 = await professor.createProfessor(
            'Yanghyo Kim',
            "Electrical Engineering",
            'each assignment takes at least a week to complete.',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor29._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 2.4);
        }
        */  /*
        let professor30 = await professor.createProfessor(
            'Yi Gu',
            "Electrical Engineering",
            'TThe material and class quality is comparable to some of the ivy leagues .',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor30._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 4.4);
        }
        */  /*
        let professor31 = await professor.createProfessor(
            'Dov Kruger',
            "Electrical Engineering",
            'Most of her class is reading her slides.',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor31._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 3.4);
        }
        */  /*
        let professor32 = await professor.createProfessor(
            'Hang Liu',
            "Electrical Engineering",
            'This guy is really not bad.',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor32._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 2.7);
        }
        */  /*
        let professor33 = await professor.createProfessor(
            'Lu Liu',
            "Electrical Engineering",
            'The professor is hard working and expects you to work hard as well.',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor33._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 3.6);
        }
        */  /*
        let professor34 = await professor.createProfessor(
            'Weipeng Liu',
            "Electrical Engineering",
            'Assignments are challenging and hard.',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor34._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 4.2);
        }
        */  /*
        let professor35 = await professor.createProfessor(
            'Kevin Lu',
            "Electrical Engineering",
            'Not helpful at all. He thinks anyone who asks a question is an idiot. Does not teach you anything. Homework is challenging.',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor35._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 3.4);
        }
        */  /*
        let professor36 = await professor.createProfessor(
            'Sven Esche',
            "Electrical Engineering",
            'is a fantastic professor, as long as you ask questions.',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor36._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 4.3);
        }
        */

    //Management 5条
    /*
        let professor37 = await professor.createProfessor(
            'Eileen Black',
            "Management",
            'Very known in Management fiel.',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor37._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 3.3);
        }
        */
        /*
        let professor41 = await professor.createProfessor(
            'David Fernandez',
            "Management",
            'Very known in Management fiel.',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor37._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 3.3);
        }
        */
        /*
        let professor38 = await professor.createProfessor(
            'Jack Lu',
            "Management",
            'interesting words in the lecture.',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor38._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 3.7);
        }
        */
        /*
        let professor39 = await professor.createProfessor(
            'Cixin Liu',
            "Management",
            'he makes the hard course easy to learn.',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor39._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 3.5);
        }
        */
        /*
        let professor40 = await professor.createProfessor(
            'Katherine Bryndza',
            "Management",
            'know much knowledge about this field so that can teach students well',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor40._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 4.7);
        }
        */

    //Business Intelligence and Analytics 8条
    /*
        let professor41 = await professor.createProfessor(
            'Kathryn Abel',
            "Business Intelligence and Analytics",
            'The professor is hard working and expects you to work hard as well.',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor41._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 4.2);
        }
        */
       /*
        let professor42 = await professor.createProfessor(
            'Haoran Chen',
            "Business Intelligence and Analytics",
            'know much knowledge about this field so that can teach students well',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor42._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 3.2);
        }
        */
       /*
        let professor43 = await professor.createProfessor(
            'Zhen Chen',
            "Business Intelligence and Analytics",
            'Without the assignments that he gives out through the course, I do not think I would have done as well as I should have. ',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor43._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 3.3);
        }
        */
       /*
        let professor44 = await professor.createProfessor(
            'Pinar Akcora',
            "Business Intelligence and Analytics",
            'Great professor. He does a good job of helping you to understand the material. ',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor44._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 4.2);
        }
        */
       /*
        let professor45 = await professor.createProfessor(
            'Jake Albrecht',
            "Business Intelligence and Analytics",
            'horrible professor.',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor45._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 3.4);
        }
        */
       /*
        let professor46 = await professor.createProfessor(
            'Joseph Allen',
            "Business Intelligence and Analytics",
            'He cares about student, and he grade all the homework',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor46._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 4.2);
        }
        */
       /*
        let professor47 = await professor.createProfessor(
            'Kathryn Abel',
            "Business Intelligence and Analytics",
            ' With some prior knowledge of ML as well a little work you can get through with good grades.',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor47._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 3.2);
        }
        */
       /*
        let professor48 = await professor.createProfessor(
            'Allen Parker',
            "Business Intelligence and Analytics",
            'teach much useful things about analytics',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor48._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 4.2);
        }
        */
       /*
        let professor49 = await professor.createProfessor(
            'Kathryn Mike',
            "Business Intelligence and Analytics",
            'assignment is vry useful',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor49._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 4.1);
        }
        */

    //Finance 5条
        /*
        let professor50 = await professor.createProfessor(
            'Vishaal Abhinav',
            "Finance",
            'teach you how to be good in finance',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor50._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 3.3);
        }
        */
             /*
        let professor51 = await professor.createProfessor(
            'Homasadat Deilamy',
            "Finance",
            'give very clear and basic introduction',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor51._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 4.2);
        }
        */
             /*
        let professor52 = await professor.createProfessor(
            'Cindy Chin',
            "Finance",
            'not too much assignment',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor52._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 3.7);
        }
        */
             /*
        let professor53 = await professor.createProfessor(
            'Steven Czacho',
            "Finance",
            'give very good grade and professor is very good',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor53._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 2.6);
        }
        */
             /*
        let professor54 = await professor.createProfessor(
            'Andrew Gonzalez',
            "Finance",
            'He really give useful knowledge',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor54._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 3.6);
        }
        */

    //Physics & Engineering Physic 6条
             /*
        let professor55 = await professor.createProfessor(
            'Andrew Gonzalez',
            "Physics & Engineering Physic",
            'He really a good professor',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor55._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 4.6);
        }
        */
                /*
        let professor56 = await professor.createProfessor(
            'Homasadat Deilamy',
            "Physics & Engineering Physic",
            'The professor is very good at this fied',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor56._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 3.2);
        }
        */
                /*
        let professor57 = await professor.createProfessor(
            'Nishika Jain',
            "Physics & Engineering Physic",
            'The professor is hard working and expects you to work hard as well. ',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor57._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 3.3);
        }
        */
                /*
        let professor58 = await professor.createProfessor(
            'Joshua Kelle',
            "Physics & Engineering Physic",
            'Assignments are challenging and hard.',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor58._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 3.5);
        }
        */
                /*
        let professor59 = await professor.createProfessor(
            'Homasadat Deilamy',
            "Physics & Engineering Physic",
            'this professor is kind',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor59._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 3.2);
        }
        */
                /*
        let professor60 = await professor.createProfessor(
            'Homasadat Deilamy',
            "Physics & Engineering Physic",
            'this professor is an excellent teacher',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor60._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 4.6);
        }
        */
       


    //Chemistry 4条
             /*
        let professor61 = await professor.createProfessor(
            'Bamini Ketheesan',
            "Chemistry",
            'All the other comments you read are crap',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor61._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 3.6);
        }
        */
              /*
        let professor62 = await professor.createProfessor(
            'Kunal Kumar',
            "Chemistry",
            'communicate the concepts clearly, which is huge',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor62._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 2.6);
        }
        */
              /*
        let professor63 = await professor.createProfessor(
            'Sharon Landsbergis',
            "Chemistry",
            'this professor is an excellent teacher',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor63._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 3.3);
        }
        */
              /*
        let professor64 = await professor.createProfessor(
            'Adrienne Larmet',
            "Chemistry",
            'Hard working professor, willing to help. ',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor64._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 4.6);
        }
        */

    //Materials Engineering 5条
            /*
        let professor65 = await professor.createProfessor(
            'Louis Mayer',
            "Materials Engineering",
            ' learned a lot. Always made the lectures interesting.  ',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor65._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 2.8);
        }
        */
            /*
        let professor66 = await professor.createProfessor(
            'Louis Mayer',
            "Materials Engineering",
            ' learned a lot. Always made the lectures interesting.  ',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor66._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 2.8);
        }
        */
            /*
        let professor67 = await professor.createProfessor(
            'Louis Mayer',
            "Materials Engineering",
            ' He does make the material much harder than it has to be, but he does very good reviews before the tests and it is usually the same problems that will be on the test.  ',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor67._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 2.8);
        }
        */
            /*
        let professor68 = await professor.createProfessor(
            'Louis Mayer',
            "Materials Engineering",
            ' He is a great teacher, and makes the material very easy to understand.  ',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor68._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 3.8);
        }
        */
            /*
        let professor69 = await professor.createProfessor(
            'Louis Mayer',
            "Materials Engineering",
            '  His lectures are not mandatory, however when you go it is always fun because he adds real life stories into the lecture which are really interesting.  ',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor69._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 4.8);
        }
        */

    //Civil Engineering 2条
       
    /*
        let professor70 = await professor.createProfessor(
            'Louis Mayer',
            "Civil Engineering",
            ' Excellent professor. Really knows his stuff. Does not use textbook.  ',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor70._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 4.7);
        }
        */
  /*
        let professor71 = await professor.createProfessor(
            'Louis Mayer',
            "Civil Engineering",
            'Excellent prof. who is very knowledgeable but explains concepts clearly.',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor71._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 4.4);
        }
        */
    //Environmental Engineering 3
      /*
        let professor72 = await professor.createProfessor(
            'Louis Mayer',
            "Civil Engineering",
            'Excellent prof. who is very knowledgeable but explains concepts clearly.',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor72._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 4.4);
        }
        */
         /*
        let professor73 = await professor.createProfessor(
            'Louis Mayer',
            "Civil Engineering",
            'e is a great guy and you'll learn alot.',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor73._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 4.4);
        }
        */
       /*
        let professor74 = await professor.createProfessor(
            'Louis Mayer',
            "Civil Engineering",
            'Good professor.',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor74._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 4.4);
        }
        */













        // add a professor
        let name = 'Eric Koskinen';
        let department = "Computer Science";
        let intro =
            'My research yields techniques that improve the way programmers develop reliable and efficient concurrent software for multi-core and distributed systems.';
        let pic = "url to picture"
        let professor1 = await professor.createProfessor(name, department, intro, pic);
        console.log(professor1);

        // add a professor reviews
        let uid = user1.insertedId.toString();
        let pid = professor1._id.toString();
        let review = 'nice!';

        let review1 = await professor.addProfReview(uid, pid, review, 5);
        let review2 = await professor.addProfReview(uid, pid, review, 4);
        let review3 = await professor.addProfReview(uid, pid, review, 3);
        let prof1 = await professor.getProfById(pid);
        console.log(review1);
        console.log(prof1);

        let review1Id = review1._id.toString();
        let delettionInfo = await removeProfReview(review1Id);
        console.log(delettionInfo);
        console.log(await professor.getProfById(pid))


        // update professor
        professor1.introduction = "My research yields techniques that improve the way programmers develop reliable and efficient concurrent software for multi-core and distributed systems";
        await professor.updateProf(pid, professor1);
        console.log(await professor.getProfById(pid))

    } catch (e) {
        console.log(e);
    }

    await connection.closeConnection();
    console.log('Done!');
};
main();