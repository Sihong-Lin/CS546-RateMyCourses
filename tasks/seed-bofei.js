const user = require('../data/user');
const course = require('../data/course');
const professor = require('../data/professor');
const connection = require('../config/mongoConnection');
const { ObjectId } = require('mongodb');

const main = async () => {
    const db = await connection.connectToDb();
    await db.dropDatabase();
    
    let user1 = undefined
    try {
        let createUser = await user.createUser("user1", "aaa@gmail.com", "Computer Science", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2K9xcJVlIG31wI5COY_Qep5GahOMmCmLYEQ&usqp=CAU", "123456");
        user1 = createUser.insertedId;
    } catch (e) {
        console.log(e);
    } 

    let user2 = undefined
    try {
        let createUser = await user.createUser("user2", "aaa@gmail.com", "Computer Science", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM7y6bqoR4ypvuCak8H_ZVl7oqspxE6MxK3g&usqp=CAU", "123456");
        user2 = createUser.insertedId;
    } catch (e) {
        console.log(e);
    }

    let user3 = undefined
    try {
        let createUser = await user.createUser("user3", "aaa@gmail.com", "Computer Science", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQstkseuO__x9bRa_ycRdOnCH0YcGaZhSF0wA&usqp=CAU", "123456");
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
            'Department of Physics', // courseOwner
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
            'Department of Physics', // courseOwner
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
            'Department of Physics', // courseOwner
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
            'Department of Physics', // courseOwner
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
            'Department of Physics', // courseOwner
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
            'Department of Physics', // courseOwner
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
            'Department of Physics', // courseOwner
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
            'Department of Physics', // courseOwner
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
            'School of Business', // courseOwner
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
            'School of Business', // courseOwner
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
            'School of Business', // courseOwner
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
            'School of Business', // courseOwner
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
            'School of Business', // courseOwner
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
            'School of Business', // courseOwner
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
            'School of Business', // courseOwner
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
            'School of Business', // courseOwner
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
            'School of Business', // courseOwner
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
            'School of Business', // courseOwner
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
            'School of Business', // courseOwner
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
            'School of Business', // courseOwner
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
            'School of Business', // courseOwner
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
            'School of Business', // courseOwner
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
            'School of Business', // courseOwner
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
            'School of Business', // courseOwner
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
            'School of Business', // courseOwner
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
            'School of Business', // courseOwner
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
            'Department of Physics', // courseOwner
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
            'Department of Physics', // courseOwner
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
            'Department of Physics', // courseOwner
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
            'Department of Physics', // courseOwner
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
            'Department of Physics', // courseOwner
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
            'Department of Physics', // courseOwner
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
            'Chemical Sciences Program', // courseOwner
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
            'Chemical Sciences Program', // courseOwner
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
            'Chemical Sciences Program', // courseOwner
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
            'Chemical Sciences Program', // courseOwner
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
            'Materials Science and Engineering Program', // courseOwner
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
            'Department of Physics', // courseOwner
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
            'Department of Physics', // courseOwner
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
            'Mechanical Engineering Program', // courseOwner
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
            'Chemical Engineering Program', // courseOwner
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

   
    


    connection.closeConnection();
    console.log('Done!');
}

main();