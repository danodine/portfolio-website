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
  SiTypescript,
  SiHtml5,
  SiCss,
} from "@icons-pack/react-simple-icons";

const cards = [
  {
    icon: <Code size={32} />,
    title: "Experto en Front-End",
    description:
      "Hola, soy David 👋, un desarrollador Front-End apasionado con más de 3 años de experiencia creando interfaces elegantes, escalables y mantenibles con React, TypeScript y Sass. Tengo un título con honores en Ingeniería de Sistemas e Informática.",
  },
  {
    icon: <LayoutDashboard size={32} />,
    title: "Crecimiento Full-Stack",
    description:
      "Aunque mi enfoque principal es el front-end, estoy profundizando en el desarrollo back-end para convertirme en un desarrollador full-stack completo. Me encanta crear experiencias intuitivas y colaborar en desafíos técnicos creativos.",
  },
  {
    icon: <Users size={32} />,
    title: "Colaboración Ágil",
    description:
      "Tengo experiencia trabajando en equipos ágiles junto a desarrolladores, diseñadores y clientes. Aporto comunicación efectiva y buena coordinación en cada proyecto.",
  },
  {
    icon: <Repeat size={32} />,
    title: "Adaptabilidad Remota",
    description:
      "Con experiencia en aprendizaje remoto, he desarrollado autodisciplina y la capacidad de aprender nuevas tecnologías rápidamente. Me desenvuelvo bien tanto en entornos colaborativos como independientes.",
  },
  {
    icon: <Rocket size={32} />,
    title: "En Constante Mejora",
    description:
      "Siempre busco oportunidades para crecer, contribuir a proyectos significativos y apoyar la misión de una empresa 🚀.",
  },
  {
    icon: <BookOpen size={32} />,
    title: "Aprendizaje Continuo",
    description:
      "Siempre aprendiendo y evolucionando. Desde nuevos frameworks hasta idiomas, me esfuerzo por mantenerme actualizado y adaptable en un mundo tecnológico que avanza rápido.",
  },
];
const steps = [
  {
    company: "Galileo Financial Technologies",
    position: "Desarrollador Frontend Semi Senior",
    tagline:
      "Proveedor líder de soluciones tecnológicas avanzadas de pago y servicios financieros.",
    tasks: [
      "Desarrollé aplicaciones web y móviles para Android e iOS",
      "Utilicé herramientas como React, React Native, Redux, Jest, Formik, Yup, Docker y Apache Cordova",
      "Trabajo en equipo utilizando entornos de desarrollo con Git",
      "Sincronización con desarrolladores de back-end",
      "Coordinación con clientes para resolver incidencias y corregir errores en plazos cortos",
      "Mejoré la calidad del código con SonarCloud, reduciendo significativamente vulnerabilidades y problemas de mantenimiento",
    ],
    yearPlace: "Loja, Ecuador / 03.2022 – 01.2024",
  },
  {
    company: "Technisys",
    position: "Desarrollador Frontend Semi Senior",
    tagline:
      "Ahora parte de Galileo Financial Technologies y del ecosistema de SoFi Technologies, Inc.",
    tasks: [
      "Desarrollé aplicaciones web y móviles para Android e iOS",
      "Uso de herramientas como React, React Native, Redux y Jest",
      "Trabajo en equipo utilizando entornos de desarrollo con Git",
      "Logré una alta cobertura de código con Jest, mejorando la fiabilidad y el mantenimiento del sistema",
    ],
    yearPlace: "Loja, Ecuador / 08.2021 – 03.2022",
  },
  {
    company: "EdiLoja CIA. LTDA",
    position: "Project Manager / Desarrollador Frontend",
    tagline: "Empresa editorial",
    tasks: [
      "Desarrollé aplicaciones web front-end y back-end para plataformas virtuales de usuarios",
      "Brindé soporte técnico en reuniones presenciales con usuarios",
      "Gestioné un equipo de desarrollo compuesto por programadores, clientes y diseñadores",
      "Inicié procesos de desarrollo a partir del análisis de requerimientos",
      "Supervisé diseño, implementación, pruebas y despliegue de sistemas",
    ],
    yearPlace: "Loja, Ecuador / 01.2020 – 08.2021",
  },
];

const slides = [
  {
    image: "/assets/images/utpl",
    title: "Título Universitario en Ingeniería",
    institution: "Universidad Técnica Particular de Loja",
    degree: "Ingeniería en Sistemas Informáticos y Computación",
    year: "Loja - Ecuador 09.2013 – 12.2019",
    descriptionWb:
      "Tesis: 'Evaluación de parámetros de QoS de VoIP en redes MANET'",
  },
  {
    image: "/assets/images/gast",
    title: "Certificado de Alemán B1 - G.A.S.T.",
    institution: "G.A.S.T.",
    degree:
      "Gesellschaft für Akademische Studienvorbereitung und Testentwicklung e.V.",
    year: "Alemania - 01.2025",
    descriptionWb: "",
  },
  {
    image: "/assets/images/udemy",
    title: "Curso Completo de JavaScript 2021: ¡De Cero a Experto!",
    institution: "Udemy",
    degree: "Certificado de finalización",
    year: "Online - 02.2021",
    descriptionWb: "",
  },
  {
    image: "/assets/images/udemy",
    title: "React - La Guía Completa",
    institution: "Udemy",
    degree: "Certificado de finalización",
    year: "Online - 06.2021",
    descriptionWb: "",
  },
];

const skills = [
  {
    skill: "JavaScript",
    percentage: 100,
    description: "description",
    icon: <SiJavascript className="skill-icons" />,
  },
  {
    skill: "TypeScript",
    percentage: 0.90,
    description: "description",
    icon: <SiTypescript className="skill-icons" />,
  },
  {
    skill: "React - React Native",
    percentage: 100,
    description: "description",
    icon: <SiReact className="skill-icons" />,
  },
  {
    skill: "Redux",
    percentage: 0.95,
    description: "description",
    icon: <SiRedux className="skill-icons" />,
  },
  {
    skill: "Git",
    percentage: 100,
    description: "description",
    icon: <SiGit className="skill-icons" />,
  },
  {
    skill: "Node.js",
    percentage: 0.85,
    description: "description",
    icon: <SiNodedotjs className="skill-icons" />,
  },
  {
    skill: "MongoDB",
    percentage: 0.80,
    description: "description",
    icon: <SiMongodb className="skill-icons" />,
  },
  {
    skill: "HTML5",
    percentage: 100,
    description: "description",
    icon: <SiHtml5 className="skill-icons" />,
  },
  {
    skill: "CSS - SASS",
    percentage: 100,
    description: "description",
    icon: <SiCss className="skill-icons" />,
  },
];

const navElements = [
  { value: "Sobre mí", key: "about" },
  { value: "carrera", key: "career" },
  { value: "educación", key: "education" },
  { value: "skills", key: "skills" },
  { value: "conectar", key: "contact" },
];

const navSecondaryElements = {
  language: "Idioma",
  textDark: "Oscuro",
  textLight: "Claro",
};

const titleElements = {
  about: "Sobre Mí",
  careerPath: "Trayectoria Profesional",
  education: "Educación",
  topSkills: "Habilidades Destacadas",
  connect: "Conectemos",
  topSkillDescription:
    "Estas son algunas de mis principales habilidades que aporto a cada proyecto. Desde la creación de interfaces responsivas hasta la resolución de complejos retos técnicos. Para obtener una lista completa de mi experiencia y habilidades, no dude en consultar mi ",
  conectText: "¿Le interesa trabajar juntos o simplemente quiere saludar?",
  degree: "INGENIERO EN SISTEMAS",
  reserved: "Todos los derechos reservados"
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
