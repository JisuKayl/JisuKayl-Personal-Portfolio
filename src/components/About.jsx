import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import aboutData from "../data/aboutData";

const About = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <div id="about" className={`${isDark ? "text-white" : "text-gray-800"}`}>
      <div
        className={`mb-6 p-4 ${
          isDark ? "bg-[#3a3a3a]" : "bg-blue-100"
        } rounded-lg space-y-2`}
      >
        <h2 className="text-xl font-bold mb-2">About Me</h2>
        <p className="text-sm">
          I graduated from Baliuag University with a Bachelor's degree in
          Information Technology, specializing in Web and Mobile Application
          Development, and earned Latin honors (Cum Laude).
        </p>
        <p className="text-sm">
          During my internship at Intelliseven Technology Solutions Inc., I
          primarily worked on backend development with Express.js and MongoDB,
          handled JWT authentication, activity logs, and assisted with
          debugging. I also had some frontend tasks using Next.js, React, and
          Redux, along with a minor CRUD task in Spring Boot.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {aboutData.map((skill, index) => (
          <div
            key={index}
            className={`p-4 ${
              isDark ? "bg-[#3a3a3a]" : "bg-blue-100"
            } rounded-lg`}
          >
            <div className="flex flex-col items-center mb-2">{skill.icon}</div>
            <h3 className="text-lg font-bold mb-1">{skill.title}</h3>
            <p className="text-sm">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
