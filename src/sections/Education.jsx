import React, { useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { getContent } from "../data/getContent";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/global.css";

const Education = () => {
  const { language } = useLanguage();
  const { slides, titleElements } = getContent(language);
  const isMobile = window.innerWidth <= 768;

  const ipadImage = isMobile
    ? "/assets/images/ipad-mobile.svg"
    : "/assets/images/ipad-web.png";
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: isMobile
      ? ["start 100%", "start 35%"]
      : ["start 100%", "start 25%"],
  });

  const imageEnding = isMobile ? "-mobile.png" : "-web.png";

  const rotateX = useTransform(scrollYProgress, [0, 1], [75, 0]);

  return (
    <div className="ipad-animation-container" ref={ref}>
      <p className="p-h3">{titleElements.education}</p>
      <motion.div
        className="ipad-mockup"
        style={{
          rotateX,
        }}
      >
        <img src={ipadImage} alt="iPad Frame" className="ipad-shape" />
        <div className="ipad-screen">
          <Slider
            dots={true}
            arrows={true}
            infinite={true}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            className="slider"
          >
            {slides.map((slide, idx) => (
              <div key={idx} className="slide-content">
                <div className="slide-image">
                  <img
                    src={`${slide.image}${imageEnding}`}
                    alt={`Slide ${idx}`}
                  />
                </div>
                <div className="slide-text">
                  <p className="slide-text-p-title">{slide.title}</p>
                  {!isMobile ? (
                    <p className="slide-text-p-text-title">Institution:</p>
                  ) : null}
                  <p className="slide-text-p-institution">
                    {slide.institution}
                  </p>
                  {!isMobile ? (
                    <p className="slide-text-p-text-title">Degree:</p>
                  ) : null}
                  <p className="slide-text-p-degree">{slide.degree}</p>
                  {!isMobile ? (
                    <p className="slide-text-p-text-title">Where and when:</p>
                  ) : null}
                  <p className="slide-text-p-year">{slide.year}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </motion.div>
    </div>
  );
};

export default Education;
