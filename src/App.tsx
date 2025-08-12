import React from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Contact from "./components/Contact";
import SkillsGrid from "./components/SkillsGrid";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MobileNavBar from "./animations/MobileNavBar";
import "./animations/AnimateOnScroll";

const App: React.FC = () => {
  return (
    <>
      <MobileNavBar />
      <Navbar />
      <HeroSection />
      <section id="about" >
        <AboutSection />
      </section>
      <SkillsGrid />
      <section id="projects">
        <ProjectsSection />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
};

export default App;
