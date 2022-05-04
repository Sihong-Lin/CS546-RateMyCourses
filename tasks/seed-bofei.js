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
            '', // syllabus
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
            '', // syllabus
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
            '', // syllabus
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
            '', // syllabus
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
            '', // syllabus
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
            '', // syllabus
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
            '', // syllabus
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
            '', // syllabus
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
            '', // syllabus
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
            '', // syllabus
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
            'BME 600 Strategies and Principles of Biomedical Design', // courseName
            'Graduate', // academicLevel
            'Biomedical Engineering Program', // courseOwner
            'Elective', // type
            3, // units
            'A successful approach to product development and design in the field of medical technologies requires a highly interdisciplinary approach. This course reviews the regulations, protocols, and guidelines which must be met in each discipline, and describes how these issues are inter-related and how the affect design and product development. Marketing, Regulatory, IP and Clinical aspects are all considered in the technical aspects of design.', // description
            'Lecture', // instructionalFormats
            '', // syllabus
            'https://web.stevens.edu/catalog/archive/2013-2014/ses/ccb/gradcourses.html', // courseware
            'https://globalcolliance.com/wp-content/uploads/2021/06/course.jpg' // picture
        )
        course25 = createCourse._id.toString()
    } catch (e) {
        console.log(e);
    }







    //Add reviews：100条
    


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