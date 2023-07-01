import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import { UserContext } from "./context/UserContext";
import About from "./pages/about/About";
import LandingPage from "./pages/landingPage/LandingPage";
import TechStackPage from "./pages/techStackPage/techStackPage";
import ProjectPage from "./pages/projectPage/projectPage";
import React from "react";
import Contact from "./pages/contacts/Contact";

const App = () => {
  const { theme } = useContext(UserContext);
  console.log("theme", theme);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/techstack" element={<TechStackPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};
export default App;
