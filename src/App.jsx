import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { About, Navbar } from "./components";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";


function App() {
  return (
    <div className="bg-black py-5">
      <div className="">
      
          {/* navbar section */}

          
             <Navbar />

             {/* about-section */}

             <About/>

       

          {/* skills section */}

          <Skills/>



          {/* projects section */}

          <Projects/>

          {/* contact form */}

          <ContactForm/>

          <Navbar/>
       
      </div>
    </div>
  );
}

export default App;
