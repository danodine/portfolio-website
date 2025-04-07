// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Code, LayoutDashboard, Repeat, Rocket } from "lucide-react";
import "../css/global.css";

const cards = [
  {
    icon: <Code size={32} />,
    title: "Front-End Expertise",
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

const AboutCards = () => {
  return (
    <div className="about-section">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className="about-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.15 }}
          viewport={{ once: true }}
        >
          <div className="about-icon">{card.icon}</div>
          <h3 className="about-title">{card.title}</h3>
          <p className="about-description">{card.description}</p>
        </motion.div>
      ))}
    </div>
  );
}

export default AboutCards;