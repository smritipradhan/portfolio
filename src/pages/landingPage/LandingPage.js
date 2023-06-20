import styles from "./LandingPage.module.scss";
import Profile from "./../../assets/images/profile.svg";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import MyProject from "./components/MyProject/MyProject";
import TechStack from "./components/TechStack/TechStack";
import Footer from "../../components/Footer/Footer";

const LandingPage = () => {
  const { theme } = useContext(UserContext);
  useEffect(() => {
    consoleText(["Hello World.", "Console Text", "Made with Love."], "text", [
      "tomato",
      "rebeccapurple",
      "lightblue",
    ]);

    function consoleText(words, id, colors) {
      if (colors === undefined) colors = ["#fff"];
      var visible = true;
      var con = document.getElementById("console");
      var letterCount = 1;
      var x = 1;
      var waiting = false;
      var target = document.getElementById(id);
      target.setAttribute("style", "color:" + colors[0]);
      window.setInterval(function () {
        if (letterCount === 0 && waiting === false) {
          waiting = true;
          target.innerHTML = words[0].substring(0, letterCount);
          window.setTimeout(function () {
            var usedColor = colors.shift();
            colors.push(usedColor);
            var usedWord = words.shift();
            words.push(usedWord);
            x = 1;
            target.setAttribute("style", "color:" + colors[0]);
            letterCount += x;
            waiting = false;
          }, 1000);
        } else if (letterCount === words[0].length + 1 && waiting === false) {
          waiting = true;
          window.setTimeout(function () {
            x = -1;
            letterCount += x;
            waiting = false;
          }, 1000);
        } else if (waiting === false) {
          target.innerHTML = words[0].substring(0, letterCount);
          letterCount += x;
        }
      }, 120);
    }
  }, []);
  return (
    <div
      className={
        theme === "dark" ? styles.containerDark : styles.containerLight
      }
    >
      <div className={styles.landingPageContainer}>
        <div
          className={
            theme === "dark" ? styles.introTextDark : styles.introTextLight
          }
        >
          Hi 👋,
          <br />
          My name is
          <br />
          <span className={styles.name}>Smriti</span>
          <br />
          <span className={styles.craft}>
            "I Craft digital experiences with pixel-perfect precision."
          </span>
          <div className={styles.consoleContainer}>
            <span id="text"></span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          {" "}
          <img src={Profile} alt="profile" />
        </div>
      </div>
      <TechStack />
      <MyProject />
      <Footer />
    </div>
  );
};

export default LandingPage;
