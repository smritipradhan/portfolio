import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import styles from "./Contact.module.scss";

const Contact = () => {
  const { theme } = useContext(UserContext);
  return (
    <div
      className={
        theme === "dark" ? styles.containerDark : styles.containerLight
      }
    >
      For more queries Contact -{" "}
      <span className={styles.email}>smritipradhan545@gmail.com</span>
    </div>
  );
};

export default Contact;
