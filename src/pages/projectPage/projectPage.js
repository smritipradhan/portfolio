import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import styles from "./projectPage.module.scss";
import MyProject from "./../landingPage/components/MyProject/MyProject";

const ProjectPage = () => {
  const { theme } = useContext(UserContext);
  return (
    <div
      className={
        theme === "dark" ? styles.containerDark : styles.containerLight
      }
    >
      <MyProject />
    </div>
  );
};

export default ProjectPage;
