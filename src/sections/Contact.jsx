import { useTheme } from "../context/ThemeContext";

const Contact = () => {
  const { darkMode } = useTheme();
  return (
    <div className="contact-container">
      <p className="contact-title p-h3">Let's Connect</p>
      <p className="contact-text">
        Interested in working together or just want to say hi?
      </p>
      <div className="contact-icons">
        <a href="https://www.linkedin.com/in/davidnodine/" target="blank">
          <img
            height="50"
            width="50"
            src={
              darkMode
                ? "/assets/icons/linkedin-50-da.png"
                : "/assets/icons/linkedin-50-li.png"
            }
            alt={`Linkedin`}
          />
        </a>
        <a href="">
          <img
            height="50"
            width="50"
            src={
              darkMode
                ? "/assets/icons/stepstone-da.png"
                : "/assets/icons/stepstone-li.png"
            }
            alt={`Stepstone`}
          />
        </a>
        <a href="">
          <img
            height="50"
            width="50"
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
