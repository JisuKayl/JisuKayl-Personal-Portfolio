import React, { useContext } from "react";
import profilePic from "../assets/profile.jpg";
import {
  FaJava,
  FaFacebook,
  FaGitAlt,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import {
  DiVisualstudio,
  DiAndroid,
  DiNetbeans,
  DiPhotoshop,
} from "react-icons/di";
import { BiLogoVisualStudio } from "react-icons/bi";
import {
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiCloudinary,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiAngular,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiKotlin,
  SiSwift,
  SiMysql,
  SiMongodb,
  SiMui,
  SiPrisma,
  SiSocketdotio,
  SiPostman,
  SiXcode,
  SiXampp,
  SiRasa,
} from "react-icons/si";
import { ThemeContext } from "../context/ThemeContext";

const ProfileSection = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDark = theme === "dark";

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
            {[
              { icon: SiHtml5, color: "text-orange-500", title: "HTML5" },
              { icon: SiCss3, color: "text-blue-500", title: "CSS3" },
              {
                icon: SiBootstrap,
                color: "text-purple-600",
                title: "Bootstrap",
              },
              {
                icon: SiTailwindcss,
                color: "text-teal-400",
                title: "Tailwind CSS",
              },
              {
                icon: SiMui,
                color: "text-blue-500",
                title: "Material-UI",
              },
              {
                icon: SiJavascript,
                color: "text-yellow-400",
                title: "JavaScript",
              },
              { icon: SiReact, color: "text-blue-400", title: "React.js" },
              { icon: SiAngular, color: "text-red-600", title: "Angular.js" },
              {
                icon: SiNextdotjs,
                color: isDark ? "text-white" : "text-black",
                title: "Next.js",
              },
            ].map(({ icon: Icon, color, title }, index) => (
              <div key={index} className="relative group">
                <Icon className={`${color}`} />
                <span className="absolute top-[-30px] left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                  {title}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="mt-2 font-semibold mb-1">Backend</p>
          <div className="flex flex-wrap gap-4 text-xl">
            {[
              {
                icon: SiNodedotjs,
                color: "text-green-500",
                title: "Node.js",
              },
              {
                icon: SiExpress,
                color: isDark ? "text-gray-300" : "text-gray-600",
                title: "Express.js",
              },
              {
                icon: SiSocketdotio,
                color: isDark ? "text-gray-400" : "text-gray-600",
                title: "WebSocket",
              },
              { icon: FaJava, color: "text-red-500", title: "Java" },
              { icon: SiKotlin, color: "text-purple-500", title: "Kotlin" },
              { icon: SiSwift, color: "text-orange-500", title: "Swift" },
            ].map(({ icon: Icon, color, title }, index) => (
              <div key={index} className="relative group">
                <Icon className={`${color}`} />
                <span className="absolute top-[-30px] left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                  {title}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="mt-2 font-semibold mb-1">Database</p>
          <div className="flex flex-wrap gap-4 text-xl">
            {[
              { icon: SiMysql, color: "text-blue-500", title: "MySQL" },
              { icon: SiMongodb, color: "text-green-400", title: "MongoDB" },
              { icon: SiPrisma, color: "text-blue-500", title: "Prisma ORM" },
            ].map(({ icon: Icon, color, title }, index) => (
              <div key={index} className="relative group">
                <Icon className={`${color}`} />
                <span className="absolute top-[-30px] left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                  {title}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="mt-2 font-semibold mb-1">Others</p>
          <div className="flex flex-wrap gap-4 text-xl">
            {[
              { icon: FaGitAlt, color: "text-orange-500", title: "Git" },
              {
                icon: FaGithub,
                color: isDark ? "text-white" : "text-black",
                title: "GitHub",
              },
              {
                icon: DiVisualstudio,
                color: "text-purple-600",
                title: "Visual Studio (.NET)",
              },
              {
                icon: BiLogoVisualStudio,
                color: "text-blue-400",
                title: "VS Code",
              },
              {
                icon: DiAndroid,
                color: "text-green-400",
                title: "Android Studio",
              },
              { icon: SiPostman, color: "text-orange-500", title: "Postman" },
              {
                icon: DiNetbeans,
                color: "text-red-600",
                title: "Apache NetBeans",
              },
              { icon: SiXcode, color: "text-blue-500", title: "Xcode" },
              { icon: SiXampp, color: "text-orange-400", title: "Xampp" },
              { icon: SiRasa, color: "text-purple-500", title: "Rasa" },
              {
                icon: SiCloudinary,
                color: "text-blue-500",
                title: "Cloudinary",
              },
              {
                icon: DiPhotoshop,
                color: "text-blue-500",
                title: "Photoshop",
              },
            ].map(({ icon: Icon, color, title }, index) => (
              <div key={index} className="relative group">
                <Icon className={`${color}`} />
                <span className="absolute top-[-30px] left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                  {title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`flex items-center justify-between mt-auto text-xl ${
          isDark ? "bg-[#505050]" : "bg-blue-100"
        } p-4 rounded-md`}
      >
        <div className="flex items-center justify-center gap-6">
          {[
            {
              icon: FaFacebook,
              href: "https://www.facebook.com/JisuKayl/",
              title: "Facebook",
            },
            {
              icon: FaEnvelope,
              href: "mailto:jersonkylefbonifacio@gmail.com",
              title: "Gmail",
            },
            {
              icon: FaLinkedin,
              href: "https://www.linkedin.com/in/jerson-kyle-bonifacio/",
              title: "LinkedIn",
            },
            {
              icon: FaGithub,
              href: "https://github.com/JisuKayl",
              title: "GitHub",
            },
          ].map(({ icon: Icon, href, title }, index) => (
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
