import { useLanguage } from "../context/LanguageContext";
import { getContent } from "../data/getContent";
import "../css/global.css";

const Skills = () => {
    const { language } = useLanguage();
    const { skills } = getContent(language);
  return (
    <div className="py-16 max-w-3xl mx-auto text-center">
      <div className="skills-container">
        <div className="responsive-container-block big-container">
          <div className="responsive-container-block container">
            <p className="p-h3 skills-title">Top Skills</p>
            <p className="section-subheadtext">
              These are some of my top skills that I bring to every project.
              from building responsive interfaces to solving complex technical
              challenges. For a full list of my experience and skills, feel free
              to check out my{" "}
              <a href="https://www.linkedin.com/in/davidnodine/" target="blank">
                LinkedIn
              </a>
            </p>
            <div className="responsive-container-block">
              {skills.map((skill) => (
                <div
                  key={skill.skill}
                  className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12"
                >
                  <div className="card">
                    {skill.icon}
                    <progress value={skill.percentage} />
                    <p className="card-head">{skill.skill}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
