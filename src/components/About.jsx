import React from "react";
import { Link } from "react-router-dom";

import Typewriter from "typewriter-effect";
import gifImg from "../images/portfolio-gif.gif";

const About = () => {
  return (
    <div className="flex  flex-col justify-center items-center smallTablet:flex-row py-10  smallTablet:gap-10 ">
      <div className="smallTablet:w-full">
        <img
          src={gifImg}
          alt="gifImg"
          className="w-full h-full smallTablet:w-72 smallTablet:h-72 smallDekstop:w-full smallDekstop:h-full"
        />
      </div>

      <div className=" mt-10 smallTablet:mt-0 smallTablet:w-full smallTablet:text-start ">
        <h1 className="text-[#4EE1A0] text-center text-4xl font-bold font-sans leading-10 mb-10 smallDekstop:text-6xl smallTablet:text-start">
          <Typewriter
            options={{
              strings: [" Nice to meet you! I’m Pranav."],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>

        <p className="mt-8 text-[#D9D9D9] text-center  text-base font-medium leading-6 mb-6 smallTablet:text-start smallDekstop:text-lg smallDekstop:max-w-lg largeDekstop:text-xl">
          A full stack MERN developer based in India, passionate about crafting
          dynamic, accessible web applications that deliver seamless and
          engaging user experiences.
        </p>

    
          <div className="relative text-center smallTablet:text-start">
            <div className="text-pink-400  uppercase text-base font-bold font-mono tracking-widest before:absolute before:bg-pink-400 before:h-1 before:w-0 before:transition-all before:duration-500 before:ease-in-out before:left-0 before:top-7 hover:before:w-24">
              Contact me
            </div>
       
        </div>
      </div>
    </div>
  );
};

export default About;
