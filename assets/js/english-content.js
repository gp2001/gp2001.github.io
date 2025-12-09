// English content for the resume
window.englishContent = {
  about_content: `Hello, my name is Gabriël and I work as an AI Consultant & Engineer at ICT Nederland. In my current role, I analyze client use-cases, conduct technical feasibility assessments, and provide strategic guidance on AI solution architecture and tool selection. I guide clients in AI implementations with a focus on security compliance, on-premises deployment, and make-or-buy decisions.

My expertise includes <mark>GenAI systems</mark>, <mark>RAG architectures</mark>, <mark>LLM customization</mark>, <mark>multi-agent orchestration</mark>, and <mark>vector databases</mark>. I work with <mark>Python</mark>, <mark>C#</mark>, <mark>Docker/Kubernetes</mark>, and master healthcare compliance frameworks such as <mark>ISO 13485</mark>, <mark>IEC 62304</mark>, <mark>ISO 14971</mark> and data security protocols.

Technical stack: <mark>LangChain alternatives</mark>, <mark>GraphQL</mark>, <mark>ColPali</mark>, <mark>quantization techniques</mark>, <mark>Azure</mark>, <mark>Terraform</mark>, and <mark>CI/CD pipelines</mark>. I speak <mark>Dutch</mark>, <mark>English</mark>, <mark>Chaldean</mark>, and <mark>German</mark>.`,

  projects: [
    {
      id: 'mgh',
      title: 'Massachusetts General Hospital - Implementing AI in Patient Data',
      sub_title: 'Consultant/ AI Developer',
      caption: 'December 2024 - Present',
      quote: 'Development of an AI system for analyzing unstructured medical data and identifying patient groups using GraphQL and vector databases.',
      description: `**Situation:** Massachusetts General Hospital (MGH) is a leading hospital and has been an ICT client for over 10 years. They had developed an application for radiology that allowed doctors to see exactly what stage a patient was in during radiotherapy. MGH dealt with large amounts of unstructured data, such as clinical notes, from which valuable information could be extracted, but for which no efficient analysis system existed.

**Task:** My task was to develop an AI solution that would help MGH analyze unstructured data to gain valuable insights. The goal was to identify similar patients who had become ill after a specific treatment, a process that would normally require a cohort study of 9 months.

**Activities:**
- Analyzed current data analysis processes and identified bottlenecks
- Developed a <mark>vector database</mark> in the form of a graph to efficiently organize and search the data
- Implemented a <mark>GraphQL</mark> interface to extract the right information from the vector database
- Developed a <mark>multi-agent workflow</mark> with specialized agents for data extraction, validation, and analysis
- Built a <mark>RAG system</mark> without using LangChain, according to MGH's specific requirements
- Ensured compliance with <mark>healthcare data security standards</mark> and implemented access controls according to HIPAA protocols
- Ensured <mark>on-premises deployment</mark> to keep patient data within hospital infrastructure

**Result:** The AI solution enabled MGH to identify patient groups who had undergone similar treatments and experienced similar complications within minutes. This shortened the cohort study process from 9 months to just a few minutes, allowing doctors to make evidence-based decisions faster and significantly improving patient care.`
    },
    {
      id: 'asml',
      title: 'ICT Netherlands - LLM for CIDT Developers',
      sub_title: 'Machine Learning Developer',
      caption: 'October 2024 - November 2024',
      quote: 'Implementation of a locally running RAG system for searching PDF documentation in a secure CIDT environment.',
      description: `**Situation:** ASML is a leading company in the semiconductor industry, where ICT employees work in a CIDT environment. In this environment, all documentation was only available in PDF format, making it difficult to find and use information quickly and efficiently.

**Task:** My task was to implement a RAG system that would increase the efficiency of ICT employees by enabling them to quickly retrieve information from their environment. This system had to be integrated into the existing infrastructure and comply with ASML's strict security standards.

**Activities:**
- Conducted <mark>technical evaluation</mark> of 3 commercial RAG solutions vs. custom development, recommended in-house solution based on security requirements and TCO analysis
- Developed a <mark>RAG system</mark> that visually displays the status of processes and projects
- Integrated the RAG system with ASML's existing infrastructure (both with <mark>image embeddings</mark> and <mark>ColPali</mark> as well as <mark>text embeddings</mark> with <mark>OCR</mark>)
- Implemented a <mark>locally running LLM</mark> with strict compliance to industrial security protocols (<mark>Quantization</mark>, <mark>offloading</mark>)
- Set up <mark>CI/CD pipeline</mark> for ML model deployment and managed containerized AI services with <mark>Docker/Kubernetes</mark>
- Ensured compliance with ASML's data security frameworks and industrial compliance standards

**Result:** The implemented RAG system significantly increased the efficiency of ICT employees by enabling them to quickly and easily see the status of various processes and projects. The local implementation of the LLM ensured that sensitive data remains secure, meeting ASML's strict security standards.`
    },
    {
      id: 'surfix',
      title: 'SURFIX Diagnostics - Data Analysis Automation',
      sub_title: 'Data Scientist',
      caption: 'November 2024 - Present',
      quote: 'Automation and optimization of data analysis processes for photonic biosensor technology with an acceleration from 20 minutes to 1 second.',
      description: `**Situation:** Surfix Diagnostics developed innovative diagnostic technologies, including the photonic biosensor. The organization needed faster and more efficient data analysis processes to fully utilize the potential of this technology. The existing analysis processes took too much time and formed a bottleneck in the research and development process.

**Task:** My task was to automate and optimize the data analysis processes to accelerate the analysis of large datasets and improve efficiency. The goal was to drastically shorten the turnaround time without loss of accuracy.

**Activities:**
- Performed <mark>data cleaning</mark> and loading to ensure the quality of the datasets
- Implemented automatic drift, slope, and tableau determination
- Optimized analysis algorithms for speed improvement
- Applied <mark>machine learning</mark> techniques to identify relationships and develop predictive models

**Result:** I achieved a significant acceleration of data analysis, from 20 minutes to 1 second per dataset. This enabled Surfix Diagnostics to make diagnoses and conduct research faster and more efficiently, significantly shortening the development cycle of new diagnostic tests.`
    },
    {
      id: 'vision',
      title: 'ICT Nederland - Vision Based Object Detection',
      sub_title: 'Data Scientist',
      caption: 'October 2024 - November 2024',
      quote: 'Development of a YOLO OBB model for detecting multiple objects, including their coordinates, angle, and labels for a physical LEGO terminal replica.',
      description: `**Situation:** I worked on the "Physical Twin Terminal" project where we built a physical replica of a terminal with LEGO, including cranes and autonomous vehicles. The goal was to develop a system that could detect multiple objects on a surface (in this case a table) simultaneously.

**Task:** My task was to find a solution for detecting multiple objects on a surface, with the goal of determining the coordinates, angle, and labels of the objects. I worked as a researcher and developer on this project and used <mark>Python</mark> as the programming language.

**Activities:**
- Created and annotated a dataset with the necessary labels
- Trained a <mark>YOLO OBB model</mark> to determine the coordinates, angle, and labels of the objects
- Used the <mark>OpenCV</mark> library in Python to train and test the model
- Applied various techniques, such as <mark>data augmentation</mark> and <mark>hyperparameter tuning</mark>, to improve the model's performance

**Result:** The result was a trained YOLO OBB model capable of simultaneously detecting multiple objects on a surface and determining their coordinates, angle, and labels. This model can now be used to control and operate the cranes and vehicles in the physical twin.`
    },
    {
      id: 'stater',
      title: "Generating Structured Synthetic Data; Empowering Stater's Mortgage Services with a Large Language Model",
      quote: 'Conversion of raw website data into an ORPO dataset using LLMs for fine-tuning a mortgage advisory model.',
      description: `**Situation:** Stater provides mortgage services and wanted to improve their services with AI technology. The company had collected raw, unstructured data from websites, but this data was not suitable for direct processing by <mark>Large Language Models (LLMs)</mark>. There was a need for a structured dataset to train a specialized model for mortgage advice.

**Task:** My task was to convert the raw website scraped data into an ORPO (Odd Ratio Preference Optimization) dataset suitable for fine-tuning an LLM. The goal was to create a high-quality dataset that could be used to train a model that could provide accurate mortgage information.

**Activities:**
- Developed <mark>prompts</mark> for converting unstructured data into structured format
- Applied <mark>LLM customization techniques</mark> including <mark>Supervised Fine-Tuning (SFT)</mark> and <mark>prompt engineering</mark> for mortgage domain adaptation
- Implemented <mark>RLHF (Reinforcement Learning from Human Feedback)</mark> workflows to optimize model output
- Developed validation checks such as <mark>hallucination score</mark> and <mark>token similarity analyses</mark> to ensure quality
- Set up <mark>LLMOps pipeline</mark> with automated model evaluation and deployment monitoring
- Iteratively optimized LLM performance and improved result accuracy

**Result:** I produced a high-quality ORPO dataset that was used for fine-tuning an LLM specifically for mortgage advice. The validation checks showed that the generated data was of high quality with minimal hallucinations. This enabled Stater to implement a specialized AI model that could support customers with mortgage questions.`
    },
    {
      id: 'verdachte-tijdlijn',
      title: 'Suspect Timeline',
      link: 'https://www.youtube.com/watch?v=vV1JjrZjnxk',
      link_text: 'Project Video',
      quote: 'Development of an AI system for the National Police and Royal Marechaussee to convert camera footage into searchable text descriptions.',
      description: `**Situation:** The National Police and Royal Marechaussee had large amounts of camera footage that had to be searched manually, a time-consuming and inefficient process. There was a need for a system that could automatically detect objects in camera footage and convert them into text descriptions, so that specific objects could be searched for legally and efficiently. I worked on this project in a multidisciplinary team of 10 students for six months.

**Task:** My task was to develop the <mark>Back-End</mark> architecture that could process camera footage and convert it into structured text descriptions. I was responsible for implementing object detection, tracking, and attribute recognition models.

**Activities:**
- Implemented <mark>object detection</mark> and <mark>tracking</mark> algorithms to follow objects through video material
- Trained a custom model for <mark>clothing detection</mark> to recognize specific garments
- Developed a <mark>color detection</mark> algorithm to accurately determine the colors of objects
- Worked with <mark>Scrum</mark> and <mark>Agile</mark> methodologies, including regular <mark>Retros</mark>
- Implemented the solution with <mark>Docker</mark>, <mark>Python</mark>, and version control via <mark>GitHub</mark>
- Ensured the integration of all components into a working system

**Result:** I delivered a working Back-End system that could automatically analyze camera footage and convert it into searchable text descriptions. The system enabled the police to efficiently search for persons based on clothing characteristics and colors, significantly reducing investigation time. The final product was successfully demonstrated to the clients, as shown in the project video.`
    },
    {
      id: 'websites',
      title: 'Websites for Various Clients',
      link: 'https://www.polezait.nl',
      quote: 'Development of custom websites for various businesses and professionals through my own web development company Polezait.nl.',
      description: `**Situation:** As owner of Polezait.nl, I received requests from various clients who needed a professional online presence. Restaurants, hairdressers, realtors, solar panel companies, and freelancers needed modern, functional websites that effectively presented their services. Many freelancers also needed automated invoicing solutions to simplify their administration.

**Task:** My task was to design and develop a custom website for each client that matched their specific needs, brand identity, and target audience. I was responsible for the entire development process, from requirements analysis to deployment and maintenance.

**Activities:**
- Conducted intake meetings with clients to understand their vision, goals, and functional requirements
- Designed and implemented responsive websites with <mark>HTML</mark>, <mark>CSS</mark>, and <mark>JavaScript</mark>
- Created an automated invoicing system for freelancers that could generate and manage invoices
- Optimized websites for performance, SEO, and user-friendliness
- Maintained ongoing communication with clients to process feedback and implement changes
- Handled deployment and hosting of the websites

**Result:** I delivered modern, functional websites that effectively reflected my clients' identity and goals. The invoicing tool for freelancers significantly reduced their administrative time. Clients reported improved online visibility and customer acquisition. These projects strengthened my skills in web development and client communication, and further built my portfolio as a versatile web developer.`
    },
    {
      id: 'disneyroute',
      title: 'DisneyRoute',
      link: 'https://www.instagram.com/disneyroute/',
      quote: 'Development of a route optimization application for Disneyland Paris with pathfinding algorithms and database integration.',
      description: `**Situation:** Disneyland Paris visitors had difficulty planning their park visit efficiently, resulting in long wait times and missed attractions. There was a need for a tool that could automatically calculate the optimal route through the park, taking into account wait times, attraction locations, and user preferences. This was my introductory project where I worked in a team for the first time on a larger software project.

**Task:** My task was to contribute to the development of a route optimization application that could calculate the fastest route through Disneyland Paris for visitors. I was responsible for implementing pathfinding algorithms and database integration.

**Activities:**
- Implemented <mark>shortest path algorithms</mark> (such as Dijkstra's algorithm) to calculate optimal paths
- Developed the <mark>database</mark> structure for storing attraction data, locations, and wait times
- Worked in a <mark>team</mark> with other students and learned to communicate effectively and divide tasks
- Programmed the application in <mark>C#</mark> and used object-oriented programming
- Integrated various components into a working whole

**Result:** I delivered a working route optimization application that helped users plan their Disneyland Paris visit more efficiently. The project gave me valuable first experience with algorithms, databases, teamwork, and software development in C#. The application is documented on the associated Instagram and GitHub page.`
    }
  ],

  interests_content: `- Football: I play regularly in my free time and enjoy watching matches.
- Fitness: I value a healthy lifestyle and enjoy spending time at the gym.
- Gaming: I enjoy relaxing with a video game from time to time.
- Personal development: I am always looking for ways to improve myself and learn new skills.
- Networking: I enjoy meeting new people and learning from their experiences.
- Going on adventures: I love discovering new places and gaining new experiences, both in my own environment and beyond. I am always willing to step out of my comfort zone and take on new challenges.`,

  workExperience: [
    {
      title: 'Albert Heijn',
      sub_title: 'Team Leader',
      caption: 'January 2017 - March 2019',
      quote: 'Gaining leadership and social experience.',
      description: 'Every company needs someone who maintains order and provides instructions to keep the business running. This brings challenges in keeping employees optimally and positively engaged. Here I obtained my <mark>Company First Aid certificate</mark>.'
    },
    {
      title: 'Groot en Klein',
      sub_title: 'Mover',
      caption: 'July 2019 - September 2019',
      quote: 'Gaining heavy work experience.',
      description: 'A company needs employees who are capable of performing heavy work. This experience helps them understand how this should be done and to develop communication skills.'
    },
    {
      title: "Picnic, Dani's Corner and Parakalo",
      sub_title: 'Delivery Driver',
      caption: 'January 2020 - September 2020',
      quote: 'Gaining driving experience.',
      description: 'After obtaining my driver\'s license, I improved my driving experience here.'
    },
    {
      title: 'Covebo',
      sub_title: 'General Employee',
      caption: 'June 2020 - August 2020',
      quote: 'Heavy summer job',
      description: 'A company needs employees who are capable of performing heavy work. This experience helps them understand how this should be done and to develop communication skills.'
    },
    {
      title: 'Unagi Sushi',
      sub_title: 'Floor Manager',
      caption: 'September 2020 - 2023',
      quote: 'Study cost earnings',
      description: 'Here I perform cash register duties, manage delivery drivers, pack orders, help in the kitchen, and deliver.'
    },
    {
      title: 'Youngones',
      sub_title: 'Freelancer',
      caption: 'June 2020 - Present',
      quote: 'Gaining experience in multiple types of jobs.',
      description: 'A freelancer has many responsibilities, I do this for extra income and the associated experiences.'
    },
    {
      title: 'Polezait.nl',
      sub_title: 'Owner & Web Developer',
      caption: 'January 2022 - Present',
      quote: 'Designing and developing custom websites for various businesses and professionals.',
      description: 'As owner and web developer of Polezait.nl, I have been involved in creating attractive and functional websites for different types of businesses. My work included developing websites for restaurants, hairdressers, realtors, solar panel companies, and freelancers who need automated invoicing solutions. I have applied and improved my skills in HTML, CSS, and JavaScript to meet the specific needs of each client, while simultaneously strengthening my ability to communicate effectively with clients and translate their vision into tangible digital solutions. This work has provided me with valuable experience in both technical and business aspects of web development, allowing me to continue developing as a competent and versatile web developer.'
    },
    {
      title: 'ICT Group',
      sub_title: 'AI Consultant & Engineer',
      caption: 'September 2024 - Present',
      quote: 'Strategic AI consulting and engineering for healthcare, automotive, traffic, hightech, and energy domains.',
      description: 'As an AI Consultant & Engineer at ICT Group, I provide strategic AI consulting and engineering services across diverse sectors. My responsibilities include use-case analysis, technical feasibility assessments, solution architecture design, and full-stack implementation of GenAI systems with emphasis on security compliance and on-premises deployment.\n\n- Implement <mark>CI/CD pipelines</mark> for ML model deployment and manage containerized AI services with <mark>Docker/Kubernetes</mark>\n- Maintain <mark>infrastructure-as-code</mark> with <mark>Terraform</mark> for reproducible AI environments\n- Apply <mark>LLMOps</mark> best practices for model versioning, monitoring, and automated evaluation\n- Ensure compliance with <mark>ISO 13485</mark>, <mark>IEC 62304</mark>, <mark>ISO 14971</mark>, <mark>GDPR</mark>, and sector-specific data security protocols\n- Use <mark>Jira</mark>, <mark>Confluence</mark>, and <mark>GitLab</mark> for agile project management and requirements tracking\n- Complete training in <mark>Rust</mark>, <mark>Embedded software</mark>, <mark>Agile Scrum Foundation</mark>, <mark>Azure</mark>, <mark>Power BI</mark>'
    },
    {
      title: 'Volunteer Work',
      sub_title: 'Het Geinsche Hof, Stichting Al Fadi and Community Foundation.',
      caption: '40+ hours',
      quote: 'Positive unpaid contribution to society.',
      description: 'Supporting the elderly, helping the neighborhood move forward, and making communities feel more at home in a new living situation. I believe commitment to a good cause is important because people should also show their good side.'
    }
  ],

  education: [
    {
      title: 'Utrecht University',
      caption: '2023 - 2024',
      sub_title: 'MSc Applied Data Science',
      quote: 'In Utrecht, students look beyond the boundaries of their field. Students and top researchers work together in close-knit communities for a better future.',
      description: 'During my WO master\'s in Applied Data Science, I gained advanced knowledge and skills in data analysis, machine learning, and statistical modeling, enabling me to analyze complex datasets, gain valuable insights, and develop predictive models for data-driven decision-making.'
    },
    {
      title: 'Utrecht University',
      caption: '2020 - 2023',
      sub_title: 'BSc Computer Science',
      quote: '',
      description: 'During my WO bachelor\'s in computer science, I developed a deep understanding of programming concepts, algorithms, data structures, and system analysis, enabling me to design and implement complex software solutions.'
    },
    {
      title: 'Pre-University Education / Atheneum',
      caption: 'September 2014 - July 2020',
      sub_title: 'NT/NG with Economics',
      quote: 'At school, you acquire knowledge and skills that help you grow towards independence. Our school is a safe environment where people know you. An environment that also offers room to grow towards maturity. Falling and getting up is part of it, as is exploring the world. Good education is the first thing you may expect from a school. Learning happens at Cals College in classes and beyond. Students have their own qualities and interests. They can further develop these through the wide range of activities.',
      description: 'During my secondary school years, I took on many challenges. I chose the most difficult subject packages and therefore graduated with two diplomas. In addition to these diplomas, I also obtained a Goethe-Zertifikat. In my third year, I received a final report with an average of 8.8. This gave me the opportunity to participate in projects in collaboration with Utrecht University.'
    }
  ],

  certificates: [
    {
      title: 'Doing Projects Within Healthcare - ISO 13485 / IEC 62304 / ISO 14971',
      caption: '2024~',
      quote: 'Knowledge of healthcare compliance standards for medical devices and software development.',
      description: 'Professional knowledge of <mark>ISO 13485</mark> (quality management systems for medical devices), <mark>IEC 62304</mark> (software lifecycle processes for medical devices), and <mark>ISO 14971</mark> (risk management for medical devices). Experience with implementation of compliance controls, documentation requirements, and risk analysis in healthcare environments. Familiar with <mark>GDPR</mark>, <mark>HIPAA</mark>, and sector-specific safety requirements for medical AI systems.'
    },
    {
      title: 'Microsoft Certified Azure AI Fundamentals',
      caption: '2024~',
      quote: 'This certification demonstrates that I have knowledge of the basic principles of Azure AI Services and how they can be used to develop and implement AI solutions.',
      description: 'In this training, I became familiar with the basic principles of Azure AI Services and learned how to develop and implement AI solutions using Azure. I gained experience working with Azure AI Services, setting up AI models, and performing AI analysis in Azure. This certification has strengthened my knowledge and skills in Azure AI and enabled me to work effectively with Azure AI Services.'
    },
    {
      title: 'Microsoft Certified Azure Data Fundamentals',
      caption: '2024~',
      quote: 'This certification demonstrates that I have knowledge of the basic principles of Azure Data Services and how they can be used to manage and analyze data.',
      description: 'In this training, I became familiar with the basic principles of Azure Data Services and learned how to manage and analyze data using Azure. I gained experience working with Azure Data Services, setting up data storage, and performing data analysis in Azure. This certification has strengthened my knowledge and skills in Azure and enabled me to work effectively with Azure Data Services.'
    },
    {
      title: 'Explore Rust',
      caption: '2024~',
      quote: 'Rust is a systems language designed to create safe and efficient software.',
      description: 'In this training, I became familiar with the basic principles of Rust and learned how to develop safe and efficient software with this language. I gained experience writing code in Rust, compiling programs, and using the Rust toolchain. This training has strengthened my knowledge and skills in Rust and enabled me to develop complex software solutions with this language.'
    }
  ],
  publications: [
    {
      title: 'Reducing Manual Testing Overhead through AI-assisted Report Automation',
      caption: '2025',
      sub_title: 'ICT Group, Center of Excellence, Eindhoven',
      quote: 'Research paper on automating test reporting using LLMs, RAG, and computer vision.',
      description: 'Co-author of research paper published on TestPal, an AI-assisted application for automating test report generation. The system combines <mark>Large Language Models</mark>, <mark>Retrieval-Augmented Generation (RAG)</mark>, and <mark>computer vision techniques</mark> to analyze screen recordings and automatically generate test reports with visual evidence.\n\n**Key contributions:**\n- Development of a multi-stage pipeline integrating VLMs (GPT-4 Vision), LLMs (GPT-4), and FAISS vector search\n- Implementation of SSIM-based frame filtering for efficient video processing (10:1 to 50:1 compression)\n- RAG-based storage system for semantic retrieval of user actions from test executions\n- Experimental validation achieving 79% accuracy in automated test outcome determination\n- Significant reduction in manual effort for test reporting\n\n**Technical stack:** Python, Azure OpenAI (GPT-4 Vision, GPT-4, text-embedding-ada-002), FAISS, OpenCV, gRPC, Protocol Buffers\n\n**Authors:** Tunahan Catak, Enkhzol Dovdon, Luiz Schiller, Gabriel Shamon, Frank Van Der Kruijssen'
    }
  ]
};
