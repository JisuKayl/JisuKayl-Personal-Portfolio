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
  SiFigma,
  SiPenpot,
} from "react-icons/si";

export const frontendSkills = (isDark) => [
  { icon: SiHtml5, color: "text-orange-500", title: "HTML" },
  { icon: SiCss3, color: "text-blue-500", title: "CSS" },
  { icon: SiBootstrap, color: "text-purple-600", title: "Bootstrap" },
  { icon: SiTailwindcss, color: "text-teal-400", title: "Tailwind CSS" },
  { icon: SiMui, color: "text-blue-500", title: "Material-UI" },
  { icon: SiJavascript, color: "text-yellow-400", title: "JavaScript" },
  { icon: SiReact, color: "text-blue-400", title: "React.js" },
  { icon: SiAngular, color: "text-red-600", title: "Angular.js" },
  {
    icon: SiNextdotjs,
    color: isDark ? "text-white" : "text-black",
    title: "Next.js",
  },
];

export const backendSkills = (isDark) => [
  { icon: SiNodedotjs, color: "text-green-500", title: "Node.js" },
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
];

export const databaseSkills = [
  { icon: SiMysql, color: "text-blue-500", title: "MySQL" },
  { icon: SiMongodb, color: "text-green-400", title: "MongoDB" },
  { icon: SiPrisma, color: "text-blue-500", title: "Prisma ORM" },
];

export const otherSkills = (isDark) => [
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
  { icon: SiFigma, color: "text-purple-400", title: "Figma" },
  { icon: SiPenpot, color: "text-orange-600", title: "Penpot" },
];

export const socialLinks = [
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
];
