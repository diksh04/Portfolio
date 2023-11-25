import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const darkModeHandler = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };
  return (
    <>
      <NavBar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
