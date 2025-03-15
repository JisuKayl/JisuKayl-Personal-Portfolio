import React, { useContext } from "react";
import profilePic from "../assets/profile.jpg";
import { ThemeContext } from "../context/ThemeContext";
import {
  frontendSkills,
  backendSkills,
  databaseSkills,
  otherSkills,
  socialLinks,
} from "../data/profileData";
import { FaSun, FaMoon } from "react-icons/fa";

const ProfileSection = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const renderSkillIcons = (skills) => {
    return skills.map(({ icon: Icon, color, title }, index) => (
      <div key={index} className="relative group">
        <Icon className={`${color}`} />
        <span className="absolute top-[-30px] left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
          {title}
        </span>
      </div>
    ));
  };

  return (
    <div
      className={`${
        isDark ? "text-white" : "text-gray-800"
      } flex flex-col h-full overflow-hidden`}
    >
      <div
        className={`${
          isDark ? "bg-[#505050]" : "bg-blue-100"
        } rounded-xl flex flex-col items-center p-4`}
      >
        <img
          src={profilePic}
          alt="Profile"
          className="w-24 h-24 object-cover rounded-full mb-2"
        />
        <p className="font-bold">Jerson Kyle Bonifacio</p>
        <p>Software Developer</p>
      </div>

      <div
        className={`flex flex-wrap justify-around p-4 my-4 ${
          isDark ? "bg-[#505050]" : "bg-blue-100"
        } rounded-md`}
      >
        <a href="#about">About</a>
        <span className="border border-gray-400"></span>
        <a href="#projects">Projects</a>
      </div>

      <div className="flex-grow overflow-y-auto overflow-x-hidden my-1">
        <div>
          <p className="font-semibold mb-1">Frontend</p>
          <div className="flex flex-wrap gap-4 text-xl">
            {renderSkillIcons(frontendSkills(isDark))}
          </div>
        </div>

        <div>
          <p className="mt-2 font-semibold mb-1">Backend</p>
          <div className="flex flex-wrap gap-4 text-xl">
            {renderSkillIcons(backendSkills(isDark))}
          </div>
        </div>

        <div>
          <p className="mt-2 font-semibold mb-1">Database</p>
          <div className="flex flex-wrap gap-4 text-xl">
            {renderSkillIcons(databaseSkills(isDark))}
          </div>
        </div>

        <div>
          <p className="mt-2 font-semibold mb-1">Others</p>
          <div className="flex flex-wrap gap-4 text-xl">
            {renderSkillIcons(otherSkills(isDark))}
          </div>
        </div>
      </div>

      <div
        className={`flex items-center justify-between mt-auto text-xl ${
          isDark ? "bg-[#505050]" : "bg-blue-100"
        } p-4 rounded-md`}
      >
        <div className="flex items-center justify-center gap-6">
          {socialLinks(isDark).map(({ icon: Icon, href, title }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
            >
              <Icon className={isDark ? "text-white" : "text-gray-800"} />
              <span className="absolute top-[-30px] left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                {title}
              </span>
            </a>
          ))}
        </div>
        <div className="relative group">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-md ${
              isDark ? "bg-black" : "bg-blue-400"
            } hover:bg-opacity-80 transition-colors cursor-pointer`}
            aria-label="Toggle theme"
          >
            {isDark ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon className="text-gray-700" />
            )}
          </button>
          <span className="absolute top-[-30px] left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
            {isDark ? "Light Mode" : "Dark Mode"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
