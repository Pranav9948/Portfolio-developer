import React from "react";
import { Link } from "react-router-dom";

import Typewriter from "typewriter-effect";
import gifImg from "../images/portfolio-gif.gif";
import { FaPhone, FaPhoneAlt } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const About = () => {
  return (
    <div className="section-container flex   flex-col justify-center items-center smallTablet:flex-row py-10  smallTablet:gap-10 ">
      <div className="smallTablet:w-full ">
        <img
          src={gifImg}
          alt="gifImg"
          className="w-full h-full smallTablet:w-72 smallTablet:h-72 smallDekstop:w-full smallDekstop:h-full"
        />
      </div>

      <div className=" mt-10   smallTablet:mt-0 smallTablet:w-full smallTablet:text-start ">
        <h1 className="text-[#4EE1A0] text-center text-3xl mobile:text-4xl font-bold font-sans leading-10 mb-10  smallDekstop:text-6xl smallTablet:text-start">
          <Typewriter
            options={{
              strings: [" Nice to meet you! I’m Pranav."],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>

        <p className="mt-8 text-[#D9D9D9] text-start text-base mobile:text-base font-medium leading-6 mb-6 smallTablet:text-start smallDekstop:text-lg smallDekstop:max-w-lg largeDekstop:text-xl">
          A full stack MERN developer based in India, passionate about crafting
          dynamic, accessible web applications that deliver seamless and
          engaging user experiences.
        </p>

        <div className=" smallTablet:text-start">
          <div className=" smallTablet:justify-start">
            <div className=" inline text-pink-400 relative uppercase text-base font-bold font-mono tracking-widest before:absolute before:bg-pink-400 before:h-1 before:w-0 before:transition-all before:duration-500 before:ease-in-out before:left-0 before:top-7 hover:before:w-24">
              Contact me
            </div>
          </div>

          <div className="flex flex-col smallDekstop:flex-row gap-7 mt-10  items-start">
            <div className="flex items-center justify-start gap-3">
              <FaPhoneAlt className="text-green-700 text-xl" />
              <h5 className="text-white font-sans text-xs font-semibold tracking-widest mobile:text-sm smallDekstop:text-base">
                7736228299
              </h5>
            </div>

            <div className="flex items-center justify-start gap-3">
              <div className="flex items-center justify-start ">
                {" "}
                <a
                  href="mailto:pranavprakash.codes@gmail.com?subject=Inquiry&body=Hi%20Pranav,%20I%20would%20like%20to%20discuss%20your%20project."
                  className="ml-2 capitalize"
                >
                  <BiLogoGmail className="text-red-400 text-2xl" />
                </a>
              </div>

              <h5 className="text-white  text-xs font-sans font-semibold tracking-widest mobile:text-sm smallDekstop:text-base">
                pranavprakash.codes@gmail.com
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
