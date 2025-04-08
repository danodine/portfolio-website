import {
  Code,
  LayoutDashboard,
  Repeat,
  Rocket,
  Users,
  BookOpen,
} from "lucide-react";
import {
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiGit,
  SiMongodb,
  SiRedux,
} from "@icons-pack/react-simple-icons";

const cards = [
  {
    icon: <Code size={32} />,
    title: "Front-End Expertise",
    description:
      "Hi, I’m David 👋, a passionate Front-End Developer with +3 years of experience building elegant, scalable, and maintainable UIs using React, TypeScript, and Sass. I hold a first-class degree in Computer and Information Systems Engineering.",
  },
  {
    icon: <LayoutDashboard size={32} />,
    title: "Full-Stack Growth",
    description:
      "While front-end is my core, I’m diving into back-end development to become a well-rounded full-stack dev. I love creating intuitive user experiences and collaborating on creative technical challenges.",
  },
  {
    icon: <Users size={32} />,
    title: "Agile Collaboration",
    description:
      "Experienced working in Agile teams with developers, designers, and clients. I bring strong communication and coordination to every project.",
  },
  {
    icon: <Repeat size={32} />,
    title: "Remote Adaptability",
    description:
      "With a background in remote learning, I’ve honed self-motivation and the ability to quickly learn new tech. I thrive in both collaborative and independent environments.",
  },
  {
    icon: <Rocket size={32} />,
    title: "Always Improving",
    description:
      "I’m always looking for opportunities to grow, contribute to impactful projects, and support a company’s mission 🚀.",
  },
  {
    icon: <BookOpen size={32} />,
    title: "Always Improving",
    description:
      "Always learning and evolving. From new frameworks to language skills, I embrace growth to stay sharp and adaptable in a fast-moving tech world.",
  },
];

const steps = [
  {
    company: "Galileo Financial Technologies",
    position: "Frontend Semi Senior developer",
    tagline:
      "Leading provider of advanced payment and financial technology solutions.",
    tasks: [
      "Developed web applications and mobile apps for Android and iOS",
      "Use of tools React, React Native, Redux, jest, Formik, Yup, Docker, Apache Cordova",
      "Teamwork using git development environments",
      "Synchronize with back-end developers",
      "Coordinated with clients to refine development issues and resolve 95% of bugs within short timeframes",
      "implemented code quality improvements using SonarCloud, leading to an 85% decrease in security vulnerabilities and code smells",
    ],
    yearPlace: "Loja, Ecuador / 03.2022 – 01.2024",
  },
  {
    company: "Technisys",
    position: "Frontend Semi Senior developer",
    tagline:
      "Technisys, now integrated into Galileo Financial Technologies, is part of SoFi Technologies, Inc. Forming a comprehensive financial technology platform",
    tasks: [
      "Develop Web Applications and Mobile Apps for Android and iOS",
      "Use of tools React, React Native, Redux, jest",
      "Teamwork using git development environments",
      "Achieved over 80% code coverage for components, enhancing reliability and maintainability with Jest",
    ],
    yearPlace: "Loja, Ecuador / 08.2021 – 03.2022",
  },
  {
    company: "EdiLoja CIA. LTDA",
    position: "Project Manager / Frontend developer",
    tagline: "Editorial Company",
    tasks: [
      "Develop Front/back-end web applications for virtual user platforms",
      "Provide technical support in face-to-face meetings with users",
      "Managed a software team with developers, clients, and designers",
      "Start software development process with requirements analysis",
      "Monitor system design, implementation, testing and deployment",
    ],
    yearPlace: "Loja, Ecuador / 01.2020 – 08.2021",
  },
];

const slides = [
  {
    image: "/assets/images/070d0eef",
    title: "University Engineering Degree",
    institution: "Universidad Técnica Particular de Loja",
    degree: "Computer Systems Engineer and Computer Science",
    year: "Loja - Ecuador 09.2013 – 12.2019",
    descriptionWb:
      "Tesis: 'Evaluation of QoS Parameters of VoIP in MANET Networks'",
  },
  {
    image: "/assets/images/070d0eef",
    title: "B1 German Proficiency Certificate - G.A.S.T.",
    institution: "G.A.S.T.",
    degree:
      "Gesellschaft für Akademische Studienvorbereitung und Testentwicklung e.V.",
    year: "Germany - 01.2025",
    descriptionWb: "",
  },
  {
    image: "/assets/images/070d0eef",
    title: "The Complete JavaScript Course 2021: From Zero to Expert!",
    institution: "Udemy",
    degree: "Certificate of completion",
    year: "Online - 02.2021",
    descriptionWb: "",
  },
  {
    image: "/assets/images/070d0eef",
    title: "React - The Complete Guide",
    institution: "Udemy",
    degree: "Certificate of completion",
    year: "Online - 06.2021",
    descriptionWb: "",
  },
];

const skills = [
  {
    skill: "React",
    percentage: 0.95,
    description: "description",
    icon: <SiReact className="skill-icons" />,
  },
  {
    skill: "JavaScript",
    percentage: 0.95,
    description: "description",
    icon: <SiJavascript className="skill-icons" />,
  },
  {
    skill: "Node.js",
    percentage: 0.95,
    description: "description",
    icon: <SiNodedotjs className="skill-icons" />,
  },
  {
    skill: "MongoDB",
    percentage: 0.95,
    description: "description",
    icon: <SiMongodb className="skill-icons" />,
  },
  {
    skill: "Git",
    percentage: 0.95,
    description: "description",
    icon: <SiGit className="skill-icons" />,
  },
  {
    skill: "Redux",
    percentage: 0.95,
    description: "description",
    icon: <SiRedux className="skill-icons" />,
  },
];

const navElements = [
  { value: "about", key: "about" },
  { value: "career", key: "career" },
  { value: "education", key: "education" },
  { value: "skills", key: "skills" },
  { value: "contact", key: "contact" },
];

const navSecondaryElements = {
  language: "Language",
  textDark: "Dark",
  textLight: "Ligth",
};

const titleElements = {
  about: "About Me",
  careerPath: "Career Path",
  education: "Education",
  topSkills: "Top Skills",
  connect: "Le´s Connect",
  topSkillDescription:
    "These are some of my top skills that I bring to every project. from building responsive interfaces to solving complex technical challenges. For a full list of my experience and skills, feel free to check out my ",
  conectText: "Interested in working together or just want to say hi?",
  degree: "SOFTWARE ENGINEER",
  reserved: "All rights reserved"
};

export const content = {
  cards,
  steps,
  slides,
  skills,
  navElements,
  titleElements,
  navSecondaryElements,
};
