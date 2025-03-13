import React, { useContext } from "react";
import About from "./About";
import Projects from "./Projects";
import { ThemeContext } from "../context/ThemeContext";

const ContentSection = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <div
      className={`h-full overflow-y-auto ${
        isDark ? "text-white" : "text-gray-800"
      }`}
    >
      <div className="space-y-6 pb-6 min-w-[20rem]">
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
