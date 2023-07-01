import React, { useContext } from "react";
import styles from "./Card.module.scss";
import { UserContext } from "../../../../context/UserContext";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
// import Lottie from "react-lottie";
// import lottieJson from "./../../../../assets/json/black.gif";

const WorkExperienceCard = ({ expData }) => {
  const { role, type, location, duration, projects } = expData;

  const { theme } = useContext(UserContext);
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
  const squareVariantsLight = {
    visible: {
      opacity: 1,
      scale: 1,
    },
    hidden: {
      opacity: 1,
      scale: 1,
    },
  };
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView, theme]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={theme === "dark" ? squareVariants : squareVariantsLight}
      className="square"
    >
      {/* Software Type and Role */}
      <div className={styles.softwareType}>
        <span className={theme === "dark" ? styles.roleDark : styles.role}>
          {role}
        </span>
        <div className={styles.type}>
          <span className={styles.typeText}>{type}</span>
        </div>
      </div>
      {/* Location and Date */}
      <div className={styles.locationDate}>
        <div className={styles.locationIcon}>
          <span>
            <LocationOnIcon
              style={theme === "dark" ? { color: "white" } : { color: "black" }}
            />
          </span>
          <span
            className={theme === "dark" ? styles.locationDark : styles.location}
          >
            {location}
          </span>
        </div>
        <div>
          <span
            className={theme === "dark" ? styles.durationDark : styles.duration}
          >
            {duration}
          </span>
        </div>
      </div>
      {/* Project Description */}
      {projects &&
        projects.map((projectItem) => {
          return (
            <div className={styles.projectContainer}>
              <div
                className={
                  theme === "dark"
                    ? styles.projectTitleDark
                    : styles.projectTitle
                }
              >
                {projectItem?.projectTitle}
              </div>
              <div className={styles.projectDescription}>
                {projectItem.projectDescription.map((description) => (
                  <div
                    className={
                      theme === "dark"
                        ? styles.descriptionDark
                        : styles.description
                    }
                  >
                    ⇾ {description}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
    </motion.div>
  );
};

export default WorkExperienceCard;
