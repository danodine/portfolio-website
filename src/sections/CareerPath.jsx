import React, { useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from "framer-motion";
import TimelineItem from "../components/TimelineItem";
import "../css/global.css";

const steps = [
  {
    title: "01 Erstgespräch (Briefing)",
    text: "Jedes Projekt beginnt mit einem persönlichen Gespräch...",
  },
  {
    title: "02 Konzept",
    text: "Die Struktur, Funktionen und Inhalte werden erarbeitet...",
  },
  {
    title: "03 Designphase",
    text: "Designentwürfe und Wireframes entstehen...",
  },
  {
    title: "04 Umsetzung",
    text: "Das Design wird in performanten Code umgesetzt...",
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
              <h3>Carrear path</h3>
      <div className="timeline-line">
        <motion.div
          className="timeline-line-glow"
          style={{ height: "100%", scaleY }}
        />
      </div>

      {steps.map((step) => (
        <TimelineItem key={step.title} title={step.title} text={step.text} />
      ))}
    </div>
  );
}

export default CareerPath;