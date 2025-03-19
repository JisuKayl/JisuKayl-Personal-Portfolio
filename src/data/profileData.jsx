import {
  FaJava,
  FaFacebook,
  FaGitAlt,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import {
  DiVisualstudio,
  DiAndroid,
  DiNetbeans,
  DiPhotoshop,
} from "react-icons/di";
import { BiLogoVisualStudio } from "react-icons/bi";
import { AiOutlineConsoleSql } from "react-icons/ai";
import {
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiCanva,
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
  SiFigma,
  SiPenpot,
  SiJsonwebtokens,
} from "react-icons/si";

export const frontendSkills = (isDark) => [
  {
    icon: SiHtml5,
    color: isDark ? "text-orange-500" : "text-orange-600",
    title: "HTML",
  },
  {
    icon: SiCss3,
    color: isDark ? "text-blue-500" : "text-blue-600",
    title: "CSS",
  },
  {
    icon: SiBootstrap,
    color: isDark ? "text-purple-600" : "text-purple-700",
    title: "Bootstrap",
  },
  {
    icon: SiTailwindcss,
    color: isDark ? "text-teal-400" : "text-teal-600",
    title: "Tailwind CSS",
  },
  {
    icon: SiMui,
    color: isDark ? "text-blue-500" : "text-blue-700",
    title: "Material-UI",
  },
  {
    icon: SiJavascript,
    color: isDark ? "text-yellow-400" : "text-yellow-600",
    title: "JavaScript",
  },
  {
    icon: SiReact,
    color: isDark ? "text-blue-400" : "text-blue-600",
    title: "React.js",
  },
  {
    icon: SiAngular,
    color: isDark ? "text-red-600" : "text-red-700",
    title: "Angular.js",
  },
  {
    icon: SiNextdotjs,
    color: isDark ? "text-white" : "text-black",
    title: "Next.js",
  },
];

export const backendSkills = (isDark) => [
  {
    icon: SiNodedotjs,
    color: isDark ? "text-green-500" : "text-green-700",
    title: "Node.js",
  },
  {
    icon: SiExpress,
    color: isDark ? "text-gray-300" : "text-gray-700",
    title: "Express.js",
  },
  {
    icon: SiSocketdotio,
    color: isDark ? "text-gray-400" : "text-gray-700",
    title: "WebSocket",
  },
  {
    icon: SiJsonwebtokens,
    color: isDark ? "text-yellow-500" : "text-yellow-700",
    title: "JWT",
  },
  {
    icon: FaJava,
    color: isDark ? "text-red-500" : "text-red-700",
    title: "Java",
  },
  {
    icon: SiKotlin,
    color: isDark ? "text-purple-500" : "text-purple-700",
    title: "Kotlin",
  },
  {
    icon: SiSwift,
    color: isDark ? "text-orange-500" : "text-orange-700",
    title: "Swift",
  },
];

export const databaseSkills = (isDark) => [
  {
    icon: SiMysql,
    color: isDark ? "text-blue-500" : "text-blue-700",
    title: "MySQL",
  },
  {
    icon: AiOutlineConsoleSql,
    color: isDark ? "text-blue-500" : "text-blue-700",
    title: "MsSQL",
  },
  {
    icon: SiMongodb,
    color: isDark ? "text-green-400" : "text-green-600",
    title: "MongoDB",
  },
  {
    icon: SiPrisma,
    color: isDark ? "text-blue-500" : "text-blue-700",
    title: "Prisma ORM",
  },
];

export const otherSkills = (isDark) => [
  {
    icon: FaGitAlt,
    color: isDark ? "text-orange-500" : "text-orange-700",
    title: "Git",
  },
  {
    icon: FaGithub,
    color: isDark ? "text-white" : "text-black",
    title: "GitHub",
  },
  {
    icon: DiVisualstudio,
    color: isDark ? "text-purple-600" : "text-purple-700",
    title: "Visual Studio (.NET)",
  },
  {
    icon: BiLogoVisualStudio,
    color: isDark ? "text-blue-400" : "text-blue-600",
    title: "VS Code",
  },
  {
    icon: DiAndroid,
    color: isDark ? "text-green-400" : "text-green-600",
    title: "Android Studio",
  },
  {
    icon: SiPostman,
    color: isDark ? "text-orange-500" : "text-orange-700",
    title: "Postman",
  },
  {
    icon: DiNetbeans,
    color: isDark ? "text-red-600" : "text-red-700",
    title: "Apache NetBeans",
  },
  {
    icon: SiXcode,
    color: isDark ? "text-blue-500" : "text-blue-700",
    title: "Xcode",
  },
  {
    icon: SiXampp,
    color: isDark ? "text-orange-400" : "text-orange-600",
    title: "Xampp",
  },
  {
    icon: SiRasa,
    color: isDark ? "text-purple-500" : "text-purple-700",
    title: "Rasa",
  },
  {
    icon: SiCloudinary,
    color: isDark ? "text-blue-500" : "text-blue-700",
    title: "Cloudinary",
  },
  {
    icon: DiPhotoshop,
    color: isDark ? "text-blue-500" : "text-blue-700",
    title: "Photoshop",
  },
  {
    icon: SiCanva,
    color: isDark ? "text-blue-500" : "text-blue-700",
    title: "Canva",
  },
  {
    icon: SiFigma,
    color: isDark ? "text-purple-400" : "text-purple-600",
    title: "Figma",
  },
  {
    icon: SiPenpot,
    color: isDark ? "text-orange-600" : "text-orange-800",
    title: "Penpot",
  },
];

export const socialLinks = (isDark) => [
  {
    icon: FaFacebook,
    href: "https://www.facebook.com/JisuKayl/",
    title: "Facebook",
    color: isDark ? "text-blue-600" : "text-blue-800",
  },
  {
    icon: FaEnvelope,
    href: "mailto:jersonkylefbonifacio@gmail.com",
    title: "Gmail",
    color: isDark ? "text-red-500" : "text-red-700",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/jerson-kyle-bonifacio/",
    title: "LinkedIn",
    color: isDark ? "text-blue-500" : "text-blue-700",
  },
  {
    icon: FaGithub,
    href: "https://github.com/JisuKayl",
    title: "GitHub",
    color: isDark ? "text-white" : "text-black",
  },
];
