import React, { useEffect, useState } from "react";
import { FaCss3Alt, FaGit, FaHtml5, FaReact, FaSass } from "react-icons/fa";
import { TbBrandJavascript, TbBrandRedux, TbBrandNextjs } from "react-icons/tb";
import {
  SiExpress,
  SiMongodb,
  SiNestjs,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { FaFigma } from "react-icons/fa6";

const Skills = () => {
  const skills = [
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
      id: 3,
      icon: <TbBrandNextjs />,
      color: "text-white",
      text: "Next.js",
    },
    {
      id: 4,
      icon: <SiTypescript />,
      color: "text-blue-400",
      text: "Typescript",
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
      id: 7,
      icon: <SiExpress />,
      color: "text-white",
      text: "Express",
    },
    {
      id: 8,
      icon: <SiNestjs />,
      color: "text-red-400",
      text: "Nest.js",
    },
    {
      id: 9,
      icon: <SiMongodb />,
      color: "text-green-700",
      text: "MongoDB",
    },
    {
      id: 10,
      icon: <SiPostgresql />,
      color: "text-blue-300",
      text: "Postgresql",
    },
    {
      id: 11,
      icon: <FaHtml5 />,
      color: "text-orange-500",
      text: "HTML",
    },
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
      id: 14,
      icon: <SiTailwindcss />,
      color: "text-cyan-600",
      text: "Tailwind",
    },
    {
      id: 15,
      icon: <FaGit />,
      color: "text-orange-600",
    },

    {
      id: 16,
      icon: <FaFigma />,
      color: "text-emerald-600",
      text: "Figma",
    },
  ];

  const [visibleSkills, setVisibleSkills] = useState([]);

  useEffect(() => {
    skills.forEach((skill, index) => {
      setTimeout(() => {
        setVisibleSkills((prevVisibleSkills) => [
          ...prevVisibleSkills,
          skill.id,
        ]);
      }, index * 600); 
    });
  }, [skills]);

  return (
    <div className=" section-container flex flex-col items-center space-y-6 border-t border-b border-gray-600 py-20">
      <h2 className="text-center text-white text-2xl smallTablet:text-3xl smallDekstop:text-4xl font-bold mb-6 font-serif uppercase hover:text-[#4EE1A0] hover:duration-400 hover:scale-110 hover:transition-all tracking-wider">
        Skills
      </h2>

      <div className="grid grid-cols-1 gap-10  place-content-center mobile:grid-cols-2 place-items-center smallTablet:grid-cols-3 smallDekstop:grid-cols-4 w-full">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className={`flex flex-col items-center justify-center gap-2 transition-opacity duration-500 ${
              visibleSkills.includes(skill.id) ? "opacity-100" : "hidden"
            }`}
          >
            <div className={`text-7xl ${skill.color}`}>{skill.icon}</div>
            <div className={`text-lg font-bold font-sans ${skill.color}`}>
              {skill.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
