import React from "react";
import styles from "./Footer.module.scss";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import SocialMedia from "../SocialMedia/SocialMedia";
import githubDark from "./../../assets/images/githubDarkLink.svg";
import githubLight from "./../../assets/images/githubLightLink.svg";
import linkedinDark from "./../../assets/images/linkedinDark.svg";
import linkedinLight from "./../../assets/images/linkedinLight.svg";

const Footer = () => {
  const { theme } = useContext(UserContext);
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
  return (
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
  );
};

export default Footer;
