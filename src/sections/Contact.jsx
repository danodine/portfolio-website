import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import { getContent } from "../data/getContent";

const Contact = () => {
  const { darkMode } = useTheme();
  const { language } = useLanguage();
  const { titleElements } = getContent(language);
  return (
    <div className="contact-container">
      <p className="contact-title p-h3">{titleElements.connect}</p>
      <p className="contact-text">
        {titleElements.conectText}
      </p>
      <div className="contact-icons">
        <a href="https://www.linkedin.com/in/davidnodine/" target="blank">
          <img
            height="30"
            width="30"
            src={
              darkMode
                ? "/assets/icons/linkedin-50-da.png"
                : "/assets/icons/linkedin-50-li.png"
            }
            alt={`Linkedin`}
          />
        </a>
        <a href="https://www.stepstone.de/profile?copts=eyJ0aGlyZFBhcnR5TWFya2V0aW5nQ29udGVudEVtYWlsIjpudWxsfQ%3D%3D">
          <img
            height="30"
            width="30"
            src={
              darkMode
                ? "/assets/icons/stepstone-da.png"
                : "/assets/icons/stepstone-li.png"
            }
            alt={`Stepstone`}
          />
        </a>
        <a href="https://www.xing.com/profile/DavidAnthony_NodineWyatt">
          <img
            height="30"
            width="30"
            src={
              darkMode
                ? "/assets/icons/xing-da.png"
                : "/assets/icons/xing-li.png"
            }
            alt={`Xing`}
          />
        </a>
      </div>
    </div>
  );
};

export default Contact;
