import { Code, LayoutDashboard, Repeat, Rocket } from "lucide-react";
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
    title: "Experiencia en front end",
    description:
      "Hi, I’m David 👋, a passionate Front-End Developer with 3 years of experience building elegant, scalable, and maintainable UIs using React, TypeScript, and Sass. I hold a first-class degree in Computer and Information Systems Engineering.",
  },
  {
    icon: <LayoutDashboard size={32} />,
    title: "Full-Stack Growth",
    description:
      "While front-end is my core, I’m diving into back-end development to become a well-rounded full-stack dev. I love creating intuitive user experiences and collaborating on creative technical challenges.",
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
    title: "This is slide 2",
    institution: "ggwp",
    degree: "Bachelor of Science in Computer Science",
    descriptionMb: "this is a description",
    descriptionWb: "this is a description",
  },
  {
    image: "/assets/images/070d0eef",
    title: "This is slide 3",
    institution: "ggwp",
    degree: "Bachelor of Science in Computer Science",
    descriptionMb: "this is a description",
    descriptionWb: "this is a description",
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

const navElements = ["about", "career", "education", "skills", "contact"];

const titleElements = {
  about: "About Me",
  careerPath: "Career Path",
  education: "Education",
  topSkills: "Top Skills",
  connect: "Connect",
};

export const content = {
  cards,
  steps,
  slides,
  skills,
  navElements,
  titleElements
};
