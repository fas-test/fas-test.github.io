import { createI18n } from 'vue-i18n'

const i18n = createI18n({

  // default
  locale: 'en',

  // translations
  messages: {

    en: {
      menu: {
        menu: 'Menu',
        home: 'Home',
        aboutUs: 'About Us',
        tools: 'Our Tools',
        consulting: 'Consulting',
        contacts: 'Contacts',
      },
      footer: {
        privacyPolicy: 'Privacy Policy',
        allRightsReserved: 'All rights reserved',
      },
      home: {
        main: {
          title1: 'Assessing',
          title2: 'the Present.',
          title3: 'Building the Future.',
          subTitle1: 'A new generation',
          subTitle2: 'of tools for assessing',
          subTitle3: 'complex competencies and skills.',
          actionButton: 'Contact us',
        },
        block1: {
          part1: 'We provide innovative solutions in the market of educational and psychological assessment for teachers, students, parents, and administrators of educational organizations.',
          part2: 'Our feedback provides valid and reliable information for evidence-based decisions regarding educational trajectories.',
          part3: 'Our assessment tools focus on educational progress and allow tracking how students\' abilities evolve over time.',
          part4: 'Our assessment tools leverage advanced developments in psychometrics and Artificial Intelligence, as well as the latest discoveries in psychology and educational sciences.',
        },
        block2: {
          title1: 'Our Assessment',
          title2: 'Instruments',
          item1: 'Monitor the progress of each student and class',
          item2: 'Provide individual and detailed recommendations to teachers, students, and parents',
          item3: 'Help personalize learning',
          item4: 'Save teachers\' time by automating computer-based assessment',
          item5: 'Rely on an evidence-based approach to educational and psychological assessment',
        },
      },
      about: {
        main: {
          subTitle1: 'We combine the latest achievements in psychometrics',
          subTitle2: 'and artificial intelligence with modern scientific',
          subTitle3: 'ideas about psychology and education to help',
          subTitle4: 'each student unlock their educational potential',
          nav: {
            item1: 'Our Mission',
            item2: 'Our Values',
            item3: 'Our Team',
          },
        },
        block1: {
          title1: 'Our',
          title2: 'Mission',
          part1_1: 'The mission of ',
          part1_2: 'Future Assessment Service',
          part1_3: 'is to help schools and students achieve success by using high-quality psychological and educational tests. We accomplish this through ',
          part1_4: 'formative feedback',
          part1_5: ' that helps make decisions about each student\'s educational path, build individual educational strategies, and manage the school as an organization.',
          part2_1: 'Personalized and timely feedback is the foundation of learning. It explains the steps that the students and everyone around them need to take to improve their educational outcomes and develop essential life skills. To achieve this, we utilize Artificial Intelligence and psychometric technologies, applying them to ',
          part2_2: 'modern psychological and educational scientific theories',
          part3: 'Our team consists of academic specialists with international qualifications in psychology, educational sciences, psychometrics, data science, and statistics. We collaborate with teachers, students, and education professionals worldwide. We are open to feedback from all users.',
        },
        block2: {
          part1_1: 'Formative Feedback',
          part1_2: 'We promptly provide detailed individual feedback for each student — directly to the student and the parents. Additionally, we compile this feedback in a simplified form at the class level for the teacher. Subsequently, we generate a report for the educational organization\'s administrator, facilitating managerial decision-making.',
          part2_1: 'Measuring Educational Progress',
          part2_2: 'For our range of tools, we establish a unified scale that allows tracking each student\'s progress over time. Only a few measurement tools worldwide can monitor the growth of students\' competencies because this requires specialized psychometric techniques and mathematical modeling.',
          part3_1: 'Quality Standards of Our Products',
          part3_2: 'We are guided by the standards of educational and psychological testing from the leading psychometric organizations in the world: ',
          part3_3: 'the American Association for Educational Research, the National Council on Measurement in Education, the American Psychological Association',
          part3_4: 'the International Testing Commission',
          part3_5: 'the European Federation of Psychological Associations',
          part3_6: 'the Association for Educational Assessment — Europe',
          part3_7: 'All our instruments undergo validation, including studies on reliability, feedback quality, and gender and national fairness.',
        },
        block3: {
          part1_1: 'Our Values',
          part1_2: 'Everything we do is built on our fundamental values:',
          item1_1: 'INNOVATION',
          item1_2: 'We explore new assessment methods to better address the interests of our clients',
          item2_1: 'QUALITY',
          item2_2: 'We use the best quality standards for assessment tools in the world',
          item3_1: 'COLLABORATION',
          item3_2: 'Joint efforts and collaboration with partners are the main factors of our success',
          item4_1: 'EQUALITY AND FAIRNESS',
          item4_2: 'Our tools are fair and do not discriminate against any group of students',
          item5_1: 'SPEED',
          item5_2: 'Feedback is only useful if it is provided immediately after testing',
          item6_1: 'RESPONSIBILITY',
          item6_2: 'Our feedback is designed in such a way that it is difficult to make unfounded decisions based on it',
        },
        block4: {
          part1_1: 'Our',
          part1_2: 'Team',
          part1_3: 'Our team takes pride in its ability to develop new solutions in the field of assessment. Behind each team member lies extensive experience in educational assessment: from test development and expertise to innovative technologies for processing, scaling, and analyzing test results, as well as providing feedback and working in the best interests of our clients.',
          part2_1: 'Elena Kardanova',
          part2_2: ', Ph.D. in Physics and Mathematics, is one of the leading Russian researchers in the field of educational outcomes assessment and psychometrics. She is the author of numerous scientific papers and has interned at STS (Scholastic Testing Service) and UIC (University of Illinois at Chicago). For over 10 years, she led the Center for Psychometrics and Educational Measurement at the National Research University Higher School of Economics (HSE). Elena served as a lecturer and scientific supervisor of the master\'s program SOLA (Science of Learning and Assessment), the first program in Russia preparing specialists in psychological and educational measurement. She is the head of the annual international summer school "Applied Psychometrics in Education and Psychology." Elena\'s research focuses on psychometric modeling, assessment of complex constructs, measurement of individual learning progress, and cross-cultural comparability of test results, as well as using Artificial Intelligence in educational measurement.',
          part3_1: 'Alina Ivanova',
          part3_2: ' completed her Master\'s degree at the National Research University Higher School of Economics in 2013 and defended her Ph.D. dissertation in Educational Science at the same institution in 2021. Alina has an extensive list of publications and presentations at the world’s leading conferences and peer reviewed journals. She conducts research and teaching in the field of data analysis for psychological and educational testing. Her research interests are related to the analysis of large-scale monitoring, cross-cultural studies, and issues related to tracking the dynamics of educational achievements.',
          part4_1: 'Svetlana Avdeeva',
          part4_2: ', Ph.D. in Engineering, has been engaged for over 20 years in the field of digital transformation of education. She has led major projects in the informatization of the education system, within which ',
          part4_3: 'the Unified Collection of Digital Educational Resources',
          part4_4: ' was created, along with over 450 methodological centers and educational communities ',
          part4_5: '"Open Class"',
          part4_6: ' fostering the between-school collaboration and networking. She has trained over 200,000 school teachers and administrators in the application of digital technologies in educational activities. Under her leadership, measurement tools for XXI century skills have been developed, including universal competencies, ',
          part4_7: 'information and communication competence',
          part4_8: ', problem-solving, ',
          part4_9: 'digital literacy',
          part4_10: ', and more. Svetlana\'s research interests are focused on the development of methods and tools that measure complex constructs.',
          part5_1: 'Denis Federakin',
          part5_2: ' graduated from the Faculty of Psychology and Pedagogy at Smolensk State University in 2015 and completed his master\'s degree in psychometrics at the National Research University Higher School of Economics in 2017, and defended a Ph.D. dissertation in Political Science and Economics at Johannes Gutenberg University of Mainz. Since then, he has pursued an academic career in the field of data analysis for psychological and educational testing. Denis has delivered over 30 presentations at international conferences (including conferences of testing standards development associations) and has authored more than 20 publications (including articles in the most renowned and prestigious international academic journals). He specializes in methods of processing testing data using statistical and psychometric models, as well as machine learning models.',
          part6_1: 'Irina Brun',
          part6_2: ', Master of Psychometrics, Bachelor of Sociology. With over 10 years of experience in psychometrics, including 4 years in HR assessment. She authored and thought one of the main courses on test development in post-Soviet countries. She has launched over 10 testing products to the market for, including tests measuring Soft Skills and XXI Century Skills. Her main specialization is designing assessment frameworks tailored to client requests and item writing.',
        },
      },
      consulting: {
        main: {
          title1: 'Areas',
          title2: 'of Expertise',
          title3: 'and Consulting',
          actionButton: 'Contact us',
        },
        block1: {
          title: 'We will help you determine which test will be most useful for addressing your needs and develop it according to international standards',
          part1_1: 'ASSESSMENT TOOLS EVALUATION AND IMPROVEMENT',
          part1_2: 'For educational and commercial organizations, we conduct psychometric analyses of educational assessment tools, verify their compliance with international standards, provide expert evaluation on the quality of the tools, and offer recommendations for quality improvement',
          part2_1: 'EXPERT ASSISTANCE IN THE DEVELOPMENT OF EDUCATIONAL ASSESSMENT TOOLS',
          part2_2: 'We provide methodological and psychometric support for the development of educational assessment tools: we can develop any tool for you, or we can help you do it yourself',
          part3_1: 'INDIVIDUAL EDUCATIONAL PROGRESS OF STUDENTS',
          part3_2: 'We provide consulting services for measuring individual learning progress in both subject-specific and cross-disciplinary educational outcomes, as well as other psychometric aspects of educational measurements',
          part4_1: 'TRAINING FOR METHODOLOGISTS AND ANALYSTS',
          part4_2: 'We provide training on various aspects of educational measurement based on our proprietary methods for continuing professional education (in English and Russian; in online, offline, and hybrid formats)',
          part5_1: 'TEST DEVELOPMENT TAILORED TO CLIENT REQUESTS',
          part5_2: 'We design the assessment framework of the measurement tool to address the client\'s questions; we develop the test and all accompanying documentation in accordance with international testing standards; we plan the test validation; we conduct validation studies in accordance with international testing standards',
        },
      },
      contacts: {
        title: 'Contacts',
        subTitle: 'To ask a question or discuss the details of your project, write to us',
        name: 'Elena Kardanova',
      },
      tools: {
        main: {
          title1: 'Our solutions',
          title2: 'for the measurement',
          title3: 'of educational',
          title4: 'achievements',
          subTitle1: 'The path to assessing success:',
          subTitle2: 'innovative approaches to measuring',
          subTitle3: 'educational achievements',
          actionButton: 'Contact us',
        },
        moreInfo: 'More info',
        tool: 'Instrument',
        block1: {
          grade: 'Grade 1',
          title: '“START”',
          description: 'Testing basic skills from the first steps in school',
        },
        block2: {
          grade: 'Grades 4—8',
          title: 'Soft skills',
          description: 'Critical thinking, creativity, communication, cooperation',
        },
        block3: {
          grade: 'Grades 6—10',
          title: 'Digital competencies',
          description: 'Measuring digital skills for the everchanging world',
        },
        block4: {
          grade: 'Grade 4',
          title: '“PROGRESS”',
          description: 'Tracking learning — testing fundamental literacies',
        },
        block5: {
          grade: 'Grades 7—10',
          title: 'Information and communication competency',
          description: 'The ability to process information in a digital environment',
        },
        block6: {
          part1: 'All tests are conducted on school computers',
          part2: 'Easy to set up, clear for teachers',
          part3: 'Engaging for students — interesting scenarios instead of boring tasks',
          part4: 'Immediate feedback after the test: various types of reports tailored for teachers, students, and educational authorities',
        },
        start: {
          title: 'START',
          block1: {
            part1: 'First graders come to school differently prepared for it. START evaluates ',
            part2: 'basic reading and math skills',
            part3: ' when the child is just starting to learn them, as well as after they made some progress. In addition, START allows one to evaluate ',
            part4: 'the child\'s passive vocabulary',
            part5: ', ',
            part6: 'phonological literacy',
            part7: ' and ',
            part8: 'socio-emotional skills'
          },
          block2: {
            part1: 'The teacher will see underdeveloped areas and development prospects for each child and the entire class.',
            part2: 'With START, it is possible to track the learning dynamics and personalize training.',
            part3: 'The relationship between the results of our test and the children’s success in a few years is robust and significant — measured in Russia for several thousand primary school students from different regions.',
          },
          block3: {
            title1: 'The assessment',
            title2: 'procedure',
            part1: 'The tool is designed as a game to avoid inducing stress. In each block, the tasks go from simple to more complex. If the child makes mistakes, the algorithm proceeds to administer another task type. In the '
                 + 'middle of the test, there are several minutes of gamified physical exercises. It helps to distract and relieve fatigue.',
            part2: 'The algorithm inside the tool changes tasks, adjusts their complexity and voices questions through the voice assistant. The adult\'s role is to enter the child\'s answers on the computer and support the child. '
                 + 'In case of remote learning, parents can conduct the test instead of the teacher. If the child does not want to do tasks, is tired or crying – there are scenarios provided to adults for each case.',
          },
          block4: {
            title: 'The feedback',
            part1: 'According to the evaluation results, detailed feedback is given: for the parents and the child, for the teacher (individually about each child and about the entire class).',
            part2: 'START-testing is carried out at the beginning and the end of the first grade. Its extensions help to track the dynamics over a longer period of time: ',
            part3: 'PROGRESS',
            part4: ' instruments for the middle and the end of elementary school.'
          },
        },
        softSkills: {
          title: '4C test',
          subTitle: 'Soft skills',
          block1: {
            part1: 'Creativity, Critical thinking, Communication and Cooperation (4C) belong to the skills of the 21st century. These skills are necessary so that students can successfully '
                 + 'adapt to the modern world and be successful: learn new things, critically evaluate information, work in a team and think outside the box. The ',
            part2: '4C test',
            part3: ' checks how these are formed, identifies deficits and helps set up a 4C skills development program.',
            part4: 'The ',
            part5: '4C test',
            part6: ' instrument is implemented in the form of a computer testing system with an automated process for collecting, processing and evaluating results and is aimed at measuring '
                 + 'communication skills, cooperation, critical thinking and creativity in schoolchildren from the fourth to the eighth grade.',
          },
          block2: {
            part1: 'The ',
            part2: '4C test',
            part3: ' is developed using the Evidence-Centered Design, which is based on the development of observable evidence allowing to make a claim about the 4C skills level.',
            part4: 'The tasks are formulated as story scenarios because they have higher authenticity than classical item formats as well as motivating students and ensuring high '
                 + 'reliability of results. Some scenarios participants encounter in real life: planning a schedule for the next day, preparing for a school holiday; other scenarios '
                 + 'are set up in a fantastic context, where participants enter the world of wizards and monsters, or become members of a space expedition.',
          },
          block3: {
            title1: 'The assessment',
            title2: 'procedure',
            part1: 'The procedure for ',
            part2: 'administering the remote testing is detailed',
            part3: ' in the 4C guidelines.',
            part4: '',
            part5: '',
            part6: 'Testing takes ',
            part7: '40-90 minutes',
            part8: ' to complete, depending on the selected set of tasks and the skills being evaluated.',
            part9: 'The scenarios are not related to a domain-specific knowledge',
            part10: ' and are designed to motivate and interest schoolchildren.',
            part11: 'The scenarios simulate a wide range of digital technologies, including browsers, messengers, email interfaces, social networks, and text editors.',
            part12: 'The 4C test automatically processes the results',
            part13: ' and returns feedback to the respondent immediately after the testing has completed.',
          },
          block4: {
            title: 'The feedback',
            part1: 'As a result of testing, the overall level of each 4C skill is determined which can be:',
            part2: 'Based on the test results, individual feedback is provided to the student and the parents, the teacher and the class, as well as a generalized report about the school.',
            part3: 'The method of Evidence-Centred Design allows to identify the gaps in the 4C skillset prompting further improvement.',
            levels: {
              subTitle1: 'Critical Thinking',
              subTitle2: 'Creativity',
              subTitle3: 'Communication and Cooperation',
              lev1: {
                title: 'Developing level',
                part1: 'A student at the developing level shows weak analytical skills: they do not always select relevant and reliable sources of information, struggle to '
                     + 'identify which information from the text will help them to solve the given task, and as a result, the solutions they propose often do not align with the task requirements.',
                part2: 'A student at the developing level of creativity tends to offer typical, expected, and non-original ideas. The ideas are generally vague, lacking in detail, and may not be fully thought through.',
                part3: 'A student at the developing level does not demonstrate the ability to recognize others\' emotions or adapt their communication to the listener, their state, '
                     + 'and the interaction context. This student might find it challenging to participate in teamwork, where achieving the best result requires listening to others\' opinions, '
                     + 'sharing information and resources, and making decisions and acting collaboratively.',
              },
              lev2: {
                title: 'Basic level',
                part1: 'A student at the basic level of critical thinking is capable of analyzing information, identifying useful and important details, and avoiding unreliable sources. '
                     + 'Also, the student formulates a correct solution to the problem that is viable and meets the task’s requirements.',
                part2: 'At the basic level, the student’s ideas may be well-thought-out and detailed, but the ideas themselves are not new or unique. Conversely, if the idea is original '
                     + 'and distinctive, it may lack detail and thorough development.',
                part3: 'A student at the basic level of Communication and Cooperation may not always recognize the emotions of other team members or act with those emotions in mind. '
                     + 'In teamwork, this student can share information but does not always make decisions or take actions that consider the opinions of teammates.',
              },
              lev3: {
                title: 'Advanced level',
                part1: 'A student at the advanced level of critical thinking is able to analyze materials and formulate an appropriate solution to the given problem. Such student can ask '
                     + 'relevant questions and select sources that contain reliable information. When working with information sources, the student effectively identifies the information '
                     + 'needed to solve the problem and uses it to draw accurate conclusions.',
                part2: 'At the advanced level, a student has demonstrated the ability to generate new, interesting, and original ideas while completing the 4C test. They bring their ideas '
                     + 'to fruition, providing all necessary details to create a fully realized concept.',
                part3: 'A student at the advanced level demonstrates an understanding of others\' emotions and the ability to support and assist teammates during group work. In collaborative '
                     + 'tasks, this student listens to team members\' opinions and adjusts their work and decisions based on those perspectives.',
              },
            },
          },
        },
        progress: {
          title: 'PROGRESS',
          subTitle: 'Moving forward: see the dynamics of each child',
          block1: {
            part1: 'Testing using the ',
            part2: 'START',
            part3: ' instrument is conducted at the beginning and at the end of the child\'s first year of school. Its extensions – PROGRESS instruments for the middle and the end of '
                 + 'elementary school – can track the dynamics in students’ abilities over a longer period of time.',
            part4: 'The first years of school are very important for a child. Children’s achievements and dynamics in elementary school can predict their academic success in the end of '
                 + 'secondary school. Therefore, it is important for teachers and parents to have reliable means of diagnosing and measuring students’ abilities in elementary school.',
            part5: 'The PROGRESS instrument can measure a child\'s progress from basic letter recognition skills to their ',
            part6: 'reading literacy',
            part7: ', as well as from basic maths skills to ',
            part8: 'mathematical literacy',
          },
          block2: {
            title: 'The assessment procedure',
            part1: 'Testing is divided into blocks; tasks progress from simple to complex. If the child makes several mistakes, then the adaptive algorithm inside the instrument changes '
                 + 'the tasks, adjusting the content of the test.',
            part2: 'Each child sits separately at their computer. A teacher in the classroom monitors safety and order in the classroom, as well as helps students cope with technical '
                 + 'difficulties, if there are any.',
            part3: 'The assessment of reading and literacy is carried out on different days. The duration of one test is about 40 minutes.',
          },
          block3: {
            title1: 'The ',
            title2: 'feedback',
            part1: 'A detailed and personalized feedback is provided to the parents and the child, to the teacher (individually about each child and about the entire class).',
          },
        },
        digSkills: {
          title: 'DIGLIT',
          subTitle: 'Digital competencies',
          block1: {
            part1: 'The ',
            part2: 'DIGLIT',
            part3: ' instrument is implemented in the form of a computer testing system with an automated process of collecting, processing and evaluating results and is aimed at measuring the digital '
                 + 'literacy of 12–14-year-olds.',
            part4: 'Digital literacy is a composite competency including ',
            part5: 'the ability to safely use digital technologies for searching, analyzing, creating, managing information, communication and teamwork, to solve problems in a digital environment for '
                 + 'meeting personal and educational needs.',
            part6: '',
          },
          block2: {
            title: 'What digital skills are measured?',
            part1: 'The ',
            part2: 'DIGLIT test',
            part3: ' is developed using the Evidence-Centered Design, which is based on the development of observable evidence allowing to make a claim about the digital skills level.',
            part4: 'The tasks are formulated as ',
            part5: 'story scenarios',
            part6: ' because they have higher authenticity than classical item formats as well as motivating students and ensuring high reliability of results. All scenarios participants '
                   + 'encounter in real life – among them planning a trip to an unknown place, searching for necessary information on the Internet or creating visualization in a media software.',
          },
          block3: {
            title1: 'The assessment',
            title2: 'procedure',
            part1: 'The ',
            part2: 'procedure for administering',
            part3: ' the remote testing is detailed in the test guidelines.',
            part4: 'The test includes ',
            part5: '4 scenarios',
            part6: ' and takes ',
            part7: '70 minutes',
            part8: ' to complete, including two breaks of five minutes for eye gymnastics to relieve fatigue.',
            part9: 'The tasks are not related to a domain-specific knowledge.',
            part10: ' The scenarios are designed to be interesting and motivating for schoolchildren.',
            part11: 'The test tasks involve the use of simulators of a wide range of digital technologies identical to the real-life software',
            part12: ', including browsers, messengers, emailing, social networks, text editors, presentation software, etc.',
            part13: '',
            part14: 'The scenario contexts are of two types: ',
            part15: ' educational (situations taken from school environment) and personal (situations taken from everyday life outside school).',
            part16: 'The test automatically processes the results',
            part17: ' and returns feedback to the respondent immediately after the testing has completed.'
          },
          block4: {
            title: 'The feedback',
            part1: 'As a result of testing, the overall level of digital literacy is determined which can be:',
            part2: 'Developing level',
            part3: 'A student at the developing level:',
            part4: 'has basic skills in information search and analysis but cannot identify relevant information or assess the reliability of sources. '
                 + 'They struggle classifying information and are unable to create an informational product based on specific criteria;',
            part5: 'is capable of following a proposed sequence of steps (algorithm) to solve a practical problem;',
            part6: 'possesses basic communication skills in a digital environment but does not always choose the appropriate format for presenting information '
                 + 'to a specific target audience and does not consistently follow digital etiquette rules;',
            part7: 'can recognize the most obvious threats but is not always prepared to protect their devices; does not always identify problematic content and '
                 + 'is unable to safeguard personal data;',
            part8: 'has minimal technical skills in working with digital technologies, which do not allow them to fully solve a task in a digital environment.',
            part9: 'Basic level',
            part10: 'A student at the basic level:',
            part11: 'can search for and analyze information, identify relevant information, and rely on reliable and trustworthy sources. They can classify and '
                 + 'organize information, create simple informational products based on specific criteria, or produce complex informational products with minimal errors;',
            part12: 'is capable of both (1) following a proposed sequence of steps to solve a problem, and (2) creating their own algorithm to solve a problem;',
            part13: 'can communicate in a digital environment with an understanding of basic norms and rules, and can choose the appropriate format for presenting information '
                 + 'to a specific target audience;',
            part14: 'can identify risks but is not always prepared to protect their devices and data;',
            part15: 'has technical skills sufficient for solving tasks in digital environments.',
            part16: 'Advanced level',
            part17: 'A student at the advanced level:',
            part18: 'is able to search for and analyze information and formulate correct solutions to tasks, relying on reliable and trustworthy sources. They can classify and '
                 + 'organize information for quick retrieval and optimal use in problem-solving and create age-appropriate informational products based on specific criteria without errors;',
            part19: 'can follow a proposed sequence of steps, create their own algorithm to solve a problem, and optimize it;',
            part20: 'is capable of establishing effective communication to solve tasks while adhering to ethical and legal standards;',
            part21: 'can identify threats and protect their devices, avoid risks in the digital environment, and safeguard their confidential data;',
            part22: 'is proficient in using digital technologies for problem-solving, can handle complex tasks in digital environments, and can assist others.',
            part23: 'Based on the test results, individual feedback is provided to the student and the parents, the teacher and the class, as well as a generalised report about the school.',
            part24: 'The method of Evidence-Centred Design allows to identify the gaps in the digital competencies prompting further improvement.',
          },
        },
        comSkills: {
          title: 'ICL test',
          subTitle: 'Information and communication competence',
          block1: {
            part1: 'The ',
            part2: 'ICL test',
            part3: ' instrument is designed as a computer testing system administering authentic scenario-type tasks in controlled environment with an automated data processing. '
                 + 'The ICL test provides feedback immediately after the testing completion. ',
            part4: 'The target audience is students aged 13-15.',
            part5: 'Contemporary everyday life renders it impossible to live comfortably without the ability to work with information in a digital environment. An indicator of '
                 + 'this ability is the level of information and communication competence (IC competence). IC competence refers to the ability and willingness of students to use '
                 + 'digital technologies, services and tools to access, analyze, manage, integrate, create information and communication, following ethical and legal norms.',
            part6: 'An advantage of ',
            part7: 'the ICL test',
            part8: ' is that it provides can assess the student\'s ability to use digital environments and services to gain new knowledge, carry out communication, conduct research '
                 + 'activities, which can help the student acquire lifelong learning skills and perform future professional duties.',
          },
          block2: {
            title1: '7 components of IC competence',
            title2: 'which are measured by the ICL test:',
            part1: 'The ',
            part2: 'ICL test',
            part3: ' is developed using the Evidence-Centered Design, which is based on the development of observable evidence allowing to make a claim about the level of students\''
                 + ' IC competence. The assessment analyzes not only the result of completed tasks, but also the process of solving them (behavioural characteristics of the test takers).'
          },
          block3: {
            title1: 'The assessment',
            title2: 'procedure',
            part1: 'The procedure for administering the remote testing is detailed in ',
            part2: 'the ICL test guidelines',
            part3: '.',
            part4: 'The testing includes ',
            part5: '8 authentic scenario-based tasks',
            part6: '. Test tasks take  ',
            part7: '85 minutes',
            part8: ' to complete, including ',
            part9: 'two 5-minutes breaks to relieve fatigue',
            part10: '.',
            part11: 'During the testing, the student uses a browser emulator to access the Internet, searches for files, works with plots, spreadsheets and presentations, uses a text editor and '
                  + 'emailing, communicates on social networks and messengers, uses media, and analyses databases.',
            part12: 'Testing requires individual desktops or laptops with a mouse and an installed latest version of Google Chrome browser.',
            part13: 'The tasks are not related to a domain-specific knowledge.',
            part14: ' The scenarios are designed to be interesting and motivating for schoolchildren.',
            part15: 'The test automatically processes the results',
            part16: ' and returns feedback to the respondent immediately after the testing has completed.',
          },
          block4: {
            title: 'The feedback',
            part1: 'After completing ',
            part2: 'the ICL test',
            part3: ', the student is assigned one of five levels of IC competence, depending on the degree to which they own each of the seven components:',
            part4: 'Proficient level',
            part5: 'Student independently and skillfully use digital technologies to solve academic and real-life problems. When creating informational products (searching for and selecting information, '
                 + 'formatting, and designing materials), they understand the target audience for these products. They are aware that information can be subject to a commercial influence, and they understand '
                 + 'issues related to the rights to own the intellectual property.',
            part6: 'Level above basic',
            part7: 'Students demonstrate a high level of knowledge, skills, and understanding in independently searching for information, editing informational products, and managing them. They select necessary '
                 + 'information from electronic sources, adapt it to task requirements, and create their own informational products. They also recognize that the information they find may be biassed, inaccurate, or unreliable.',
            part8: 'Basic level',
            part9: 'Students demonstrate a basic level of information and communication competence. They can find information using simple electronic sources, select and add content to informational products, and show the ability '
                 + 'to format text and images within these products. They are mostly capable of using spreadsheets, graphic editors, instant messaging programs, and other communication tools competently. They understand the '
                 + 'importance of protecting access to electronic information and the possible consequences of unauthorized access.',
            part10: 'Level below basic',
            part11: 'Students are familiar with basic programs, can work with files on a computer, and perform simple information tasks. They know basic online communication rules and the consequences of using computers as '
                 + 'unauthorized users.',
            part12: 'Developing level',
            part13: 'Students struggle with basic programs, poorly organize files on the computer, and make errors while performing simple information tasks (such as searching for information, editing text, working with spreadsheets, '
                 + 'and images). They know basic online communication rules but do not understand the responsibilities related to the legality and ethical aspects of using and sharing information.',
            part14: 'Based on the test results, individual feedback is provided to the student and the parents, the teacher and the class, as well as a generalised report about the school.',
            part15: 'The method of Evidence-Centred Design allows to identify the gaps in the information management skills in the digital environment prompting further improvement.',
          },
        },
      },
    },

    ru: {
      menu: {
        menu: 'Меню',
        home: 'Главная',
        aboutUs: 'О нас',
        tools: 'Наши инструменты',
        consulting: 'Консалтинг',
        contacts: 'Контакты',
      },
      footer: {
        privacyPolicy: 'Политика конфиденциальности',
        allRightsReserved: 'Все права защищены',
      },
      home: {
        main: {
          title1: 'Оцениваем',
          title2: 'настоящее.',
          title3: 'Строим будущее.',
          subTitle1: 'Новое поколение',
          subTitle2: 'инструментов оценивания',
          subTitle3: 'сложных компетенций и навыков',
          actionButton: 'Связаться с нами',
        },
        block1: {
          part1: 'Мы предоставляем инновационные решения на рынке образовательных и психологических измерений для учителей, учеников, родителей и администраторов образовательных организаций.',
          part2: 'Наша обратная связь дает валидную и надежную информацию для доказательных решений об образовательном маршруте.',
          part3: 'Наши линейки инструментов оценивают образовательный прогресс и позволяют отслеживать, как изменяются способности учеников во времени.',
          part4: 'Наши инструменты измерения основаны на самых современных разработках в области психометрики и искусственного интеллекта, а также последних открытий в психологии и науках об образовании.',
        },
        block2: {
          title1: 'Наши инструменты',
          title2: 'измерения',
          item1: 'Мониторят прогресс каждого ученика, класса или параллели',
          item2: 'Дают индивидуальные и конкретные рекомендации учителю, ученику и родителям',
          item3: 'Помогают персонализировать обучение в реальности, а не на бумаге',
          item4: 'Экономят силы и время учителя за счет автоматизации компьютерного оценивания',
          item5: 'Опираются на доказательный подход к образовательному и психологическому оцениванию',
        },
      },
      about: {
        main: {
          subTitle1: 'Соединяем последние разработки в области психометрики',
          subTitle2: 'и искусственного интеллекта с современными научными',
          subTitle3: 'представлениями о психологии и образовании, чтобы помочь',
          subTitle4: 'каждому ученику раскрыть свой образовательный потенциал',
          nav: {
            item1: 'Наша миссия',
            item2: 'Наши ценности',
            item3: 'Наша команда',
          },
        },
        block1: {
          title1: 'Наша',
          title2: 'миссия',
          part1_1: 'Миссия ',
          part1_2: 'Future Assessment Service',
          part1_3: '— помочь школам и ученикам добиться успеха, используя качественные тесты в психологии и образовании. Мы делаем это с помощью ',
          part1_4: 'формирующей обратной связи',
          part1_5: ', которая помогает принимать решения об образовательном маршруте каждого ученика, выстраивать индивидуальные образовательные стратегии и управлять школой, как организацией.',
          part2_1: 'Персонализированная и оперативная обратная связь — это основа обучения. Она объясняет, какие шаги ученику и всем людям вокруг него нужно сделать, чтобы повысить его образовательные результаты и развить важные для жизни навыки. Для этого используем технологии искусственного интеллекта и психометрики, примененяя их к ',
          part2_2: 'современным психологическим и образовательным научным теориям',
          part3: 'Наши сотрудники — это академические специалисты с международной квалификацией в психологии, науках об образовании, психометрике, науках о данных и статистике. Мы сотрудничаем с учителями, учащимися и профессионалами в образовании по всему миру. Мы открыты к обратной связи от всех пользователей.',
        },
        block2: {
          part1_1: 'Формирующая обратная связь',
          part1_2: 'Мы оперативно предоставляем подробную индивидуальную обратную связь по каждому ученику — ему самому и родителям. Далее, мы собираем эту обратную связь также в простом виде на уровне класса — для учителя. Затем, мы формируем отчет для администратора образовательной организации, облегчая принятие управленческих решений.',
          part2_1: 'Измерение образовательного прогресса',
          part2_2: 'Для наших линеек инструментов мы выстраиваем единую шкалу, позволяя отслеживать прогресс каждого ученика сквозь время. Только единицы инструментов измерения в мире позволяют отслеживать рост компетенций учеников, потому что это требует специальных психометрических техник и математического моделирования.',
          part3_1: 'Стандарты качества наших продуктов',
          part3_2: 'Мы руководствуемся стандартами образовательного и психологического тестирования от ведущих психометрических организаций в мире: ',
          part3_3: 'Американской Ассоциации Исследований в Образовании, Национального Совета по Образовательным Измерениям, и Американской Психологической Ассоциации',
          part3_4: 'Международной Тестовой Комиссии',
          part3_5: 'Европейской Федерации Психологических Ассоциаций',
          part3_6: 'Ассоциации Образовательного Оценивания в Европе',
          part3_7: 'Наши инструменты проходят валидизацию, включая изучение надежности, качества обратной связи, и гендерной и национальной справедливости.',
        },
        block3: {
          part1_1: 'Наши ценности',
          part1_2: 'Все, что мы делаем, строится на наших фундаментальных ценностях:',
          item1_1: 'ИННОВАЦИИ',
          item1_2: 'Мы исследуем новые методы оценки, чтобы лучше заботиться об интересах наших клиентов',
          item2_1: 'КАЧЕСТВО',
          item2_2: 'Мы используем лучшие стандарты качества измерительных инструментов в мире',
          item3_1: 'СОТРУДНИЧЕСТВО',
          item3_2: 'Совместные усилия и взаимодействие с партнерами — главный фактор нашего успеха',
          item4_1: 'РАВЕНСТВО И СПРАВЕДЛИВОСТЬ',
          item4_2: 'Наши инструменты справедливы и не дискриминируют ни одну из групп учеников',
          item5_1: 'СКОРОСТЬ',
          item5_2: 'Обратная связь полезна только если она предоставляется сразу после тестирования',
          item6_1: 'ОТВЕТСТВЕННОСТЬ',
          item6_2: 'Наша обратная связь создана так, чтобы по ней было сложно принять необоснованные решения',
        },
        block4: {
          part1_1: 'Наша',
          part1_2: 'Команда',
          part1_3: 'Наша команда гордится своей способностью разрабатывать новые решения в сфере оценивания. За каждым членом команды стоит большой опыт в сфере оценивания в образовании: от разработки и экспертизы тестов до инновационных технологий обработки, шкалирования и анализа результатов тестирования до предоставления обратной связи и работы в интересах клиентов.',
          part2_1: 'Елена Карданова',
          part2_2: ', кандидат физико-математических наук, один из ведущих российских исследователей в области оценивания образовательных результатов и психометрики, автор многочисленных научных статей, стажировалась в STS (Scholastic Testing Service) и в UIC (University of Illinois at Chicago), более 10 лет руководила центром психометрики и измерений в образовании НИУ «Высшая школа экономики», являлась преподавателем и научным руководителем магистерской программы SOLA (Science of Learning and Assessment), первой в России программы, готовящей специалистов по измерениям в психологии и образовании, является руководителем ежегодной международной летней школы «Прикладная психометрика в образовании и психологии». Исследования Елены сосредоточены в области психометрического моделирования, оценки сложных конструктов, измерения индивидуального прогресса в обучении, межкультурной сопоставимости результатов тестирования, а также использования ИИ в оценивании.',
          part3_1: 'Алина Иванова',
          part3_2: ' закончила магистратуру НИУ «Высшая школа экономики» в 2013 году, а в 2021 году защитила здесь же кандидатскую диссертацию на тему «Разработка и валидизация русскоязычной версии инструмента международного сравнительного исследования навыков учащихся на входе в школу и их прогресса за первый учебный год: проблемы адаптации и локализации». Алина ведет научную и преподавательскую деятельность в области анализа данных психологического и образовательного тестирования. Исследовательские интересы Алины связаны с анализом широкомасштабных мониторингов, кросс-культурных исследований, а также вопросов отслеживания динамики образовательных достижений.',
          part4_1: 'Светлана Авдеева',
          part4_2: ', кандидат технических наук, более 20 лет занимается вопросами цифровой трансформации образования, руководила крупными российскими проектами в сфере информатизации системы образования, в рамках которых были созданы ',
          part4_3: 'Единая коллекция цифровых образовательных ресурсов',
          part4_4: ', свыше 450 межшкольных методических центров, сетевые образовательные сообщества ',
          part4_5: '«Открытый класс»',
          part4_6: ', обучено свыше 200 000 школьных учителей и администраторов применению цифровых технологий в образовательной деятельности. Под ее руководством разработаны инструменты измерения навыков XXI века: универсальных компетенций 4К, ',
          part4_7: 'информационно-коммуникационной компетентности',
          part4_8: ', решения проблем, ',
          part4_9: 'цифровой грамотности',
          part4_10: ' и др. Научные интересы Светланы связаны с разработкой методов и инструментов, измеряющих комплексные конструкты.',
          part5_1: 'Денис Федерякин',
          part5_2: ' закончил психолого-педагогический факультет Смоленского Государственного Университета в 2015 году, психометрическую магистратуру НИУ «Высшая школа экономики» в 2017 году, защитил Ph.D. диссертацию на экономическом факультете Университета Майнца в 2024 году, и с тех пор ведет академическую карьеру в области анализа данных психологического и образовательного тестирования. На счету Дениса более 30 выступлений на международных конференциях (включая конференции ассоциаций-разработчиков стандартов тестирования), а также более 20 публикаций (включая публикации в наиболее известных и престижных международных академических журналах). Денис специализируется на способах обработки данных тестирования с помощью статистических и психометрических моделей и моделей машинного обучения.',
          part6_1: 'Ирина Брун',
          part6_2: ', магистр психометрики, бакалавр социологии. Больше 10 лет в психометрике, из них 4 года в оценке персонала. 7 лет преподавала курс по разработке тестов в магистратуре. Вывела на рынок 10+ тестов на измерение различных конструктов, включая Soft Skills и 21st Century Skills. Основная специализация - проектирование дизайна теста под запрос заказчика и разработка тестовых материалов.',
        },
      },
      consulting: {
        main: {
          title1: 'Направления',
          title2: 'экспертизы',
          title3: 'и консалтинга',
          actionButton: 'Связаться с нами',
        },
        block1: {
          title: 'Мы поможем вам определить, какой тест будет наиболее полезен для решения ваших задач, и разработаем его по международным стандартам',
          part1_1: 'ЭКСПЕРТИЗА ИНСТРУМЕНТОВ ОЦЕНИВАНИЯ',
          part1_2: 'Для образовательных и коммерческих организаций проводим психометрический анализ инструментов оценивания в образовании, проверяем их на соответствие международным стандартам, даем экспертное заключение о качестве инструментов и рекомендации по улучшению качества',
          part2_1: 'ЭКСПЕРТНАЯ ПОМОЩЬ В РАЗРАБОТКЕ ИНСТРУМЕНТОВ ОЦЕНИВАНИЯ В ОБРАЗОВАНИИ',
          part2_2: 'Обеспечиваем методическое и психометрическое сопровождение разработки инструментов оценивания в образовании: можем сами разработать любой инструмент для вас, а можем помочь это сделать вам',
          part3_1: 'ИНДИВИДУАЛЬНЫЙ ОБРАЗОВАТЕЛЬНЫЙ ПРОГРЕСС УЧАЩИХСЯ',
          part3_2: 'Оказываем консалтинговые услуги по измерению индивидуального прогресса в обучении по предметным и метапредметным образовательным результатам, а также по другим психометрическим аспектам измерений в образовании',
          part4_1: 'ОБУЧЕНИЕ МЕТОДИСТОВ И АНАЛИТИКОВ',
          part4_2: 'По различным аспектам измерений в образовании проводим обучение на основе авторских методик дополнительного профессионального образования (язык: русский / английский, формат: онлайн / офлайн)',
          part5_1: 'РАЗРАБОТКА ТЕСТА ПОД ЗАПРОСЫ ЗАКАЗЧИКА',
          part5_2: 'Спроектируем дизайн измерительного инструмента, который позволит ответить на вопросы заказчика; разработаем тест и всю сопроводительную документацию в соответствии с международными стандартами по разработке тестов; спланируем валидизацию теста; проведем валидизационные исследования в соответствии со стандартами',
        },
      },
      contacts: {
        title: 'Контакты',
        subTitle: 'Чтобы задать вопрос или обсудить детали вашего проекта, напишите нам',
        name: 'Елена Карданова',
      },
      tools: {
        main: {
          title1: 'Наши решения',
          title2: 'для измерения',
          title3: 'образовательных',
          title4: 'достижений',
          subTitle1: 'Путь к оценке успеха:',
          subTitle2: 'инновационные подходы к измерению',
          subTitle3: 'образовательных достижений',
          actionButton: 'Связаться с нами',
        },
        moreInfo: 'Подробнее',
        tool: 'Инструмент',
        block1: {
          grade: '1 класс',
          title: '«Старт»',
          description: 'С первых шагов в школе — тестирование базовых навыков',
        },
        block2: {
          grade: '4—8 классы',
          title: 'Мягкие навыки',
          description: 'Критическое мышление, креативность, коммуникация, кооперация',
        },
        block3: {
          grade: '6—10 классы',
          title: 'Цифровые компетенции',
          description: 'Измерение навыков в цифровой области для успешной адаптации в современном мире технологий',
        },
        block4: {
          grade: '4 класс',
          title: '«Прогресс»',
          description: 'Измеряем продвижение в обучении — тестирование базовых грамотностей',
        },
        block5: {
          grade: '7—10 классы',
          title: 'Информационно-коммуникационная компетентность',
          description: 'Способность работать с информацией в цифровой среде',
        },
        block6: {
          part1: 'Все тесты проводятся на компьютерах школы',
          part2: 'Легко настраиваются, понятны учителю-пользователю',
          part3: 'Для ученика это игра — интересные сценарии вместо скучных вопросов',
          part4: 'Обратная связь сразу после теста: разные типы отчётов адаптированы под учителя, ученика и органы управления образованием',
        },
        start: {
          title: 'СТАРТ',
          block1: {
            part1: 'Первоклассники приходят в школу с разными знаниями и уровнем развития. СТАРТ оценивает ',
            part2: 'базовые навыки чтения и математики',
            part3: ', когда ребенок только начинает знакомиться с ними, и когда он или она уже многое умеет. Помимо этого, СТАРТ позволяет оценить ',
            part4: 'пассивный словарный запас',
            part5: ' ребенка, а также ',
            part6: 'фонологическую грамотность',
            part7: ' и некоторые ',
            part8: 'социально-эмоциональные навыки'
          },
          block2: {
            part1: 'Учитель увидит зоны отставания и перспективы развития каждого ребенка, всего класса или параллели.',
            part2: 'С помощью СТАРТ возможно отслеживать динамику результатов и персонализировать обучение.',
            part3: 'Связь результатов нашего теста и успехов детей через несколько лет устойчива и значима — измерена в России для нескольких тысяч младших школьников из разных городов.',
          },
          block3: {
            title1: 'Процедура',
            title2: 'оценивания',
            part1: 'Инструмент спроектирован как игра, чтобы избежать психологического напряжения. В каждом блоке задания идут от простых к более сложным. Если ребенок ошибается, '
                 + 'алгоритм переходит к оценке другого вида заданий. В середине теста — несколько минут игровых физических упражнений. Это помогает отвлечься и снять усталость.',
            part2: 'Алгоритм внутри инструмента меняет задания, регулирует их сложность и озвучивает вопросы через голосового помощника Анфису. Роль взрослого — вводить ответы ребенка '
                 + 'на компьютере и похвалить ребенка в конце. Если учеба дистанционная, вместо учителя тест могут провести родители. Если ребенок не хочет делать задания, устал или '
                 + 'заплакал — на каждый случай предусмотрены сценарии, как действовать взрослому.',
          },
          block4: {
            title: 'Обратная связь',
            part1: 'По результатам оценки дается подробная обратная связь: для родителей и ребенка, для учителя (индивидуально для каждого ребенка и для всего класса).',
            part2: 'СТАРТ-тестирование проводят в начале и завершении первого класса. Отследить динамику на большем отрезке времени помогают его модификации: инструменты ',
            part3: 'ПРОГРЕСС',
            part4: ' для середины и конца начальной школы.'
          },
        },
        softSkills: {
          title: '4К-тест',
          subTitle: 'Мягкие навыки',
          block1: {
            part1: 'Креативность, критическое мышление, коммуникация и кооперация (4К) относятся к навыкам 21 века. Их измерением занимаются авторитетные международные организации. '
                 + 'Образовательные стандарты многих стран требует формировать образовательные результаты, связанные с нестандартным решением задач, умением работать в команде, '
                 + 'видеть причины и следствия. ',
            part2: '4К-тест',
            part3: ' проверяет, как сформированы эти результаты, выявляет дефициты и помогает настроить программу развития навыков 4К у детей. Эти навыки необходимы, чтобы ученики '
                 + 'могли успешно адаптироваться в современном мире и быть успешными: учиться новому, критически оценивать информацию, работать в команде и нестандартно решать задачи.',
            part4: 'Инструмент ',
            part5: '4К-тест',
            part6: ' реализован в форме компьютерной системы тестирования с автоматизированным процессом сбора, обработки и оценки результатов и направлен на измерение навыков коммуникации, '
                 + 'кооперации, критического мышления и креативности у школьников с четвертого по восьмой класс.',
          },
          block2: {
            part1: 'Инструмент измерения ',
            part2: '4К-тест',
            part3: ' разработан на основе метода доказательной аргументации (Evidence-Centered Design), в основе которого заложена разработка наблюдаемых доказательств, позволяющих сделать '
                 + 'вывод о сформированности измеряемых навыков 4К.',
            part4: 'В качестве формы задания выбран сценарный тип, так как он в отличие от классических форм позволяет добиться максимальной аутентичности при прохождении тестирования. '
                 + 'Часть заданий моделируют ситуации, с которыми участники тестирования могут столкнуться в реальной жизни, например, планирование расписания мероприятий на следующей день, '
                 + 'подготовка к школьному празднику, другие же задания выполнены в фантастическом контексте, где участники попадают в мир волшебников и чудовищ, или становятся членами космической '
                 + 'экспедиции. Разнообразие заданий позволяет зафиксировать поведение, соответствующее измеряемым навыкам 4К, и в целом помогает решить задачу мотивации ребенка к выполнению теста, '
                 + 'а, следовательно, повышает степень достоверности полученных результатов.',
          },
          block3: {
            title1: 'Процедура',
            title2: 'оценивания',
            part1: 'Разработана очень ',
            part2: 'подробная процедура администрирования',
            part3: ' дистанционного процесса тестирования.',
            part4: 'Тестирование включает серию ',
            part5: 'заданий сценарного типа',
            part6: '. На выполнение непосредственно тестовых заданий отводится ',
            part7: '40-90 минут',
            part8: ' в зависимости от выбранного набора заданий и оцениваемых навыков.',
            part9: 'Задания не связаны с предметными знаниями.',
            part10: ' Сценарии разработаны таким образом, что их решение способно заинтересовать школьников, тем самым повышая внутреннюю мотивацию к решению задачи.',
            part11: 'Тестовые задания предполагают использование симуляторов широкого спектра цифровых технологий, в том числе браузера,'
                + ' мессенджеров, электронной почты, соцсетей, текстовых редакторов, идентичных подобным в реальной жизни.',
            part12: 'Автоматическая обработка результатов',
            part13: ' с «обратной связью» респонденту сразу после окончания тестирования.',
          },
          block4: {
            title: 'Обратная связь',
            part1: 'В результате тестирования определяется общий уровень каждого навыка 4К, исходя из трех возможных:',
            part2: 'По результатам тестирования предоставляется индивидуальная обратная связь школьнику и родителям, учителю и классу, а также обобщённый отчет по школе.',
            part3: 'Используемый метод доказательного оценивания позволяет выявить и описать пробелы в развитии навыков коммуникации, кооперации, критического мышления и '
                 + 'креативности, над которыми следует работать в рамках учебного процесса.',
            levels: {
              subTitle1: 'Критическое мышление',
              subTitle2: 'Креативность',
              subTitle3: 'Коммуникация и кооперация',
              lev1: {
                title: 'Развивающийся уровень',
                part1: 'Тестируемый, находящийся на данном уровне показывает слабые навыки анализа: не всегда выбирает релевантный и надежный, заслуживающий доверия, источник '
                     + 'информации, не может понять, какая информация из текста поможет ему в решении поставленной задачи, и, как следствие, решение проблемы, которое предлагает '
                     + 'такой ученик часто не соответствует условиям задачи.',
                part2: 'Тестируемый, находящийся на развивающемся уровне креативности по результатам теста 4К, предлагает в основном типичные, ожидаемые, не оригинальные идеи. '
                     + 'Идеи, которые предлагает ученик, общи, не содержат большого количества деталей и могут быть не продуманы до конца.',
                part3: 'Тестируемый, находящийся на развивающем уровне, в процессе тестирования не проявлял умения распознавать эмоции других и адаптировать своё общение под '
                     + 'собеседника, его состояние и особенности ситуации взаимодействия. Этому ученику сложно участвовать в командной работе, где для достижения наилучшего '
                     + 'результата нужно прислушиваться к мнению других участников, обмениваться информацией и ресурсами, вместе с ними принимать решения и действовать совместно.',
              },
              lev2: {
                title: 'Базовый уровень',
                part1: 'Тестируемый, находящийся на базовом уровне развития критического мышления по результатам теста 4К, умеет анализировать информацию: видеть полезную и нужную '
                     + 'информацию, а также не опирается на информацию из ненадежных источников. Либо, при развивающемся уровне анализа, такой ученик формулирует верное решение '
                     + 'проблемы, которое жизнеспособно и соответствует условиям задачи.',
                part2: 'Идеи тестируемого, находящегося на этом уровне, могут быть детально проработаны и продуманы, но сама по себе идея будет не новой, типичной. Или же наоборот, '
                     + 'оригинальная, непохожая на другие идея будет слабо проработана, у такой идеи не будет много деталей.',
                part3: 'Тестируемый, находящийся на базовом уровне развития Коммуникации и Кооперации не всегда может распознать эмоции других членов команды и действовать, учитывая '
                     + 'эти эмоции. В командной работе такой ученик может обмениваться информацией, но не всегда действует и принимает решения с учетом мнения напарников.',
              },
              lev3: {
                title: 'Продвинутый уровень',
                part1: 'Тестируемый, которому присвоен продвинутый уровень критического мышления по результатам прохождения теста, умеет как анализировать материалы, так и '
                     + 'формулировать адекватное решение поставленной перед ним проблемы. Такой ученик может сформулировать релевантный вопрос и отобрать те источники информации, в '
                     + 'которых будет содержаться надёжная информация. При работе с источниками информации такой ученик чётко выделяет необходимую для решения проблемы информацию и '
                     + 'использует её для того, чтобы сделать правильный вывод.',
                part2: 'Тестируемый, находящийся на этом уровне, в процессе выполнения теста 4К продемонстрировал умение придумывать новые, интересные, оригинальные идеи и при этом '
                     + 'доводить их до конца, снабжать всеми необходимыми деталями, для того, чтобы задуманный им образ был завершенным.',
                part3: 'Тестируемый, находящийся по результатам тестирования на продвинутом уровне развития компетенций Коммуникации и Кооперации, продемонстрировал как понимание '
                     + 'эмоций других, так и умение поддержать напарника и помочь во время командной работы. Во время совместной работы такой ученик слышит мнения участников команды '
                     + 'и корректирует работу и принимаемые решения с учетом этих мнений.',
              },
            },
          },
        },
        progress: {
          title: 'ПРОГРЕСС',
          subTitle: 'Продвижение вперёд: увидеть динамику каждого ребёнка',
          block1: {
            part1: 'Тестирование с помощью инструмента ',
            part2: 'СТАРТ',
            part3: ' проводят в начале и в конце первого года обучения ребенка в школе. Отследить динамику каждого ребенка на большем отрезке времени помогают его модификации: '
                 + 'инструменты ПРОГРЕСС для середины и конца начальной школы.',
            part4: 'Первые годы обучения в школе очень важны для ребёнка. Ученые доказали, что результаты детей в начале обучения предсказывают их успешность вплоть до конца '
                 + 'обучения в школе. Поэтому для учителей и родителей крайне важно иметь надежные средства диагностики и измерения прогресса учеников в начальной школе.',
            part5: 'Инструмент ПРОГРЕСС позволяет измерить продвижение ребенка от базовых навыков в чтении к его или ее ',
            part6: 'читательской грамотности',
            part7: ', а также от базовых навыков математики — к ',
            part8: 'математической грамотности',
          },
          block2: {
            title: 'Процедура оценивания',
            part1: 'Тестирование разделено на блоки, задания идут от простых к сложным. Если ребёнок несколько раз ошибается при оценке одного навыка, то адаптивный алгоритм '
                 + 'внутри инструмента меняет задания, регулируя прохождение ребенком теста.',
            part2: 'Каждый ребёнок сидит отдельно за своим компьютером. В классе присутствует учитель, который следит за безопасностью и порядком в классе, а также помогает '
                 + 'ученикам справиться с техническими трудностями, в случае их возникновения.',
            part3: 'Оценивание по двум областям проводится в разные дни. Длительность одного тестирования около 40 минут.',
          },
          block3: {
            title1: 'Обратная',
            title2: 'связь',
            part1: 'По результатам оценки дается подробная обратная связь: для родителей и ребенка, для учителя (индивидуально для каждого ребенка и для всего класса).',
          },
        },
        digSkills: {
          title: 'DIGLIT',
          subTitle: 'Цифровые компетенции',
          block1: {
            part1: 'Инструмент ',
            part2: 'DIGLIT',
            part3: ' реализован в форме компьютерной системы тестирования с автоматизированным процессом сбора, обработки и оценки результатов и направлен на измерение цифровой '
                 + 'грамотности 12-14 летних школьников.',
            part4: 'Цифровая грамотность является комплексным конструктом, в состав которого входит ряд цифровых навыков, необходимых для работы в цифровой среде, что нашло отражение в определении — ',
            part5: 'способность безопасно для себя и других использовать цифровые технологии для поиска, анализа, создания, управления информацией, коммуникации и коллективной '
                 + 'работы с целью решения задач в цифровой среде для удовлетворения личных и образовательных потребностей',
            part6: ' — и обусловило подход к разработке инструмента измерения.',
          },
          block2: {
            title: 'Какие цифровые навыки измеряются?',
            part1: 'Инструмент измерения ',
            part2: 'цифровой грамотности DIGLIT',
            part3: ' разработан на основе метода доказательной аргументации (Evidence-Centered Design), в основе которого заложена разработка наблюдаемых доказательств, позволяющих '
                 + 'сделать вывод о сформированности измеряемых цифровых компетенций.',
            part4: 'В качестве ',
            part5: 'формы задания выбран сценарный тип',
            part6: ', так как он позволяет добиться максимальной аутентичности в отличие от классических форм, моделирует ситуации, с которыми участники тестирования могут '
                 + 'столкнуться в реальной жизни, например, планирование поездки в неизвестное место, поиск необходимой информации в интернете или создание визуализации в '
                 + 'мультимедийной программе, создают среду, которая при этом позволяет зафиксировать поведение, соответствующее измеряемым цифровым навыкам, и в целом помогает '
                 + 'решить задачу внутренней мотивации выполнения теста, а, следовательно, повышает степень достоверности полученных результатов.',
          },
          block3: {
            title1: 'Процедура',
            title2: 'оценивания',
            part1: 'Разработана очень подробная ',
            part2: 'процедура администрирования',
            part3: ' дистанционного процесса тестирования.',
            part4: 'Варианты  теста включают ',
            part5: '4 задания сценарного типа',
            part6: '. На выполнение непосредственно тестовых заданий отводится ',
            part7: '60 минут',
            part8: '. Для компьютерного тестирования данной возрастной группы (школьники 12-14 лет) предусмотрены 2 перерыва по 5 минут для гимнастики глаз (20 + 20 + 20 минут с двумя перерывами).',
            part9: 'Задания не связаны с предметными знаниями.',
            part10: ' Сценарии разработаны таким образом, что их решение способно заинтересовать школьников, тем самым повышая внутреннюю мотивацию к решению задачи.',
            part11: 'Тестовые задания предполагают использование симуляторов широкого спектра цифровых технологий',
            part12: ', в том числе браузера, облачного хранилища, мессенджеров, электронной почты, соцсетей, текстовых редакторов, программ создания презентаций и др., ',
            part13: 'полностью идентичных подобным в реальной жизни.',
            part14: 'Контекст заданий:',
            part15: ' учебный (из школьной среды) и личный (задача из повседневной жизни вне школы).',
            part16: 'Автоматическая обработка результатов',
            part17: ' с «обратной связью» респонденту сразу после окончания тестирования.',
          },
          block4: {
            title: 'Обратная связь',
            part1: 'В результате тестирования определяется общий уровень цифровой грамотности обучающихся, исходя из трех возможных:',
            part2: 'Развивающийся уровень',
            part3: 'Ученик, находящийся на развивающемся уровне:',
            part4: 'владеет основами поиска и анализа информации, но не способен выделить релевантную информацию и определить '
                 + 'надежность источников. Плохо классифицирует информацию, не способен создать информационный продукт по заданным критериям;',
            part5: 'способен выполнить предложенную последовательность действий (алгоритм) решения практической задачи;',
            part6: 'владеет основными навыками коммуникации в цифровой среде, но, не всегда может выбрать подходящий формат представления '
                 + 'информации для конкретной целевой аудитории, не соблюдает правила цифрового этикета;',
            part7: 'способен обнаружить наиболее очевидные угрозы, но не всегда готов защитить свои устройства; не всегда идентифицирует '
                 + 'проблемный контент и не способен защитить личные данные;',
            part8: 'владеет минимальными техническими навыками работы с цифровыми технологиями, которые не позволяют полностью решить задачу в цифровой среде.',
            part9: 'Базовый уровень',
            part10: 'Ученик, находящийся на базовом уровне:',
            part11: 'способен искать и анализировать информацию, выделять релевантную информацию при этом опираясь на информацию из '
                  + 'надежных и достоверных источников. Способен классифицировать и систематизировать информацию, создавать простые информационные '
                  + 'продукты по заданным критериям или создавать сложные информационные продукты с небольшим количеством ошибок;',
            part12: 'способен не только выполнить предложенную последовательность действий, но и составить свой алгоритм для решения задачи;',
            part13: 'способен коммуницировать в цифровой среде с пониманием основных норм и правил общения, может выбрать формат представления '
                  + 'информации для конкретной целевой аудитории;',
            part14: 'способен идентифицировать риски, но не всегда готов защитить свои устройства и данные;',
            part15: 'владеет техническими навыками, достаточными для решения задач в цифровых средах.',
            part16: 'Продвинутый уровень',
            part17: 'Ученик, находящийся на продвинутом уровне:',
            part18: 'способен как искать и анализировать информацию, так и формулировать правильное решение поставленной задачи, опираясь '
                  + 'на надежные и достоверные источники, классифицировать и организовывать информацию для быстрого нахождения и оптимального '
                  + 'использования при решении задач, создавать информационные продукты, соответствующие возрасту, по заданным критериям без ошибок;',
            part19: 'способен выполнить предложенную последовательность действий, составить свой алгоритм для решения задачи и провести его оптимизацию;',
            part20: 'способен выстроить эффективную коммуникацию для решения задачи с соблюдением этических и правовых норм;',
            part21: 'способен обнаружить угрозы и защитить свои устройства, избегать рисков работы в цифровой среде и полностью защитить свои конфиденциальные данные;',
            part22: 'свободно использует цифровые технологии при решении задач, решает сложные пользовательский задачи в цифровых средах и может помочь другим.',
            part23: 'По результатам тестирования предоставляется индивидуальная обратная связь школьнику и родителям, учителю и классу, а также обобщённый отчет по школе.',
            part24: 'Используемый метод доказательного оценивания позволяет выявить и описать пробелы в развитии цифровых компетенций школьника, над которыми следует '
                  + 'поработать. Пример индивидуального отчета школьника для базового уровня цифровой грамотности:',
          },
        },
        comSkills: {
          title: 'ICL test',
          subTitle: 'Информационно-коммуникационная компетентность',
          block1: {
            part1: 'Инструмент ',
            part2: 'ICL test',
            part3: ' реализован в форме компьютерной системы тестирования на основе выполнения аутентичных заданий сценарного типа в контролируемых условиях с '
                 + 'автоматизированным процессом обработки результатов тестирования и предоставления обратной связи сразу после его прохождения.',
            part4: 'Целевая аудитория — учащиеся 13-15 лет.',
            part5: 'Современный человек живет в цифровом мире, в котором невозможно комфортно жить без способности работать с информацией '
                 + 'в цифровой среде. Показателем этой способности является уровень информационно-коммуникационной компетентности '
                 + '(ИК-компетентности). ИК-компетентность — это не только и не столько уровень владения конкретными компьютерными '
                 + 'программами и цифровыми технологиями, под ИК-компетентностью понимается способность и готовность учащихся использовать '
                 + 'цифровые технологии, сервисы и инструменты с целью получения доступа, анализа, управления, интеграции, создания '
                 + 'информации и коммуникации, соблюдая этические и правовые нормы.',
            part6: 'Особенностью ',
            part7: 'ICL test',
            part8: ' является то, что он дает возможность оценить способность учащегося использовать цифровые среды и сервисы для получения новых знаний, осуществления '
                 + 'коммуникации, проведения исследовательской деятельности, что, в конечном итоге, поможет учащемуся приобрести навыки обучения в течение всей жизни и '
                 + 'выполнении будущих профессиональных обязанностей.',
          },
          block2: {
            title1: '7 составляющих ИК-компетентности,',
            title2: 'которые измеряет ICL test:',
            part1: 'Инструмент измерения ',
            part2: 'ICL test',
            part3: ' разработан на основе метода доказательного оценивания (Evidence-Centered Design), в основе которого заложена разработка наблюдаемых доказательств, '
                 + 'позволяющих сделать вывод об уровне ИК-компетентности учащихся. В оценку включён не только результат выполненных заданий, но и оценивается процесс '
                 + 'их решения (поведенческие характеристики тестируемых), обработка результатов происходит на основе действий, произведённых обучающимися в заданиях '
                 + 'при выполнении ICL test.'
          },
          block3: {
            title1: 'Процедура',
            title2: 'оценивания',
            part1: 'Разработано ',
            part2: 'руководство администратора тестирования',
            part3: ', в котором детально описана процедура проведения тестирования.',
            part4: 'Тестирование включает ',
            part5: '8 аутентичных заданий сценарного типа',
            part6: '. На выполнение непосредственно тестовых заданий отводится ',
            part7: '75 минут',
            part8: '. В процессе тестирования предусмотрены',
            part9: '2 перерыва по 5 минут для гимнастики глаз',
            part10: ' (25 + 25 + 25 минут с двумя перерывами).',
            part11: 'При выполнении тестовых заданий учащийся использует эмулятор браузера для выхода в Интернет, осуществляет поиск файлов, работает с графиками, электронными '
                  + 'таблицами и презентациями, пользуется текстовым редактором и электронной почтой, общается в социальных сетях и коммуникаторах, запускает мультимедиа и анализирует базы данных.',
            part12: 'При проведении тестирования используются стационарные или переносные компьютеры (за отдельным компьютером работает только один обучающийся), манипуляторы типа мышь. На компьютеры '
                  + 'обязательно должна быть установлена последняя версия Google Chrome (это единственное требование к программному обеспечению при проведении тестирования).',
            part13: 'Задания не связаны с предметными знаниями.',
            part14: ' Сценарии разработаны таким образом, что их решение способно заинтересовать школьников, тем самым повышая внутреннюю мотивацию к решению задачи.',
            part15: 'Автоматическая обработка результатов',
            part16: ' с «обратной связью» респонденту сразу после окончания тестирования.',
          },
          block4: {
            title: 'Обратная связь',
            part1: 'После прохождения ',
            part2: 'ICL test',
            part3: ' учащемуся присваивается один из уровней ИК-компетентности — в зависимости от того, в какой степени он владеет каждой из семи составляющих. Всего таких уровней пять:',
            part4: 'Продвинутый уровень',
            part5: 'Учащиеся самостоятельно и квалифицированно используют цифровые технологии для решения учебных задач и задач в реальной жизни. При создании информационных продуктов '
              + '(поиске и выборе информации, форматировании и дизайне материалов) учащиеся понимают, для какой аудитории создаются эти продукты. Они осознают, что информация может быть коммерческим '
              + 'и подверженным влиянию продуктом, разбираются в вопросах интеллектуальной собственности.',
            part6: 'Уровень выше базового',
            part7: 'Учащиеся демонстрируют хороший уровень знаний, навыков и понимания при самостоятельном поиске информации и редактировании информационных продуктов, а также управления ими. Учащиеся '
              + 'отбирают необходимую информацию из электронных ресурсов, адаптируют ее под требования задачи и создают собственные информационные продукты. Они также осознают, что найденная информация '
              + 'может быть пристрастной, недостоверной или ненадежной.',
            part8: 'Базовый уровень',
            part9: 'Учащиеся демонстрируют базовый уровень ИК-компетентности. Они могут находить информацию, пользуясь простыми электронными ресурсами, выбирают и добавляют содержание информационных продуктов, '
              + 'демонстрируют способность форматировать текст и изображения в информационных продуктах, работают с электронными таблицами и графическими редакторами, программами для обмена мгновенными '
              + 'сообщениями и другими коммуникаторами. Они понимают необходимость защиты доступа к электронной информации и возможные последствия нежелательного доступа к информации.',
            part10: 'Уровень ниже базового',
            part11: 'Учащиеся знакомы с основными программами, могут работать с файлами на компьютере и выполнять простые операции с информацией. Учащиеся знают основные правила, использующиеся для коммуникации '
              + 'онлайн, а также последствия использования компьютеров неавторизированными пользователями.',
            part12: 'Развивающийся уровень',
            part13: 'Учащиеся плохо работают с основными программами, плохо систематизируют файлы на компьютере и выполняют простые операции с информацией (поиск информации, редактирование текста, работа с '
              + 'электронными таблицами, изображениями и т.п.) с ошибками. Учащиеся знают основные правила, использующиеся для коммуникации онлайн, но при этом они не понимают ответственности за '
              + 'использование и передачу информации с точки зрения законности и соблюдения этических норм.',
            part14: 'По результатам тестирования предоставляется индивидуальная обратная связь учащемуся и родителям, учителю и классу, а также обобщённый отчет по школе.',
            part15: 'Используемый метод доказательного оценивания позволяет выявить и описать пробелы в развитии навыков работы с информацией в цифровой среде, над которыми следует работать в рамках учебного процесса.',
          },
        },
      },
    },
  },
})

export default i18n