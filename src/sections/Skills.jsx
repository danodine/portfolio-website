import { SiReact, SiNodedotjs, SiJavascript, SiGit, SiMongodb, SiRedux } from '@icons-pack/react-simple-icons';
import "../css/global.css";

const Skills = () => {
  const skills = [
    {
      skill: "React",
      percentage: 0.95,
      description: "description",
      icon: <SiReact className='skill-icons'/>,
    },
    {
      skill: "JavaScript",
      percentage: 0.95,
      description: "description",
      icon: <SiJavascript className='skill-icons'/>,
    },
    {
      skill: "Node.js",
      percentage: 0.95,
      description: "description",
      icon: <SiNodedotjs className='skill-icons'/>,
    },
    {
      skill: "MongoDB",
      percentage: 0.95,
      description: "description",
      icon: <SiMongodb className='skill-icons'/>,
    },
    {
      skill: "Git",
      percentage: 0.95,
      description: "description",
      icon: <SiGit className='skill-icons'/>,
    },
    {
      skill: "Redux",
      percentage: 0.95,
      description: "description",
      icon: <SiRedux className='skill-icons'/>,
    },
  ];

  return (
    <div className="py-16 max-w-3xl mx-auto text-center">
      <div className="progress_bar">
        <div className="responsive-container-block big-container">
          <div className="responsive-container-block container">
            <p className="text-blk section-headtext">
              Top Skills
            </p>
            <p className="text-blk section-subheadtext">
            These are some of my top skills that I bring to every project. from building responsive interfaces to solving complex technical challenges. For a full list of my experience and skills, feel free to check out my <a href="https://www.linkedin.com/in/davidnodine/" target="blank">LinkedIn</a>
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
                    <p className="text-blk card-head">{skill.skill}</p>
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
