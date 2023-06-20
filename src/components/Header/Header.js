import React from "react";
import styles from "./Header.module.scss";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { CONSTANT } from "../../constants/constants";
import CustomSwitch from "../CustomSwitch/CustomSwitch";
import SocialMedia from "../SocialMedia/SocialMedia";
import githubDark from "./../../assets/images/githubDarkLink.svg";
import githubLight from "./../../assets/images/githubLightLink.svg";
import linkedinDark from "./../../assets/images/linkedinDark.svg";
import linkedinLight from "./../../assets/images/linkedinLight.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { theme } = useContext(UserContext);
  const socialMediaLink = [
    {
      socialMedia: theme === "dark" ? githubLight : githubDark,
      socialMediaLink: "https://github.com/smritipradhan",
    },
    {
      socialMedia: theme === "dark" ? linkedinLight : linkedinDark,
      socialMediaLink: "https://www.linkedin.com/in/smriti-pradhan10/",
    },
  ];

  return (
    <div
      className={styles.headerContainer}
      style={
        theme === "dark"
          ? { backgroundColor: "#F5F5F5" }
          : { backgroundColor: "black" }
      }
    >
      <div
        className={
          theme === "dark"
            ? styles.headerItemContainerDark
            : styles.headerItemContainerLight
        }
      >
        {CONSTANT.HEADER.map((headerItem) => {
          return (
            <NavLink to={headerItem.path} className={styles.navlinkHeader}>
              <div className={styles.headerItem}>{headerItem.name}</div>
            </NavLink>
          );
        })}
      </div>

      <CustomSwitch />
      <SocialMedia socialMediaLink={socialMediaLink} />
    </div>
  );
};

export default Header;
