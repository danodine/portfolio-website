import { useTheme } from "../context/ThemeContext";

const Contact = () => {
  const { darkMode } = useTheme();
  return (
    <div className="contact-container">
      <h2 className="contact-title">Let's Connect</h2>
      <p className="contact-text">
        Interested in working together or just want to say hi?
      </p>
      <div>
        <a href="https://www.linkedin.com/in/davidnodine/" target="blank">
          <img
            height="50"
            width="50"
            src={
              darkMode
                ? "/public/assets/icons/linkedin-50-da.png"
                : "/public/assets/icons/linkedin-50-li.png"
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
                ? "/public/assets/icons/stepstone-da.png"
                : "/public/assets/icons/stepstone-li.png"
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
                ? "/public/assets/icons/xing-da.png"
                : "/public/assets/icons/xing-li.png"
            }
            alt={`Xing`}
          />
        </a>
      </div>
    </div>
  );
};

export default Contact;
