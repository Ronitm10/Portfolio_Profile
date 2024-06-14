import project1 from "../assets/projects/project-1.jpeg";
import project2 from "../assets/projects/project-2.jpeg";
import project3 from "../assets/projects/project-3.jpeg";
import project4 from "../assets/projects/project-4.jpeg";

export const HERO_CONTENT = `I am a dynamic and dedicated software engineer with a Master’s degree in Information Systems from Northeastern University and over three years of experience in the industry. I excel in designing, developing, and maintaining robust and scalable backend systems that support complex web applications. My expertise spans various technologies, including Java, C#, Python, and JavaScript, as well as cloud platforms like AWS and Azure. With a proven track record of collaborating effectively with cross-functional teams and delivering high-quality code, I am passionate about driving innovation and optimizing performance to achieve business goals and enhance user experiences.`;

export const ABOUT_TEXT = `As a results-driven Software Developer with a Master’s in Information Systems and over three years of industry experience, I excel in designing, developing, and maintaining robust and scalable backend systems for complex web applications. My expertise spans a variety of programming languages and technologies, including Java, C#, Python, JavaScript, and frameworks like Spring Boot and .NET Core.

My collaborative approach and effective communication skills enable me to work seamlessly with cross-functional teams, ensuring high-quality code delivery. Additionally, I am proficient in cloud technologies such as AWS and Azure, and I have a strong background in database management, including MySQL, PostgreSQL, and MongoDB.

I am passionate about leveraging my technical expertise to drive innovation and efficiency.`;

export const EXPERIENCES = [
  {
    year: "May 2022 - December 2022",
    role: "Software Engineer",
    company: "Cequence Security",
    description: `• Architected a high-performance Spring Boot microservice with Java to calculate Apache Kafka consumer lag within the system, utilizing custom metrics to dynamically manage the scaling of Kubernetes pods and improve service uptime
    • Transformed T-Mobile's web API data processing while enhancing data distribution with Kafka, slashing processing time from 20 to 8 hours, and implementing Elasticsearch for streamlined metric tracking
    • Built secure, high-performance Node.js REST APIs for various role-based dashboards with versioning, rate limiting, OAuth, JWT, & Spring Security, hosted on EC2, efficiently handling 1M+ monthly requests & boosting reliability by 20%
    • Engineered bot activity detection systems to proactively mitigate malicious patterns across web, mobile, and API communications, enhancing security for diverse clientele`,
    technologies: ["Java", "Kafka", "Kubernetes", "AWS", "ElasticSearch", "Security"],
  },
  {
    year: "June 2019 - June 2021",
    role: "Software Developer",
    company: "Tripstack",
    description: `• Developed a .NET Core microservices setup, cutting booking and search times by 35%, and utilized AWS tools to enhance fare accuracy, driving a 40% efficiency boost and substantial savings
    • Automated airline ticket refunds through development of "Refundair" web application using NodeJS & ReactJS, consolidating refund requests from multiple portals to enhance operational efficiency and reduce processing time
    • Automated report generation with CRON jobs, storing reports in S3 to improve accessibility, utilized Elasticsearch to index and search 50k+ documents, achieving sub-second response times
    • Set up CI/CD pipelines reducing the deployment time by 30 min and automate anomaly detection email notification`,
    technologies: [".NET", "AWS", "CI/CD", "MySQL", "Scraping", "Rest API"],
  },
  {
    year: "June 2018 - June 2019",
    role: "Associate Software Developer",
    company: "Tripstack",
    description: `• Formulated a comprehensive schema for a SQL Server database enabling a collaborative setting for data research, analysis, visualization, and forecasting across the organization
    • Achieved 95% code coverage, reducing bugs with 250+ JUnit unit tests under a Test-Driven Development (TDD) framework, using SonarQube to address code smells, integrating Grafana dashboard for real-time monitoring
    • Participated in SDLC (Agile/Scrum), fixing bugs, writing RCA docs, & doing pair programming and code reviews to ensure timely delivery`,
    technologies: ["SQL", "Unit Test", "SDLC", "TDD", "C#"],
  },
];

export const PROJECTS = [
  {
    title: "Husky Music Player",
    image: project1,
    description:
      "Engineered a MERN-stack music app for song uploads, and playlist creation, using Node.js and Express.js for backend controllers. Implemented Stripe API for in-app purchases of premium features, facilitating ad-free listening, exclusive content access in the app.",
    technologies: ["React JS", "Node JS", "Express JS", "HTML5", "CSS3", "MongoDB"],
  },
  {
    title: "Healthcare Management System",
    image: project2,
    description:
      "Devised scalable RESTful backend with Java, Maven and Spring for efficient data organization in medical service inventory. Designed optimized MongoDB databases within a scalable MVC architecture for patient data in medical inventory management",
    technologies: ["Java", "Spring", "MongoDB", "Maven"],
  },
  {
    title: "Covid Tracker",
    image: project4,
    description:
      "Crafted SQL schema & integrated procedures/triggers for efficient student Covid status monitoring & statistical insights. Implemented trigger-based alerts to notify university stakeholders of critical developments such as sudden increases in COVID-19 cases.",
    technologies: ["SQL", "Procedures", "Triggers", "Functions", "PowerBI"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
];

export const CONTACT = {
  address: "75 saint alphonsus street, Boston, MA, 02120",
  phoneNo: "+1 617 858 9720 ",
  email: "chougule.r@northeastern.edu",
};
