import React, { useRef } from "react";
import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from "framer-motion";

const TimelineItem = ({ company, tasks, position, tagline, yearPlace }) => {
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 90%", "start 60%"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <motion.div ref={cardRef} className="timeline-item" style={{ opacity, y }}>
      <div className="timeline-dot" />
      <div className="card">
        <p className="p-h4 timeline-title">{company}</p>
        <p className="timeline-position">{position}</p>
        <p className="timeline-tagline">{tagline}</p>
        {tasks?.map((task) => (
          <p className="timilene-task">{task}</p>
        ))}
        <p className="timeline-yearPlace">{yearPlace}</p>
      </div>
    </motion.div>
  );
};
TimelineItem.propTypes = {
  company: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.string).isRequired,
  position: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  yearPlace: PropTypes.string.isRequired,
};

export default TimelineItem;
