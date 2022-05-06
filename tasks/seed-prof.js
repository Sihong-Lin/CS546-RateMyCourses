const user = require('../data/user');
const course = require('../data/course');
const professor = require('../data/professor');
const connection = require('../config/mongoConnection');
const { ObjectId } = require('mongodb');

const main = async () => {
    const db = await connection.connectToDb();
    // await db.dropDatabase();
    try {

        let user1 = await user.createUser('jguo32', "aaa@gmail.com", "Computer Science", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2K9xcJVlIG31wI5COY_Qep5GahOMmCmLYEQ&usqp=CAU", '123456');
        let uid = user1.insertedId.toString();
        //Computer Science 15条

        let professor1 = await professor.createProfessor(
            'HanTian',
            "Computer Science",
            'All of the ML profs at Stevens know what they re talking about',
            "/"
        )
        let pid = professor1._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 5);
        }
        
        
        let professor2 = await professor.createProfessor(
            'Edward Amoroso',
            "Computer Science",
            'He teaches with a very fun and laid back style. He only does notes on the board. You must attend all classes and take very good notes in detail.  His midterm is critical to do good and based on the notes. There is a final project presentation too.  It is not a demanding class but his grading criteria is random and does not guarantee A.',
            "/"
        )
        
        let pid2 = professor2._id.toString();
        let review2 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid2, review2, 4.8);
        }
        
        
        let professor3 = await professor.createProfessor(
            'Eduardo Bonelli',
            "Computer Science",
            'Very caring professor who obviously knows the subject very well. He can go a bit fast,but if you ask him to re-explain things he will and it s generally worth it. You should definitely pay attention in class,because while the work is tough if you pay attention and participate you ll be fine. You should also attend class because of weekly quizzes.',
            "/"
        )
        let pid3 = professor3._id.toString();
        let review3 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid3, review3, 4.2);
        }
        
        let professor4 = await professor.createProfessor(
            'Dominic Duggan',
            "Computer Science",
            'You actually will learn a lot in his class, and Prof. Duggan is a good teacher. But its simply not worth it to take this class! ',
            "/"
        )
        
        let pid4 = professor4._id.toString();
        let review4 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid4, review4, 2);
        }
        
            
        let professor5 = await professor.createProfessor(
            'Enrique Dunn',
            "Computer Science",
            'Very Solid professor. The concepts covered were interesting, but it can be hard to pay attention over zoom.',
            "/"
        )
        
        let pid5 = professor5._id.toString();
        let review5 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid5, review5, 3.3);
        }
        
            
        let professor6 = await professor.createProfessor(
            'Igor Faynberg',
            "Computer Science",
            'Professor Igor is really helpful and is always accessible outside the class. If you work on the given assignments and ask him questions it is an easy A.',
            "/"
        )
        
        let pid6= professor6._id.toString();
        let review6 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid6, review6, 3.8);
        }
        
            
        let professor7 = await professor.createProfessor(
            'Shudong Hao',
            "Computer Science",
            'He s honestly an awesome professor! All you needed to do was either pay attention during lectures or watch the lecture recordings and take notes. He goes out of his way to connect with students and provide help when we ask for it. ',
            "/"
        )
        
        let pid7 = professor7._id.toString();
        let review7= 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid7, review7, 3.6);
        }
        
            
        let professor8 = await professor.createProfessor(
            'Samuel Kim',
            "Computer Science",
            'Great Professor .Very Knowledgeable and amazingly explains the concepts.',
            "/"
        )
        
        let pid8 = professor8._id.toString();
        let review8 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid8, review8, 3.6);
        }
        
        let professor9 = await professor.createProfessor(
            'Samantha Kleinberg',
            "Computer Science",
            'Computer science class but using a computer is forbidden in the class. She does not have any sympathy for students.',
            "/"
        )
        let pid9 = professor9._id.toString();
        let review9 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid9, review9, 1.5);
        }
        
            
        let professor10 = await professor.createProfessor(
            'Eric Koskinen',
            "Computer Science",
            'Professor Koskinen is good at teaching the material but gets some points off for there being a general disconnect between homeworks and lecture material.',
            "/"
        )
        
        let pid10 = professor10._id.toString();
        let review10 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid10, review10, 4);
        }
        
            
        let professor11 = await professor.createProfessor(
            'Xueqing Liu',
            "Computer Science",
            'This professor gets some unwarranted criticism tbh. Yes the class is hard, and the lectures can be a little hard to stay engaged in.',
            "/"
        )
        
        let pid11 = professor11._id.toString();
        let review11 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid11, review11, 1.5);
        }
        
        let professor12 = await professor.createProfessor(
            'Philippe Meunie',
            "Computer Science",
            'Professor Meunier was an absolutely wonderful professor to work with.  The pacing of his class is great and his lectures were simple and easy to understand.',
            "/"
        )
        
        let pid12 = professor12._id.toString();
        let review12 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid12, review12, 4.8);
        }
        
        let professor13 = await professor.createProfessor(
            'Philippos Mordohai',
            "Computer Science",
            'Great professor. He does a good job of helping you to understand the material.',
            "/"
        )
        
        let pid13 = professor13._id.toString();
        let review13 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid13, review13, 3.2);
        }
        
        let professor14 = await professor.createProfessor(
            'Antonio Nicolos',
            "Computer Science",
            'Professor Nicolosi is extremely unorganized. Grading structure/syllabus was not provided until right before final exam. ',
            "/"
        )
        
        let pid14 = professor14._id.toString();
        let review14 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid14, review14, 2);
        }
        
        let professor15 = await professor.createProfessor(
            'Yue Nin',
            "Computer Science",
            'Not a terrible professor, but the assignments are hard. ',
            "/"
        )
        
        let pid15 = professor15._id.toString();
        let review15 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid15, review15, 2.3);
        }
        
        



    //Biomedical Engineering 9条
        
        let professor16 = await professor.createProfessor(
            'Guodong Wang',
            "Biomedical Engineering",
            'Good professor, the assignments are usefull. ',
            "/"
        )
        
        let pid16 = professor16._id.toString();
        let review16 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid16, review16, 3);
        }
        
        let professor17 = await professor.createProfessor(
            'Alfred Ascione',
            "Biomedical Engineering",
            'Very kind professor and give you good lecture. ',
            "/"
        )
        
        let pid17 = professor17._id.toString();
        let review17 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid17, review17, 4.5);
        }
        
        
        let professor18 = await professor.createProfessor(
            'Helen Blank',
            "Biomedical Engineering",
            'professor is very good, she is a good people. ',
            "/"
        )
        
        let pid18 = professor18._id.toString();
        let review18 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid18, review18, 3.3);
        }
        
        let professor19 = await professor.createProfessor(
            'Valerie Franco',
            "Biomedical Engineering",
            'Not a bad professor',
            "/"
        )
        
        let pid19 = professor19._id.toString();
        let review19 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid19, review19, 4.3);
        }
        
        let professor20 = await professor.createProfessor(
            'Yu Gan',
            "Biomedical Engineering",
            'All you needed to do was either pay attention during lectures or watch the lecture recordings and take notes, but the assignments are hard. ',
            "/"
        )
        
        let pid20 = professor20._id.toString();
        let review20 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid20, review20, 3.7);
        }
        
        let professor21 = await professor.createProfessor(
            'Jia Di',
            "Biomedical Engineering",
            'You will learn something valuable from this man. ',
            "/"
        )
        
        let pid21 = professor21._id.toString();
        let review21 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid21, review21, 2.9);
        }
        
        let professor22 = await professor.createProfessor(
            'Carrie Perlman',
            "Biomedical Engineering",
            'professor is good at lecture but score giving is low ',
            "/"
        )
        
        let pid22 = professor22._id.toString();
        let review22 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid22, review22, 4.2);
        }
        
        let professor23 = await professor.createProfessor(
            'Alex Sniderman',
            "Biomedical Engineering",
            'He really is kind to help students ',
            "/"
        )
        
        let pid23 = professor23._id.toString();
        let review23 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid23, review23, 4.6);
        }
        
        let professor24 = await professor.createProfessor(
            'Becky Tucci',
            "Biomedical Engineering",
            'Amazing at teaching style. you can learn alot in this class. ',
            "/"
        )
        
        let pid24 = professor24._id.toString();
        let review24 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid24, review24, 2.3);
        }
        

    //Mechanical Engineering 5条
        
        let professor25 = await professor.createProfessor(
            'Elsayed Aziz',
            "Mechanical Engineering",
            'This guy is really not a great teacher. Reads directly off slides, doesn t relay the material across to the students effectively at all.',
            "/"
        )

        let pid25 = professor25._id.toString();
        let review25 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid25, review25, 3.5);
        }
        
        let professor26 = await professor.createProfessor(
            'Chang-Hwan Cho',
            "Mechanical Engineering",
            'A lot of the course is based around consistent homework and groupwork',
            "/"
        )
        
        let pid26 = professor26._id.toString();
        let review26 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid26, review26, 4.3);
        }
        
        let professor27 = await professor.createProfessor(
            'Raymond Chaplin',
            "Mechanical Engineering",
            'He is pretty chill and laid back. The course was not that bad but he was always available to help during group breakout sessions.',
            "/"
        )
        
        let pid27 = professor27._id.toString();
        let review27 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid27, review27, 1.8);
        }
        
        let professor28 = await professor.createProfessor(
            'James Curcio',
            "Mechanical Engineering",
            'Material for this class was mathematically intensive.',
            "/"
        )
        
        let pid28 = professor28._id.toString();
        let review28 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid28, review28, 2.7);
        }
        

    //Electrical Engineering 8条
        
        let professor29 = await professor.createProfessor(
            'Yanghyo Kim',
            "Electrical Engineering",
            'each assignment takes at least a week to complete.',
            "/"
        )
        
        let pid29 = professor29._id.toString();
        let review29 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid29, review29, 2.4);
        }
        
        let professor30 = await professor.createProfessor(
            'Yi Gu',
            "Electrical Engineering",
            'TThe material and class quality is comparable to some of the ivy leagues .',
            "/"
        )
        
        let pid30 = professor30._id.toString();
        let review30 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid30, review30, 4.4);
        }
        
        let professor31 = await professor.createProfessor(
            'Dov Kruger',
            "Electrical Engineering",
            'Most of her class is reading her slides.',
            "/"
        )
        
        let pid31 = professor31._id.toString();
        let review31 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid31, review31, 3.4);
        }
        
        let professor32 = await professor.createProfessor(
            'Hang Liu',
            "Electrical Engineering",
            'This guy is really not bad.',
            "/"
        )
        
        let pid32 = professor32._id.toString();
        let review32 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid32, review32, 2.7);
        }
        
        let professor33 = await professor.createProfessor(
            'Lu Liu',
            "Electrical Engineering",
            'The professor is hard working and expects you to work hard as well.',
            "/"
        )

        let pid33 = professor33._id.toString();
        let review33 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid33, review33, 3.6);
        }
        
        let professor34 = await professor.createProfessor(
            'Weipeng Liu',
            "Electrical Engineering",
            'Assignments are challenging and hard.',
            "/"
        )
        
        let pid34 = professor34._id.toString();
        let review34 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid34, review34, 4.2);
        }
        
        let professor35 = await professor.createProfessor(
            'Kevin Lu',
            "Electrical Engineering",
            'Not helpful at all. He thinks anyone who asks a question is an idiot. Does not teach you anything. Homework is challenging.',
            "/"
        )
        
        let pid35 = professor35._id.toString();
        let review35 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid35, review35, 3.4);
        }
        
        let professor36 = await professor.createProfessor(
            'Sven Esche',
            "Electrical Engineering",
            'is a fantastic professor, as long as you ask questions.',
            "/"
        )
        
        let pid36 = professor36._id.toString();
        let review36 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid36, review36, 4.3);
        }
        
    //Management 5条

        let professor37 = await professor.createProfessor(
            'Eileen Black',
            "Management",
            'Very known in Management fiel.',
            "/"
        )
        
        let pid37 = professor37._id.toString();
        let review37 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid37, review37, 3.3);
        }
        

        let professor38 = await professor.createProfessor(
            'Jack Lu',
            "Management",
            'interesting words in the lecture.',
            "/"
        )
        
        let pid38 = professor38._id.toString();
        let review38 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid38, review38, 3.7);
        }
        
        let professor39 = await professor.createProfessor(
            'Cixin Liu',
            "Management",
            'he makes the hard course easy to learn.',
            "/"
        )
        
        let pid39 = professor39._id.toString();
        let review39 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid39, review39, 3.5);
        }
        
        let professor40 = await professor.createProfessor(
            'Katherine Bryndza',
            "Management",
            'know much knowledge about this field so that can teach students well',
            "/"
        )

        let pid40 = professor40._id.toString();
        let review40 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid40, review40, 4.7);
        }
        

    //Business Intelligence and Analytics 8条

        let professor41 = await professor.createProfessor(
            'Kathryn Abel',
            "Business Intelligence and Analytics",
            'The professor is hard working and expects you to work hard as well.',
            "/"
        )
        
        let pid41 = professor41._id.toString();
        let review41 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid41, review41, 4.2);
        }
        
        let professor42 = await professor.createProfessor(
            'Haoran Chen',
            "Business Intelligence and Analytics",
            'know much knowledge about this field so that can teach students well',
            "/"
        )
        
        let pid42 = professor42._id.toString();
        let review42 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid42, review42, 3.2);
        }
        
        let professor43 = await professor.createProfessor(
            'Zhen Chen',
            "Business Intelligence and Analytics",
            'Without the assignments that he gives out through the course, I do not think I would have done as well as I should have. ',
            "/"
        )
        
        let pid43 = professor43._id.toString();
        let review43 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid43, review43, 3.3);
        }
        
        let professor44 = await professor.createProfessor(
            'Pinar Akcora',
            "Business Intelligence and Analytics",
            'Great professor. He does a good job of helping you to understand the material. ',
            "/"
        )
        
        let pid44 = professor44._id.toString();
        let review44 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid44, review44, 4.2);
        }
        
        let professor45 = await professor.createProfessor(
            'Jake Albrecht',
            "Business Intelligence and Analytics",
            'horrible professor.',
            "/"
        )
        
        let pid45 = professor45._id.toString();
        let review45 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid45, review45, 3.4);
        }
        
        let professor46 = await professor.createProfessor(
            'Joseph Allen',
            "Business Intelligence and Analytics",
            'He cares about student, and he grade all the homework',
            "/"
        )
        
        let pid46 = professor46._id.toString();
        let review46 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid46, review46, 4.2);
        }
        
        /*
        let professor47 = await professor.createProfessor(
            'Kathryn Abel',
            "Business Intelligence and Analytics",
            ' With some prior knowledge of ML as well a little work you can get through with good grades.',
            "/"
        )
        
        let pid47 = professor47._id.toString();
        let review47 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid47, review47, 3.2);
        }
        */
        
        let professor48 = await professor.createProfessor(
            'Allen Parker',
            "Business Intelligence and Analytics",
            'teach much useful things about analytics',
            "/"
        )
        
        let pid48 = professor48._id.toString();
        let review48 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid48, review48, 4.2);
        }
        
        let professor49 = await professor.createProfessor(
            'Kathryn Mike',
            "Business Intelligence and Analytics",
            'assignment is vry useful',
            "/"
        )
        
        let pid49 = professor49._id.toString();
        let review49 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid49, review49, 4.1);
        }
        
    //Finance 5条
        
        let professor50 = await professor.createProfessor(
            'Vishaal Abhinav',
            "Finance",
            'teach you how to be good in finance',
            "/"
        )
        
        let pid50 = professor50._id.toString();
        let review50 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid50, review50, 3.3);
        }
        
        let professor51 = await professor.createProfessor(
            'Homasadat Deilamy',
            "Finance",
            'give very clear and basic introduction',
            "/"
        )
        
        let pid51 = professor51._id.toString();
        let review51 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid51, review51, 4.2);
        }
        
        let professor52 = await professor.createProfessor(
            'Cindy Chin',
            "Finance",
            'not too much assignment',
            "/"
        )
        
        let pid52 = professor52._id.toString();
        let review52 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid52, review52, 3.7);
        }
        
        let professor53 = await professor.createProfessor(
            'Steven Czacho',
            "Finance",
            'give very good grade and professor is very good',
            "/"
        )
        
        let pid53 = professor53._id.toString();
        let review53 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid53, review53, 2.6);
        }
        
        let professor54 = await professor.createProfessor(
            'Andrew Gonzalez',
            "Finance",
            'He really give useful knowledge',
            "/"
        )
        
        let pid54 = professor54._id.toString();
        let review54 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid54, review54, 3.6);
        }
        

    //Physics & Engineering Physic 6条
        /*        
        let professor55 = await professor.createProfessor(
            'Andrew Gonzalez',
            "Physics & Engineering Physic",
            'He really a good professor',
            "/"
        )
        
        let pid55 = professor55._id.toString();
        let review55 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid55, review55, 4.6);
        }
        */
        
        let professor57 = await professor.createProfessor(
            'Nishika Jain',
            "Physics & Engineering Physic",
            'The professor is hard working and expects you to work hard as well. ',
            "/"
        )
        
        let pid57 = professor57._id.toString();
        let review57 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid57, review57, 3.3);
        }
        
        let professor58 = await professor.createProfessor(
            'Joshua Kelle',
            "Physics & Engineering Physic",
            'Assignments are challenging and hard.',
            "/"
        )
        
        let pid58 = professor58._id.toString();
        let review58 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid58, review58, 3.5);
        }
        
        


    //Chemistry 4条
            
        let professor61 = await professor.createProfessor(
            'Bamini Ketheesan',
            "Chemistry",
            'All the other comments you read are crap',
            "/"
        )
        
        let pid61 = professor61._id.toString();
        let review61 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid61, review61, 3.6);
        }
        
        let professor62 = await professor.createProfessor(
            'Kunal Kumar',
            "Chemistry",
            'communicate the concepts clearly, which is huge',
            "/"
        )
        
        let pid62 = professor62._id.toString();
        let review62 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid62, review62, 2.6);
        }
        
        let professor63 = await professor.createProfessor(
            'Sharon Landsbergis',
            "Chemistry",
            'this professor is an excellent teacher',
            "/"
        )

        let pid63 = professor63._id.toString();
        let review63 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid63, review63, 3.3);
        }
        
        let professor64 = await professor.createProfessor(
            'Adrienne Larmet',
            "Chemistry",
            'Hard working professor, willing to help. ',
            "/"
        )
        
        let pid64 = professor64._id.toString();
        let review64 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid64, review64, 4.6);
        }
        

    //Materials Engineering 5条

        let professor68 = await professor.createProfessor(
            'Louis Mayery',
            "Materials Engineering",
            ' He is a great teacher, and makes the material very easy to understand.  ',
            "/"
        )
        
        let pid68 = professor68._id.toString();
        let review68 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid68, review68, 3.8);
        }
        
    //Civil Engineering 2条
        

        let professor70 = await professor.createProfessor(
            'Louis Mayor',
            "Civil Engineering",
            ' Excellent professor. Really knows his stuff. Does not use textbook.  ',
            "/"
        )
        
        let pid70 = professor70._id.toString();
        let review70 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid70, review70, 4.7);
        }
        
        let professor71 = await professor.createProfessor(
            'Louis Maya',
            "Civil Engineering",
            'Excellent prof. who is very knowledgeable but explains concepts clearly.',
            "/"
        )
        
        let pid71 = professor71._id.toString();
        let review71 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid71, review71, 4.4);
        }
        
    //Environmental Engineering 3
        
        let professor72 = await professor.createProfessor(
            'Louis Maye',
            "Civil Engineering",
            'Excellent prof. who is very knowledgeable but explains concepts clearly.',
            "/"
        )
        
        let pid72 = professor72._id.toString();
        let review72 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid72, review72, 4.4);
        }
        
        let professor73 = await professor.createProfessor(
            'Louis Mayer',
            "Civil Engineering",
            'e is a great guy and youll learn alot.',
            "/"
        )
        
        let pid73 = professor73._id.toString();
        let review73 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid73, review73, 4.4);
        }

        await professor.updateAllImage();
        /*
        let professor74 = await professor.createProfessor(
            'Louis Mayer',
            "Civil Engineering",
            'Good professor.',
            "/"
        )
        
        let pid74 = professor74._id.toString();
        let review74 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid74, review74, 4.4);
        }
        
        let professor1 = await professor.createProfessor(
            'HanTian',
            "Computer Science",
            'All of the ML profs at Stevens know what they re talking about',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor1._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 5);
        }
        
            
        let professor2 = await professor.createProfessor(
            'Edward Amoroso',
            "Computer Science",
            'He teaches with a very fun and laid back style. He only does notes on the board. You must attend all classes and take very good notes in detail.  His midterm is critical to do good and based on the notes. There is a final project presentation too.  It is not a demanding class but his grading criteria is random and does not guarantee A.',
            "/"
        )
        
        let pid2 = professor2._id.toString();
        let review2 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid2, review2, 4.8);
        }
        
        
        let professor3 = await professor.createProfessor(
            'Eduardo Bonelli',
            "Computer Science",
            'Very caring professor who obviously knows the subject very well. He can go a bit fast,but if you ask him to re-explain things he will and it s generally worth it. You should definitely pay attention in class,because while the work is tough if you pay attention and participate you ll be fine. You should also attend class because of weekly quizzes.',
            "/"
        )
        let pid3 = professor3._id.toString();
        let review3 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid3, review3, 4.2);
        }
        
        let professor4 = await professor.createProfessor(
            'Dominic Duggan',
            "Computer Science",
            'You actually will learn a lot in his class, and Prof. Duggan is a good teacher. But its simply not worth it to take this class! ',
            "/"
        )
        
        let pid4 = professor4._id.toString();
        let review4 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid4, review4, 2);
        }
        
            
        let professor5 = await professor.createProfessor(
            'Enrique Dunn',
            "Computer Science",
            'Very Solid professor. The concepts covered were interesting, but it can be hard to pay attention over zoom.',
            "/"
        )
        
        let pid5 = professor5._id.toString();
        let review5 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid5, review5, 3.3);
        }
        
            
        let professor6 = await professor.createProfessor(
            'Igor Faynberg',
            "Computer Science",
            'Professor Igor is really helpful and is always accessible outside the class. If you work on the given assignments and ask him questions it is an easy A.',
            "/"
        )
        
        let pid6= professor6._id.toString();
        let review6 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid6, review6, 3.8);
        }
        
            
        let professor7 = await professor.createProfessor(
            'Shudong Hao',
            "Computer Science",
            'He s honestly an awesome professor! All you needed to do was either pay attention during lectures or watch the lecture recordings and take notes. He goes out of his way to connect with students and provide help when we ask for it. ',
            "/"
        )
        
        let pid7 = professor7._id.toString();
        let review7= 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid7, review7, 3.6);
        }
        
            
        let professor8 = await professor.createProfessor(
            'Samuel Kim',
            "Computer Science",
            'Great Professor .Very Knowledgeable and amazingly explains the concepts.',
            "/"
        )
        
        let pid8 = professor8._id.toString();
        let review8 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid8, review8, 3.6);
        }
        
        let professor9 = await professor.createProfessor(
            'Samantha Kleinberg',
            "Computer Science",
            'Computer science class but using a computer is forbidden in the class. She does not have any sympathy for students.',
            "/"
        )
        let pid9 = professor9._id.toString();
        let review9 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid9, review9, 1.5);
        }
        
            
        let professor10 = await professor.createProfessor(
            'Eric Koskinen',
            "Computer Science",
            'Professor Koskinen is good at teaching the material but gets some points off for there being a general disconnect between homeworks and lecture material.',
            "/"
        )
        
        let pid10 = professor10._id.toString();
        let review10 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid10, review10, 4);
        }
        
            
        let professor11 = await professor.createProfessor(
            'Xueqing Liu',
            "Computer Science",
            'This professor gets some unwarranted criticism tbh. Yes the class is hard, and the lectures can be a little hard to stay engaged in.',
            "/"
        )
        
        let pid11 = professor11._id.toString();
        let review11 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid11, review11, 1.5);
        }
        
        let professor12 = await professor.createProfessor(
            'Philippe Meunie',
            "Computer Science",
            'Professor Meunier was an absolutely wonderful professor to work with.  The pacing of his class is great and his lectures were simple and easy to understand.',
            "/"
        )
        
        let pid12 = professor12._id.toString();
        let review12 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid12, review12, 4.8);
        }
        
        let professor13 = await professor.createProfessor(
            'Philippos Mordohai',
            "Computer Science",
            'Great professor. He does a good job of helping you to understand the material.',
            "/"
        )
        
        let pid13 = professor13._id.toString();
        let review13 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid13, review13, 3.2);
        }
        
        let professor14 = await professor.createProfessor(
            'Antonio Nicolos',
            "Computer Science",
            'Professor Nicolosi is extremely unorganized. Grading structure/syllabus was not provided until right before final exam. ',
            "/"
        )
        
        let pid14 = professor14._id.toString();
        let review14 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid14, review14, 2);
        }
        
        let professor15 = await professor.createProfessor(
            'Yue Nin',
            "Computer Science",
            'Not a terrible professor, but the assignments are hard. ',
            "/"
        )
        
        let pid15 = professor15._id.toString();
        let review15 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid15, review15, 2.3);
        }
        
        



    //Biomedical Engineering 9条
        
        let professor16 = await professor.createProfessor(
            'Guodong Wang',
            "Biomedical Engineering",
            'Good professor, the assignments are usefull. ',
            "/"
        )
        
        let pid16 = professor15._id.toString();
        let review16 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid16, review16, 3);
        }
        
        let professor17 = await professor.createProfessor(
            'Alfred Ascione',
            "Biomedical Engineering",
            'Very kind professor and give you good lecture. ',
            "/"
        )
        
        let pid17 = professor17._id.toString();
        let review17 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid17, review17, 4.5);
        }
        
        
        let professor18 = await professor.createProfessor(
            'Helen Blank',
            "Biomedical Engineering",
            'professor is very good, she is a good people. ',
            "/"
        )
        
        let pid18 = professor18._id.toString();
        let review18 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid18, review18, 3.3);
        }
        
        let professor19 = await professor.createProfessor(
            'Valerie Franco',
            "Biomedical Engineering",
            'Not a bad professor',
            "/"
        )
        
        let pid19 = professor19._id.toString();
        let review19 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid19, review19, 4.3);
        }
        
        let professor20 = await professor.createProfessor(
            'Yu Gan',
            "Biomedical Engineering",
            'All you needed to do was either pay attention during lectures or watch the lecture recordings and take notes, but the assignments are hard. ',
            "/"
        )
        
        let pid20 = professor20._id.toString();
        let review20 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid20, review20, 3.7);
        }
        
        let professor21 = await professor.createProfessor(
            'Jia Di',
            "Biomedical Engineering",
            'You will learn something valuable from this man. ',
            "/"
        )
        
        let pid21 = professor21._id.toString();
        let review21 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid21, review21, 2.9);
        }
        
        let professor22 = await professor.createProfessor(
            'Carrie Perlman',
            "Biomedical Engineering",
            'professor is good at lecture but score giving is low ',
            "/"
        )
        
        let pid22 = professor22._id.toString();
        let review22 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid22, review22, 4.2);
        }
        
        let professor23 = await professor.createProfessor(
            'Alex Sniderman',
            "Biomedical Engineering",
            'He really is kind to help students ',
            "/"
        )
        
        let pid23 = professor23._id.toString();
        let review23 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid23, review23, 4.6);
        }
        
        let professor24 = await professor.createProfessor(
            'Becky Tucci',
            "Biomedical Engineering",
            'Amazing at teaching style. you can learn alot in this class. ',
            "/"
        )
        
        let pid24 = professor24._id.toString();
        let review24 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid24, review24, 2.3);
        }
        

    //Mechanical Engineering 5条
        
        let professor25 = await professor.createProfessor(
            'Elsayed Aziz',
            "Mechanical Engineering",
            'This guy is really not a great teacher. Reads directly off slides, doesn t relay the material across to the students effectively at all.',
            "/"
        )

        let pid25 = professor25._id.toString();
        let review25 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid25, review25, 3.5);
        }
        
        let professor26 = await professor.createProfessor(
            'Chang-Hwan Cho',
            "Mechanical Engineering",
            'A lot of the course is based around consistent homework and groupwork',
            "/"
        )
        
        let pid26 = professor26._id.toString();
        let review26 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid26, review26, 4.3);
        }
        
        let professor27 = await professor.createProfessor(
            'Raymond Chaplin',
            "Mechanical Engineering",
            'He is pretty chill and laid back. The course was not that bad but he was always available to help during group breakout sessions.',
            "/"
        )
        
        let pid27 = professor27._id.toString();
        let review27 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid27, review27, 1.8);
        }
        
        let professor28 = await professor.createProfessor(
            'James Curcio',
            "Mechanical Engineering",
            'Material for this class was mathematically intensive.',
            "/"
        )
        
        let pid28 = professor28._id.toString();
        let review28 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid28, review28, 2.7);
        }
        
        let professor = await professor.createProfessor(
            'Sven Esche',
            "Mechanical Engineering",
            'This guy is really not a great teacher. Reads directly off slides, doesn t relay the material across to the students effectively at all.',
            "/"
        )
        
        let pid75 = professor75._id.toString();
        let review75 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid75, review75, 4.4);
        }
        

    //Electrical Engineering 8条
        
        let professor29 = await professor.createProfessor(
            'Yanghyo Kim',
            "Electrical Engineering",
            'each assignment takes at least a week to complete.',
            "/"
        )
        
        let pid29 = professor29._id.toString();
        let review29 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid29, review29, 2.4);
        }
        
        let professor30 = await professor.createProfessor(
            'Yi Gu',
            "Electrical Engineering",
            'TThe material and class quality is comparable to some of the ivy leagues .',
            "/"
        )
        
        let pid30 = professor30._id.toString();
        let review30 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid30, review30, 4.4);
        }
        
        let professor31 = await professor.createProfessor(
            'Dov Kruger',
            "Electrical Engineering",
            'Most of her class is reading her slides.',
            "/"
        )
        
        let pid31 = professor31._id.toString();
        let review31 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid31, review31, 3.4);
        }
        
        let professor32 = await professor.createProfessor(
            'Hang Liu',
            "Electrical Engineering",
            'This guy is really not bad.',
            "/"
        )
        
        let pid32 = professor32._id.toString();
        let review32 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid32, review32, 2.7);
        }
        
        let professor33 = await professor.createProfessor(
            'Lu Liu',
            "Electrical Engineering",
            'The professor is hard working and expects you to work hard as well.',
            "/"
        )

        let pid33 = professor33._id.toString();
        let review33 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid33, review33, 3.6);
        }
        
        let professor34 = await professor.createProfessor(
            'Weipeng Liu',
            "Electrical Engineering",
            'Assignments are challenging and hard.',
            "/"
        )
        
        let pid34 = professor34._id.toString();
        let review34 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid34, review34, 4.2);
        }
        
        let professor35 = await professor.createProfessor(
            'Kevin Lu',
            "Electrical Engineering",
            'Not helpful at all. He thinks anyone who asks a question is an idiot. Does not teach you anything. Homework is challenging.',
            "/"
        )
        
        let pid35 = professor35._id.toString();
        let review35 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid35, review35, 3.4);
        }
        
        let professor36 = await professor.createProfessor(
            'Sven Esche',
            "Electrical Engineering",
            'is a fantastic professor, as long as you ask questions.',
            "/"
        )
        
        let pid36 = professor36._id.toString();
        let review36 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid36, review36, 4.3);
        }
        
    //Management 5条

        let professor37 = await professor.createProfessor(
            'Eileen Black',
            "Management",
            'Very known in Management fiel.',
            "/"
        )
        
        let pid37 = professor37._id.toString();
        let review37 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid37, review37, 3.3);
        }
        

        let professor38 = await professor.createProfessor(
            'Jack Lu',
            "Management",
            'interesting words in the lecture.',
            "/"
        )
        
        let pid38 = professor38._id.toString();
        let review38 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid38, review38, 3.7);
        }
        
        let professor39 = await professor.createProfessor(
            'Cixin Liu',
            "Management",
            'he makes the hard course easy to learn.',
            "/"
        )
        
        let pid39 = professor39._id.toString();
        let review39 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid39, review39, 3.5);
        }
        
        let professor40 = await professor.createProfessor(
            'Katherine Bryndza',
            "Management",
            'know much knowledge about this field so that can teach students well',
            "/"
        )

        let pid40 = professor40._id.toString();
        let review40 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid40, review40, 4.7);
        }
        //Business Intelligence and Analytics 8条

        let professor41 = await professor.createProfessor(
            'Kathryn Abel',
            "Business Intelligence and Analytics",
            'The professor is hard working and expects you to work hard as well.',
            "/"
        )

        let pid41 = professor41._id.toString();
        let review41 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid41, review41, 4.2);
        }
        
        let professor42 = await professor.createProfessor(
            'Haoran Chen',
            "Business Intelligence and Analytics",
            'know much knowledge about this field so that can teach students well',
            "/"
        )
        
        let pid42 = professor42._id.toString();
        let review42 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid42, review42, 3.2);
        }
        
        let professor43 = await professor.createProfessor(
            'Zhen Chen',
            "Business Intelligence and Analytics",
            'Without the assignments that he gives out through the course, I do not think I would have done as well as I should have. ',
            "/"
        )
        
        let pid43 = professor43._id.toString();
        let review43 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid43, review43, 3.3);
        }
        
        let professor44 = await professor.createProfessor(
            'Pinar Akcora',
            "Business Intelligence and Analytics",
            'Great professor. He does a good job of helping you to understand the material. ',
            "/"
        )
        
        let pid44 = professor44._id.toString();
        let review44 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid44, review44, 4.2);
        }
        
        let professor45 = await professor.createProfessor(
            'Jake Albrecht',
            "Business Intelligence and Analytics",
            'horrible professor.',
            "/"
        )
        
        let pid45 = professor45._id.toString();
        let review45 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid45, review45, 3.4);
        }
        
        let professor46 = await professor.createProfessor(
            'Joseph Allen',
            "Business Intelligence and Analytics",
            'He cares about student, and he grade all the homework',
            "/"
        )
        
        let pid46 = professor46._id.toString();
        let review46 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid46, review46, 4.2);
        }
        
        let professor47 = await professor.createProfessor(
            'Kathryn Abel',
            "Business Intelligence and Analytics",
            ' With some prior knowledge of ML as well a little work you can get through with good grades.',
            "/"
        )
        
        let pid47 = professor47._id.toString();
        let review47 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid47, review47, 3.2);
        }
        
        let professor48 = await professor.createProfessor(
            'Allen Parker',
            "Business Intelligence and Analytics",
            'teach much useful things about analytics',
            "/"
        )
        
        let pid48 = professor48._id.toString();
        let review48 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid48, review48, 4.2);
        }
        
        let professor49 = await professor.createProfessor(
            'Kathryn Mike',
            "Business Intelligence and Analytics",
            'assignment is vry useful',
            "/"
        )
        
        let pid49 = professor49._id.toString();
        let review49 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid49, review49, 4.1);
        }
        //Finance 5条
        
        let professor50 = await professor.createProfessor(
            'Vishaal Abhinav',
            "Finance",
            'teach you how to be good in finance',
            "/"
        )
        
        let pid50 = professor50._id.toString();
        let review50 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid50, review50, 3.3);
        }
        
        let professor51 = await professor.createProfessor(
            'Homasadat Deilamy',
            "Finance",
            'give very clear and basic introduction',
            "/"
        )
        
        let pid51 = professor51._id.toString();
        let review51 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid51, review51, 4.2);
        }
        
        let professor52 = await professor.createProfessor(
            'Cindy Chin',
            "Finance",
            'not too much assignment',
            "/"
        )
        
        let pid52 = professor52._id.toString();
        let review52 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid52, review52, 3.7);
        }
        
        let professor53 = await professor.createProfessor(
            'Steven Czacho',
            "Finance",
            'give very good grade and professor is very good',
            "/"
        )
        
        let pid53 = professor53._id.toString();
        let review53 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid53, review53, 2.6);
        }
        
        let professor54 = await professor.createProfessor(
            'Andrew Gonzalez',
            "Finance",
            'He really give useful knowledge',
            "/"
        )
        
        let pid54 = professor54._id.toString();
        let review54 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid54, review54, 3.6);
        }
        

    //Physics & Engineering Physic 6条
                
        let professor55 = await professor.createProfessor(
            'Andrew Gonzalez',
            "Physics & Engineering Physic",
            'He really a good professor',
            "/"
        )
        
        let pid55 = professor55._id.toString();
        let review55 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid55, review55, 4.6);
        }
        
        let professor56 = await professor.createProfessor(
            'Homasadat Deilamy',
            "Physics & Engineering Physic",
            'The professor is very good at this fied',
            "/"
        )
        
        let pid56 = professor56._id.toString();
        let review56 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid56, review56, 3.2);
        }
        
        let professor57 = await professor.createProfessor(
            'Nishika Jain',
            "Physics & Engineering Physic",
            'The professor is hard working and expects you to work hard as well. ',
            "/"
        )
        
        let pid57 = professor57._id.toString();
        let review57 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid57, review57, 3.3);
        }
        
        let professor58 = await professor.createProfessor(
            'Joshua Kelle',
            "Physics & Engineering Physic",
            'Assignments are challenging and hard.',
            "/"
        )
        
        let pid58 = professor58._id.toString();
        let review58 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid58, review58, 3.5);
        }
        
        let professor59 = await professor.createProfessor(
            'Homasadat Deilamy',
            "Physics & Engineering Physic",
            'this professor is kind',
            "/"
        )
        
        let pid59 = professor59._id.toString();
        let review59 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid59, review59, 3.2);
        }
        
        let professor60 = await professor.createProfessor(
            'Homasadat Deilamy',
            "Physics & Engineering Physic",
            'this professor is an excellent teacher',
            "/"
        )
        
        let pid60 = professor60._id.toString();
        let review60 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid60, review60, 4.6);
        }
        
        


    //Chemistry 4条
            
        let professor61 = await professor.createProfessor(
            'Bamini Ketheesan',
            "Chemistry",
            'All the other comments you read are crap',
            "/"
        )
        
        let pid61 = professor61._id.toString();
        let review61 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid61, review61, 3.6);
        }
        
        let professor62 = await professor.createProfessor(
            'Kunal Kumar',
            "Chemistry",
            'communicate the concepts clearly, which is huge',
            "/"
        )
        
        let pid62 = professor62._id.toString();
        let review62 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid62, review62, 2.6);
        }
        
        let professor63 = await professor.createProfessor(
            'Sharon Landsbergis',
            "Chemistry",
            'this professor is an excellent teacher',
            "/"
        )

        let pid63 = professor63._id.toString();
        let review63 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid63, review63, 3.3);
        }
        
        let professor64 = await professor.createProfessor(
            'Adrienne Larmet',
            "Chemistry",
            'Hard working professor, willing to help. ',
            "/"
        )
        
        let pid64 = professor64._id.toString();
        let review64 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid64, review64, 4.6);
        }
        

    //Materials Engineering 5条
            
        let professor65 = await professor.createProfessor(
            'Louis Mayer',
            "Materials Engineering",
            ' learned a lot. Always made the lectures interesting.  ',
            "/"
        )
        
        let pid65 = professor65._id.toString();
        let review65 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid65, review65, 2.8);
        }
        
        let professor66 = await professor.createProfessor(
            'Louis Mayer',
            "Materials Engineering",
            ' learned a lot. Always made the lectures interesting.  ',
            "/"
        )
        
        let pid66 = professor66._id.toString();
        let review66 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid66, review66, 2.8);
        }

        let professor67 = await professor.createProfessor(
            'Louis Mayer',
            "Materials Engineering",
            ' He does make the material much harder than it has to be, but he does very good reviews before the tests and it is usually the same problems that will be on the test.  ',
            "/"
        )
        
        let pid67 = professor67._id.toString();
        let review67 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid67, review67, 2.8);
        }

        let professor68 = await professor.createProfessor(
            'Louis Mayer',
            "Materials Engineering",
            ' He is a great teacher, and makes the material very easy to understand.  ',
            "/"
        )
        
        let pid68 = professor68._id.toString();
        let review68 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid68, review68, 3.8);
        }
        
        let professor69 = await professor.createProfessor(
            'Louis Mayer',
            "Materials Engineering",
            '  His lectures are not mandatory, however when you go it is always fun because he adds real life stories into the lecture which are really interesting.  ',
            "/"
        )

        let pid69 = professor69._id.toString();
        let review69 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid69, review69, 4.8);
        }
        //Civil Engineering 2条

        let professor70 = await professor.createProfessor(
            'Louis Mayer',
            "Civil Engineering",
            ' Excellent professor. Really knows his stuff. Does not use textbook.  ',
            "/"
        )
        
        let pid70 = professor70._id.toString();
        let review70 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid70, review70, 4.7);
        }
        
        let professor71 = await professor.createProfessor(
            'Louis Mayer',
            "Civil Engineering",
            'Excellent prof. who is very knowledgeable but explains concepts clearly.',
            "/"
        )
        
        let pid71 = professor71._id.toString();
        let review71 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid71, review71, 4.4);
        }
        
        //Environmental Engineering 3
        
        let professor72 = await professor.createProfessor(
            'Louis Mayer',
            "Civil Engineering",
            'Excellent prof. who is very knowledgeable but explains concepts clearly.',
            "/"
        )
        
        let pid72 = professor72._id.toString();
        let review72 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid72, review72, 4.4);
        }
        
        let professor73 = await professor.createProfessor(
            'Louis Mayer',
            "Civil Engineering",
            'e is a great guy and youll learn alot.',
            "/"
        )
        
        let pid73 = professor73._id.toString();
        let review73 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid73, review73, 4.4);
        }
        
        let professor74 = await professor.createProfessor(
            'Louis Mayer',
            "Civil Engineering",
            'Good professor.',
            "/"
        )
        
        let pid74 = professor74._id.toString();
        let review74 = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid74, review74, 4.4);
        }
        */
        
        /*
        let professor1 = await professor.createProfessor(
            'Eric Koskinen',
            "Computer Science",
            'My research yields techniques that improve the way programmers develop reliable and efficient concurrent software for multi-core and distributed systems.',
            "/"
        )
        let uid = user1.insertedId.toString();
        let pid = professor1._id.toString();
        let review = 'nice!';
        for (let i = 0; i < 3; i++) {
            await professor.addProfReview(uid, pid, review, 5);
        }
        */
    
    } catch (e) {
        console.log(e);
    }

    await connection.closeConnection();
    console.log('Done!');
};
main();