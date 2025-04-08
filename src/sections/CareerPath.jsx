import React, { useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from "framer-motion";
import TimelineItem from "../components/TimelineItem";
import { useLanguage } from "../context/LanguageContext";
import { getContent } from "../data/getContent";
import "../css/global.css";

const CareerPath = () => {
  const { language } = useLanguage();
  const { steps, titleElements } = getContent(language);
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="timeline" ref={timelineRef}>
      <p className="careear-path-title p-h3">{titleElements.careerPath}</p>
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
