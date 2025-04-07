import React, { useRef } from "react";
import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from "framer-motion";

const TimelineItem = ({ title, text }) =>{
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 90%", "start 60%"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <motion.div
      ref={cardRef}
      className="timeline-item"
      style={{ opacity, y }}
    >
      <div className="timeline-dot" />
      <div className="card">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </motion.div>
  );
}
TimelineItem.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default TimelineItem;