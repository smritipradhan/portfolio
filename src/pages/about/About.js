import React from "react";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import styles from "./About.module.scss";
import { CONSTANT } from "../../constants/constants";
import Card from "./components/Card/Card";
import Footer from "./../../components/Footer/Footer";

const workExperienceCardData = [
  {
    role: "Software Engineer - Divami Design Labs Pvt Ltd.",
    type: "Full Time",
    location: "Hyderabad",
    duration: "1st July 2022 - Present",
    projects: [
      {
        projectTitle: "Google Wrangler",
        projectDescription: [
          "Developed and maintained user-friendly websites for clients using SCSS, TypeScript, and React Collaborated with designers and back-end developers to ensure seamless integration of front-end and back-endfunctionality.",
          "Utilized React to create interactive web applications. Conducted code reviews and worked on constructive feedback to ensure code quality and consistency.",
          "Conducted unit testing and integration testing to ensure the quality of the software product.",
          "Actively participated in team meetings to provide input on project scope and timelines.",
          "Conducted code reviews and worked on constructive feedback to ensure code quality and consistency",
        ],
      },
      {
        projectTitle: "AI Educator",
        projectDescription: [
          "Created and implemented responsive design principles to ensure optimal user experience across various devices .",
          "Developed website using React TS, and SCSS.",
          "Created Common Reusable components for the project and worked with API Integration.",
          "Collaborated with cross-functional teams to deliver high-quality software products on time.",
        ],
      },
    ],
  },
  {
    role: "Software Engineer Intern - Divami Design Labs Pvt Ltd.",
    type: "Internship",
    location: "Hyderabad",
    duration: "1st Feb 2022 - 30th June 2022 ",
    projects: [
      {
        projectTitle: "Shadow Project",
        projectDescription: [
          "Developed Responsive Websites using React , HTML ,Git SCSS , JavaScript , TypeScript , Material UI",
          "Conducted code reviews, identified and fixed bugs, and optimized the performance of web applications.",
          "Implemented responsive design and accessibility features to ensure excellent user experience across devices and browsers.",
          "Built reusable components and libraries to enhance productivity and reduce development time.",
        ],
      },
    ],
  },
];
const educationCardData = [
  {
    role: "BTECH in Computer Science & Engineering-Parala Maharaja Engineering College,Odisha.",
    type: "Full Time",
    location: " Berhampur - 9.4 CGPA (Branch Topper)",
    duration: "2018-2022",
  },
  {
    role: "12th - Vikash Residential School ,Bhubaneswar, Odisha.",
    type: "Full Time",
    location: "Bhubaneswar - 93.2%",
    duration: "2018",
  },
  {
    role: "10th - Vivekananda Kendra Vidyalaya, Umrangso,Assam ",
    type: "Full Time",
    location: "Umrangso - 95%",
    duration: "2016",
  },
];

const About = () => {
  const { theme } = useContext(UserContext);
  return (
    <div
      className={
        theme === "dark" ? styles.containerDark : styles.containerLight
      }
    >
      <section>
        <span className={theme === "dark" ? styles.titleDark : styles.title}>
          About Me
        </span>
        <p className={theme === "dark" ? styles.aboutmeDark : styles.aboutme}>
          {CONSTANT.ABOUTME}
        </p>
      </section>
      <section>
        <span className={theme === "dark" ? styles.titleDark : styles.title}>
          Work Experience
        </span>
        {Array.isArray(workExperienceCardData) &&
          workExperienceCardData.length &&
          workExperienceCardData.map((expData) => {
            return (
              <div className={styles.workExperienceSection}>
                <Card expData={expData} />
              </div>
            );
          })}
      </section>
      <section className={styles.educationSection}>
        <span className={theme === "dark" ? styles.titleDark : styles.title}>
          Education
        </span>
        {Array.isArray(educationCardData) &&
          educationCardData.length &&
          educationCardData.map((expData) => {
            return (
              <div className={styles.workExperienceSection}>
                <Card expData={expData} />
              </div>
            );
          })}
      </section>
    </div>
  );
};

export default About;
