import React from "react";
import styles from "./MyProject.module.scss";
import { useContext } from "react";
import { UserContext } from "../../../../context/UserContext";
import Card from "../../../../components/Card/Card";
import trelloClone from "./../../../../assets/images/trello.png";
import projectBackground2 from "./../../../../assets/images/projectBackground2.svg";
import projectBackground3 from "./../../../../assets/images/projectBackground3.svg";
import projectBackground4 from "./../../../../assets/images/projectBackground4.svg";
import projectBackground5 from "./../../../../assets/images/projectBackground5.svg";
import projectBackground6 from "./../../../../assets/images/projectBackground6.svg";
import spotify from "./../../../../assets/images/spotify-clone.png";

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
      image: projectBackground2,
      projectTitle: "Login using Custom Hook",
      projectDescription:
        "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      techStack: "",
      link: "",
      githubLink: "",
    },
    {
      image: projectBackground3,
      projectTitle: "Sending HTTP Request",
      projectDescription: "Sending HTTP Requests. Connecting to Database",
      techStack: "",
      link: "",
      githubLink: "",
    },
    {
      image: projectBackground4,
      projectTitle: "Apple UI",
      projectDescription:
        "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      techStack: "",
      link: "",
      githubLink: "",
    },
    {
      image: projectBackground5,
      projectTitle: "React Boiler Plate",
      projectDescription:
        "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      techStack: "",
      link: "",
      githubLink: "",
    },
    {
      image: projectBackground6,
      projectTitle: "Project using Node JS",
      projectDescription:
        "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      techStack: "",
      link: "",
      githubLink: "https://github.com/smritipradhan/nodejs-farm",
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
