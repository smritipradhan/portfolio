import React, { useContext } from "react";
import Card from "../../../../components/Card/Card";
import { UserContext } from "../../../../context/UserContext";
import portfolio from "./../../../../assets/images/portfolio2.png";
import projectBackground4 from "./../../../../assets/images/projectBackground4.svg";
import spotify from "./../../../../assets/images/spotify-clone.png";
import trelloClone from "./../../../../assets/images/trello.png";
import apple from "./../../../../assets/images/apple.png";
import styles from "./MyProject.module.scss";

const MyProject = () => {
  const { theme } = useContext(UserContext);
  const project = [
    {
      image: trelloClone,
      projectTitle: "Trello Clone",
      projectDescription:
        "Developed a Trello-inspired project management tool, leveraging my frontend development skills. Implemented intuitive user interfaces for task management, real-time updates, and collaboration features.",
      techStack:
        "NEXT JS, Node, Express, Mongo DB, Redux Toolkit, React Form Hook",
      link: "https://trello-indol-alpha.vercel.app/user/workspaces",
      githubLink: "https://trello-indol-alpha.vercel.app/user/workspaces",
    },
    {
      image: spotify,
      projectTitle: "Spotify Clone",
      projectDescription:
        "This dynamic application replicates the key features of Spotify, allowing users to explore, discover, and enjoy their favourite tunes in a seamless and visually appealing environment.",
      techStack: "React, Redux Toolkit, JavaScript, SCSS, HTML, Node, Mongo",
      link: "https://spotify-clone-omega-weld.vercel.app/",
      githubLink: "https://github.com/smritipradhan/spotify-clone",
    },
    {
      image: portfolio,
      projectTitle: "Portfolio 2.0",
      projectDescription:
        "Welcome to the refreshed and revitalized version of my digital portfolio! With a passion for innovation and an eye for aesthetics, I've taken the time to give my online presence a significant upgrade. This revamped portfolio not only exhibits my skills and projects but also provides a seamless and engaging experience for visitors.",
      techStack: "React, JavaScript, CSS, HTML",
      link: "https://smritiportfolio.vercel.app/",
      githubLink: "https://github.com/smritipradhan/portfolio2.0",
    },
    {
      image: apple,
      projectTitle: "Apple UI",
      projectDescription:
        "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      techStack: "",
      link: "https://apple-ui-psi.vercel.app/",
      githubLink: "https://github.com/smritipradhan/apple-ui",
    },
  ];
  return (
    <div className={styles.projectContainer}>
      <div
        className={
          theme === "dark"
            ? styles.projectHeaderDark
            : styles.projectHeaderLight
        }
      >
        Projects
      </div>
      <div
        className={
          theme === "dark" ? styles.thingsBuiltDark : styles.thingsBuiltLight
        }
      >
        Things I've built so far
      </div>
      <div className={styles.projectCardContainer}>
        {project.map((projectElement) => {
          return <Card projectElement={projectElement} />;
        })}
      </div>
    </div>
  );
};

export default MyProject;
