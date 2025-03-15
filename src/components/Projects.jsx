import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaGithub } from "react-icons/fa";
import projectsData from "../data/projectsData";

const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <div id="projects" className={`${isDark ? "text-white" : "text-gray-800"}`}>
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projectsData(isDark).map((project, index) => (
          <div
            key={index}
            className={`${
              isDark
                ? "bg-[#3a3a3a] border-[#2a2a2a]"
                : "bg-blue-100 border-blue-200"
            } p-4 rounded-lg border`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-60 object-cover rounded-lg mb-3"
            />
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p
              className={`text-sm ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {project.category}
            </p>
            <p className="text-sm my-2">{project.description}</p>
            <div className="flex items-center justify-between mt-3">
              <div className="flex flex-wrap gap-3 mt-3">
                {project.techStack.map((tech, i) => (
                  <div key={i} className="group relative">
                    <span className={`text-2xl ${tech.color}`}>
                      {tech.icon}
                    </span>
                    <span className="absolute top-[-30px] left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub
                  className={`text-2xl ${
                    isDark
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-700 hover:text-black"
                  }`}
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
