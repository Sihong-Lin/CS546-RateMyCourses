const user = require('../data/user');
const course = require('../data/course');
const professor = require('../data/professor');
const connection = require('../config/mongoConnection');
const { ObjectId } = require('mongodb');

const main = async () => {
    const db = await connection.connectToDb();
    await db.dropDatabase();

    let admin = undefined
    try {
        let createUser = await user.createAdmin("admin", "admin@gmail.com", "Computer Science", "https://www.mantruckandbus.com/fileadmin/_processed_/2/b/csm_19-09_startseite_interviewkachel_324_224_3_726a3e77d5.jpg", "123456");
        admin = createUser.insertedId;
    } catch (e) {
        console.log(e);
    } 
    
    let user1 = undefined
    try {
        let createUser = await user.createUser("James", "James@gmail.com", "Biomedical Engineering", "https://i.insider.com/61f14a0ce996470011907119?width=600&format=jpeg&auto=webp", "123456");
        user1 = createUser.insertedId;
    } catch (e) {
        console.log(e);
    } 

    let user2 = undefined
    try {
        let createUser = await user.createUser("Robert", "Robert@gmail.com", "Computer Science", "https://ysm-res.cloudinary.com/image/upload/ar_1:1,c_fill,dpr_3.0,f_auto,g_faces:auto,q_auto:eco,w_200/v1/yms/prod/36509713-affd-49af-b726-41403de634b1", "123456");
        user2 = createUser.insertedId;
    } catch (e) {
        console.log(e);
    }

    let user3 = undefined
    try {
        let createUser = await user.createUser("John3", "John@gmail.com", "Biomedical Engineering", "https://www.cancer.net/sites/cancer.net/files/styles/blog_media/public/markham_merry-jennifer_headshot.jpg.png?itok=GnzqyjcQ", "123456");
        user3 = createUser.insertedId;
    } catch (e) {
        console.log(e);
    }

    let user4 = undefined
    try {
        let createUser = await user.createUser("Michael", "Michael@gmail.com", "Environmental Engineering", "https://images.ctfassets.net/yixw23k2v6vo/3ioQoj7O34KGny34uI2FMX/249c9055a0f5713d2e3027ac96db8c2d/LauraCason.jpg", "123456");
        user4 = createUser.insertedId;
    } catch (e) {
        console.log(e);
    } 

    let user5 = undefined
    try {
        let createUser = await user.createUser("David", "David@gmail.com", "Computer Science", "https://www.syracuse.com/resizer/UNYVpgRhA3z5lnxmRswrgWkEyWY=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/IOW75ADP3FCWHHKHM6WL67TQTQ.jpeg", "123456");
        user5 = createUser.insertedId;
    } catch (e) {
        console.log(e);
    }

    let user6 = undefined
    try {
        let createUser = await user.createUser("William", "William@gmail.com", "Environmental Engineering", "https://i.insider.com/5cf1200a11e2052506753045?width=700", "123456");
        user6 = createUser.insertedId;
    } catch (e) {
        console.log(e);
    }

    let user7 = undefined
    try {
        let createUser = await user.createUser("Richard", "Richard@gmail.com", "Mechanical Engineering", "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2022%2F03%2F30%2FWill-Smith-Oscars.jpg", "123456");
        user7 = createUser.insertedId;
    } catch (e) {
        console.log(e);
    } 

    let user8 = undefined
    try {
        let createUser = await user.createUser("Joseph", "Joseph@gmail.com", "Computer Science", "https://www.london-fire.gov.uk/media/4613/london-fire-brigade-tim-powel-director-of-people.jpg", "123456");
        user8 = createUser.insertedId;
    } catch (e) {
        console.log(e);
    }

    let user9 = undefined
    try {
        let createUser = await user.createUser("Thomas", "Thomas@gmail.com", "Environmental Engineering", "https://www.okchicas.com/wp-content/uploads/2021/11/paul-rudd-es-el-hombre-mas-sexy-del-2021-por-revista-people-2.jpg", "123456");
        user9 = createUser.insertedId;
    } catch (e) {
        console.log(e);
    }

    let user10 = undefined
    try {
        let createUser = await user.createUser("Charles", "Charles@gmail.com", "Mechanical Engineering", "https://static.bangkokpost.com/media/content/dcx/2020/08/26/3730727_700.jpg", "123456");
        user10 = createUser.insertedId;
    } catch (e) {
        console.log(e);
    } 

    let user11 = undefined
    try {
        let createUser = await user.createUser("Christopher", "Christopher@gmail.com", "Computer Science", "https://us.123rf.com/450wm/bonninstudio/bonninstudio1306/bonninstudio130600006/20048138-portrait-of-a-normal-young-man.jpg?ver=6", "123456");
        user11 = createUser.insertedId;
    } catch (e) {
        console.log(e);
    }

    let user12 = undefined
    try {
        let createUser = await user.createUser("Daniel", "Daniel@gmail.com", "Computer Science", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2RHj5aBArvQQQtkpqkJU3MzDrr2ji2rg00w&usqp=CAU", "123456");
        user12 = createUser.insertedId;
    } catch (e) {
        console.log(e);
    }

    let user13 = undefined
    try {
        let createUser = await user.createUser("Matthew", "Matthew@gmail.com", "Mechanical Engineering", "https://149366112.v2.pressablecdn.com/wp-content/uploads/2015/01/leonardo-e1421876802330.jpg", "123456");
        user13 = createUser.insertedId;
    } catch (e) {
        console.log(e);
    } 

    let user14 = undefined
    try {
        let createUser = await user.createUser("Anthony", "Anthony@gmail.com", "Computer Science", "https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg?quality=75&width=982&height=726&auto=webp", "123456");
        user14 = createUser.insertedId;
    } catch (e) {
        console.log(e);
    }

    let user15 = undefined
    try {
        let createUser = await user.createUser("Mark", "Mark@gmail.com", "Mechanical Engineering", "https://virginiacancerspecialists.com/wp-content/uploads/2021/06/Ann-Favret-Bio-photo-2-2021-scaled-e1623768737328-400x400.jpg", "123456");
        user15 = createUser.insertedId;
    } catch (e) {
        console.log(e);
    }



    
    let course1 = undefined;
    try {
        let createCourse = await course.createCourse(
            'CS 546 Web Programming', // courseName
            'Graduate', // academicLevel
            'Computer Science Program', // courseOwner
            'Core', // type
            3, // units
            'This course will provide students with a first strong approach of internet programming. It will give the basic knowledge on how the Internet works and how to create advanced web sites by the use of script languages, after learning the basics of HTML. The course will teach the students how to create a complex global site through the creation of individual working modules, giving them the skills required in any business such as proper team work and coordination between groups.', // description
            'Lecture', // instructionalFormats
            'https://web.stevens.edu/academic_files/courses/syllabus/CS546syl.pdf', // syllabus
            'https://github.com/graffixnyc/CS-546', // courseware
            'https://d1ymz67w5raq8g.cloudfront.net/Pictures/1024x536/P/web/n/z/b/onlinecourses_shutterstock_490891228_2000px_728945.jpg' // picture
        )
        course1 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course2 = undefined;
    try {
        let createCourse = await course.createCourse(
            'CS 570 Introduction to Programming, Data Structures, and Algorithms', // courseName
            'Graduate', // academicLevel
            'Computer Science Program', // courseOwner
            'Elective', // type
            3, // units
            'Introduction to programming, data structures, and algorithm design, using one or more modern imperative language9s), as chosen by the instructor. Students will learn: basic programming constructs, data types, advanced and/or balanced search trees; hashing; asymptotic complexity analysis; standard algorithm design techniques; graph algorithms; sort algorithms; and other “classic’ algorithms that serve as examples of design techniques. Students will be given regular programming assignments. Pre-req: Undergraduate object oriented programming or CS 501.', // description
            'Lecture', // instructionalFormats
            'https://web.stevens.edu/academic_files/courses/syllabus/CS570syl.pdf', // syllabus
            'https://web.stevens.edu/academic_files/courses/outcome/CS570.pdf', // courseware（复制课名随便找点相关网址粘上去）
            'https://www.smartpassiveincome.com/wp-content/uploads/2020/04/How-to-Create-an-Online-Course.png' // picture
        )
        course2 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course3 = undefined;
    try {
        let createCourse = await course.createCourse(
            'CS 510 Principles of Programming Languages', // courseName
            'Graduate', // academicLevel
            'Computer Science Program', // courseOwner
            'Elective', // type
            3, // units
            'An introduction to programming language design and implementation, with an emphasis on the abstractions provided by programming languages. Assignments involve problem-solving issues in principles of programming languages such as Scheme and ML. Recursive types and recursive functions; structural induction; abstract data types; abstract syntax; implementing languages with interpreters; static vs. dynamic scoping, closures, and state; exceptions; types: type-checking, type inference, static vs. dynamic typing; object-oriented languages: classes and interfaces, inheritance, and subtyping; polymorphism and genericity; and design patterns and the visitor pattern.', // description
            'Lecture', // instructionalFormats
            'https://web.stevens.edu/academic_files/courses/syllabus/CS510syl.pdf', // syllabus
            'https://stevens.smartcatalogiq.com/2021-2022/Academic-Catalog/Courses/CS-Computer-Science/500/CS-510', // courseware（复制课名随便找点相关网址粘上去）
            'https://thevarsity.ca/wp-content/uploads/2018/07/Comment_Course-Selection_Troy-Lawrence-scaled.jpg' // picture
        )
        course3 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course4 = undefined;
    try {
        let createCourse = await course.createCourse(
            'CS 511 Concurrent Programming', // courseName
            'Graduate', // academicLevel
            'Computer Science Program', // courseOwner
            'Elective', // type
            3, // units
            'The study of concurrency as it appears at all levels and in different types of computing systems. Topics include: models of concurrency; languages for expressing concurrency; formal systems for reasoning about concurrency; the challenges of concurrent programming; race conditions; deadlock; livelock and nondeterministic behavior; prototypical synchronization problems, such as readers-writers and dining philosophers; mechanisms for solution of these problems, such as semaphores, monitors, and conditional critical regions; important libraries for concurrent programming; message passing, both synchronous and asynchronous; and applications of multithreaded concurrent programming and parallel algorithms. Substantial programming required. Pre-requisite: Undergraduate courses in Systems Programming or Operating Systems or CS 520 or CS 392.', // description
            'Lecture', // instructionalFormats
            'https://web.stevens.edu/academic_files/courses/syllabus/CS511syl.pdf', // syllabus
            'https://web.stevens.edu/academic_files/courses/outcome/CS511.pdf', // courseware（复制课名随便找点相关网址粘上去）
            'https://prod-discovery.edx-cdn.org/media/course/image/0e575a39-da1e-4e33-bb3b-e96cc6ffc58e-8372a9a276c1.png' // picture
        )
        course4 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }

    let course5 = undefined;
    try {
        let createCourse = await course.createCourse(
            'CS 513 Knowledge Discovery and Data Mining', // courseName
            'Graduate', // academicLevel
            'Computer Science Program', // courseOwner
            'Elective', // type
            3, // units
            'This course introduces fundamental and practical tools, techniques, and algorithms for Knowledge Discovery and Data Mining (KD&DM). It provides a balanced approach between methods and practice. On the methodological side, it covers several techniques for transforming corporate data into business intelligence. These include: online Analytical Processing (OLAP) Systems, Artificial Neural Networks (ANN), Rule-Based Systems (RBS), Fuzzy Logic (FL), Machine Learning (ML), Classification Trees (C4.5 Algorithm), and Classification and Regression Trees (CART Algorithm). To illustrate the practical significance of the various techniques, half of the course is devoted to case studies. The case studies, drawn from real-world applications, demonstrate application of techniques to real-world problems.', // description
            'Lecture', // instructionalFormats
            'https://web.stevens.edu/academic_files/courses/syllabus/CS513syl.pdf', // syllabus
            'https://nalazhong.github.io/2016/06/28/CS513/', // courseware（复制课名随便找点相关网址粘上去）
            'https://www.open.edu/openlearn/pluginfile.php/3277384/tool_ocwmanage/articletext/0/become_a_student_inline.jpg' // picture
        )
        course5 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }




    let course6 = undefined;
    try {
        let createCourse = await course.createCourse(
            'CS 514 Computer Architecture', // courseName
            'Graduate', // academicLevel
            'Computer Science Program', // courseOwner
            'Elective', // type
            3, // units
            'Measures of cost, performance, and speedup; instruction set design; processor design; hard-wired and microprogrammed control; memory hierarchies; pipelining; input/output systems; and additional topics as time permits. The emphasis in this course is on quantitative analysis of design alternatives. Undergraduate courses in Computer Organization and Data Structures and Algorithms, OR (CS 550 and CS 570).', // description
            'Lecture', // instructionalFormats
            'https://moam.info/cs-514-computer-architecture-syllabus_5a33174d1723dd7d03e3735c.html', // syllabus
            'https://web.stevens.edu/academic_files/courses/outcome/CS514.pdf', // courseware
            'https://www.ox.ac.uk/sites/files/oxford/Choosing-an-Oxford-course.jpg' // picture
        )
        course6 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course7 = undefined;
    try {
        let createCourse = await course.createCourse(
            'CS 515 Fundamentals of Computing', // courseName
            'Graduate', // academicLevel
            'Computer Science Program', // courseOwner
            'Elective', // type
            3, // units
            'This is an introduction to computer science with an emphasis on programming, in Python. The topics include: design; algorithmic thinking; recursion; object-oriented programming; and some basics about computer systems: machine language, interpreters, compilers, and data representation. Undergraduates are not allowed to enroll.', // description
            'Lecture', // instructionalFormats
            'https://www.coursehero.com/sitemap/schools/1475-Stevens-Institute-Of-Technology/courses/16574629-CS515/', // syllabus
            'https://stevens.smartcatalogiq.com/en/2021-2022/Academic-Catalog/Courses/CS-Computer-Science/500/CS-515', // courseware
            'https://prod-discovery.edx-cdn.org/media/course/image/156313d6-f892-4b08-9cee-43ea582f4dfb-7b98c686abcc.small.png' // picture
        )
        course7 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course8 = undefined;
    try {
        let createCourse = await course.createCourse(
            'CS 520 Introduction to Operating Systems', // courseName
            'Graduate', // academicLevel
            'Computer Science Program', // courseOwner
            'Elective', // type
            3, // units
            'This course outlines the problems that the operating systems need to solve (e.g., multiprogramming, device- and memory management, file management, etc.) with a sharp focus on security. The course then demonstrates the solutions to these problems in the context of the ever-evolving hardware. The course also introduces the rudimentary concepts of queuing theory and the technique of writing discrete-event simulations as the tool in both the operating systems and complex application design.', // description
            'Lecture', // instructionalFormats
            'https://web.stevens.edu/academic_files/courses/syllabus/CS520syl.pdf', // syllabus
            'https://web.stevens.edu/academic_files/courses/outcome/CS520.pdf', // courseware
            'https://www.alpadia.com/sites/default/files/styles/hero_banner_lg/public/page/featured/adult-school_language-hub_hero-1.jpg?itok=wq1IEtJI' // picture
        )
        course8 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course9 = undefined;
    try {
        let createCourse = await course.createCourse(
            'CS 521 TCP/IP Networking', // courseName
            'Graduate', // academicLevel
            'Computer Science Program', // courseOwner
            'Elective', // type
            3, // units
            'Introduction to IP networking. Examination of all layers of the OSI stack. Detailed examination of the IP, ICMP, UDP, and TCP protocols. Basic concepts of network design: end-to-end principle, routing, encapsulation, flow control, congestion control, and security. Detailed coverage of TCP. Some treatment of important Internet applications and services. Emphasis on network layer and above. Assignments focus on protocols and software.', // description
            'Lecture', // instructionalFormats
            'https://web.stevens.edu/academic_files/courses/syllabus/CS521syl.pdf', // syllabus
            'https://web.stevens.edu/academic_files/courses/outcome/CS521.pdf', // courseware
            'https://s35691.pcdn.co/wp-content/uploads/2015/10/iStock_computer-art.151110.jpg' // picture
        )
        course9 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course10 = undefined;
    try {
        let createCourse = await course.createCourse(
            'CS 522 Mobile Systems and Applications', // courseName
            'Graduate', // academicLevel
            'Computer Science Program', // courseOwner
            'Elective', // type
            3, // units
            'Personal computing is now mobile and cloud-based. Disconnected mobile computing challenges many of the assumptions underlying much of todays distributed systems.  Cloud computing provides a powerful background computing facility for mobile devices, but also raises important issues of trust and privacy.  Many of these issues arise in critical yet sensitive domains such as electronic healthcare delivery.  Mobile computing applications are location-aware or context-aware; the privacy implications of these applications are profound.  Mobile, and increasingly location aware, gaming systems are now one of the largest sectors of the world entertainment industry. The purpose of this course is to review the fundamentals of mobile systems and applications, and how they relate to services in the cloud.  The course will review material from wireless communication, distributed systems, and security and privacy, as they pertain to the systems being studied.  The course will involve programming mobile apps using a popular mobile computing platform, such as Android or iPhone, to get hands-on experience with the concepts being discussed in the class.  Programming experience with Java or C# is required Pre-requisite: Graduate Students -  Undergraduate data structures and algorithms and experience in Java or C# OR CS 590. Undergraduate Students - CS 385.', // description
            'Lecture', // instructionalFormats
            'https://web.stevens.edu/academic_files/courses/syllabus/CS522syl.pdf', // syllabus
            'https://web.stevens.edu/academic_files/courses/outcome/CS522.pdf', // courseware
            'https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2019/08/23163109/Course-after-MBA.png' // picture
        )
        course10 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course11 = undefined;
    try {
        let createCourse = await course.createCourse(
            'CS 526 Enterprise and Cloud Computing', // courseName
            'Graduate', // academicLevel
            'Computer Science Program', // courseOwner
            'Elective', // type
            3, // units
            'This course is an introduction to programming and administration of mainframe computers, which are the backbone of modern enterprise computing. Introduction to z/OS and z/VM; protection and virtualization; total cost of ownership (TCO); conversational Monitoring System (CMS); initial program load (IPL) and launching new virtual machines; writing scripts in REXX; interactive z/OS facilities: TSO/E, ISPF and Unix; Unix system services; JCL and SDSF; transaction management using the Java CICS API; and network programming concepts: virtual LANs, open service adapters, and hipersockets.', // description
            'Lecture', // instructionalFormats
            'https://web.stevens.edu/academic_files/courses/syllabus/CS526syl.pdf', // syllabus
            'https://web.stevens.edu/academic_files/courses/outcome/CS526.pdf', // courseware
            'https://www.iata.org/contentassets/18df1bdff8744f7db607d4ebe9ceb703/tvp-course.jpg?w=330&h=200&mode=crop&scale=both&v=20201201090513' // picture
        )
        course11 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course12 = undefined;
    try {
        let createCourse = await course.createCourse(
            'CS 541 Artificial Intelligence', // courseName
            'Graduate', // academicLevel
            'Computer Science Program', // courseOwner
            'Elective', // type
            3, // units
            'Artificial intelligence (AI), sometimes called machine intelligence, is intelligence demonstrated by machines, in contrast to the natural intelligence displayed by humans and animals. Colloquially, the term "artificial intelligence" is used to describe machines that mimic cognitive functions that humans associate with other human minds, such as learning and problem solving. The course will emphasize on both learning and problem solving, and will develop rigorous statistical models for real-world AI applications. The course will also deliver modern optimization techniques to find an optimal model for a given problem. It will require a math background in calculus, linear algebra and probability, and programming skills in Python or Matlab.', // description
            'Lecture', // instructionalFormats
            'https://web.stevens.edu/academic_files/courses/syllabus/CS541syl.pdf', // syllabus
            'https://web.stevens.edu/academic_files/courses/outcome/CS541.pdf', // courseware
            'https://www.ice.cam.ac.uk/sites/www.ice.cam.ac.uk/files/styles/leading/public/istock-1220226086.jpg?itok=Y1WRlp5p' // picture
        )
        course12 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course13 = undefined;
    try {
        let createCourse = await course.createCourse(
            'CS 545 Human-Computer Interaction', // courseName
            'Graduate', // academicLevel
            'Computer Science Program', // courseOwner
            'Elective', // type
            3, // units
            'This is an introduction to Human Computer Interaction (HCI). It covers basic concepts, principles, and frameworks in HCI; models of interaction; and design guidelines and methodologies. The course includes extensive readings and reports, as well as work on projects involving interface design and development. Prerequisites: Graduate students - Undergraduate data structures and algorithms OR CS 590. Undergraduate students - CS 385.', // description
            'Lecture', // instructionalFormats
            'https://web.stevens.edu/academic_files/courses/syllabus/CS545syl.pdf', // syllabus
            'https://web.stevens.edu/academic_files/courses/outcome/CS545.pdf', // courseware
            'https://img-cdn.inc.com/image/upload/w_1920,h_1080,c_fill/images/panoramic/getty_1187833318_2000133220009280118_mbtvwq.jpg' // picture
        )
        course13 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course14 = undefined;
    try {
        let createCourse = await course.createCourse(
            'CS 548 Enterprise Software Architecture and Design', // courseName
            'Graduate', // academicLevel
            'Computer Science Program', // courseOwner
            'Elective', // type
            3, // units
            'This course covers the issues in designing and engineering large enterprise and cloud-based software systems. Such systems are distributed and require increasingly complex inter-enterprise as well as intra-enterprise coordination. Technologies such as Web Services and cloud computing provide platforms for building such systems, and architectures such as, microservices and cloud native applications, event-driven architecture (EDA), domain-driven design (DDD), representational state transfer (REST), command query responsibility segregation (CQRS), serverless and blockchain are idioms for structuring such systems. Data modeling includes E-R designs, XML and JSON Schemas, NoSQL data models, semantic data modeling (OWL), and object relational mapping (ORM). Process modeling includes BPMN, Workflow and Petri nets.  The course includes hands-on application of the concepts with tools such as Jakarta EE and Eclipse MicroProfile, Docker, Kubernetes and Kafka, and Hyperledger Fabric. Knowledge of Java or C# is required.', // description
            'Lecture', // instructionalFormats
            'https://web.stevens.edu/academic_files/courses/syllabus/CS548syl.pdf', // syllabus
            'https://web.stevens.edu/academic_files/courses/outcome/CS548.pdf', // courseware
            'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201807/online_courses.jpeg?_k4pOSdOEUNDnGIjpSfNCr.mJdcX4WFP&size=770:433' // picture
        )
        course14 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course15 = undefined;
    try {
        let createCourse = await course.createCourse(
            'CS 550 Computer Organization and Programming', // courseName
            'Graduate', // academicLevel
            'Computer Science Program', // courseOwner
            'Elective', // type
            3, // units
            'This course provides an intensive introduction to material on computer organization and assembly language programming required for entrance into the graduate program in Computer Science or Computer Engineering. The topics covered are: structure of stored program computers; linking and loading; assembly language programming, with an emphasis on translation of high-level language constructs; data representation and arithmetic algorithms; basics of logic design; processor design: data path, hardwired control and microprogrammed control. Students will be given assembly language programming assignments on a regular basis. No graduate credit for students in Computer Science or Computer Engineering. Not for credit for Computer Science department undergraduate majors.', // description
            'Lecture', // instructionalFormats
            'https://web.stevens.edu/academic_files/courses/syllabus/CS550syl.pdf', // syllabus
            'https://web.stevens.edu/academic_files/courses/outcome/CS550.pdf', // courseware
            'https://www.classcentral.com/report/wp-content/uploads/2020/06/top-100-course-pandemic.png' // picture
        )
        course15 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course16 = undefined;
    try {
        let createCourse = await course.createCourse(
            'BME 502 Physiology for Engineers I', // courseName
            'Graduate', // academicLevel
            'Biomedical Engineering Program', // courseOwner
            'Elective', // type
            3, // units
            'The objectives of this course is to provide an engineering approach to human physiology for engineering students that have a limited background in Biology as a prerequisite for pursuing a graduate course of study in Biomedical Engineering. Part I will cover homeostasis and the two master controllers of the body, the nervous system and the endocrine system and their complementary mechanisms for maintaining homeostasis from a systems engineering point of view. Functional anatomy and physiology will be covered as well as quantitative methods for the analysis of cell signaling.', // description
            'Lecture', // instructionalFormats
            'https://web.stevens.edu/catalog/archive/2015-2016/ses/ccb/gradcourses.html', // syllabus
            'https://stevens.smartcatalogiq.com/2021-2022/Academic-Catalog/Courses/BME-Biomedical-Engineering/500/BME-502', // courseware
            'https://www.geteducated.com/wp-content/uploads/2019/11/online-tutoring-concept-ebooks-internet-courses-process-vector-staff-vector-id1053519062.jpg' // picture
        )
        course16 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course17 = undefined;
    try {
        let createCourse = await course.createCourse(
            'BME 504 Medical Instrumentation and Imaging', // courseName
            'Graduate', // academicLevel
            'Biomedical Engineering Program', // courseOwner
            'Elective', // type
            3, // units
            'Imaging plays an important role in both clinical and research environments. This course presents both the basic physics together with the practical technology associated with such methods as X-ray computed tomography (CT), magnetic resonance imaging (MRI), functional MRI (f-MRI) and spectroscopy, ultrasonics (echocardiography, Doppler flow), nuclear medicine (Gallium, PET and SPECT scans) as well as optical methods such as bioluminescence, optical tomography, fluorescent confocal microscopy, two-photon microscopy and atomic force microscopy.', // description
            'Lecture', // instructionalFormats
            'https://www.stevens.edu/sites/stevens_edu/files/files/registrar/SPAC/Biomedical_Engineering/Biomedical%20Engineering%20Red%20SP%202019-2020.pdf', // syllabus
            'https://www.coursicle.com/stevens/courses/BME/504/', // courseware
            'https://analyticsinsight.b-cdn.net/wp-content/uploads/2020/01/online-course-main-800x549.png' // picture
        )
        course17 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course18 = undefined;
    try {
        let createCourse = await course.createCourse(
            'BME 505 Biomaterials', // courseName
            'Graduate', // academicLevel
            'Biomedical Engineering Program', // courseOwner
            'Elective', // type
            3, // units
            'Intended as an introduction to materials science for biomedical engineers, this course first reviews the materials properties relevant to the application to the human body. It goes on to discuss proteins, cells, tissues, and their reactions and interactions with foreign materials, as well as the degradation of these materials in the human body. The course then treats various implants, burn dressings, drug delivery systems, biosensors, artificial organs, and elements of tissue engineering. Laboratory exercises accompany the major topics discussed in class and are conducted at the same time.', // description
            'Lecture', // instructionalFormats
            'https://www.coursehero.com/sitemap/schools/1475-Stevens-Institute-Of-Technology/courses/8059937-BME505/', // syllabus
            'https://stevens.smartcatalogiq.com/2021-2022/Academic-Catalog/Courses/BME-Biomedical-Engineering/500/BME-505', // courseware
            'https://images.indianexpress.com/2020/04/online759.jpg' // picture
        )
        course18 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course19 = undefined;
    try {
        let createCourse = await course.createCourse(
            'BME 515 Natural Polymers in Medicine', // courseName
            'Graduate', // academicLevel
            'Biomedical Engineering Program', // courseOwner
            'Elective', // type
            3, // units
            'Natural polymers have shown tremendous potential in biomedical engineering applications over the past decades. With their exceptional properties, unique versatility, and biocompatibility, these polymers have been extensively used in tissue engineering, cardiovascular grafts, orthopedic grafts, dermatological dressing and grafts and drug delivery. In this course, we will introduce various types of natural polymers used in medicine, which will include: polysaccharides, polyesters, proteins/ polypeptides, DNA, and RNA. In each category, we will explore the synthesis/extraction, chemical composition, properties, characterization techniques, processing methods and current medical applications. Limitations such as sustainability, FDA regulations, cost and performance will also be discussed. Students will be exposed to the future potential of these materials through extensive literature reviews, databases and assignments using simulation software. The semester will conclude with project at the end of the semester.', // description
            'Lecture', // instructionalFormats
            'https://www.stevens.edu/sites/stevens_edu/files/Stevens_2019-2020_Academic_Catalog.pdf', // syllabus
            'https://web.stevens.edu/catalog/archive/2013-2014/ses/cems/index.html', // courseware
            'https://www.drjimtaylor.com/4.0/wp-content/uploads/2018/09/online-courses-2.jpg' // picture
        )
        course19 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course20 = undefined;
    try {
        let createCourse = await course.createCourse(
            'BME 556 Advanced Biomechanics', // courseName
            'Graduate', // academicLevel
            'Biomedical Engineering Program', // courseOwner
            'Elective', // type
            3, // units
            'This course will provide students with a practical approach to current computational and experimental methods used in the field of biomechanics. The goal of the course will be to bridge the gap between the theoretical computations and the practical application of experimental techniques. Topics covered will include cartilage and muscle mechanics as well as the response of bone tissue to loading. The analysis of implants will also be covered. The course will conclude with analysis of human motion. Experiments will be associated with various topics to demonstrate practical applications of the theoretical concepts introduced. Students will be required to use statistical analysis software.', // description
            'Lecture', // instructionalFormats
            'https://web.stevens.edu/catalog/archive/2013-2014/ses/ccb/gradcourses.html', // syllabus
            'http://stevens.smartcatalogiq.com/2021-2022/Academic-Catalog/Department-of-Biomedical-Engineering/Undergraduate-Program/Bachelor-of-Engineering-in-Biomedical-Engineering', // courseware
            'https://www.ip-shield.com/img/courses.png' // picture
        )
        course20 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course21 = undefined;
    try {
        let createCourse = await course.createCourse(
            'BME 558 Introduction to Brain-Machine Interfaces', // courseName
            'Graduate', // academicLevel
            'Biomedical Engineering Program', // courseOwner
            'Elective', // type
            3, // units
            'This course aims for understanding the emerging field of Brain Machine Interfaces (BMI). After the completion of this course the students will have working knowledge of what BMIs are, how they are designed, implemented and tested. The core modules of BMI are data acquisition, decoding and application. Each of these modules will be expanded in detail. A common midterm project will be assigned to all the students. Then the students are expected to select a specialized topic, do a final project and write a term paper towards the final week. This course serves as an introduction to this emerging field of BMIs. This can serve both undergraduate seniors and graduate students.', // description
            'Lecture', // instructionalFormats
            'https://www.stevens.edu/sites/stevens_edu/files/Stevens_2019-2020_Academic_Catalog.pdf', // syllabus
            'https://www.stevens.edu/schaefer-school-engineering-science/departments/biomedical-engineering/undergraduate-programs/biomedical-engineering/curriculum-overview', // courseware
            'https://www.law.columbia.edu/sites/default/files/styles/640x267/public/2020-03/20190325_TeachingCandid_033_HeroBanner.jpg?h=ef7c102b&itok=U_E3FvMJ' // picture
        )
        course21 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course22 = undefined;
    try {
        let createCourse = await course.createCourse(
            'BME 570 Lab-on-a-Chip Technology in Biomedical Applications', // courseName
            'Graduate', // academicLevel
            'Biomedical Engineering Program', // courseOwner
            'Elective', // type
            3, // units
            'Advances in lab-on-a-chip (LOC) technology have led to the development of a wide variety of innovative miniaturized platforms for basic research and point-of-care applications by allowing integration of large-scale laboratory operations onto a fully integrated small-scale device. Compared with traditional benchtop operations, LOC-based assays offer a broader range of unique advantages. In particular, compact LOC devices can carry out cost-effective, rapid, and portable biochemical analyses with considerably high resolution and sensitivity through the use of small amounts of reagents and samples (typically, several micro-liters) in a tightly controlled user-defined environment. The overall goal of this course is to help students gain comprehensive understanding of the field of LOC, including device fabrication methods, recent technologic progress, current challenges and limitations to overcome, and future perspectives, with special focus on biomedical applications of different LOC devices. Notably, this course will highlight cutting-edge LOC technologies that enabled creation of devices for low-cost gene extraction and sequencing, accurate single-cell analysis, and high-throughput drug screening. Further, students will learn innovative LOC devices that are being used for high-fidelity in vitro disease modeling and therapeutic development. In particular, this course will review organ-on-a-chip (OOC) platforms that can recapitulate the complex structures, functions, as well as dynamic responses of living human organs.', // description
            'Lecture', // instructionalFormats
            'https://web.stevens.edu/catalog/archive/2015-2016/ses/math/gradcourses.html', // syllabus
            'https://www.stevens.edu/schaefer-school-engineering-science/departments/biomedical-engineering/undergraduate-programs/biomedical-engineering/curriculum-overview', // courseware
            'https://prod-discovery.edx-cdn.org/media/course/image/52bf4539-6137-4968-9605-6c32414dcdc4-7e805a266b31.small.png' // picture
        )
        course22 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course23 = undefined;
    try {
        let createCourse = await course.createCourse(
            'BME 584 Pathophysiology', // courseName
            'Graduate', // academicLevel
            'Biomedical Engineering Program', // courseOwner
            'Elective', // type
            3, // units
            'The course focuses on how pathological conditions are manifested in humans. Topics include the structural and functional changes in cells, tissues, and organs during the pathological manifestations of a disease, the cause of these changes, and the collateral damage caused by malfunctioning of one or more organ systems. Diagnostic testing and interventions for certain health problems are discussed.', // description
            'Lecture', // instructionalFormats
            'https://www.stevens.edu/sites/stevens_edu/files/Stevens_2019-2020_Academic_Catalog.pdf', // syllabus
            'https://web.stevens.edu/catalog/archive/2014-2015/ses/me/gradcourses.html', // courseware
            'https://centrocatalina.com/wp-content/uploads/2019/11/standard-course.jpg' // picture
        )
        course23 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course24 = undefined;
    try {
        let createCourse = await course.createCourse(
            'BME 600 Strategies and Principles of Biomedical Design', // courseName
            'Graduate', // academicLevel
            'Biomedical Engineering Program', // courseOwner
            'Elective', // type
            3, // units
            'A successful approach to product development and design in the field of medical technologies requires a highly interdisciplinary approach. This course reviews the regulations, protocols, and guidelines which must be met in each discipline, and describes how these issues are inter-related and how the affect design and product development. Marketing, Regulatory, IP and Clinical aspects are all considered in the technical aspects of design.', // description
            'Lecture', // instructionalFormats
            'https://www.stevens.edu/sites/stevens_edu/files/Stevens_2019-2020_Academic_Catalog.pdf', // syllabus
            'https://web.stevens.edu/catalog/archive/2013-2014/ses/ccb/gradcourses.html', // courseware
            'https://globalcolliance.com/wp-content/uploads/2021/06/course.jpg' // picture
        )
        course24 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course25 = undefined;
    try {
        let createCourse = await course.createCourse(
            'ME 510 Power Plant Engineering', // courseName
            'Graduate', // academicLevel
            'Mechanical Engineering Program', // courseOwner
            'Elective', // type
            3, // units
            'Analysis of thermodynamics, hydraulic, environmental, and economic considerations that affect the design and performance of modern power plants; overview of power generation system and its components, including boilers, turbines, circulating water systems, and condensate-feedwater systems; fuels and combustion; auxiliary pumping and cleanup systems; gas turbine and combined cycles; and introduction to nuclear power plants and alternate energy systems based on geothermal, solar, wind, and ocean energy.', // description
            'Lecture', // instructionalFormats
            'https://web.stevens.edu/catalog/archive/2014-2015/ses/me/gradcourses.html', // syllabus
            'https://www.stevens.edu/schaefer-school-engineering-science/departments/mechanical-engineering/undergraduate-programs/mechanical-engineering-concentrations', // courseware
            'https://assets-global.website-files.com/5e39e095596498a8b9624af1/5ffca6e3e0d8ad9231cc2af6_Portfolio-course---final.png' // picture
        )
        course25 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course26 = undefined;
    try {
        let createCourse = await course.createCourse(
            'ME 511 Wind Energy-Theory & Application', // courseName
            'Graduate', // academicLevel
            'Mechanical Engineering Program', // courseOwner
            'Elective', // type
            3, // units
            'This course provides the fundamentals of the conversion of wind energy to electricity and describes the effective use of wind energy for a variety of applications. It spans a wide range of fields, from meteorology through mechanical, electrical, structural engineering and aerodynamics, to economics and environmental concerns. Topics include wind energy principles, wind site assessment, wind turbine components, wind power generation machinery, economics of wind energy, environmental concerns and the future of wind power. These topics are covered in sufficient detail for everyones understanding without requiring prior background in all these disciplines. Using the knowledge gained from the course, the students are expected to complete a class project designing a small scale wind energy.', // description
            'Lecture', // instructionalFormats
            'https://www.stevens.edu/sites/stevens_edu/files/Stevens_2019-2020_Academic_Catalog.pdf', // syllabus
            'https://web.stevens.edu/catalog/archive/2014-2015/ses/me/gradcourses.html', // courseware
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkQ1YgSc9y3oByMHblpYTri4CZApWHXGVPJw&usqp=CAU' // picture
        )
        course26 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course27 = undefined;
    try {
        let createCourse = await course.createCourse(
            'ME 519 Solar Energy: System Designs', // courseName
            'Graduate', // academicLevel
            'Mechanical Engineering Program', // courseOwner
            'Elective', // type
            3, // units
            'This course provides an in-depth treatment of how to transfer the latest solar thermal technology available to real world applications. It takes the student through the various phases of development of a solar space heating and photovoltaic integrated building; review occupant’s requirements, site analysis, design concept, solar system design, cost estimates, building design, performance predictions and construction. The emphasis of the class is on solar system design methods, economic optimization of solar systems and installation.', // description
            'Lecture', // instructionalFormats
            'https://web.stevens.edu/catalog/archive/2014-2015/ses/me/gradcourses.html', // syllabus
            'https://www.stevens.edu/schaefer-school-engineering-science/departments/mechanical-engineering/undergraduate-programs/mechanical-engineering-concentrations', // courseware
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR4AYsEOyR_mvX-8I9ifBghXaGtxbN-Sizrw&usqp=CAU' // picture
        )
        course27 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course28 = undefined;
    try {
        let createCourse = await course.createCourse(
            'ME 522 Mechatronics', // courseName
            'Graduate', // academicLevel
            'Mechanical Engineering Program', // courseOwner
            'Elective', // type
            3, // units
            'This course introduces principles of mechatronics to integrate mechanical, electronic/electrical, and control/computer/ software components for motion control systems. Electromechanical components and integration concepts include: machine construction and control concepts, control modes (open/closed loop, servo, and process control) and motion profiles, motion drivers and actuators (AC drives, motors, gearing, servo and stepper motors), PLC control and programming (ladder and Boolean and combinatorial logic interfaces), microprocessor/computer based (logic, operating systems, SCADA, and HMI), field devices, signal conditioning, and communication (I/O hardware and management, vision systems, protocols, and programming languages), and introduction to system integration. Course includes hands-on lab work, small design projects, case studies, and industry guest lectures.', // description
            'Lecture', // instructionalFormats
            'https://web.stevens.edu/catalog/archive/2013-2014/ses/me/index.html', // syllabus
            'https://web.stevens.edu/catalog/archive/2014-2015/ses/me/undergraduate-programs.html', // courseware
            'https://umanitoba.ca/extended-education/sites/extended-education/files/styles/21x9_1100w/public/2021-05/Courses-header_1.jpg?itok=DPBp7WmX' // picture
        )
        course28 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course29 = undefined;
    try {
        let createCourse = await course.createCourse(
            'ME 524 Fundamentals of Remote Sensing', // courseName
            'Graduate', // academicLevel
            'Mechanical Engineering Program', // courseOwner
            'Elective', // type
            3, // units
            'This course exposes the student to the physical principles underlying remote sensing of ocean, atmosphere, and land by electromagnetic and acoustic passive and active sensors: radars, lidars, infrared and microwaves thermal sensors, sonars, sodars, infrasound/seismic detectors. Topics include fundamental concepts of electromagnetic and acoustic wave interactions with oceanic, atmospheric, and land environment, as well as with natural and man-made objects. Examples from selected sensors will be used to illustrate the information extraction process, and applications of the data for environmental monitoring, oceanography, meteorology, and security/military objectives.', // description
            'Lecture', // instructionalFormats
            'https://www.stevens.edu/sites/stevens_edu/files/Stevens_2020-2021_Academic_Catalog.pdf', // syllabus
            'https://web.stevens.edu/catalog/archive/2013-2014/ses/me/curriculum.html', // courseware
            'https://images.theconversation.com/files/431550/original/file-20211111-6892-7r71ep.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C2117%2C1412&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip' // picture
        )
        course29 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course30 = undefined;
    try {
        let createCourse = await course.createCourse(
            'EE 507 Introduction to Microelectronics and Photonics', // courseName
            'Graduate', // academicLevel
            'Electrical Engineering Program', // courseOwner
            'Elective', // type
            3, // units
            'An overview of microelectronics and photonics science and technology. It provides the student who wishes to specialize in their application, physics or fabrication with the necessary knowledge of how the different aspects are interrelated. It is taught in three modules: design and applications, taught by EE faculty; operation of electronic and photonic devices, taught by Physics faculty; fabrication and reliability, taught by the materials faculty.', // description
            'Lecture', // instructionalFormats
            'https://web.stevens.edu/catalog/archive/2013-2014/ses/pep/index.html', // syllabus
            'https://web.stevens.edu/catalog/archive/2013-2014/ses/ece/gradcourses.html', // courseware
            'https://cpr.heart.org/-/media/CPR-Images/Find-a-Course/AHA-IAN-3940-HiRes-find-a-course.jpg?h=641&iar=0&mw=960&w=960&hash=6BF496190C55E312E41B3FC0659AF972' // picture
        )
        course30 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course31 = undefined;
    try {
        let createCourse = await course.createCourse(
            'EE 515 Photonics I', // courseName
            'Graduate', // academicLevel
            'Electrical Engineering Program', // courseOwner
            'Elective', // type
            3, // units
            'This course will cover topics encompassing the fundamental subject matter for the design of optical systems. Topics will include optical system analysis, optical instrument analysis, applications of thin-film coatings and opto-mechanical system design in the first term. The second term will cover the subjects of photometry and radiometry, spectrographic and spectrophotometric systems, infrared radiation measurement and instrumentation, lasers in optical systems and photon- electron conversion.', // description
            'Lecture', // instructionalFormats
            'https://www.stevens.edu/sites/stevens_edu/files/Stevens_2019-2020_Academic_Catalog.pdf', // syllabus
            'https://web.stevens.edu/catalog/archive/2005_2006_Catalog/soe_electrical_computer.html', // courseware
            'https://www.questpond.com/img/2.png' // picture
        )
        course31 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course32 = undefined;
    try {
        let createCourse = await course.createCourse(
            'EE 517 Digital and Computer Systems Architecture', // courseName
            'Graduate', // academicLevel
            'Electrical Engineering Program', // courseOwner
            'Elective', // type
            3, // units
            'This course covers the design and architecture of computer and digital systems in the system design region starting from the transistor/logic gate level to below the device driver level/system monitor level. The systems considered in the course will go beyond the computer chips or CPUs discussed in a typical computer architecture course, but will include complex logic devices such as application specific integrated circuits (ASICs), the core-designs for field programmable gate arrays (FPGAs), system-on-a-chip (SoC) designs, ARM, and other application-specific architectures. Printed circuit board-level architectural considerations for multiple complex digital circuits will also be discussed.', // description
            'Lecture', // instructionalFormats
            'https://www.stevens.edu/sites/stevens_edu/files/files/Stevens_2017-2018_Academic-Catalog.pdf', // syllabus
            'https://web.stevens.edu/catalog/archive/2013-2014/ses/ece/gradcourses.html', // courseware
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYHyupOX7oT2A0Gar8ACWW-1GJc5tEN9-VHQ&usqp=CAU' // picture
        )
        course32 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course33 = undefined;
    try {
        let createCourse = await course.createCourse(
            'EE 548 Digital Signal Processing', // courseName
            'Graduate', // academicLevel
            'Electrical Engineering Program', // courseOwner
            'Elective', // type
            3, // units
            'Review  of  mathematics  of  signals  and  systems  including  sampling  theorem,  Fourier  transform,  z-transform,  Hilbert transform; algorithms for fast computation: DFT, DCT computation, convolution; filter design techniques: FIR and IIR filter design, time and frequency domain methods, window method and other approximation theory based methods; structures for realization of discrete time systems: direct form, parallel form, lattice structure and other state-space canonical forms (e.g., orthogonal filters and related structures); roundoff and quantization effects in digital filters: analysis of sensitivity to coefficient quantization, limit cycle in IIR filters, scaling to prevent overflow, role of special structures.', // description
            'Lecture', // instructionalFormats
            'https://www.stevens.edu/sites/stevens_edu/files/Stevens_2019-2020_Academic_Catalog.pdf', // syllabus
            'https://web.stevens.edu/catalog/archive/2013-2014/ses/ece/gradcourses.html', // courseware
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJa15lctZyd-v9rN8-h_DFuB2L4HeXPud_qA&usqp=CAU' // picture
        )
        course33 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course34 = undefined;
    try {
        let createCourse = await course.createCourse(
            'EE 551 Engineering Programming: Python', // courseName
            'Graduate', // academicLevel
            'Electrical Engineering Program', // courseOwner
            'Elective', // type
            3, // units
            'This course presents tool, techniques, algorithms, and programming techniques using the Python programming language for data intensive applications and decision making. The course formally introduces techniques to: (i) gather,(ii) store, and (iii) process large volumes of data to make informed decisions. Such techniques find applicability in many engineering application areas, including communications systems, embedded systems, smart grids, robotics, Internet, and enterprise networks, or any network where information flows and alters decision making.', // description
            'Lecture', // instructionalFormats
            'https://web.stevens.edu/catalog/archive/2015-2016/ses/ece/gradcourses.html', // syllabus
            'https://stevens.uloop.com/course-notes/7217-EE/8482274-EE-551-python', // courseware
            'https://static-cse.canva.com/blob/850600/DPLPCourseThumbnails.png' // picture
        )
        course34 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course35 = undefined;
    try {
        let createCourse = await course.createCourse(
            'EE 552 Engineering Programming: Java', // courseName
            'Graduate', // academicLevel
            'Electrical Engineering Program', // courseOwner
            'Elective', // type
            3, // units
            'This course is a hands-on intensive introduction to solving engineering problem using Java. The focus is on building real applications including an electrical CAD package, molecular modelers, and controlling network communications. In the process, Java and object-oriented programming are mastered in order to implement efficient solutions to the target applications.', // description
            'Lecture', // instructionalFormats
            'https://web.stevens.edu/catalog/archive/2015-2016/ses/ece/gradcourses.html', // syllabus
            'https://www.stevens.edu/sites/stevens_edu/files/Stevens_2019-2020_Academic_Catalog.pdf', // courseware
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6hmCXYqNJTaLkzDLzH_taRMmSUdvzQSBSow&usqp=CAU' // picture
        )
        course35 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course36 = undefined;
    try {
        let createCourse = await course.createCourse(
            'EE 553 Engineering Programming: C++', // courseName
            'Graduate', // academicLevel
            'Electrical Engineering Program', // courseOwner
            'Elective', // type
            3, // units
            'This course teaches a deep knowledge of C++ by focusing on common engineering problems. The focus is on engineering applications. In the beginning, the course covers computational goals to including statistics, smoothing data, numerical integration and calculation of volumes to teach/review basic programming logic, loops and function calls. Then we focus on more complex tasks such as simulation, localization and path planning for robotics, and teach object-oriented programming as part of an efficient solution to these engineering problems. By the end of the course, students will have a thorough knowledge of C++.', // description
            'Lecture', // instructionalFormats
            'https://web.stevens.edu/catalog/archive/2015-2016/ses/ece/gradcourses.html', // syllabus
            'https://www.stevens.edu/sites/stevens_edu/files/Stevens_2019-2020_Academic_Catalog.pdf', // courseware
            'https://opensocietyuniversitynetwork.org/education/teaching/osun-courses/index.php?action=getfile&id=1544686&disposition=inline&type=image' // picture
        )
        course36 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course37 = undefined;
    try {
        let createCourse = await course.createCourse(
            'EE 560 Fundamentals of Remote Sensing', // courseName
            'Graduate', // academicLevel
            'Electrical Engineering Program', // courseOwner
            'Elective', // type
            3, // units
            'This course exposes the student to the physical principles underlying remote sensing of ocean, atmosphere, and land by electromagnetic and acoustic passive and active sensors: radars, lidars, infrared and microwaves thermal sensors, sonars, sodars, infrasound/seismic detectors. Topics include fundamental concepts of electromagnetic and acoustic wave interactions with oceanic, atmospheric, and land environment, as well as with natural and man-made objects. Examples from selected sensors will be used to illustrate the information extraction process, and applications of the data for environmental monitoring, oceanography, meteorology, and security/military objectives.', // description
            'Lecture', // instructionalFormats
            'https://web.stevens.edu/catalog/archive/2012-2013/ses/ceoe/gradcourses.html', // syllabus
            'https://web.stevens.edu/catalog/archive/2013-2014/ses/ece/gradcourses.html', // courseware
            'https://rtl.berkeley.edu/sites/default/files/styles/openberkeley_image_full/public/general/screen_shot_2020-10-29_at_1.26.41_pm.png?itok=anK_PyFH&timestamp=1604003224' // picture
        )
        course37 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course38 = undefined;
    try {
        let createCourse = await course.createCourse(
            'MGT 506 Economics for Managers', // courseName
            'Graduate', // academicLevel
            'Management Program', // courseOwner
            'Elective', // type
            3, // units
            'This course introduces managers to the essence of business economics – the theories, concepts and ideas that form the economist’s tool kit encompassing both the microeconomic and macroeconomic environments. Microeconomic topics include demand and supply, elasticity, consumer choice, production, cost, profit maximization, market structure, and game theory while the Macroeconomic topics will be GDP, inflation, unemployment, aggregate demand, aggregate supply, fiscal and monetary policies. In addition the basic concepts in international trade and finance will be discussed.', // description
            'Lecture', // instructionalFormats
            'https://www.stevens.edu/sites/stevens_edu/files/files/SB/finance/Syllabus-MGT506WZ-Spring2022.pdf', // syllabus
            'https://fsc.stevens.edu/mgt-506/', // courseware
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0IUxKyuXw68huMhIrBqMS3QFZvG8cyNaD7Q&usqp=CAU' // picture
        )
        course38 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course39 = undefined;
    try {
        let createCourse = await course.createCourse(
            'MGT 609 Project Management Fundamentals', // courseName
            'Graduate', // academicLevel
            'Management Program', // courseOwner
            'Elective', // type
            3, // units
            'This course deals with the basic problems of managing a project, defined as a temporary organization built for the purpose of achieving a specific objective. Both operational and conceptual issues will be considered. Operational issues include definition, planning, implementation, control, and evaluation of the project. Conceptual issues include project management vs. hierarchical management, matrix organization, project authority, motivation, and morale. Cases will be used to illustrate problems in project management and how to resolve them.', // description
            'Lecture', // instructionalFormats
            'https://www.coursehero.com/file/68443010/2020-Fall-MGT-609-WS-Syllabuspdf/', // syllabus
            'https://www.stevens.edu/school-business/masters-programs/management/curriculum-overview', // courseware
            'https://cdn-wordpress-info.futurelearn.com/info/wp-content/uploads/categories.jpg' // picture
        )
        course39 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course40 = undefined;
    try {
        let createCourse = await course.createCourse(
            'MGT 610 Strategic Perspectives on Project Management', // courseName
            'Graduate', // academicLevel
            'Management Program', // courseOwner
            'Elective', // type
            3, // units
            'This course provides a theoretical perspective on project management for a better understanding of project implementation in modern organizations. The course is based on the premise that success in project leadership depends on a proper managerial style and attitude, and not on specific tools for planning and controlling. The course focuses on developing the manager’s conceptual thinking and on building “the project manager’s mind.” The course helps managers see the entire project landscape and the long-term issues that are critical to project success. It will also address the organizational aspects of initiating and running the program.', // description
            'Lecture', // instructionalFormats
            'https://web.stevens.edu/academic_files/courses/syllabus/MGT_610.pdf', // syllabus
            'https://www.stevens.edu/school-business/masters-programs/enterprise-project-management/curriculum-overview', // courseware
            'https://www.knime.com/sites/default/files/styles/480w/public/2021-08/knime-course-learn-data-science.jpeg?itok=fNcOJIZv' // picture
        )
        course40 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course41 = undefined;
    try {
        let createCourse = await course.createCourse(
            'MGT 611 Project Analytics', // courseName
            'Graduate', // academicLevel
            'Management Program', // courseOwner
            'Elective', // type
            3, // units
            'Formalized procedures, tools, and techniques used in conceptual and detailed planning of the project. Development of work breakdown structure as the foundation for project cost and project duration. Application of project data in monitoring the project progress and in formulating remedial actions in response to unexpected occurrences.', // description
            'Lecture', // instructionalFormats
            'https://www.stevens.edu/sites/stevens_edu/files/MGT611%20_2.docx', // syllabus
            'https://www.coursehero.com/sitemap/schools/1475-Stevens-Institute-Of-Technology/courses/6606896-MGT611/', // courseware
            'https://assets-global.website-files.com/5e39e095596498a8b9624af1/61f2f99094eed105dc885d81_Figma%20to%20Webflow%20Course.png' // picture
        )
        course41 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course42 = undefined;
    try {
        let createCourse = await course.createCourse(
            'MGT 612 Leader Development', // courseName
            'Graduate', // academicLevel
            'Management Program', // courseOwner
            'Elective', // type
            3, // units
            'Project success depends, largely, on the human side. Success in motivating project workers, organizing and leading project teams, communication and sharing information, and conflict resolution, are just a few areas that are critical for project success. However, being primarily technical people, many project managers tend to neglect these “soft” issues, assuming they are less important or that they should be addressed by direct functional managers. The purpose of this course is to increase awareness of project managers to the critical issues of managing people and to present some of the theories and practices of leading project workers and teams.', // description
            'Lecture', // instructionalFormats
            'https://web.stevens.edu/academic_files/courses/syllabus/Syllabus_MGT_612.pdf', // syllabus
            'https://www.coursicle.com/stevens/courses/MGT/612/', // courseware
            'https://s3.amazonaws.com/course_report_staging/rich/rich_files/rich_files/manual/Outcomes_Report_Header_V2.png' // picture
        )
        course42 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course43 = undefined;
    try {
        let createCourse = await course.createCourse(
            'BIA 500 Business Analytics: Data, Models & Decisions', // courseName
            'Graduate', // academicLevel
            'Business Intelligence and Analytics Program', // courseOwner
            'Elective', // type
            3, // units
            'Many managerial decisions - regardless of their functional orientation - are increasingly based on analysis using quantitative models from the discipline of management science. Management science tools, techniques and concepts (e.g., data, models, and software programs) have dramatically changed the way businesses operate in manufacturing, service operations, marketing, transportation, and finance. Business Analytics explores data-driven methods that are used to analyze and solve complex business problems. Students will acquire analytical skills in building, applying and evaluating various models with hands-on computer applications. Topics include descriptive statistics, time-series analysis, regression models, decision analysis, Monte Carlo simulation, and optimization models.', // description
            'Lecture', // instructionalFormats
            'https://www.stevens.edu/school-business/masters-programs/mba/analytics-mba/curriculum', // syllabus
            'https://www.stevens.edu/school-business/masters-programs/business-intelligence-analytics', // courseware
            'https://www.talentlms.com/old/wp-content/uploads/2018/10/talentlms-content-library.png' // picture
        )
        course43 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course44 = undefined;
    try {
        let createCourse = await course.createCourse(
            'BIA 610 Applied Analytics', // courseName
            'Graduate', // academicLevel
            'Business Intelligence and Analytics Program', // courseOwner
            'Elective', // type
            3, // units
            'Applied Analytics is a capstone course for the analytic-focused MBA program. It is intended to integrate all previously taken coursed in the program by presenting a set of increasingly complex business problems. These problems can be solved through analytic skill taught in this and previous courses. In particular, the course is intended to reinforce the understanding of analysis as way to build models that can focus attention on parts of the system that can be improved through intervention. The early part of the course uses synthetic data and empirical data readily available for analysis. The second part of the course encourages students to state and solve their own problem, gathering their own data as a part of the analytic process.', // description
            'Lecture', // instructionalFormats
            'https://www.stevens.edu/sites/stevens_edu/files/BIA%20610%20jan%2018.docx', // syllabus
            'https://www.stevens.edu/school-business/masters-programs/mba/analytics-mba/curriculum', // courseware
            'https://lh3.googleusercontent.com/21Mlc_bfmIP34V4MgJMtr1S9sGbxNGVdj7ncT_jmiQNAhvqJNYwWhnOdKuY2h57SpOuaOk_aF5dAnrz0w4tbDLVy0wxZHJCUQC3y' // picture
        )
        course44 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course45 = undefined;
    try {
        let createCourse = await course.createCourse(
            'BIA 650 Optimization and Process Analytics', // courseName
            'Graduate', // academicLevel
            'Business Intelligence and Analytics Program', // courseOwner
            'Elective', // type
            3, // units
            'This course covers basic concepts in optimization and heuristic search with an emphasis on process improvement and optimization. This course emphasizes the application of mathematical optimization models over the underlying mathematics of their algorithms. While the skills developed in this course can be applied to a very broad range of business problems, the practice examples and student exercises will focus on the following areas: healthcare, logistics and supply chain optimization, capital budgeting, asset management, portfolio analysis. Most of the student exercises will involve the use of Microsoft Excel’s “Solver” add-on package for mathematical optimization.', // description
            'Lecture', // instructionalFormats
            'https://web.stevens.edu/academic_files/courses/syllabus/BIA-650_Proc_Analytics_&_Optimization_Spring_2013_Mar_30_2013.pdf', // syllabus
            'https://www.stevens.edu/school-business/masters-programs/business-intelligence-analytics/curriculum-overview', // courseware
            'https://www.qualitymatters.org/sites/default/files/illustrations-infographics/HE-IYOC-QM.png' // picture
        )
        course45 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course46 = undefined;
    try {
        let createCourse = await course.createCourse(
            'BIA 652 Multivariate Data Analysis I', // courseName
            'Graduate', // academicLevel
            'Business Intelligence and Analytics Program', // courseOwner
            'Elective', // type
            3, // units
            'This course introduces basic methods underlying multivariate analysis through computer applications using R, which is used by many data scientists and is an attractive environment for learning multivariate analysis. Students will master multivariate analysis techniques, including principal components analysis, factor analysis, structural equation modeling, multidimensional scaling, correspondence analysis, cluster analysis, multivariate analysis of variance, discriminant function analysis, logistic regression, as well as other methods used for dimension reduction, pattern recognition, classification, and forecasting. Students will build expertise in applying these techniques to real data through class exercises and a project, and learn how to visualize data and present results. This proficiency will enable students to become sophisticated data analysts, and to help make more informed design, marketing, and business decisions.', // description
            'Lecture', // instructionalFormats
            'https://www.stevens.edu/sites/stevens_edu/files/BIA%20652%20Multivariate%20Anaytics-spring%202015%20AACSB%20syllabus.doc', // syllabus
            'https://www.stevens.edu/school-business/masters-programs/business-intelligence-analytics/curriculum-overview', // courseware
            'https://lifeisastoryproblem.org/wp-content/uploads/2021/08/How-to-create-an-online-course.jpg' // picture
        )
        course46 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course47 = undefined;
    try {
        let createCourse = await course.createCourse(
            'BIA 654 Experimental Design II', // courseName
            'Graduate', // academicLevel
            'Business Intelligence and Analytics Program', // courseOwner
            'Elective', // type
            3, // units
            'This course covers fundamental concepts of experimentation including hypothesis development, operational definitions, reliability and validity, and measurement and variables, as well as design methods, such as sampling, randomization, and counterbalancing.  The course also introduces the analysis associated with different designs as designing solid experiments involves thinking about how to analyze the obtained data.  At the end of the course, students present a project, in which they come up with a research question, design an experiment, collect and analyze the data, and try to answer the question.  MGT 620 or equivalent is required; basic knowledge of statistics is expected.', // description
            'Lecture', // instructionalFormats
            'https://www.stevens.edu/sites/stevens_edu/files/2019.LateJan.APPENDIX%20C%20BIA%20Curriculum%20Review%20Topic%20Analysis%20Oct%2010%202018.pdf', // syllabus
            'https://www.stevens.edu/school-business/masters-programs/business-intelligence-analytics/curriculum-overview', // courseware
            'https://i.ytimg.com/vi/P0BVBylLUIA/maxresdefault.jpg' // picture
        )
        course47 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course48 = undefined;
    try {
        let createCourse = await course.createCourse(
            'BIA 656 Advanced Data Analytics and Machine Learning', // courseName
            'Graduate', // academicLevel
            'Business Intelligence and Analytics Program', // courseOwner
            'Elective', // type
            3, // units
            'The significant amount of corporate information available requires a systematic and analytical approach to select the most important information and anticipate major events. Statistical learning algorithms facilitate this process understanding, modeling and forecasting the behavior of major corporate variables. This course introduces time series and statistical and graphical models used for inference and prediction. The emphasis of the course is in the learning capability of the algorithms and their application to finance, direct marketing, operations, and biomedicine. Students should have a basic knowledge of probability theory, and linear algebra.', // description
            'Lecture', // instructionalFormats
            'https://www.stevens.edu/sites/stevens_edu/files/BIA%20656%20Statistical%20Learning%20Fall%202014_updated-1.docx', // syllabus
            'https://www.stevens.edu/school-business/business-phd-programs/phd-data-science/curriculum-overview', // courseware
            'https://cdn-wordpress-info.futurelearn.com/wp-content/uploads/how-to-start-an-online-course.jpg' // picture
        )
        course48 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course49 = undefined;
    try {
        let createCourse = await course.createCourse(
            'BIA 658 Social Network Analysis', // courseName
            'Graduate', // academicLevel
            'Business Intelligence and Analytics Program', // courseOwner
            'Elective', // type
            3, // units
            'The significant amount of corporate information available requires a systematic and analytical approach to select the most important information and anticipate major events. Statistical learning algorithms facilitate this process understanding, modeling and forecasting the behavior of major corporate variables. This course introduces time series and statistical and graphical models used for inference and prediction. The emphasis of the course is in the learning capability of the algorithms and their application to finance, direct marketing, operations, and biomedicine. Students should have a basic knowledge of probability theory, and linear algebra.', // description
            'Lecture', // instructionalFormats
            'https://www.stevens.edu/sites/stevens_edu/files/BIA%20658%20Social%20Network%20Analytics%20Fall%202014.doc', // syllabus
            'https://www.coursehero.com/sitemap/schools/1475-Stevens-Institute-Of-Technology/courses/8112399-BT658/', // courseware
            'https://www.simplilearn.com/ice9/free_resources_article_thumb/Top_18_Technical_Courses_After_Graduation.jpg' // picture
        )
        course49 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course50 = undefined;
    try {
        let createCourse = await course.createCourse(
            'BIA 660 Web Mining', // courseName
            'Graduate', // academicLevel
            'Business Intelligence and Analytics Program', // courseOwner
            'Elective', // type
            3, // units
            'In this course, students will learn through hands-on experience how to extract data from the web and analyze web-scale data using distributed computing. Students will learn different analysis methods that are widely used across the range of internet companies, from start-ups to online giants like Amazon or Google. At the end of the course, students will apply these methods to answer real scientific question or to create a useful web application.', // description
            'Lecture', // instructionalFormats
            'https://www.stevens.edu/sites/stevens_edu/files/BIA%20660%20Web%20Analytics%20Fall%202014.pdf', // syllabus
            'https://www.coursehero.com/sitemap/schools/1475-Stevens-Institute-Of-Technology/courses/8347828-BT660/', // courseware
            'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202009/wes-hicks-4-EeTnaC1S4-unsplash_1200x768.jpeg?IhVtWc9F2cXTMT7qdGLQIn3s8tr_IJ9u&size=770:433' // picture
        )
        course50 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course51 = undefined;
    try {
        let createCourse = await course.createCourse(
            'FIN 500 Financial and Managerial Accounting', // courseName
            'Graduate', // academicLevel
            'Finance Program', // courseOwner
            'Elective', // type
            3, // units
            'This course will develop accounting analysis useful for managerial decision-making purposes. Topics will include an introduction to elements of financial accounting, cost-profit-volume analysis, manufacturing costs and elements of cost accounting, special decision analysis, budgeting, variances, and controllability and responsibility accounting.', // description
            'Lecture', // instructionalFormats
            'https://www.stevens.edu/school-business/masters-programs/finance/curriculum-overview', // syllabus
            'https://www.stevens.edu/school-business/undergraduate-programs/finance/curriculum-overview', // courseware
            'https://www.idp.com/medias/Accounting-370x278.jpg?context=bWFzdGVyfHJvb3R8NDczMzZ8aW1hZ2UvanBlZ3xoZWQvaGY4Lzk5MDgzOTMxMTU2NzguanBnfDlmNWI2OWZhYWFlZjAxNmI3YTYyMDZkMzQ4ZWM5MmEzMDg2ZjI1NDJjMmJjNGYyMmRlNTU0ZGRhMWY4NTQ2ODQ' // picture
        )
        course51 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course52 = undefined;
    try {
        let createCourse = await course.createCourse(
            'FIN 510 Financial Statement Analysis', // courseName
            'Graduate', // academicLevel
            'Finance Program', // courseOwner
            'Elective', // type
            3, // units
            'This course deals with (1) interpretation of financial statements, (2) evaluation of the alignment between business strategies and financial performance, (3) identification of potential business risks, and (4) comparison of performance of different companies. The course introduces business analysis and valuation techniques and utilizes real world data to help students comprehend financial statement analysis tools. Topics covers financial statement information, tools of financial statement analysis, and forecasting and valuation techniques.', // description
            'Lecture', // instructionalFormats
            'https://www.stevens.edu/sites/stevens_edu/files/FIN510A%20syllabus_Fall%202016.pdf', // syllabus
            'https://www.coursehero.com/sitemap/schools/1475-Stevens-Institute-Of-Technology/courses/11454980-FIN510/', // courseware
            'https://course.to/img/course-logo.png' // picture
        )
        course52 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course53 = undefined;
    try {
        let createCourse = await course.createCourse(
            'FIN 515 Financial Decision Making', // courseName
            'Graduate', // academicLevel
            'Finance Program', // courseOwner
            'Elective', // type
            3, // units
            'Corporate financial management requires the ability to understand the past performance of the firm in accounting terms; while also being able to project the future economic consequences of the firm in financial terms. This course provides the requisite survey of accounting and finance methods and principles to allow technical executives to make effective decisions that maximize shareholder value.', // description
            'Lecture', // instructionalFormats
            'https://www.stevens.edu/school-business/masters-programs/management/curriculum-overview', // syllabus
            'https://www.stevens.edu/school-business/masters-programs/finance/curriculum-overview', // courseware
            'https://h5p.org/sites/default/files/logos/course_presentation_icon-colors_0.png' // picture
        )
        course53 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course54 = undefined;
    try {
        let createCourse = await course.createCourse(
            'FIN 530 Investment Banking', // courseName
            'Graduate', // academicLevel
            'Finance Program', // courseOwner
            'Elective', // type
            3, // units
            'This course focuses on the main activities of sell-side investment services such as: financial advisory, stocks and bonds structuring and underwriting, project finance and post-sale services such as equity and bond research. The course is aimed at students interested in acquiring skills and tools required for an investment banking career. The course does not cover the merger and acquisition topics (corporate, leveraged and early stage) for which the student should take the Venture Capital course.', // description
            'Lecture', // instructionalFormats
            'https://www.stevens.edu/sites/stevens_edu/files/2018.Oct_.Assurance%20of%20Learning%20Course%20Coordinators%20by%20Program_August%2020%202018.docx', // syllabus
            'https://www.stevens.edu/school-business/masters-programs/finance/curriculum-overview', // courseware
            'https://media-exp1.licdn.com/dms/image/C4D0BAQH1WPAYy209hA/company-logo_200_200/0/1592584270579?e=2147483647&v=beta&t=3MLf7Yd59Ii37F1547dXM9SM25VPw0xOv7RA5AtfT44' // picture
        )
        course54 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course55 = undefined;
    try {
        let createCourse = await course.createCourse(
            'FIN 540 Sustainable Finance', // courseName
            'Graduate', // academicLevel
            'Finance Program', // courseOwner
            'Elective', // type
            3, // units
            'This course introduces students to sustainable finance. In this course, sustainable finance is understood as the process of ensuring the inclusion of environmental, social, and governance (ESG) considerations into corporate decisions. A sustainable corporation will make their investment decisions that consider not only financial returns but also its social impact. Our textbook provides a clear and masterful discussion of the principles of sustainable business based on “growing the pie” principle. By focusing on “growing the pie” as a corporate objective, the sustainable businesses are able to create shareholder values as well as stakeholder value.', // description
            'Lecture', // instructionalFormats
            'https://fsc.stevens.edu/fin-540/', // syllabus
            'https://www.stevens.edu/sites/stevens_edu/files/QF%20427_428%5B1%5D.pdf', // courseware
            'https://www.open.edu/openlearn/theme/image.php/openlearnng/theme_openlearnng/1650877268/banner-freecourse' // picture
        )
        course55 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course56 = undefined;
    try {
        let createCourse = await course.createCourse(
            'PEP 501 Fundamentals of Atomic Physics', // courseName
            'Graduate', // academicLevel
            'Physics and Engineering Physics Program', // courseOwner
            'Elective', // type
            3, // units
            'The course will cover the most common atomic and nuclear effects, yet covers it in direct relation to a sophisticated quantum mechanical treatment. It thereby connects the theoretical models with the experimental results, showcasing agreement as well as disagreement to outline the validity range of each model. Topics covered include Brownian motion; charge and mass of electrons and ions; Zeeman effect; photoelectric effect; emission, absorption, reflection, refraction, diffraction, absorption, and scattering of X-rays; Compton effect; diffraction of electrons; uncertainty principle; electron optics; atomic spectra and electron distribution; radioactivity; disintegration of nuclei; nuclear processes; nuclear energy; and fission.', // description
            'Lecture', // instructionalFormats
            'https://web.stevens.edu/catalog/archive/2013-2014/ses/pep/gradcourses.html', // syllabus
            'https://web.stevens.edu/catalog/archive/2015-2016/ses/pep/index.html', // courseware
            'https://s30383.pcdn.co/wp-content/uploads/2020/02/MOC-developing-online-course-QO20AA-600x410-2-400x273.png' // picture
        )
        course56 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course57 = undefined;
    try {
        let createCourse = await course.createCourse(
            'PEP 506 Introduction to Astrophysics and Cosmology', // courseName
            'Graduate', // academicLevel
            'Physics and Engineering Physics Program', // courseOwner
            'Elective', // type
            3, // units
            'Theories of the universe, general relativity, Big Bang cosmology, and the inflationary universe; and elementary particle theory and nucleosynthesis in the early universe. Observational cosmology; galaxy formation and galactic structure; and stellar evolution and formation of the elements. White dwarfs, neutron stars and black holes, planetary systems, and the existence of life in the universe.', // description
            'Lecture', // instructionalFormats
            'https://web.stevens.edu/catalog/archive/2014-2015/ses/pep/gradcourses.html', // syllabus
            'https://www.stevens.edu/sites/stevens_edu/files/Stevens_2019-2020_Academic_Catalog.pdf', // courseware
            'http://viebulandshahar.com/wp-content/uploads/2019/05/course_offered_0.jpg' // picture
        )
        course57 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course58 = undefined;
    try {
        let createCourse = await course.createCourse(
            'PEP 507 Introduction to Microelectronics and Photonics', // courseName
            'Graduate', // academicLevel
            'Physics and Engineering Physics Program', // courseOwner
            'Elective', // type
            3, // units
            'An overview of microelectronics and photonics science and technology. It provides the student who wishes to specialize in their application, physics or fabrication with the necessary knowledge of how the different aspects are interrelated. It is taught in three modules: design and applications, taught by EE faculty; operation of electronic and photonic devices, taught by Physics faculty; fabrication and reliability, taught by the materials faculty.', // description
            'Lecture', // instructionalFormats
            'https://web.stevens.edu/catalog/archive/2013-2014/ses/cems/index.html', // syllabus
            'https://web.stevens.edu/catalog/archive/2015-2016/ses/pep/index.html', // courseware
            'https://blog.coursify.me/wp-content/uploads/2019/10/create-videos-online-courses-cover-coursifyme.jpg' // picture
        )
        course58 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course59 = undefined;
    try {
        let createCourse = await course.createCourse(
            'PEP 510 Modern Optics Laboratory', // courseName
            'Graduate', // academicLevel
            'Physics and Engineering Physics Program', // courseOwner
            'Elective', // type
            3, // units
            'The course is designed to familiarize students with a range of optical instruments and their applications. Included will be the measurement of aberrations in optical systems, thin-film properties, Fourier transform imaging systems, nonlinear optics, and laser beam dynamics.', // description
            'Lecture', // instructionalFormats
            'https://web.stevens.edu/catalog/archive/2015-2016/ses/pep/index.html', // syllabus
            'https://www.stevens.edu/schaefer-school-engineering-science/departments/physics/graduate-programs/physics-doctoral-program/curriculum-overview', // courseware
            'https://library.educause.edu/-/media/images/library/2020/3/online_course_development_planning_related_image.jpg' // picture
        )
        course59 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course60 = undefined;
    try {
        let createCourse = await course.createCourse(
            'PEP 515 Photonics I', // courseName
            'Graduate', // academicLevel
            'Physics and Engineering Physics Program', // courseOwner
            'Elective', // type
            3, // units
            'This course will cover topics encompassing the fundamental subject matter for the design of optical systems. Topics will include optical system analysis, optical instrument analysis, applications of thin-film coatings and opto-mechanical system design in the first term. The second term will cover the subjects of photometry and radiometry, spectrographic and spectrophotometric systems, infrared radiation measurement and instrumentation, lasers in optical systems and photon- electron conversion.', // description
            'Lecture', // instructionalFormats
            'https://www.stevens.edu/sites/stevens_edu/files/Stevens_2019-2020_Academic_Catalog.pdf', // syllabus
            'https://web.stevens.edu/catalog/archive/2014-2015/ses/pep/gradcourses.html', // courseware
            'https://www.getsmarter.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc2tMIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c6fc0815a8ed37454f72b08360d927ae3022900c/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lNT1RneWVEYzROZ1k2QmtWVSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--6071781491e8552f628d0c27ac9bfc1c7700589f/harvard_vpal_cybersecurity_managing_risk_in_the_information_age_course_page_small_header_banner.jpg' // picture
        )
        course60 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course61 = undefined;
    try {
        let createCourse = await course.createCourse(
            'PEP 527 Mathematical Methods of Science and Engineering I', // courseName
            'Graduate', // academicLevel
            'Physics and Engineering Physics Program', // courseOwner
            'Elective', // type
            3, // units
            'Fourier series, Bessel functions, and Legendre polynomials as involved in the solution of vibrating systems; tensors and vectors in the theory of elasticity; applications of vector analysis to electrodynamics; vector operations in curvilinear coordinates; numerical methods of interpolation and of integration of functions and differential equations.', // description
            'Lecture', // instructionalFormats
            'https://web.stevens.edu/catalog/archive/2015-2016/ses/pep/index.html', // syllabus
            'https://web.stevens.edu/catalog/archive/2014-2015/ses/pep/gradcourses.html', // courseware
            'https://i.insider.com/6042a9192db4af00117e3e37?width=1136&format=jpeg' // picture
        )
        course61 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course62 = undefined;
    try {
        let createCourse = await course.createCourse(
            'CH 550 Spectra and Structure', // courseName
            'Graduate', // academicLevel
            'Chemistry Program', // courseOwner
            'Elective', // type
            3, // units
            'An intensive course on the interpretation of spectroscopic data; emphasis is on the use of modern spectroscopic techniques, such as NMR (13C, D, 15N, and H), mass (including CI), laser-Raman, ESCA, ORD, CD, IR, and UV for structure elucidation. Special attention is given to the application of computer technology in spectral work. A course designed for practicing chemists in analytical, organic, physical, and biomedical areas. Extensive problem solving. No laboratory.', // description
            'Lecture', // instructionalFormats
            'https://www.stevens.edu/sites/stevens_edu/files/Stevens_2019-2020_Academic_Catalog.pdf', // syllabus
            'https://www.stevens.edu/sites/stevens_edu/files/files/registrar/SPAC/Chemistry/Chemistry_18F.pdf', // courseware
            'https://res.cloudinary.com/highereducation/image/upload/f_auto,fl_lossy,q_auto/w_865,h_320,c_fill,f_auto,q_auto:best,g_center/v1589312327/BestColleges.com/Blog/BC-Blog_MediaStudiesCourses_5.13.20_FTR.jpg' // picture
        )
        course62 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course63 = undefined;
    try {
        let createCourse = await course.createCourse(
            'CH 561 Instrumental Methods of Analysis', // courseName
            'Graduate', // academicLevel
            'Chemistry Program', // courseOwner
            'Elective', // type
            3, // units
            'Primarily a laboratory course, with some lecture presenting the principles and applications of contemporary instrumental analytical methods, with a focus on spectroscopy and separations. Laboratory practice explores ultraviolet, visible and infrared spectrophotometry, atomic absorption spectroscopy, nuclear magnetic resonance spectrometry, gas-liquid and high- performance liquid chromatography, and capillary electrophoresis. These instrumental techniques are utilized for quantitative and qualitative analyses of organic, inorganic, biological and environmental samples.', // description
            'Lecture', // instructionalFormats
            'https://web.stevens.edu/catalog/archive/2014-2015/ses/ccb/index.html', // syllabus
            'https://www.stevens.edu/sites/stevens_edu/files/Stevens_2019-2020_Academic_Catalog.pdf', // courseware
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6YZvs0rItgwKRyIbY2IAFeeAzEWknpYjLAQ&usqp=CAU' // picture
        )
        course63 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course64 = undefined;
    try {
        let createCourse = await course.createCourse(
            'CH 580 Biochemistry I - Cellular Metabolism and Regulation', // courseName
            'Graduate', // academicLevel
            'Chemistry Program', // courseOwner
            'Elective', // type
            3, // units
            'This course includes discussion of biologically relevant topics such as intermolecular forces, amino acids, peptides, structures and functions of proteins, lipids, carbohydrates, nucleic acids. In addition, course includes discussion on topics such as biological activities, kinetics, and metabolic pathways in biosynthesis, regulatory mechanisms, cell respiration, glycolysis, gluconeogenesis, citric acid cycle.', // description
            'Lecture', // instructionalFormats
            'https://www.stevens.edu/sites/stevens_edu/files/Stevens_2019-2020_Academic_Catalog.pdf', // syllabus
            'https://www.stevens.edu/sites/stevens_edu/files/files/registrar/SPAC/Chem_Bio/Chemical%20Biology%20SP%202020-2021.pdf', // courseware
            'https://explorance.com/wp-content/uploads/solutions/hybrid-evaluations.jpg' // picture
        )
        course64 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course65 = undefined;
    try {
        let createCourse = await course.createCourse(
            'CH 640 Advanced Organic and Heterocyclic Chemistry', // courseName
            'Graduate', // academicLevel
            'Chemistry Program', // courseOwner
            'Elective', // type
            3, // units
            'An advanced course in the chemistry of carbon compounds, with special reference to polyfunctional compounds, heterocycles, techniques of literature survey, stereochemical concepts, and physical tools for organic chemists. Fall semester.', // description
            'Lecture', // instructionalFormats
            'https://www.scribd.com/document/525506664/Stevens-2020-2021-Academic-Catalog', // syllabus
            'https://www.stevens.edu/sites/stevens_edu/files/Stevens_2019-2020_Academic_Catalog.pdf', // courseware
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvX76XXgAkF2QPK2xfFXY3V4Sl-ZdIrZtcEA&usqp=CAU' // picture
        )
        course65 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course66 = undefined;
    try {
        let createCourse = await course.createCourse(
            'MT 501 Introduction to Materials Science and Engineering', // courseName
            'Graduate', // academicLevel
            'Materials Engineering Program', // courseOwner
            'Elective', // type
            3, // units
            'An  introduction  to  the  structures/properties  relationships  of  materials  principally  intended  for  students  with  a  limited background in the field of materials science. Topics include: structure and bonding, thermodynamics of solids, alloys and phase diagrams, mechanical behavior, electrical properties and the kinetics of solid state reactions. The emphasis of this subject is the relationship between structure and composition, processing (and synthesis), properties and performance of materials.', // description
            'Lecture', // instructionalFormats
            'https://www.stevens.edu/sites/stevens_edu/files/Stevens_2019-2020_Academic_Catalog.pdf', // syllabus
            'https://web.stevens.edu/catalog/archive/2013-2014/ses/ece/gradcourses.html', // courseware
            'https://assets-global.website-files.com/5e39e095596498a8b9624af1/5f18321b82797afe4defe702_101%20crashcourse.jpg' // picture
        )
        course66 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course67 = undefined;
    try {
        let createCourse = await course.createCourse(
            'MT 507 Introduction to Microelectronics and Photonics', // courseName
            'Graduate', // academicLevel
            'Materials Engineering Program', // courseOwner
            'Elective', // type
            3, // units
            'An overview of microelectronics and photonics science and technology. It provides the student who wishes to specialize in their application, physics or fabrication with the necessary knowledge of how the different aspects are interrelated. It is taught in three modules: design and applications, taught by EE faculty; operation of electronic and photonic devices, taught by Physics faculty; fabrication and reliability, taught by the materials faculty.', // description
            'Lecture', // instructionalFormats
            'https://web.stevens.edu/catalog/archive/2013-2014/ses/cems/index.html', // syllabus
            'https://web.stevens.edu/catalog/archive/2013-2014/ses/pep/index.html', // courseware
            'https://s3.amazonaws.com/course_report_staging/rich/rich_files/rich_files/manual/Outcomes_Report_Header_V2.png' // picture
        )
        course67 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course68 = undefined;
    try {
        let createCourse = await course.createCourse(
            'MT 515 Photonics I', // courseName
            'Graduate', // academicLevel
            'Materials Engineering Program', // courseOwner
            'Elective', // type
            3, // units
            'This course will cover topics encompassing the fundamental subject matter for the design of optical systems. Topics will include optical system analysis, optical instrument analysis, applications of thin-film coatings and opto-mechanical system design in the first term. The second term will cover the subjects of photometry and radiometry, spectrographic and spectrophotometric systems, infrared radiation measurement and instrumentation, lasers in optical systems and photon- electron conversion.', // description
            'Lecture', // instructionalFormats
            'https://www.stevens.edu/sites/stevens_edu/files/Stevens_2019-2020_Academic_Catalog.pdf', // syllabus
            'https://web.stevens.edu/catalog/archive/2013-2014/ses/cems/gradcourses.html', // courseware
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaCqH_KDzbLThYvmDjGiNRGb2O5iKHcripQA&usqp=CAU' // picture
        )
        course68 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course69 = undefined;
    try {
        let createCourse = await course.createCourse(
            'MT 520 Analysis and Design of Composites', // courseName
            'Graduate', // academicLevel
            'Materials Engineering Program', // courseOwner
            'Elective', // type
            3, // units
            'Composite  material  characterization;  composite  mechanics  of  plates,  panels,  beams,  columns,  and  rods  integrated with design procedures; analysis and design of composite structures; joining methods and procedures; introduction to manufacturing processes of filament winding, braiding, injection, compression and resin transfer molding, machining and drilling; and industrial applications.', // description
            'Lecture', // instructionalFormats
            'https://www.stevens.edu/sites/stevens_edu/files/Stevens_2019-2020_Academic_Catalog.pdf', // syllabus
            'https://www.stevens.edu/sites/stevens_edu/files/files/SB/finance/Syllabus-TM510A.pdf', // courseware
            'https://images.indianexpress.com/2020/03/laptop759.jpg' // picture
        )
        course69 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course70 = undefined;
    try {
        let createCourse = await course.createCourse(
            'MT 542 Data Science in Pharmaceutical Development', // courseName
            'Graduate', // academicLevel
            'Materials Engineering Program', // courseOwner
            'Elective', // type
            3, // units
            'The increased availability of digital data in the pharmaceutical industry has enabled the adoption of machine learning models to advance pharmaceutical development efforts.  In addition, the emergence of open source languages with extensive libraries of powerful algorithms has transformed the way in which data science is adopted and practiced in pharmaceutical development organizations. This class provides the students with an introduction to pharmaceutical development aimed at contextualizing the incorporation of data science methodologies acquired in mathematical foundation courses (see requirements below).  Industrial case studies in the public domain will be used as practice examples to demonstrate the incorporation of data science principles to industrially relevant applications.', // description
            'Lecture', // instructionalFormats
            'https://www.stevens.edu/sites/stevens_edu/files/pictures/SES/CEMS/Application_of_machine_learning_to_Pharma_graduate_certificate.pdf', // syllabus
            'https://www.stevens.edu/sites/stevens_edu/files/QF%20427_428%5B1%5D.pdf', // courseware
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4FGvfzBwtDPvte364aLsXp5TTk1gwT6GyzQ&usqp=CAU' // picture
        )
        course70 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course71 = undefined;
    try {
        let createCourse = await course.createCourse(
            'CE 508 Transportation Engineering', // courseName
            'Graduate', // academicLevel
            'Civil Engineering Program', // courseOwner
            'Elective', // type
            3, // units
            'A description of and introduction to the major areas of transportation engineering planning and management which deals with roadways, streets, and highways and the people and vehicles that interact with each other. Topics of discussion include land use, energy, transportation economics, and transportation systems management, along with the traditional areas of traffic engineering. Open-ended problem solving using practical case examples is stressed.', // description
            'Lecture', // instructionalFormats
            'https://stevens.smartcatalogiq.com/en/2021-2022/Academic-Catalog/Department-of-Civil-Environmental-and-Ocean-Engineering/Undergraduate-Programs/Bachelor-of-Engineering-in-Civil-Engineering', // syllabus
            'https://www.stevens.edu/sites/stevens_edu/files/Stevens_2019-2020_Academic_Catalog.pdf', // courseware
            'https://www.ox.ac.uk/sites/files/oxford/styles/ow_listing/s3/field/field_image_highlight/Courses%201%20-%20IW_0.jpg?itok=0nQsDyiS' // picture
        )
        course71 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course72 = undefined;
    try {
        let createCourse = await course.createCourse(
            'CE 535 Stormwater Management', // courseName
            'Graduate', // academicLevel
            'Civil Engineering Program', // courseOwner
            'Elective', // type
            3, // units
            'The management of stormwater must be addressed for any modern development or construction project. The interdisciplinary nature of stormwater is relevant to protecting environmental resources and water supplies, preventing combined sewer overflows and local flooding, minimizing pollutant discharges to water bodies, and planning for livable cities. This course will focus on technical design for urban stormwater control, including Green Infrastructure technologies such as living/ green roofs, bio-retention, permeable pavement, and conventional solutions such as detention and retention ponds and constructed wetlands. The course will emphasize engineering solutions for practical applications, in the context of regulations imposed by both state and federal agencies.', // description
            'Lecture', // instructionalFormats
            'https://www.stevens.edu/sites/stevens_edu/files/Stevens_2019-2020_Academic_Catalog.pdf', // syllabus
            'https://web.stevens.edu/catalog/archive/2013-2014/ses/ceoe/gradcourses.html', // courseware
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUZBxdLNdXtN6iNLrN3PFeK1VPEb07Op7ECA&usqp=CAU' // picture
        )
        course72 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course73 = undefined;
    try {
        let createCourse = await course.createCourse(
            'EN 501 Seminar in Sustainability Management', // courseName
            'Graduate', // academicLevel
            'Environmental Engineering Program', // courseOwner
            'Elective', // type
            3, // units
            'This is a weekly seminar series that features invited speakers from various professional fields related to Sustainability Management. Speakers are recognized experts from academia, industry, and the government who present on a spectrum of topics ranging from research work to industry projects. Speakers attend a meet and greet with students, thereby providing valuable networking opportunities for future job seekers in the sustainability field. Seminars are open to all members of the Stevens community. Students enrolled for credit will have specific task requirements.', // description
            'Lecture', // instructionalFormats
            'https://www.stevens.edu/sites/stevens_edu/files/Stevens_2019-2020_Academic_Catalog.pdf', // syllabus
            'https://stevens.smartcatalogiq.com/2021-2022/Academic-Catalog/Department-of-Civil-Environmental-and-Ocean-Engineering/Graduate-Programs/Master-of-Science-in-Sustainability-Management', // courseware
            'https://media-exp1.licdn.com/dms/image/C4D0BAQH1WPAYy209hA/company-logo_200_200/0/1592584270579?e=2147483647&v=beta&t=3MLf7Yd59Ii37F1547dXM9SM25VPw0xOv7RA5AtfT44' // picture
        )
        course73 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course74 = undefined;
    try {
        let createCourse = await course.createCourse(
            'EN 541 Fate and Transport of Environmental Contaminants', // courseName
            'Graduate', // academicLevel
            'Environmental Engineering Program', // courseOwner
            'Elective', // type
            3, // units
            'Description of fundamental processes in natural and engineered systems, including intermedia transport of contaminants between environmental compartments (air, water, soil, and biota) and chemical and biochemical transformations within these compartments.', // description
            'Lecture', // instructionalFormats
            'https://www.stevens.edu/sites/stevens_edu/files/files/SB/finance/Syllabus-TM510A.pdf', // syllabus
            'https://www.stevens.edu/sites/stevens_edu/files/2019.Dec_.FE%20590.pdf', // courseware
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwKi-YNzTOzMta4X7VIAffMvf363pFiij16w&usqp=CAU' // picture
        )
        course74 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    let course75 = undefined;
    try {
        let createCourse = await course.createCourse(
            'EN 551 Environmental Chemistry of Soils and Natural Surfaces', // courseName
            'Graduate', // academicLevel
            'Environmental Engineering Program', // courseOwner
            'Elective', // type
            3, // units
            'Soil is a mixture of inorganic and organic solids, air, water, and microorganisms. Soil affects the environmental chemistry through the interactions at solution-solid and air-solid interfaces, and the soil in turn is affected by the environmental and human activities. Soil science is not only important to agriculture, but also to diverse fields, such as environmental engineering, biogeochemistry, and hydrology. This course will enable students to understand the chemical properties of soil, soil minerals, natural surfaces, and mechanisms regulating solute chemistry in soil solutions. The fate and transport of inorganic and organic pollutants in soil and soil remediation technologies are discussed. One year of introductory chemistry is required for students who want to take this course.', // description
            'Lecture', // instructionalFormats
            'https://www.stevens.edu/sites/stevens_edu/files/Stevens_2019-2020_Academic_Catalog.pdf', // syllabus
            'https://web.stevens.edu/catalog/archive/2013-2014/ses/ceoe/curriculum.html', // courseware
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4-4SXH177y7QEBhLFuYJuHs4OcF_ALTjkbw&usqp=CAU' // picture
        )
        course75 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }


    await user.createCourseReview(
        user1,      //这个先不改，只改最后三个属性性
        course1,    //这个先不改，只改最后三个属性性
        "The lectures are quite easy to understand and so are the Labs. Only need to make sure that you are not careless while working on labs or else you'll lose points and that is something that the professor is always clear about. If you dedicatedly work on the labs and the project, you can easily score an Best professor at Stevens",
        {difficulty: "Easy", chanceToGetA: 'Low', workLoad: 'Less'},
        4.5   //0.0-5.0
    )
    //Difficulty (Easy / Medium / Hard)
    //Chance of getting A (Low / Medium / High)
    //Workload (Low / Medium / Lots)

    
    await user.createCourseReview(
        user1,
        course2,
        "He is very arrogant, but his course is useful. His assignments take time but provides good knowledge. God bless you if he makes the project group because not everyone will work and you will cuss him for the group he made. but course is worth taking!",
        {difficulty: "Medium", chanceToGetA: 'Low', workLoad: 'Lots'},
        4.5
    )
   
    
    await user.createCourseReview(
        user1,
        course3,
        "Force students to purchase zybooks ($88/term). And over 2000 questions in first week and you need to type all of them on zybooks to get credit.",
        {difficulty: "Medium", chanceToGetA: 'Medium', workLoad: 'Lots'},
        2.3
    )
   
    
    await user.createCourseReview(
        user1,
        course4,
        "Professor Peyrovian seems like a great person who wants to be a good professor but unfortunately is not. Lectures are quite literally read word for word off of slides that are not even made by him or the department. He does not answer questions in any way that is useful and seems to think that CS 383 is the hardest and most difficult class here lol.",
        {difficulty: "Medium", chanceToGetA: 'Medium', workLoad: 'Lots'},
        2.3
    )
   
    
    await user.createCourseReview(
        user1,
        course5,
        "Awesome prof who teaches the material very well. Not much hw and quizzes are usually easy (make sure to do the optional exercises tho).",
        {difficulty: "Easy", chanceToGetA: 'Medium', workLoad: 'Medium'},
        4.2
    )
   
    
    await user.createCourseReview(
        user2,
        course6,
        "Good at lecturing and clearly an intelligent guy. I would give a 5 but Prof. Bonelli has a habit of getting lost in the sauce and losing me in lecture.",
        {difficulty: "Medium", chanceToGetA: 'Low', workLoad: 'Low'},
        4.2
    )
   
    
    await user.createCourseReview(
        user2,
        course7,
        "Very caring professor who obviously knows the subject very well. He can go a bit fast, but if you ask him to re-explain things he will and it's generally worth it. You should definitely pay attention in class, because while the work is tough if you pay attention and participate you'll be fine. You should also attend class because of weekly quizzes.",
        {difficulty: "Easy", chanceToGetA: 'Low', workLoad: 'Low'},
        4.2
    )
   
    
    await user.createCourseReview(
        user2,
        course8,
        "Challenging, but always completely fair. He really cares about the subject and his students, which occasionally leads to leads to him getting frustrated by lack of participation or misunderstanding of the material. Definitely take his courses if you get the chance. They are tough, but you get your money's worth with him.",
        {difficulty: "Medium", chanceToGetA: 'Medium', workLoad: 'Low'},
        3.7
    )
  
    
    await user.createCourseReview(
        user2,
        course9,
        "Very enthusiastic about what he teaches, but goes really fast.",
        {difficulty: "Easy", chanceToGetA: 'Medium', workLoad: 'Medium'},
        4.0
    )
  
    
    await user.createCourseReview(
        user3,
        course1,
        "Really nice guy who cares about his students' performance more than his paycheck.",
        {difficulty: "Medium", chanceToGetA: 'High', workLoad: 'Low'},
        4.0
    )
 
    
    await user.createCourseReview(
        user4,
        course41,
        "His lectures are clear and encourages everyone to ask questions when unsure. (Do that. It'll help.) Make sure to show up for class, as there are often quizzes.",
        {difficulty: "Medium", chanceToGetA: 'High', workLoad: 'Medium'},
        4.1
    )
 
    
    await user.createCourseReview(
        user5,
        course41,
        "Very enthusiastic about what he teaches, but goes really fast.",
        {difficulty: "Hard", chanceToGetA: 'High', workLoad: 'Low'},
        4.1
    )
 
    
    await user.createCourseReview(
        user3,
        course42,
        "Very nice and teaches the class very logically. Very approachable in and out of class but a hard grader, though the course material is VERY easy if you read the notes. His exams are generally easy, with 1 tricky question max.",
        {difficulty: "Medium", chanceToGetA: 'Medium', workLoad: 'Low'},
        4.0
    )
 
    
    await user.createCourseReview(
        user4,
        course42,
        "Greenberg is probably one of the best professors I've had at UD. His class is very clear and if you pay attention for at least a little bit of it and read the notes you should do well.",
        {difficulty: "Hard", chanceToGetA: 'Medium', workLoad: 'Medium'},
        4.0
    )

    
    await user.createCourseReview(
        user5,
        course42,
        "Great content in the course. try to use the aws credits and get hands on aws experience",
        {difficulty: "Medium", chanceToGetA: 'Medium', workLoad: 'Medium'},
        3.8
    )

    
    await user.createCourseReview(
        user6,
        course42,
        "His accent is a major problem, otherwise he is very knowledgable.",
        {difficulty: "Hard", chanceToGetA: 'Medium', workLoad: 'Low'},
        3.8
    )

    
    await user.createCourseReview(
        user10,
        course41,
        "Class isn't too hard and not too much work is given. What truly sucks about this course is the lack of quality. Its kind of hard to describe, but it you can easily see how little effort is put into it. Also I am pretty sure Rahman has been teaching this class for several years, yet he still doesn't know how to use canvas.",
        {difficulty: "Hard", chanceToGetA: 'Medium', workLoad: 'Lots'},
        3.5
    )

    
    await user.createCourseReview(
        user10,
        course42,
        "great professor. daily quick quiz.",
        {difficulty: "Medium", chanceToGetA: 'Medium', workLoad: 'Medium'},
        3.5
    )

    
    await user.createCourseReview(
        user10,
        course35,
        "Its like this was the first year he taught this course and we were responsible for working out all the kinks. Year after year he doesn't fix issues with the assignments or lectures, causing us to hit the same road blocks. He is almost never available for help, and says he responds to emails or Piazza posts but never does! Lots of false promises!!!",
        {difficulty: "Hard", chanceToGetA: 'Medium', workLoad: 'Lots'},
        2.0
    )

    
    await user.createCourseReview(
        user10,
        course45,
        "Never reply email. Lots of boring podcasts. Too many homework. Just waste of time.",
        {difficulty: "Medium", chanceToGetA: 'Medium', workLoad: 'Lots'},
        2.0
    )

    
    await user.createCourseReview(
        user7,
        course55,
        "It may not have been so bad if the materials were actually properly prepared. Often the material had broken links / missing videos. The biggest issue was the lecture audio and video were not in sync, requiring you to constantly pause or look at the PDF on the side to stay in sync. Several students reported this to him, but he did nothing about it.",
        {difficulty: "Hard", chanceToGetA: 'Medium', workLoad: 'Lots'},
        2.0
    )

    
    await user.createCourseReview(
        user7,
        course65,
        "This is THE worst class at Stevens. It froze over in 2009 as all the lectures were recorded then and haven't been touched since. His stub code is years old and contains many bugs/errors that will trip you up. He hasn't touched the materials in years, and often needs to refresh his memory when asked questions. He can't be bothered to help! AVOID!!!!.",
        {difficulty: "Medium", chanceToGetA: 'Low', workLoad: 'Lots'},
        2.0
    )

    
    await user.createCourseReview(
        user7,
        course75,
        "No coding assignments, only homework is latex notes for a few of the lectures with a partner. Offers extra credit. Easiest grader I've had and laid back atmosphere.",
        {difficulty: "Easy", chanceToGetA: 'Medium', workLoad: 'Low'},
        4.4
    )

    
    await user.createCourseReview(
        user7,
        course38,
        "Amazing knowledge about Statistical Machine Learning and AI. Must take class if you want to get into Machine Learning research!",
        {difficulty: "Medium", chanceToGetA: 'Medium', workLoad: 'Low'},
        4.4
    )

    
    await user.createCourseReview(
        user8,
        course38,
        "The lectures are great albeit a little bit of information overload. Take notes as midterm and endterm would be straight out of the material. A lot depends on the project. Pay attention to the grading criteria. Course is not really technical but is crucial if you are interested in building clean UI and want to learn about usability.",
        {difficulty: "Easy", chanceToGetA: 'High', workLoad: 'Low'},
        4.7
    )

    
    await user.createCourseReview(
        user8,
        course37,
        "Awesome Professor. Very cool about doubts of students. Respected.",
        {difficulty: "Easy", chanceToGetA: 'Medium', workLoad: 'Low'},
        4.7
    )

    
    await user.createCourseReview(
        user8,
        course36,
        "You actually will learn a lot in his class, and Prof. Duggan is a good teacher. But it's simply not worth it to take this class! Some of the homework assignments (given weekly) take up to 15 hours to complete. If you finish an assignment within 10 hours you'll probably feel good about yourself. Save yourself a lot of anxiety and frustration. Avoid!",
        {difficulty: "Medium", chanceToGetA: 'Medium', workLoad: 'Medium'},
        2.0
    )

    
    await user.createCourseReview(
        user8,
        course35,
        "DO NOT LISTEN TO ANYONE, YOU WILL REGRET TAKING THIS CLASS.",
        {difficulty: "Hard", chanceToGetA: 'Medium', workLoad: 'Lots'},
        2.0
    )

    
    await user.createCourseReview(
        user9,
        course35,
        "Overall, a good prof who helps his students understand the computer programming in order to excel you need to put in the time and effort.",
        {difficulty: "Easy", chanceToGetA: 'Medium', workLoad: 'Low'},
        4.2
    )

    
    await user.createCourseReview( 
        user9,
        course36,
        "great for someone new to computer science.",
        {difficulty: "Easy", chanceToGetA: 'High', workLoad: 'Medium'},
        4.2
    )

    
    await user.createCourseReview(
        user9,
        course13,
        "The most genuine professor who helped me achieve my dreams.",
        {difficulty: "Easy", chanceToGetA: 'Medium', workLoad: 'Medium'},
        3.5
    )

    
    await user.createCourseReview(
        user10,
        course21,
        "You really have to put the work in to get a good grade.",
        {difficulty: "Medium", chanceToGetA: 'Medium', workLoad: 'Medium'},
        3.5
    )

    
    await user.createCourseReview(
        user10,
        course22,
        "Do not listen to the Wang naysayers, they don't know C. (That is a Wang inside joke, he is a hilarious man if you actually listen to him) If you have ever talked to anyone that says Wang is a horrible teacher, they probably dropped the class and changed their major. If you ask him for help he is way more than willing to help you. Studying is a must.",
        {difficulty: "Medium", chanceToGetA: 'Low', workLoad: 'Medium'},
        3.0
    )

    
    await user.createCourseReview(
        user10,
        course23,
        "He's good if you can understand him or read whats on the board. He tends to not erase completely and just keep writing over things.",
        {difficulty: "Medium", chanceToGetA: 'Medium', workLoad: 'Lots'},
        3.0
    )

    
    await user.createCourseReview(
        user10,
        course24,
        "He is a very honest person, very helpful-minded and is approachable at any time. His lab is very disoriented though, most of the students speak native languages while at work and you don't understand a thing, also is very reluctant to clean lab spaces. His presentations are very detailed and he cites lot of examples which is helpful. really good.",
        {difficulty: "Easy", chanceToGetA: 'Medium', workLoad: 'Medium'},
        4.3
    )

    
    await user.createCourseReview(
        user10,
        course30,
        "Professor is honestly very helpful and tries to improve his lectures/class. If you manage to find him with time, he will provide help as much as he can. Honestly though, his lectures are rather dry and it does not help there is much overlap with materials course so you may be bored with the class. Tests are fair and shouldn't be too difficult.",
        {difficulty: "Medium", chanceToGetA: 'Medium', workLoad: 'Medium'},
        4.3
    )

    
    await user.createCourseReview(
        user10,
        course31,
        "The best professor in the school.",
        {difficulty: "Medium", chanceToGetA: 'Medium', workLoad: 'Low'},
        4.0
    )

    
    await user.createCourseReview(
        user10,
        course32,
        "Highly respected.",
        {difficulty: "Easy", chanceToGetA: 'Medium', workLoad: 'Medium'},
        4.0
    )

    
    await user.createCourseReview(
        user11,
        course30,
        "His class makes you think. I would totally take any class he will teach.",
        {difficulty: "Easy", chanceToGetA: 'High', workLoad: 'Medium'},
        3.6
    )

    
    await user.createCourseReview(
        user12,
        course1,
        "Awesome teacher! Very helpful!",
        {difficulty: "Easy", chanceToGetA: 'Medium', workLoad: 'Low'},
        3.6
    )

    
    await user.createCourseReview(
        user12,
        course2,
        "George is an awesome professor and you learn so much in performance!",
        {difficulty: "Easy", chanceToGetA: 'Medium', workLoad: 'Medium'},
        4.7
    )

    
    await user.createCourseReview(
        user12,
        course3,
        "Such a great professor.",
        {difficulty: "Easy", chanceToGetA: 'High', workLoad: 'Low'},
        4.7
    )

    
    await user.createCourseReview(
        user12,
        course4,
        "Such a great professor. A little hard to understand but the class is super easy and gives great lectures.",
        {difficulty: "Easy", chanceToGetA: 'Medium', workLoad: 'Medium'},
        3.2
    )

    
    await user.createCourseReview(
        user12,
        course5,
        "Great professor. very friendly and understanding. Easy class.",
        {difficulty: "Easy", chanceToGetA: 'High', workLoad: 'Medium'},
        3.2
    )

    
    await user.createCourseReview(
        user12,
        course6,
        "This professor is kind and intelligent. However, he can't teach.",
        {difficulty: "Medium", chanceToGetA: 'Medium', workLoad: 'Low'},
        3.7
    )

    
    await user.createCourseReview(
        user12,
        course7,
        "Hes a good person but when it comes to teaching I wouldnt recommend him especially if you are not proficient in Excel.",
        {difficulty: "Easy", chanceToGetA: 'Medium', workLoad: 'Medium'},
        3.7
    )

    
    await user.createCourseReview(
        user12,
        course8,
        "Actually the worst teacher ever. I've never had a worse professor in my life. Doesn't lecture anything worth knowing and then tests and homework are extremely difficult.",
        {difficulty: "Medium", chanceToGetA: 'Medium', workLoad: 'Medium'},
        1.0
    )

    
    await user.createCourseReview(
        user12,
        course9,
        "Worst ever.",
        {difficulty: "Hard", chanceToGetA: 'Medium', workLoad: 'Low'},
        1.0
    )

    
    await user.createCourseReview(
        user12,
        course10,
        "Despite his name, haMID is absolutely not MID. He is a great professor. His lectures are interesting and useful. A great teacher. Tests are slightly difficult but fair.",
        {difficulty: "Easy", chanceToGetA: 'Medium', workLoad: 'Medium'},
        4.5
    )

    
    await user.createCourseReview(
        user13,
        course40,
        "The best professor in the ME department. Explains content very clearly, and in a manner easy to understand even if you did not understand thermodynamics. Funny and understanding professor. Peaked my interest in thermal engineering, and would take courses in order to have him as my professor. If you can have him, take him over any other professor.",
        {difficulty: "Medium", chanceToGetA: 'Medium', workLoad: 'Low'},
        4.5
    )

    
    await user.createCourseReview(
        user13,
        course41,
        "Sad times. So much pain. Makes me want to see the sun blow up.",
        {difficulty: "Easy", chanceToGetA: 'Medium', workLoad: 'Low'},
        3.0
    )

    
    await user.createCourseReview(
        user13,
        course42,
        "Salman is great. Honestly one of the best lecturers ever and makes the material very clear. The homework is challenging but helps with the exams.",
        {difficulty: "Medium", chanceToGetA: 'High', workLoad: 'Medium'},
        4.0
    )

    
    await user.createCourseReview(
        user13,
        course43,
        "I took ME 524 Fundamentals of Remote Sensing with Dimitri online. There was no textbook, the only material he gave us were his PowerPoints from class. He gave these to us without any notes, audio or video to accompany them, they were useless. I spoke to my department head about this, I don't think this class will be offered for credit anymore.",
        {difficulty: "Medium", chanceToGetA: 'Medium', workLoad: 'Medium'},
        2.9
    )

    
    await user.createCourseReview(
        user13,
        course51,
        "The GOAT. Best lab I've ever taken. Guy is hilarious and keeps things interesting. Looks out for you and make sure you learn.",
        {difficulty: "Easy", chanceToGetA: 'Medium', workLoad: 'Low'},
        4.8
    )

    
    await user.createCourseReview(
        user13,
        course52,
        "I felt like the tests were hard and the study guides were not always reflective of the material on the test or what was covered on the lecture slides in class.",
        {difficulty: "Hard", chanceToGetA: 'Medium', workLoad: 'Lots'},
        3.0
    )

    
    await user.createCourseReview(
        user13,
        course53,
        "nice professor, she is very helpful. if you need more help, she is very happy to help you. always go to class on time. dont skip class.",
        {difficulty: "Medium", chanceToGetA: 'Low', workLoad: 'Medium'},
        3.5
    )

    
    await user.createCourseReview(
        user13,
        course54,
        "Really just a great dude all around. You can tell how much he cares about teaching and he gives off dad energy. He's always ready to help!",
        {difficulty: "Easy", chanceToGetA: 'Medium', workLoad: 'Low'},
        5.0
    )

    
    await user.createCourseReview(
        user13,
        course64,
        "Great Professor! Very Fun class with lots of discussions. We talk about Hobbes, Locke, Rousseau Mill, and many more. I must say Professor Ryan is a great Political Science teacher and I would recommend him to anyone.",
        {difficulty: "Medium", chanceToGetA: 'Medium', workLoad: 'Medium'},
        2.5
    )

    
    await user.createCourseReview(
        user13,
        course65,
        "Horrible professor. Lack of organization, effort to care for his students' performances in his classes, and open-mindedness. This class has been one of the worst classes I've ever taken at Stevens.",
        {difficulty: "Hard", chanceToGetA: 'Low', workLoad: 'Medium'},
        2.3
    )

    
    await user.createCourseReview(
        user13,
        course66,
        "One of the worst professors I have ever had to be with. This man cannot teach for the life of him. Everything is disorganized, the classes barely understand what is going on. And this specific course focuses way too much on assembly programming instead of actual microprocessor architecture. Avoid at all cost.",
        {difficulty: "Medium", chanceToGetA: 'Low', workLoad: 'Lots'},
        2.3
    )

    
    await user.createCourseReview(
        user13,
        course67,
        "He is a good professor. The lecture establishes basic knowledges but it needs some more reading and some google research in order to get better understanding and to complete the exams/quizes. Also, he has very strong background what he teach.",
        {difficulty: "Medium", chanceToGetA: 'Low', workLoad: 'Medium'},
        2.9
    )

    
    await user.createCourseReview(
        user13,
        course71,
        "Going to his class was stressful.",
        {difficulty: "Medium", chanceToGetA: 'Medium', workLoad: 'Lots'},
        3.9
    )

    
    await user.createCourseReview(
        user13,
        course72,
        "Robert is one of the toughest teachers I have ever had not due to the class vigor but merely due to his incompetence. He does not post instructions for assignments, expects too much from students, no one pays attention during class but you miss nothing. All class periods are mandatory but are just slide shows. 0/5 if it wasn't funny to watch.",
        {difficulty: "Hard", chanceToGetA: 'Low', workLoad: 'Lots'},
        1.0
    )

    
    await user.createCourseReview(
        user13,
        course73,
        "He makes sure his class understands the topic well and he delivers at his best. It is always fun attending his lectures.",
        {difficulty: "Medium", chanceToGetA: 'Low', workLoad: 'Medium'},
        4.1
    )

    
    await user.createCourseReview(
        user13,
        course74,
        "pathetic professor. Never take it. Teaches all out of scope things.",
        {difficulty: "Hard", chanceToGetA: 'Low', workLoad: 'Medium'},
        2.9
    )

    
    await user.createCourseReview(
        user13,
        course75,
        "If you want marks, don't take this class. At your face she doesn't seem strict at all, but when the marks come in, you'll know the real her. She says she wants us to learn, but doesn't realize, some aren't experienced or aren't interested in this compulsory course. She destroyed my GPA. Two exams, two presentations, so much homework and a B.",
        {difficulty: "Medium", chanceToGetA: 'Low', workLoad: 'Lots'},
        3.0
    )

    
    await user.createCourseReview(
        user14,
        course25,
        "Great guy.",
        {difficulty: "Easy", chanceToGetA: 'High', workLoad: 'Medium'},
        5.0
    )

    
    await user.createCourseReview(
        user14,
        course26,
        "He's great, super knowledgeable on the material and is very clear with his expectations.",
        {difficulty: "Medium", chanceToGetA: 'Medium', workLoad: 'Lots'},
        4.0
    )

    
    await user.createCourseReview(
        user14,
        course27,
        "Attendance is not mandatory but participation in his classes will go a long way.",
        {difficulty: "Easy", chanceToGetA: 'Medium', workLoad: 'Medium'},
        3.9
    )

    
    await user.createCourseReview(
        user14,
        course28,
        "He is a good professor and you would understand whatever he teaches if you in full concentration. However, in-class it gets boring a bit, but revise his lectures and you'll get to learn a lot. His assignments are good. It is fairly easy to get an A, if the assignments are done correctly. Overall he is a good Prof.",
        {difficulty: "Medium", chanceToGetA: 'Medium', workLoad: 'Medium'},
        3.8
    )

    
    await user.createCourseReview(
        user14,
        course29,
        "He is awful at teaching and grading. Never take any course with him.",
        {difficulty: "Hard", chanceToGetA: 'Medium', workLoad: 'Medium'},
        2.5
    )

    
    await user.createCourseReview(
        user14,
        course30,
        "By far, one of the most rigorous courses I have ever had. Having said that, If you put in time and effort, learning opportunity is limitless in the course and professor creamer makes sure that none of your doubts go unexplained. The material/textbooks provided are extremely helpful as well. Good course if you want to actually learn about the topics.",
        {difficulty: "Medium", chanceToGetA: 'Low', workLoad: 'Medium'},
        3.0
    )

    
    await user.createCourseReview(
        user14,
        course43,
        "She gives you every opportunity to do well, but you must use the resources provided.",
        {difficulty: "Medium", chanceToGetA: 'High', workLoad: 'Medium'},
        5.0
    )

    
    await user.createCourseReview(
        user14,
        course44,
        "This class was a disaster.",
        {difficulty: "Hard", chanceToGetA: 'Low', workLoad: 'Medium'},
        3.0
    )


    await user.createCourseReview(
        user14,
        course53,
        "He's really chill. It's accounting so its obviously boring, but he makes dad jokes here and there that are pretty decent I must say. HW takes a decent amount of time, so just get it done early. Overall, easy going guy, easy going class. As long as you pay attention, you should be fine.",
        {difficulty: "Easy", chanceToGetA: 'Medium', workLoad: 'Medium'},
        5.0
    )


    await user.createCourseReview(
        user14,
        course54,
        "Keeps the class light and fun for boring subject like accounting.",
        {difficulty: "Medium", chanceToGetA: 'Medium', workLoad: 'Medium'},
        5.0
    )


    await user.createCourseReview(
        user14,
        course55,
        "Easiest A I've ever seen. Took the online course of FIN615. Each week is a quiz which is not at all thought-provoking. Midterm and final have same exact questions from weekly quizzes so it'd be extremely difficult to not do well. 2 chances on each quiz/midterm/final. Didn't learn a thing.",
        {difficulty: "Medium", chanceToGetA: 'Low', workLoad: 'Medium'},
        3.0
    )


    await user.createCourseReview(
        user14,
        course56,
        "He talks whatever comes to his mind. Doesnt follow any syllabus. No discipline. Nothing is clear in this course. Everything is unpredictable. This is introductory course. But the things he asking without teaching is a lot. Basically, you are on yourself. Definitely wouldt recommend.",
        {difficulty: "Medium", chanceToGetA: 'Medium', workLoad: 'Lots'},
        1.0
    )


    await user.createCourseReview(
        user14,
        course57,
        "This class helped me soooo much and it was because the professor cared. He offered as much help as anyone needed and we really felt he wanted us to succeed.",
        {difficulty: "Medium", chanceToGetA: 'Low', workLoad: 'Lots'},
        4.0
    )


    await user.createCourseReview(
        user14,
        course58,
        "He knows his stuff very well and will give you feedback on a lot of things. Took him for SKIL and cares about you learning the material and explaining how signal processing works etc.",
        {difficulty: "Easy", chanceToGetA: 'Medium', workLoad: 'Medium'},
        3.7
    )


    await user.createCourseReview(
        user14,
        course59,
        "She is one of the most boring teachers I have had in my whole life. You will learn nothing in lecture all year. We are two weeks in and 80% of the kids and lecture don't even show up because it is pointless. Every time i go to lecture I regret it.",
        {difficulty: "Hard", chanceToGetA: 'Medium', workLoad: 'Lots'},
        2.8
    )


    await user.createCourseReview(
        user14,
        course60,
        "The GOAT. Best lab I've ever taken. Guy is hilarious and keeps things interesting. Looks out for you and make sure you learn.",
        {difficulty: "Easy", chanceToGetA: 'High', workLoad: 'Medium'},
        4.8
    )


    await user.createCourseReview(
        user14,
        course61,
        "Such an easy going guy! Really tries to help everyone get a good grade.",
        {difficulty: "Medium", chanceToGetA: 'High', workLoad: 'Medium'},
        4.0
    )


    await user.createCourseReview(
        user14,
        course62,
        "He's awesome.",
        {difficulty: "Medium", chanceToGetA: 'Medium', workLoad: 'Medium'},
        4.0
    )


    await user.createCourseReview(
        user14,
        course63,
        "Professor Lukic is incredible. I sucked at physics entering this class, but Lukic's passion for physics and astronomy made me become more interested in physics. His problems are difficult but I guarantee class with him will be a worthwhile experience.",
        {difficulty: "Medium", chanceToGetA: 'High', workLoad: 'Low'},
        4.1
    )


    await user.createCourseReview(
        user14,
        course64,
        "There is hardly anything good I can write about her. She is smart obviously, but the ability to convey that information was definitely not strong, even when asking for help, it felt like you were talking to Karen who is the one who is always right. It was really degrading and I don't intend to take her again, I'll just chemistry with someone else.",
        {difficulty: "Hard", chanceToGetA: 'Medium', workLoad: 'Medium'},
        3.0
    )


    await user.createCourseReview(
        user14,
        course65,
        "Even with trying to do the work early and understanding it lectures begin.",
        {difficulty: "Hard", chanceToGetA: 'Low', workLoad: 'Medium'},
        3.5
    )


    await user.createCourseReview(
        user14,
        course66,
        "He always have problem explaining the material. Avoid him as soon as possible!! Book explain better than him. He always confuses his students. His hand writing is the worst. most of the students learn by themselves so its like wasting of your money. He hardly answer the question correctly. He will confuse you on the board like in a second!!",
        {difficulty: "Hard", chanceToGetA: 'Medium', workLoad: 'Lots'},
        2.2
    )


    await user.createCourseReview(
        user14,
        course67,
        "There is hardly anything good I can write about her. She is smart obviously, but the ability to convey that information was definitely not strong, even when asking for help, it felt like you were talking to Karen who is the one who is always right. It was really degrading and I don't intend to take her again, I'll just chemistry with someone else.",
        {difficulty: "Medium", chanceToGetA: 'Medium', workLoad: 'Medium'},
        3.0
    )


    await user.createCourseReview(
        user14,
        course68,
        "Actually the worst teacher ever. I've never had a worse professor in my life. Doesn't lecture anything worth knowing and then tests and homework are extremely difficult.",
        {difficulty: "Medium", chanceToGetA: 'Low', workLoad: 'Medium'},
        1.0
    )


    await user.createCourseReview(
        user14,
        course69,
        "Such an easy going guy! Really tries to help everyone get a good grade.",
        {difficulty: "Easy", chanceToGetA: 'High', workLoad: 'Medium'},
        4.8
    )


    await user.createCourseReview(
        user14,
        course70,
        "He's such a cutie pie, and I just love listening to his voice during class.",
        {difficulty: "Medium", chanceToGetA: 'Low', workLoad: 'Medium'},
        4.5
    )


    await user.createCourseReview(
        user14,
        course71,
        "I did not like this teacher, he made us memorize 20 songs and tested us on only 10 of them on each test.",
        {difficulty: "Hard", chanceToGetA: 'Low', workLoad: 'Medium'},
        3.2
    )


    await user.createCourseReview(
        user14,
        course72,
        "He is literally the quietest man I've ever met. He shouldn't have been a professor, students can't even hear him from the front row.",
        {difficulty: "Hard", chanceToGetA: 'Medium', workLoad: 'Medium'},
        2.9
    )


    await user.createCourseReview(
        user14,
        course73,
        "Perfect professor, really passionate to teach, puts in alot of effort for students, learnt alot.",
        {difficulty: "Easy", chanceToGetA: 'Medium', workLoad: 'Medium'},
        4.9
    )


    await user.createCourseReview(
        user14,
        course74,
        "He is a good professor. The lecture establishes basic knowledges but it needs some more reading and some google research in order to get better understanding and to complete the exams/quizes.",
        {difficulty: "Medium", chanceToGetA: 'Medium', workLoad: 'Lots'},
        2.9
    )


    await user.createCourseReview(
        user14,
        course75,
        "Do the reading.",
        {difficulty: "Easy", chanceToGetA: 'Medium', workLoad: 'Medium'},
        4.0
    )


    await user.createCourseReview(
        user14,
        course21,
        "Cool.",
        {difficulty: "Easy", chanceToGetA: 'High', workLoad: 'Medium'},
        4.1
    )


    await user.createCourseReview(
        user14,
        course22,
        "I found his lectures to be more applicable to real-life situations than reliant on tests and bs work.",
        {difficulty: "Easy", chanceToGetA: 'Medium', workLoad: 'Medium'},
        5.0
    )





    
    await user.createCourseReview(
        user15,
        course21,
        "This is THE worst class at Stevens. It froze over in 2009 as all the lectures were recorded then and haven't been touched since. His stub code is years old and contains many bugs/errors that will trip you up. He hasn't touched the materials in years, and often needs to refresh his memory when asked questions. He can't be bothered to help! AVOID!!!!.",
        {difficulty: "Medium", chanceToGetA: 'Low', workLoad: 'Lots'},
        2.0
    )

    
    await user.createCourseReview(
        user15,
        course22,
        "No coding assignments, only homework is latex notes for a few of the lectures with a partner. Offers extra credit. Easiest grader I've had and laid back atmosphere.",
        {difficulty: "Easy", chanceToGetA: 'Medium', workLoad: 'Low'},
        4.4
    )

    
    await user.createCourseReview(
        user15,
        course23,
        "Amazing knowledge about Statistical Machine Learning and AI. Must take class if you want to get into Machine Learning research!",
        {difficulty: "Medium", chanceToGetA: 'Medium', workLoad: 'Low'},
        4.4
    )

    
    await user.createCourseReview(
        user15,
        course24,
        "The lectures are great albeit a little bit of information overload. Take notes as midterm and endterm would be straight out of the material. A lot depends on the project. Pay attention to the grading criteria. Course is not really technical but is crucial if you are interested in building clean UI and want to learn about usability.",
        {difficulty: "Easy", chanceToGetA: 'High', workLoad: 'Low'},
        4.7
    )

    
    await user.createCourseReview(
        user15,
        course25,
        "Awesome Professor. Very cool about doubts of students. Respected.",
        {difficulty: "Easy", chanceToGetA: 'Medium', workLoad: 'Low'},
        4.7
    )

    
    await user.createCourseReview(
        user15,
        course26,
        "You actually will learn a lot in his class, and Prof. Duggan is a good teacher. But it's simply not worth it to take this class! Some of the homework assignments (given weekly) take up to 15 hours to complete. If you finish an assignment within 10 hours you'll probably feel good about yourself. Save yourself a lot of anxiety and frustration. Avoid!",
        {difficulty: "Medium", chanceToGetA: 'Medium', workLoad: 'Medium'},
        2.0
    )

    
    await user.createCourseReview(
        user15,
        course27,
        "DO NOT LISTEN TO ANYONE, YOU WILL REGRET TAKING THIS CLASS.",
        {difficulty: "Hard", chanceToGetA: 'Medium', workLoad: 'Lots'},
        2.0
    )

    
    await user.createCourseReview(
        user15,
        course28,
        "Overall, a good prof who helps his students understand the computer programming in order to excel you need to put in the time and effort.",
        {difficulty: "Easy", chanceToGetA: 'Medium', workLoad: 'Low'},
        4.2
    )

    
    await user.createCourseReview(
        user15,
        course29,
        "great for someone new to computer science.",
        {difficulty: "Easy", chanceToGetA: 'High', workLoad: 'Medium'},
        4.2
    )

    
    await user.createCourseReview(
        user15,
        course30,
        "The most genuine professor who helped me achieve my dreams.",
        {difficulty: "Easy", chanceToGetA: 'Medium', workLoad: 'Medium'},
        3.5
    )

    
    await user.createCourseReview(
        user15,
        course31,
        "You really have to put the work in to get a good grade.",
        {difficulty: "Medium", chanceToGetA: 'Medium', workLoad: 'Medium'},
        3.5
    )

    
    await user.createCourseReview(
        user15,
        course32,
        "Do not listen to the Wang naysayers, they don't know C. (That is a Wang inside joke, he is a hilarious man if you actually listen to him) If you have ever talked to anyone that says Wang is a horrible teacher, they probably dropped the class and changed their major. If you ask him for help he is way more than willing to help you. Studying is a must.",
        {difficulty: "Medium", chanceToGetA: 'Low', workLoad: 'Medium'},
        3.0
    )

    
    await user.createCourseReview(
        user15,
        course33,
        "He's good if you can understand him or read whats on the board. He tends to not erase completely and just keep writing over things.",
        {difficulty: "Medium", chanceToGetA: 'Medium', workLoad: 'Lots'},
        3.0
    )

    
    await user.createCourseReview(
        user15,
        course34,
        "He is a very honest person, very helpful-minded and is approachable at any time. His lab is very disoriented though, most of the students speak native languages while at work and you don't understand a thing, also is very reluctant to clean lab spaces. His presentations are very detailed and he cites lot of examples which is helpful. really good.",
        {difficulty: "Easy", chanceToGetA: 'Medium', workLoad: 'Medium'},
        4.3
    )

    
    await user.createCourseReview(
        user15,
        course35,
        "Professor is honestly very helpful and tries to improve his lectures/class. If you manage to find him with time, he will provide help as much as he can. Honestly though, his lectures are rather dry and it does not help there is much overlap with materials course so you may be bored with the class. Tests are fair and shouldn't be too difficult.",
        {difficulty: "Medium", chanceToGetA: 'Medium', workLoad: 'Medium'},
        4.3
    )

    
    await user.createCourseReview(
        user15,
        course36,
        "The best professor in the school.",
        {difficulty: "Medium", chanceToGetA: 'Medium', workLoad: 'Low'},
        4.0
    )

    
    await user.createCourseReview(
        user15,
        course37,
        "Highly respected.",
        {difficulty: "Easy", chanceToGetA: 'Medium', workLoad: 'Medium'},
        4.0
    )

    
    await user.createCourseReview(
        user15,
        course38,
        "His class makes you think. I would totally take any class he will teach.",
        {difficulty: "Easy", chanceToGetA: 'High', workLoad: 'Medium'},
        3.6
    )

    
    await user.createCourseReview(
        user15,
        course39,
        "Awesome teacher! Very helpful!",
        {difficulty: "Easy", chanceToGetA: 'Medium', workLoad: 'Low'},
        3.6
    )

    
    await user.createCourseReview(
        user15,
        course40,
        "George is an awesome professor and you learn so much in performance!",
        {difficulty: "Easy", chanceToGetA: 'Medium', workLoad: 'Medium'},
        4.7
    )

    
    await user.createCourseReview(
        user15,
        course41,
        "Such a great professor.",
        {difficulty: "Easy", chanceToGetA: 'High', workLoad: 'Low'},
        4.7
    )

    
    await user.createCourseReview(
        user15,
        course42,
        "Such a great professor. A little hard to understand but the class is super easy and gives great lectures.",
        {difficulty: "Easy", chanceToGetA: 'Medium', workLoad: 'Medium'},
        3.2
    )

    
    await user.createCourseReview(
        user15,
        course43,
        "Great professor. very friendly and understanding. Easy class.",
        {difficulty: "Easy", chanceToGetA: 'High', workLoad: 'Medium'},
        3.2
    )

    
    await user.createCourseReview(
        user15,
        course44,
        "This professor is kind and intelligent. However, he can't teach.",
        {difficulty: "Medium", chanceToGetA: 'Medium', workLoad: 'Low'},
        3.7
    )

    
    await user.createCourseReview(
        user15,
        course45,
        "Hes a good person but when it comes to teaching I wouldnt recommend him especially if you are not proficient in Excel.",
        {difficulty: "Easy", chanceToGetA: 'Medium', workLoad: 'Medium'},
        3.7
    )

    
    await user.createCourseReview(
        user15,
        course46,
        "Actually the worst teacher ever. I've never had a worse professor in my life. Doesn't lecture anything worth knowing and then tests and homework are extremely difficult.",
        {difficulty: "Medium", chanceToGetA: 'Medium', workLoad: 'Medium'},
        1.0
    )

    
    await user.createCourseReview(
        user15,
        course47,
        "Worst ever.",
        {difficulty: "Hard", chanceToGetA: 'Medium', workLoad: 'Low'},
        1.0
    )

    
    await user.createCourseReview(
        user15,
        course48,
        "Despite his name, haMID is absolutely not MID. He is a great professor. His lectures are interesting and useful. A great teacher. Tests are slightly difficult but fair.",
        {difficulty: "Easy", chanceToGetA: 'Medium', workLoad: 'Medium'},
        4.5
    )

    
    await user.createCourseReview(
        user15,
        course49,
        "The best professor in the ME department. Explains content very clearly, and in a manner easy to understand even if you did not understand thermodynamics. Funny and understanding professor. Peaked my interest in thermal engineering, and would take courses in order to have him as my professor. If you can have him, take him over any other professor.",
        {difficulty: "Medium", chanceToGetA: 'Medium', workLoad: 'Low'},
        4.5
    )

    
    await user.createCourseReview(
        user15,
        course50,
        "Sad times. So much pain. Makes me want to see the sun blow up.",
        {difficulty: "Easy", chanceToGetA: 'Medium', workLoad: 'Low'},
        3.0
    )

    
    await user.createCourseReview(
        user15,
        course51,
        "Salman is great. Honestly one of the best lecturers ever and makes the material very clear. The homework is challenging but helps with the exams.",
        {difficulty: "Medium", chanceToGetA: 'High', workLoad: 'Medium'},
        4.0
    )

    
    await user.createCourseReview(
        user15,
        course52,
        "I took ME 524 Fundamentals of Remote Sensing with Dimitri online. There was no textbook, the only material he gave us were his PowerPoints from class. He gave these to us without any notes, audio or video to accompany them, they were useless. I spoke to my department head about this, I don't think this class will be offered for credit anymore.",
        {difficulty: "Medium", chanceToGetA: 'Medium', workLoad: 'Medium'},
        2.9
    )

    
    await user.createCourseReview(
        user15,
        course53,
        "The GOAT. Best lab I've ever taken. Guy is hilarious and keeps things interesting. Looks out for you and make sure you learn.",
        {difficulty: "Easy", chanceToGetA: 'Medium', workLoad: 'Low'},
        4.8
    )

    
    await user.createCourseReview(
        user15,
        course54,
        "I felt like the tests were hard and the study guides were not always reflective of the material on the test or what was covered on the lecture slides in class.",
        {difficulty: "Hard", chanceToGetA: 'Medium', workLoad: 'Lots'},
        3.0
    )

    
    await user.createCourseReview(
        user15,
        course55,
        "nice professor, she is very helpful. if you need more help, she is very happy to help you. always go to class on time. dont skip class.",
        {difficulty: "Medium", chanceToGetA: 'Low', workLoad: 'Medium'},
        3.5
    )

    
    await user.createCourseReview(
        user15,
        course56,
        "Really just a great dude all around. You can tell how much he cares about teaching and he gives off dad energy. He's always ready to help!",
        {difficulty: "Easy", chanceToGetA: 'Medium', workLoad: 'Low'},
        5.0
    )

    
    await user.createCourseReview(
        user15,
        course57,
        "Great Professor! Very Fun class with lots of discussions. We talk about Hobbes, Locke, Rousseau Mill, and many more. I must say Professor Ryan is a great Political Science teacher and I would recommend him to anyone.",
        {difficulty: "Medium", chanceToGetA: 'Medium', workLoad: 'Medium'},
        2.5
    )

    
    await user.createCourseReview(
        user15,
        course58,
        "Horrible professor. Lack of organization, effort to care for his students' performances in his classes, and open-mindedness. This class has been one of the worst classes I've ever taken at Stevens.",
        {difficulty: "Hard", chanceToGetA: 'Low', workLoad: 'Medium'},
        2.3
    )

    
    await user.createCourseReview(
        user15,
        course59,
        "One of the worst professors I have ever had to be with. This man cannot teach for the life of him. Everything is disorganized, the classes barely understand what is going on. And this specific course focuses way too much on assembly programming instead of actual microprocessor architecture. Avoid at all cost.",
        {difficulty: "Medium", chanceToGetA: 'Low', workLoad: 'Lots'},
        2.3
    )

    
    await user.createCourseReview(
        user15,
        course60,
        "He is a good professor. The lecture establishes basic knowledges but it needs some more reading and some google research in order to get better understanding and to complete the exams/quizes. Also, he has very strong background what he teach.",
        {difficulty: "Medium", chanceToGetA: 'Low', workLoad: 'Medium'},
        2.9
    )

    
    await user.createCourseReview(
        user15,
        course61,
        "Going to his class was stressful.",
        {difficulty: "Medium", chanceToGetA: 'Medium', workLoad: 'Lots'},
        3.9
    )

    
    await user.createCourseReview(
        user15,
        course62,
        "Robert is one of the toughest teachers I have ever had not due to the class vigor but merely due to his incompetence. He does not post instructions for assignments, expects too much from students, no one pays attention during class but you miss nothing. All class periods are mandatory but are just slide shows. 0/5 if it wasn't funny to watch.",
        {difficulty: "Hard", chanceToGetA: 'Low', workLoad: 'Lots'},
        1.0
    )

    
    await user.createCourseReview(
        user15,
        course63,
        "He makes sure his class understands the topic well and he delivers at his best. It is always fun attending his lectures.",
        {difficulty: "Medium", chanceToGetA: 'Low', workLoad: 'Medium'},
        4.1
    )

    
    await user.createCourseReview(
        user15,
        course64,
        "pathetic professor. Never take it. Teaches all out of scope things.",
        {difficulty: "Hard", chanceToGetA: 'Low', workLoad: 'Medium'},
        2.9
    )

    
    await user.createCourseReview(
        user15,
        course65,
        "If you want marks, don't take this class. At your face she doesn't seem strict at all, but when the marks come in, you'll know the real her. She says she wants us to learn, but doesn't realize, some aren't experienced or aren't interested in this compulsory course. She destroyed my GPA. Two exams, two presentations, so much homework and a B.",
        {difficulty: "Medium", chanceToGetA: 'Low', workLoad: 'Lots'},
        3.0
    )

    
    await user.createCourseReview(
        user15,
        course66,
        "Great guy.",
        {difficulty: "Easy", chanceToGetA: 'High', workLoad: 'Medium'},
        5.0
    )

    
    await user.createCourseReview(
        user15,
        course67,
        "He's great, super knowledgeable on the material and is very clear with his expectations.",
        {difficulty: "Medium", chanceToGetA: 'Medium', workLoad: 'Lots'},
        4.0
    )

    
    await user.createCourseReview(
        user15,
        course68,
        "Attendance is not mandatory but participation in his classes will go a long way.",
        {difficulty: "Easy", chanceToGetA: 'Medium', workLoad: 'Medium'},
        3.9
    )

    
    await user.createCourseReview(
        user15,
        course69,
        "He is a good professor and you would understand whatever he teaches if you in full concentration. However, in-class it gets boring a bit, but revise his lectures and you'll get to learn a lot. His assignments are good. It is fairly easy to get an A, if the assignments are done correctly. Overall he is a good Prof.",
        {difficulty: "Medium", chanceToGetA: 'Medium', workLoad: 'Medium'},
        3.8
    )

    
    await user.createCourseReview(
        user15,
        course70,
        "He is awful at teaching and grading. Never take any course with him.",
        {difficulty: "Hard", chanceToGetA: 'Medium', workLoad: 'Medium'},
        2.5
    )

    
    await user.createCourseReview(
        user15,
        course71,
        "By far, one of the most rigorous courses I have ever had. Having said that, If you put in time and effort, learning opportunity is limitless in the course and professor creamer makes sure that none of your doubts go unexplained. The material/textbooks provided are extremely helpful as well. Good course if you want to actually learn about the topics.",
        {difficulty: "Medium", chanceToGetA: 'Low', workLoad: 'Medium'},
        3.0
    )

    
    await user.createCourseReview(
        user15,
        course72,
        "She gives you every opportunity to do well, but you must use the resources provided.",
        {difficulty: "Medium", chanceToGetA: 'High', workLoad: 'Medium'},
        5.0
    )

    
    await user.createCourseReview(
        user15,
        course73,
        "This class was a disaster.",
        {difficulty: "Hard", chanceToGetA: 'Low', workLoad: 'Medium'},
        3.0
    )


    await user.createCourseReview(
        user15,
        course74,
        "He's really chill. It's accounting so its obviously boring, but he makes dad jokes here and there that are pretty decent I must say. HW takes a decent amount of time, so just get it done early. Overall, easy going guy, easy going class. As long as you pay attention, you should be fine.",
        {difficulty: "Easy", chanceToGetA: 'Medium', workLoad: 'Medium'},
        5.0
    )


    await user.createCourseReview(
        user15,
        course75,
        "Keeps the class light and fun for boring subject like accounting.",
        {difficulty: "Medium", chanceToGetA: 'Medium', workLoad: 'Medium'},
        5.0
    )




























































    let professor1 = await professor.createProfessor(
        'Patrick Hill',
        "Computer Science",
        'Best prefessor at Stevens! I recieved and offer for an internship based just on the knowledge I got in his course. Hill is tough but fair and you get out of his course what you put into it. I feel I m a stronger developer after taking his course for sure.',
        "http://www.graffixnyc.com/images/me2.jpg"
    )
    
    let professor2 = await professor.createProfessor(
        'Edward Amoroso',
        "Computer Science",
        'He teaches with a very fun and laid back style. He only does notes on the board. You must attend all classes and take very good notes in detail.  His midterm is critical to do good and based on the notes. There is a final project presentation too.  It is not a demanding class but his grading criteria is random and does not guarantee A.',
        "http://y.qichejiashi.com/tupian/upload/72312222.jpg"
    )
    
    let professor3 = await professor.createProfessor(
        'Eduardo Bonelli',
        "Computer Science",
        'Very caring professor who obviously knows the subject very well. He can go a bit fast,but if you ask him to re-explain things he will and it s generally worth it. You should definitely pay attention in class,because while the work is tough if you pay attention and participate you ll be fine. You should also attend class because of weekly quizzes.',
        "http://y.qichejiashi.com/tupian/upload/72312224.jpg"
    )
   
    let professor4 = await professor.createProfessor(
        'Dominic Duggan',
        "Computer Science",
        'You actually will learn a lot in his class, and Prof. Duggan is a good teacher. But its simply not worth it to take this class! ',
        "http://y.qichejiashi.com/tupian/upload/115089507.jpg"
    )
       
    let professor5 = await professor.createProfessor(
        'Enrique Dunn',
        "Computer Science",
        'Very Solid professor. The concepts covered were interesting, but it can be hard to pay attention over zoom.',
        "http://y.qichejiashi.com/tupian/upload/115089508.jpg"
    )
       
    let professor6 = await professor.createProfessor(
        'Igor Faynberg',
        "Computer Science",
        'Professor Igor is really helpful and is always accessible outside the class. If you work on the given assignments and ask him questions it is an easy A.',
        "http://mamabu.org/wp-content/uploads/2015/09/%E6%88%90%E4%BA%BA%E6%8A%A4%E7%85%A7%E7%85%A7%E7%89%87.jpg"
    )
       
    let professor7 = await professor.createProfessor(
        'Shudong Hao',
        "Computer Science",
        'He s honestly an awesome professor! All you needed to do was either pay attention during lectures or watch the lecture recordings and take notes. He goes out of his way to connect with students and provide help when we ask for it. ',
        "https://cw-image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fcw1.tw%2FCW%2Fimages%2Farticle%2F201712%2Farticle-5a20ccfb2fb5d.jpg/?w=1600&format=webp"
    )
       
    let professor8 = await professor.createProfessor(
        'Samuel Kim',
        "Computer Science",
        'Great Professor .Very Knowledgeable and amazingly explains the concepts.',
        "https://i1.sndcdn.com/artworks-gQvxwgtovMDnSxjd-lbYM9Q-t500x500.jpg"
    )
    
    let professor9 = await professor.createProfessor(
        'Samantha Kleinberg',
        "Computer Science",
        'Computer science class but using a computer is forbidden in the class. She does not have any sympathy for students.',
        "https://d4r15a7jvr7vs.cloudfront.net/ewoJICAgICAgICAgICAgICAgICJidWNrZXQiOiAiZmlsZXMubGJyLmNsb3VkIiwKCSAgICAgICAgICAgICAgICAia2V5IjogInB1YmxpYy85NS4wLjMxNS4yOTItM1JCLU1HLTA1MDctMTQ5N2xvdy0zNTB4MjUwLmpwZyIsCgkgICAgICAgICAgICAgICAgImVkaXRzIjogewoJICAgICAgICAgICAgICAgICAgInJlc2l6ZSI6IHsKCSAgICAgICAgICAgICAgICAgICAgIndpZHRoIjogMjMxLAoJICAgICAgICAgICAgICAgICAgICAiaGVpZ2h0IjogMjc5LAoJICAgICAgICAgICAgICAgICAgICAiZml0IjogImNvdmVyIgoJICAgICAgICAgICAgICAgICAgfQoJICAgICAgICAgICAgICAgIH0KCSAgICAgICAgICAgIH0="
    )


        
    let professor11 = await professor.createProfessor(
        'Xueqing Liu',
        "Computer Science",
        'This professor gets some unwarranted criticism tbh. Yes the class is hard, and the lectures can be a little hard to stay engaged in.',
        "https://www.laoziliao.net/fs/img/ae/aed61504a92d87d424ad7d09d4be4942.jpg"
    )
    
    let professor12 = await professor.createProfessor(
        'Philippe Meunie',
        "Computer Science",
        'Professor Meunier was an absolutely wonderful professor to work with.  The pacing of his class is great and his lectures were simple and easy to understand.',
        "https://source.wustl.edu/wp-content/uploads/2018/01/patrick-hill-300x300.jpg"
    )
    
    let professor13 = await professor.createProfessor(
        'Philippos Mordohai',
        "Computer Science",
        'Great professor. He does a good job of helping you to understand the material.',
        "http://img.yao51.com/jiankangtuku/gkmdpndmgv.jpeg"
    )
    
    let professor14 = await professor.createProfessor(
        'Antonio Nicolos',
        "Computer Science",
        'Professor Nicolosi is extremely unorganized. Grading structure/syllabus was not provided until right before final exam. ',
        "https://ss3.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2347087247,511188350&fm=15&gp=0.jpg"
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
        "https://ss2.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2543959327,2223707696&fm=26&gp=0.jpg"
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
        "https://ss3.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2296533282,1643020566&fm=26&gp=0.jpg"
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
        "https://ss0.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=428202998,3394663272&fm=26&gp=0.jpg"
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
        "https://ss0.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3479673338,398394414&fm=26&gp=0.jpg"
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
        "https://ss3.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=613647127,953994749&fm=26&gp=0.jpg"
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
        "https://ss2.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141293063,169968705&fm=26&gp=0.jpg"
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
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2793566446,152271652&fm=26&gp=0.jpg"
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
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=145040910,731739085&fm=26&gp=0.jpg"
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
        "https://scpic.chinaz.net/files/pic/pic9/201810/zzpic14481.jpg"
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
        "https://glshop.tw/wp-content/uploads/2020/08/%E6%96%87%E9%9D%92%E9%A2%A8%E7%94%B7%E5%AD%B8%E7%94%9F%E9%AB%AE%E5%9E%8BTOP%E6%8E%A8%E8%96%A6-1-744x446.jpg"
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
        "https://scpic.chinaz.net/files/pic/pic9/202004/zzpic24543.jpg"
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
        "https://img01.sc115.com/uploads/sc/jpgs/1508/apic13948_sc115.com.jpg"
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
        "https://variety.com/wp-content/uploads/2018/12/rexfeatures_9893651q.jpg?w=681&h=383&crop=1"
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
        "https://www.looper.com/img/gallery/the-old-man-release-date-cast-and-plot-what-we-know-so-far/intro-1634583917.webp"
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
        "https://variety.com/wp-content/uploads/2018/12/Jeff-Bridges-Cecil-B-DeMille-Award-Golden-Globes.jpg?w=681&h=383&crop=1"
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
        "https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
        "https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
        "https://images.pexels.com/photos/3018993/pexels-photo-3018993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
        "https://images.pexels.com/photos/25758/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
        "https://images.pexels.com/photos/41008/cowboy-ronald-reagan-cowboy-hat-hat-41008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
        "https://images.pexels.com/photos/3831612/pexels-photo-3831612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
        "https://images.pexels.com/photos/3574683/pexels-photo-3574683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
        "https://images.pexels.com/photos/1094871/pexels-photo-1094871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
        "https://images.pexels.com/photos/2421934/pexels-photo-2421934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
        "https://images.pexels.com/photos/3783249/pexels-photo-3783249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
        "https://images.pexels.com/photos/64385/pexels-photo-64385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
        "https://images.pexels.com/photos/3782192/pexels-photo-3782192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
        "https://images.pexels.com/photos/3782194/pexels-photo-3782194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
        "https://images.pexels.com/photos/1595027/pexels-photo-1595027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
        "https://images.pexels.com/photos/3775130/pexels-photo-3775130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
        "https://images.pexels.com/photos/3781880/pexels-photo-3781880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
        "https://images.pexels.com/photos/3814617/pexels-photo-3814617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
        "https://images.pexels.com/photos/848205/pexels-photo-848205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
        "https://images.pexels.com/photos/3289519/pexels-photo-3289519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
        "https://images.pexels.com/photos/3814539/pexels-photo-3814539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
        "https://images.pexels.com/photos/3831164/pexels-photo-3831164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
        "https://images.pexels.com/photos/5067947/pexels-photo-5067947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
        "https://images.pexels.com/photos/3779001/pexels-photo-3779001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
        "https://images.pexels.com/photos/1845848/pexels-photo-1845848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
        "https://images.pexels.com/photos/8441779/pexels-photo-8441779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
        "https://images.pexels.com/photos/262391/pexels-photo-262391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
        "https://images.pexels.com/photos/9923562/pexels-photo-9923562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
        "https://images.pexels.com/photos/3019414/pexels-photo-3019414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
        "https://images.pexels.com/photos/8057029/pexels-photo-8057029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
        "https://images.pexels.com/photos/8153954/pexels-photo-8153954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
        "https://images.pexels.com/photos/7782884/pexels-photo-7782884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
        "https://images.pexels.com/photos/8964195/pexels-photo-8964195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    )
    
    let pid73 = professor73._id.toString();
    let review73 = 'nice!';
    for (let i = 0; i < 3; i++) {
        await professor.addProfReview(uid, pid73, review73, 4.4);
    }

      let professor74 = await professor.createProfessor(
        'HanTian',
        "Computer Science",
        'All of the ML profs at Stevens know what they re talking about',
        "http://y.qichejiashi.com/tupian/upload/72312225.jpg"
    )
    let pid74 = professor74._id.toString();
    let review74 = 'nice!';
    for (let i = 0; i < 3; i++) {
        await professor.addProfReview(uid, pid74, review74, 5);
    }

















    
    await professor.addProfReview(
        user1.toString(),
        professor1._id.toString(),
        "Really just a great dude all around. You can tell how much he cares about teaching and he gives off dad energy. He's always ready to help!",
        5.0
    )


    connection.closeConnection();
    console.log('Done!');
}

main();