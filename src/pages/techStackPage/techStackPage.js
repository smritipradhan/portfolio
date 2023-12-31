import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import styles from "./techStackPage.module.scss";
import TechStack from "./../landingPage/components/TechStack/TechStack";

const TechStackPage = () => {
  const { theme } = useContext(UserContext);
  return (
    <div
      className={
        theme === "dark" ? styles.containerDark : styles.containerLight
      }
    >
      <TechStack />
    </div>
  );
};

export default TechStackPage;
