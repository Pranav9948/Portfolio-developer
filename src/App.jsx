import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { About, Navbar } from "./components";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import { Form, Link } from "react-router-dom";

function App() {
  return (
    <div className="bg-black py-5">
      <div className="">
        {/* navbar section */}

        <Navbar />

        {/* about-section */}

        <div id="about">
          <About />
        </div>

        {/* skills section */}
        <div id="skills">
          <Skills />
        </div>

        {/* projects section */}
        <div id="projects">
          <Projects />
        </div>

        {/* contact form */}
        <div id="contact">
          <ContactForm />
        </div>
        <Navbar />
      </div>
    </div>
  );
}

export default App;
