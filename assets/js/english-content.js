// English content for the resume
window.englishContent = {
  about_content: `Hello, my name is Gabriël and I work at ICT Nederland. In my current role, I identify patterns in data and focus on AI. I gained experience with software, optimization, data, and AI during my Bachelor's and Master's degrees.

I have the most experience in <mark>C#</mark>, but I can also work with <mark>Python</mark>, <mark>Haskell</mark>, <mark>JavaScript</mark>, <mark>CSS</mark>, <mark>HTML</mark>, <mark>SQL</mark>, and <mark>R</mark>. Currently, I am completing training in <mark>AI</mark> and <mark>Azure Data Scientist</mark>.

I also speak <mark>Dutch</mark>, <mark>English</mark>, <mark>Chaldean</mark>, and <mark>German</mark>.`,

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
- Developed an <mark>AI model</mark> to analyze unstructured data, such as clinical notes and photos, and gain valuable insights
- Built a <mark>RAG system</mark> without using LangChain, according to MGH's specific requirements

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
- Analyzed current documentation processes and identified bottlenecks
- Developed a <mark>RAG system</mark> that visually displays the status of processes and projects
- Integrated the RAG system with ASML's existing infrastructure (both with <mark>image embeddings</mark> and <mark>ColPali</mark> as well as <mark>text embeddings</mark> with <mark>OCR</mark>)
- Implemented a <mark>locally running LLM</mark> to ensure the security of sensitive data (<mark>Quantization</mark>, <mark>offloading</mark>)
- Tested and validated the system in the CIDT environment

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
- Applied <mark>prompt engineering</mark> techniques to optimize the quality of data conversion
- Trained and fine-tuned LLMs to perform specific tasks in data conversion
- Implemented validation checks such as <mark>hallucination score</mark> and <mark>token similarity analyses</mark> to ensure quality
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
- Going on adventures: I love discovering new places and gaining new experiences, both in my own environment and beyond. I am always willing to step out of my comfort zone and take on new challenges.`
};
