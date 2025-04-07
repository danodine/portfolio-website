import React, { useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from "framer-motion";
import TimelineItem from "../components/TimelineItem";
import "../css/global.css";

const steps = [
  {
    company: "Galileo Financial Technologies",
    position: "Frontend Semi Senior developer",
    tagline:
      "Leading provider of advanced payment and financial technology solutions.",
    tasks: [
      "Developed web applications and mobile apps for Android and iOS",
      "Use of tools React, React Native, Redux, jest, Formik, Yup, Docker, Apache Cordova",
      "Teamwork using git development environments",
      "Synchronize with back-end developers",
      "Coordinated with clients to refine development issues and resolve 95% of bugs within short timeframes",
      "implemented code quality improvements using SonarCloud, leading to an 85% decrease in security vulnerabilities and code smells",
    ],
    yearPlace: "Loja, Ecuador / 03.2022 – 01.2024",
  },
  {
    company: "Galileo Financial Technologies",
    position: "Frontend Semi Senior developer",
    tagline:
      "Leading provider of advanced payment and financial technology solutions.",
    tasks: [
      "Developed web applications and mobile apps for Android and iOS",
      "Use of tools React, React Native, Redux, jest, Formik, Yup, Docker, Apache Cordova",
      "Teamwork using git development environments",
      "Synchronize with back-end developers",
      "Coordinated with clients to refine development issues and resolve 95% of bugs within short timeframes",
      "implemented code quality improvements using SonarCloud, leading to an 85% decrease in security vulnerabilities and code smells",
    ],
    yearPlace: "Loja, Ecuador / 03.2022 – 01.2024",
  },
  {
    company: "Galileo Financial Technologies",
    position: "Frontend Semi Senior developer",
    tagline:
      "Leading provider of advanced payment and financial technology solutions.",
    tasks: [
      "Developed web applications and mobile apps for Android and iOS",
      "Use of tools React, React Native, Redux, jest, Formik, Yup, Docker, Apache Cordova",
      "Teamwork using git development environments",
      "Synchronize with back-end developers",
      "Coordinated with clients to refine development issues and resolve 95% of bugs within short timeframes",
      "implemented code quality improvements using SonarCloud, leading to an 85% decrease in security vulnerabilities and code smells",
    ],
    yearPlace: "Loja, Ecuador / 03.2022 – 01.2024",
  },
];

const CareerPath = () => {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="timeline" ref={timelineRef}>
      <p className="careear-path-title p-h3">Career Path</p>
      <div className="timeline-line">
        <motion.div
          className="timeline-line-glow"
          style={{ height: "100%", scaleY }}
        />
      </div>

      {steps.map((step) => (
        <TimelineItem
          key={step.company}
          company={step.company}
          tasks={step.tasks}
          position={step.position}
          tagline={step.tagline}
          yearPlace={step.yearPlace}
        />
      ))}
    </div>
  );
};

export default CareerPath;
