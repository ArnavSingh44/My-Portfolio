import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
import HeroSection from "./components/HeroSection";
import ServicesAccordion from "./components/ServicesAccordion";
import ProjectsGrid from "./components/ProjectsGrid";
import ExperienceEducation from "./components/ExperienceEducation";
import SkillsBar from "./components/SkillsBar";
import ContactForm from "./components/ContactForm";
import { ThemeProvider } from "./themeContext";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ once: false, duration: 900, easing: "ease-out-cubic" });
  }, []);
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <ThemeToggle />
        <HeroSection />
        <ServicesAccordion />
        <ProjectsGrid />
        <ExperienceEducation />
        <SkillsBar />
        <ContactForm />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
