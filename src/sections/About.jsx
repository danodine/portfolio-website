// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { getContent } from "../data/getContent";
import "../css/global.css";



const AboutCards = () => {
  const { language } = useLanguage();
  const { cards, titleElements } = getContent(language);
  return (
    <div className="about-container">
      <p className="about-me p-h3">{titleElements.about}</p>
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
            <p className="about-title p-h4">{card.title}</p>
            <p className="about-description">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutCards;
