import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaPhp,
} from "react-icons/fa";
import { SiMysql, SiNextdotjs, SiC, SiWordpress } from "react-icons/si";
import { AiFillAndroid } from "react-icons/ai";
import ExcelIcon from './icons/excel.svg';
import CpanelIcon from './icons/cpanel.svg';
import PhotoshopIcon from './icons/photoshop.svg';

const skills = [
  {
    category: "Programming & Frameworks",
    skills: [
      { icon: <FaPython />, name: "Python", color: "#3776ab" },
      { icon: <FaJs />, name: "JavaScript", color: "#f7df1e" },
      { icon: <FaReact />, name: "ReactJS", color: "#61dafb" },
      { icon: <SiNextdotjs />, name: "Next.js", color: "#FFFFFF" },
      { icon: <FaPhp />, name: "PHP", color: "#777BB4" },
      { icon: <SiC />, name: "C", color: "#A8B9CC" },
      { icon: <FaHtml5 />, name: "HTML", color: "#e34c26" },
      { icon: <FaCss3Alt />, name: "CSS", color: "#264de4" },
    ],
  },
  {
    category: "Databases",
    skills: [{ icon: <SiMysql />, name: "MySQL", color: "#00758f" }],
  },
  {
    category: "Technical Skills",
    skills: [
      { icon: <SiWordpress />, name: "WordPress", color: "#21759b" },
      { icon: <AiFillAndroid />, name: "Android Studio", color: "#3ddc84" },
      { icon: <img src={ExcelIcon} alt="Excel Icon" className="w-12 h-12" />, name: "Microsoft Excel" },
      { icon: <img src={CpanelIcon} alt="cPanel Icon" className="w-12 h-12" />, name: "cPanel" },
      { icon: <img src={PhotoshopIcon} alt="Photoshop Icon" className="w-12 h-12" />, name: "Photoshop" },
    ],
  },
];

const Skills = () => {
  return (
    <div className="text-white py-16 px-6 border-b border-neutral-800">
      <div className="text-center">
        <h2
          className="text-2xl sm:text-2xl lg:text-3xl mt-5 lg:mt-5 tracking-wide 
            bg-gradient-to-r from-[#ff0080] to-[#7928CA] bg-clip-text text-transparent uppercase 
            relative inline-block px-6 py-3 border border-[#ff0080] rounded-lg shadow-lg"
          style={{
            textShadow: "2px 2px 6px rgba(255, 0, 128, 0.6)",
            WebkitTextStroke: "1px #ff0080",
            boxShadow: "4px 4px 12px rgba(255, 0, 128, 0.4)",
          }}
        >
          Skills
        </h2>
      </div>

      {skills.map((category, index) => (
        <div key={index} className="mb-14">
          <h3 className="text-2xl font-semibold text-center mt-5 lg:mt-5 mb-8 text-[#b388ff]">
            {category.category}
          </h3>

         
          <div
            className={`grid ${
              category.category === "Databases"
                ? "grid-cols-1 justify-center"
                : "grid-cols-2 sm:grid-cols-3 md:grid-cols-5"
            } gap-8 justify-items-center`}
          >
            {category.skills.map((skill, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center p-6 bg-neutral-800 shadow-lg border border-gray-500 rounded-xl transition-transform transform hover:scale-110"
              >
              
                <div
                  className="w-20 h-20 flex items-center justify-center rounded-full border-4 border-gray-400 shadow-md"
                  style={{ color: skill.color, fontSize: "2.5rem" }} 
                >
                  {skill.icon}
                </div>

                
                <p className="mt-4 text-lg font-medium text-gray-300">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
