import React from 'react'
import Finance from "../images/financeManagement.webp";
import financetwo from "../images/financetwo.webp";
import Ecommerce from "../images/Ecommerce.webp";
import EcommerceOne from "../images/comfystoreone.png";
import uiuxOne from "../images/uiuxone.webp";
import uiuxTwo from "../images/uiuxtwo.png";
import bookmarkone from "../images/bookmarkone.png";
import bookmarktwo from "../images/bookmarktwo.png";
import natourone from "../images/natourone.png";
import natourtwo from "../images/natourtwo.png";

import nexterone from "../images/nexterone.png";
import nextertwo from "../images/nextertwo.png";

import triloOne from "../images/triloOne.png";
import trilotwo from "../images/trilotwo.webp";


import jaddooTravelsTwo from "../images/jaddooTravelsTwo.png";
import jaddooTravelsOne from "../images/jaddooTravelsOne.png";



import omnifoodOne from "../images/omnifoodOne.png";
import omnifoodTwos from "../images/omnifoodTwos.png";









import { FaCss3Alt, FaFigma, FaGit, FaHtml5, FaReact, FaSass } from "react-icons/fa";
import { TbBrandJavascript, TbBrandRedux, TbBrandNextjs } from "react-icons/tb";
import {
  SiExpress,
  SiMongodb,
  SiNestjs,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { IoLogoNodejs } from 'react-icons/io5';


function Projects() {



const allProjects = [
  {
    id: 1,
    ProjectName: "Budget Buddy finance Management App ",
    projectThumbNail: financetwo,
    ThumbNail: Finance,
    ShortDescription:
      "Budget Buddy is a powerful finance management app built on the MERN stack, designed to help users take control of their financial health. ",
    TechStack: [
      {
        id: 1,
        icon: <FaReact />,
        color: "text-cyan-400",
        text: "React",
      },
      {
        id: 2,
        icon: <TbBrandRedux />,
        color: "text-[#764ABC]",
        text: "Redux",
      },
      {
        id: 5,
        icon: <TbBrandJavascript />,
        color: "text-yellow-400",
        text: "Javascript",
      },
      {
        id: 6,
        icon: <IoLogoNodejs />,
        color: "text-green-500",
        text: "Node.js",
      },

      {
        id: 9,
        icon: <SiMongodb />,
        color: "text-green-700",
        text: "MongoDB",
      },
    ],
    LiveLink: "https://finance-mangement-app.vercel.app/login",
    GitLink: "https://github.com/Pranav9948/Finance-Mangement-App.git",
    Youtube: "",
  },

  {
    id: 2,
    ProjectName: "Comfy Ecommerce Store ",
    projectThumbNail: Ecommerce,
    ThumbNail: EcommerceOne,
    ShortDescription:
      "Comfy Store is a robust e-commerce application built using React and Redux, designed to provide users with a seamless shopping experience.",
    TechStack: [
      {
        id: 1,
        icon: <FaReact />,
        color: "text-cyan-400",
        text: "React",
      },
      {
        id: 2,
        icon: <TbBrandRedux />,
        color: "text-[#764ABC]",
        text: "Redux",
      },
      {
        id: 5,
        icon: <TbBrandJavascript />,
        color: "text-yellow-400",
        text: "Javascript",
      },

      {
        id: 14,
        icon: <SiTailwindcss />,
        color: "text-cyan-600",
        text: "Tailwind",
      },
    ],
    LiveLink: "https://comfy-products.netlify.app/",
    GitLink: "https://github.com/Pranav9948/Finance-Mangement-App.git",
    Youtube: "",
  },

  {
    id: 3,
    ProjectName: "UI / UX DESIGN",
    projectThumbNail: uiuxOne,
    ThumbNail: uiuxTwo,
    ShortDescription:
      "Designed and developed the UI/UX for a patient-specific disease conversation app using Figma, focused on  managing health interactions.",
    TechStack: [
      {
        id: 1,
        icon: <FaFigma />,
        color: "text-green-500",
        text: "Figma",
      },
    ],
    LiveLink:
      "https://www.figma.com/design/QGRQtpPg8HRrLd8TxhapEd/Healing-Hub?node-id=0-1&node-type=canvas&t=aFHlg8zvobhvRjIh-0",
  },

  {
    id: 4,
    ProjectName: "BookMark Tailwind project",
    projectThumbNail: bookmarkone,
    ThumbNail: bookmarktwo,
    ShortDescription: "A bookmark website build using tailwind css",
    TechStack: [
      {
        id: 14,
        icon: <SiTailwindcss />,
        color: "text-cyan-600",
        text: "Tailwind",
      },

      {
        id: 11,
        icon: <FaHtml5 />,
        color: "text-orange-500",
        text: "HTML",
      },
    ],
    LiveLink: "https://pranav9948.github.io/BookMark-website/",
    GitLink: "https://github.com/Pranav9948/BookMark-website",
    Youtube: "",
  },

  {
    id: 5,
    ProjectName: "Natours  Sass project",
    projectThumbNail: natourone,
    ThumbNail: natourtwo,
    ShortDescription:
      "Natours is an immersive website designed to showcase breathtaking travel experiences around the world. ",
    TechStack: [
      {
        id: 12,
        icon: <FaCss3Alt />,
        color: "text-blue-700",
        text: "CSS",
      },
      {
        id: 13,
        icon: <FaSass />,
        color: "text-pink-300",
        text: "Sass",
      },

      {
        id: 11,
        icon: <FaHtml5 />,
        color: "text-orange-500",
        text: "HTML",
      },
    ],
    LiveLink: "https://natours-experience-the-world.netlify.app/",
    GitLink:
      "https://github.com/Pranav9948/Natours-Advanced-css-and-Sass-Project",
    Youtube: "",
  },

  {
    id: 6,
    ProjectName: "Nexter  Sass project",
    projectThumbNail: nexterone,
    ThumbNail: nextertwo,
    ShortDescription:
      "Nexter is a visually stunning web application designed for browsing and viewing properties isentirely using CSS Grid,",
    TechStack: [
      {
        id: 12,
        icon: <FaCss3Alt />,
        color: "text-blue-700",
        text: "CSS",
      },
      {
        id: 13,
        icon: <FaSass />,
        color: "text-pink-300",
        text: "Sass",
      },

      {
        id: 11,
        icon: <FaHtml5 />,
        color: "text-orange-500",
        text: "HTML",
      },
    ],
    LiveLink: "https://nexter-css-sass.netlify.app/",
    GitLink: "https://github.com/Pranav9948/Nexter-Grid-project",
    Youtube: "",
  },

  {
    id: 6,
    ProjectName: "Trilo Sass project",
    projectThumbNail: triloOne,
    ThumbNail: trilotwo,
    ShortDescription:
      "Trillo is a modern website designed to help users plan and book their trips effortlessly. Built using CSS Flexbox,",
    TechStack: [
      {
        id: 12,
        icon: <FaCss3Alt />,
        color: "text-blue-700",
        text: "CSS",
      },
      {
        id: 13,
        icon: <FaSass />,
        color: "text-pink-300",
        text: "Sass",
      },

      {
        id: 11,
        icon: <FaHtml5 />,
        color: "text-orange-500",
        text: "HTML",
      },
    ],
    LiveLink: "https://trilo-make-my-trip.netlify.app/",
    GitLink: "https://github.com/Pranav9948/Trilo-Flexbox-Sass-project",
    Youtube: "",
  },

  {
    id: 7,
    ProjectName: "Jadoo Travels",
    projectThumbNail: jaddooTravelsOne,
    ThumbNail: jaddooTravelsTwo,
    ShortDescription:
      "Jadoo Travels is a vibrant and user-friendly website designed to inspire and facilitate travel planning.",
    TechStack: [
      {
        id: 12,
        icon: <FaCss3Alt />,
        color: "text-blue-700",
        text: "CSS",
      },
      {
        id: 13,
        icon: <FaSass />,
        color: "text-pink-300",
        text: "Sass",
      },

      {
        id: 11,
        icon: <FaHtml5 />,
        color: "text-orange-500",
        text: "HTML",
      },
    ],
    LiveLink: "https://trilo-make-my-trip.netlify.app/",
    GitLink: "https://github.com/Pranav9948/Trilo-Flexbox-Sass-project",
    Youtube: "",
  },

  {
    id: 8,
    ProjectName: "OmniFood",
    projectThumbNail: omnifoodOne,
    ThumbNail: omnifoodTwos,
    ShortDescription:
      "OmniFood is a modern, responsive website designed to provide users with a seamless experience in exploring and ordering food online. ",
    TechStack: [
      {
        id: 12,
        icon: <FaCss3Alt />,
        color: "text-blue-700",
        text: "CSS",
      },

      {
        id: 11,
        icon: <FaHtml5 />,
        color: "text-orange-500",
        text: "HTML",
      },
    ],
    LiveLink: "https://pranav9948.github.io/Omnifood-responsive-website/",
    GitLink: "https://github.com/Pranav9948/Omnifood-responsive-website",
    Youtube: "",
  },
];












  return (
    <div className="section-container flex flex-col items-center space-y-6 border-t border-b border-gray-600 py-20 ">
      <h2 className="text-center text-white text-2xl smallTablet:text-3xl smallDekstop:text-4xl font-bold mb-6 smallTablet:mb-12 font-serif uppercase hover:text-[#4EE1A0] hover:duration-400 hover:scale-110 hover:transition-all tracking-wider">
        Projects
      </h2>

      <div className="grid grid-cols-1 smallTablet:grid-cols-2 laptop:grid-cols-3 gap-8 w-full  ">
        {allProjects.map((projects) => (
          <div
            key={projects.id}
            className="group h-[480px]  w-full   [perspective:1000px] "
          >
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 bg-white [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/* Front Face */}
              <div
                className="card card-compact bg-base-100  shadow-xl  "
                key={projects.id}
              >
                <div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden]">
                  <figure>
                    <img
                      src={projects.ThumbNail}
                      alt="image"
                      class="w-full h-56  relative z-0 rounded-lg transition-all duration-300 hover:scale-110"
                    />
                  </figure>
                  <div className="card-body  ">
                    <h2 className="card-title text-center flex items-center justify-center">
                      {projects.ProjectName}
                    </h2>

                    <div className=" flex flex-wrap justify-center items-center gap-4 my-4">
                      {projects.TechStack.map((tech) => {
                        return (
                          <div
                            key={tech.id}
                            className={`flex flex-col items-center justify-center gap-3 transition-opacity duration-500 `}
                          >
                            <div className={`text-4xl ${tech.color}`}>
                              {tech.icon}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="flex justify-center items-center">
                      <button className="btn border-none text-black bg-[#4EE1A0] capitalize hover:bg-white hover:text-[#4EE1A0] hover:border-[#4EE1A0] my-5">
                        see details
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Back Face */}
              <div className="absolute inset-0 h-full w-full rounded-xl bg-white  text-center text-black [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <figure className="w-full">
                  <img
                    src={projects.projectThumbNail}
                    alt="image"
                    class="w-full h-56 relative z-0 rounded-lg transition-all duration-300 "
                  />
                </figure>
                <p className="flex  flex-col items-center justify-center my-5 px-3 text-center">
                  <p>{projects.ShortDescription}</p>
                </p>

                <div className="my-5 flex justify-center items-center gap-6 px-5">
                  {" "}
                  {
                    projects.LiveLink && <h6 className=" text-sm font-semibold mobile:text-base text-blue-700 cursor-pointer">
                      <a
                        href={projects.LiveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live link
                      </a>
                    </h6>
                  }


                    {
                    projects.GitLink &&
                  <h6 className=" text-sm font-semibold mobile:text-base text-blue-700 cursor-pointer">
                    <a
                      href={projects.GitLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Git link
                    </a>
                  </h6>

                    }

                        {
                    projects.Youtube && 
                  <h6 className=" text-sm font-semibold mobile:text-base text-blue-700 cursor-pointer">
                    <a
                      href={projects.Youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      Youtube Link
                    </a>
                  </h6>
}
                </div>

                <div className="card-actions flex items-center justify-center">
                  <button className="btn bg-[#4EE1A0] capitalize border-none text-black hover:bg-white hover:text-[#4EE1A0] hover:border-[#4EE1A0]">
                    see details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 2 */}
    </div>
  );
}

export default Projects