import React from "react";
import styles from "./Card.module.scss";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Card = ({ projectElement }) => {
  const squareVariants = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
        delay: 0.1,
        ease: [0.5, 0.71, 1, 1.5],
      },
    },
    hidden: {
      opacity: 0,
      scale: 1,
    },
  };
  const { theme } = useContext(UserContext);
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={squareVariants}
      className="square"
    >
      <Link
        to={projectElement.link}
        target="_blank"
        style={{ textDecoration: "none" }}
      >
        <div
          className={
            theme === "dark"
              ? styles.cardContainerDark
              : styles.cardContainerLight
          }
        >
          <div className={styles.projectBackground}>
            <img src={projectElement.image} alt="projectImage" />
          </div>
          <div className={styles.projectDescriptionContainer}>
            <span
              className={
                theme === "dark" ? styles.titleDark : styles.titleLight
              }
              style={{ textDecoration: "none" }}
            >
              {projectElement?.projectTitle}
            </span>
            <div
              className={
                theme === "dark"
                  ? styles.descriptionDark
                  : styles.descriptionLight
              }
              style={{ textDecoration: "none" }}
            >
              {projectElement?.projectDescription}
            </div>
            <div
              className={
                theme === "dark" ? styles.techStackDark : styles.techStackLight
              }
            >
              <span className={styles.techstackText}> Tech Stack : </span>
              {projectElement?.techStack}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default Card;
