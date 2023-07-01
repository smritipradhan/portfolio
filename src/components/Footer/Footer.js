import React from "react";
import styles from "./Footer.module.scss";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import SocialMedia from "../SocialMedia/SocialMedia";
import githubDark from "./../../assets/images/githubDarkLink.svg";
import githubLight from "./../../assets/images/githubLightLink.svg";
import linkedinDark from "./../../assets/images/linkedinDark.svg";
import linkedinLight from "./../../assets/images/linkedinLight.svg";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const { theme } = useContext(UserContext);
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const socialMediaLink = [
    {
      socialMedia: theme === "dark" ? githubDark : githubLight,
      socialMediaLink: "https://github.com/smritipradhan",
    },
    {
      socialMedia: theme === "dark" ? linkedinDark : linkedinLight,
      socialMediaLink: "https://www.linkedin.com/in/smriti-pradhan10/",
    },
  ];
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
      <div
        className={
          theme === "dark"
            ? styles.footerContainerDark
            : styles.footerContainerLight
        }
      >
        {" "}
        <div> 📍Hyderabad 📍Bangalore </div>
        <div> smritipradhan545@gmail.com </div>
        <div className={styles.developedBy}>
          Developed with ❤️ by Smriti{" "}
          <SocialMedia socialMediaLink={socialMediaLink} />
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
