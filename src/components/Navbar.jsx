import React, { useEffect, useState } from "react";

import {
  FaCartPlus,
  FaLinkedin,
  FaLinkedinIn,
  FaMoon,
  FaUserSecret,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import { FaGithubAlt } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Navbar = () => {
  const navLinks = [
    {
      id: 1,
      link: "About",
      target: "about",
    },

    {
      id: 2,
      link: "Skills",
      target: "skills",
    },

    {
      id: 3,
      link: "Project",
      target: "projects",
    },

    {
      id: 4,
      link: "Contact",
      target: "contact",
    },
  ];


  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };



  return (
    <div className="navbar bg-black section-container">
      <div className="navbar-start">
        <h4 className="text-white text-2xl font-bold font-sans leading-8 tracking-tight smallTablet:text-3xl smallDekstop:text-4xl">
          Pranav
        </h4>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex justify-center items-center smallDekstop:gap-6  laptop:gap-10">
          {navLinks.map((links) => {
            return (
              <div key={links.id}>
                <li
                  className="text-white cursor-pointer hover:text-[#4EE1A0] hover:duration-400 hover:scale-110 hover:transition-all  text-base font-mono font-semibold smallDekstop:text-lg"
                  onClick={() => scrollToSection(links.target)}
                >
                  {links.link}
                </li>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="navbar-end flex items-center gap-6 ">
        <div>
          <a
            href="mailto:pranavprakash.codes@gmail.com?subject=Inquiry&body=Hi%20Pranav,%20I%20would%20like%20to%20discuss%20your%20project."
            className="ml-2 link link-hover link-primary capitalize"
          >
            <BiLogoGmail className="text-red-400 text-2xl" />
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/pranav-p-12b503316"
            target="_blank"
            className="ml-2 link link-hover link-primary capitalize"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="text-blue-600 text-2xl" />{" "}
          </a>
        </div>
        <div>
          <a
            href="https://github.com/Pranav9948/"
            target="_blank"
            className="ml-2 link link-hover link-primary capitalize"
            rel="noopener noreferrer"
          >
            <FaGithubAlt className="text-orange-500 text-2xl" />{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
