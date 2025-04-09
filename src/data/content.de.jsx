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
    title: "Front-End-Expertise",
    description:
      "Hallo, ich bin David 👋, ein leidenschaftlicher Front-End-Entwickler mit über 3 Jahren Erfahrung in der Entwicklung eleganter, skalierbarer und wartbarer Benutzeroberflächen mit React, TypeScript und Sass. Ich habe einen Abschluss mit Auszeichnung in Informatik und Computersystemtechnik.",
  },
  {
    icon: <LayoutDashboard size={32} />,
    title: "Full-Stack-Wachstum",
    description:
      "Obwohl mein Schwerpunkt auf dem Front-End liegt, vertiefe ich mein Wissen im Back-End, um ein vielseitiger Full-Stack-Entwickler zu werden. Ich liebe es, intuitive Benutzererlebnisse zu schaffen und kreative technische Herausforderungen zu meistern.",
  },
  {
    icon: <Users size={32} />,
    title: "Agile Zusammenarbeit",
    description:
      "Erfahrung in der Arbeit mit agilen Teams bestehend aus Entwicklern, Designern und Kunden. Ich bringe starke Kommunikationsfähigkeiten und Koordination in jedes Projekt ein.",
  },
  {
    icon: <Repeat size={32} />,
    title: "Remote-Flexibilität",
    description:
      "Durch meine Erfahrungen mit Remote-Lernen habe ich Selbstmotivation und die Fähigkeit entwickelt, neue Technologien schnell zu erlernen. Ich arbeite gut sowohl im Team als auch eigenständig.",
  },
  {
    icon: <Rocket size={32} />,
    title: "Ständige Verbesserung",
    description:
      "Ich bin immer auf der Suche nach Möglichkeiten, mich weiterzuentwickeln, an bedeutungsvollen Projekten mitzuwirken und zur Mission eines Unternehmens beizutragen 🚀.",
  },
  {
    icon: <BookOpen size={32} />,
    title: "Lebenslanges Lernen",
    description:
      "Ich lerne ständig dazu und entwickle mich weiter – von neuen Frameworks bis hin zu Sprachkenntnissen. Ich bleibe neugierig und flexibel in einer sich schnell entwickelnden Tech-Welt.",
  },
];
const steps = [
  {
    company: "Galileo Financial Technologies",
    position: "Frontend Entwickler (Semi Senior)",
    tagline:
      "Führender Anbieter fortschrittlicher Zahlungs- und Finanztechnologielösungen.",
    tasks: [
      "Entwicklung von Web- und Mobile-Anwendungen für Android und iOS",
      "Einsatz von Tools wie React, React Native, Redux, Jest, Formik, Yup, Docker und Apache Cordova",
      "Teamarbeit in Git-basierten Entwicklungsumgebungen",
      "Zusammenarbeit mit Backend-Entwicklern",
      "Koordination mit Kunden zur schnellen Lösung von Entwicklungsproblemen",
      "Verbesserung der Codequalität durch SonarCloud und spürbare Reduktion von Sicherheitslücken und technischen Schulden",
    ],
    yearPlace: "Loja, Ecuador / 03.2022 – 01.2024",
  },
  {
    company: "Technisys",
    position: "Frontend Entwickler (Semi Senior)",
    tagline:
      "Teil von Galileo Financial Technologies und SoFi Technologies, Inc. – eine umfassende Fintech-Plattform.",
    tasks: [
      "Entwicklung von Web- und Mobile-Anwendungen für Android und iOS",
      "Verwendung von Tools wie React, React Native, Redux und Jest",
      "Zusammenarbeit in Git-basierten Entwicklungsumgebungen",
      "Erreichte hohe Testabdeckung mit Jest zur Verbesserung der Systemstabilität und Wartbarkeit",
    ],
    yearPlace: "Loja, Ecuador / 08.2021 – 03.2022",
  },
  {
    company: "EdiLoja CIA. LTDA",
    position: "Projektmanager / Frontend Entwickler",
    tagline: "Verlagsunternehmen",
    tasks: [
      "Entwicklung von Front- und Backend-Webanwendungen für virtuelle Benutzerplattformen",
      "Technischer Support in persönlichen Meetings mit Nutzern",
      "Leitung eines Softwareteams bestehend aus Entwicklern, Kunden und Designern",
      "Start des Entwicklungsprozesses mit Anforderungsanalyse",
      "Überwachung von Design, Implementierung, Testing und Deployment",
    ],
    yearPlace: "Loja, Ecuador / 01.2020 – 08.2021",
  },
];

const slides = [
  {
    image: "/assets/images/070d0eef",
    title: "Universitätsabschluss in Ingenieurwesen",
    institution: "Universidad Técnica Particular de Loja",
    degree: "Informatikingenieurwesen und Computerwissenschaften",
    year: "Loja - Ecuador 09.2013 – 12.2019",
    descriptionWb:
      "Abschlussarbeit: 'Bewertung von QoS-Parametern von VoIP in MANET-Netzwerken'",
  },
  {
    image: "/assets/images/070d0eef",
    title: "B1 Deutschzertifikat - G.A.S.T.",
    institution: "G.A.S.T.",
    degree:
      "Gesellschaft für Akademische Studienvorbereitung und Testentwicklung e.V.",
    year: "Deutschland - 01.2025",
    descriptionWb: "",
  },
  {
    image: "/assets/images/070d0eef",
    title: "Der komplette JavaScript-Kurs 2021: Von Anfänger bis Experte!",
    institution: "Udemy",
    degree: "Abschlusszertifikat",
    year: "Online - 02.2021",
    descriptionWb: "",
  },
  {
    image: "/assets/images/070d0eef",
    title: "React – Der komplette Leitfaden",
    institution: "Udemy",
    degree: "Abschlusszertifikat",
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
  { value: "Über mich", key: "about" },
  { value: "Berufserfahrung", key: "career" },
  { value: "Ausbildung", key: "education" },
  { value: "skills", key: "skills" },
  { value: "Vernetzen", key: "contact" },
];

const navSecondaryElements = {
  language: "Sprache",
  textDark: "Dark",
  textLight: "Ligth",
};

const titleElements = {
  about: "Über Mich",
  careerPath: "Beruflicher Werdegang",
  education: "Ausbildung",
  topSkills: "Top skills",
  connect: "Verbinden wir uns",
  topSkillDescription:
    "Dies sind einige meiner wichtigsten Fähigkeiten, die ich in jedes Projekt einbringe - von der Entwicklung reaktionsschneller Schnittstellen bis zur Lösung komplexer technischer Herausforderungen. Eine vollständige Liste meiner Erfahrungen und Fähigkeiten finden Sie auf meiner ",
  conectText:
    "Sind Sie an einer Zusammenarbeit interessiert oder möchten Sie einfach nur Hallo sagen?",
  degree: "SOFTWAREENTWICKLER",
  reserved: "Alle Rechte vorbehalten"
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
