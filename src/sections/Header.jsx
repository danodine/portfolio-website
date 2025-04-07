import React, { useRef, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useAnimation, useInView } from 'framer-motion';
import "../css/global.css";

const Header = () => {
  const sectionRef = useRef(null);
  // Trigger animation when 50% of the section is in view (adjust amount as needed)
  const isInView = useInView(sectionRef, { amount: 0.5, once: false });
  const titleControls = useAnimation();
  const subtitleControls = useAnimation();

  const titleVariants = {
    hiddenLeft:  { x: '-100%', opacity: 0 },
    visible:     { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
    hiddenRight: { x: '100%', opacity: 0, transition: { duration: 0.6, ease: "easeIn" } }
  };
  const subtitleVariants = {
    hiddenRight: { x: '100%', opacity: 0 },     // off-screen to the right
    visible:     { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
    hiddenLeft:  { x: '-100%', opacity: 0, transition: { duration: 0.6, ease: "easeIn" } }
  };

  useEffect(() => {
    if (isInView) {
      titleControls.start("visible");
      subtitleControls.start("visible");
    } else {
      titleControls.start("hiddenRight");
      subtitleControls.start("hiddenLeft");
    }
  }, [isInView, titleControls, subtitleControls]);

  return (
    <div ref={sectionRef} className="header-container">
      <img src="/public/assets/images/davidNodine.jpg" alt="David Nodine" className="header-image" />
      <motion.h1 
        className="header-title"
        variants={titleVariants}
        initial="hiddenLeft"
        animate={titleControls}
      >
        DAVID NODINE
      </motion.h1>
      <motion.h2 
        className="header-subtitle"
        variants={subtitleVariants}
        initial="hiddenRight"
        animate={subtitleControls}
      >
        SOFTWARE ENGINEER
      </motion.h2>
    </div>
  );
};

export default Header;
