import { useLanguage } from "../context/LanguageContext";
import { getContent } from "../data/getContent";

const Footer = () => {
  const { language } = useLanguage();
  const { titleElements } = getContent(language);
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "1rem",
        fontSize: "0.875rem",
        color: "#666",
      }}
    >
      © 2025 <strong>David Nodine</strong> · {titleElements.reserved}
    </footer>
  );
};

export default Footer;
