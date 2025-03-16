import React from "react";
import DefaultImage from "../assets/placeholder.png";
import CapstoneImage from "../assets/capstone.png";
import PetlandiaImage from "../assets/petlandia.png";
import SyncbookImage from "../assets/syncbook.png";
import KaylgptImage from "../assets/kaylgpt.png";
import WschatImage from "../assets/wschat.png";
import JisubeeImage from "../assets/jisubee.png";
import JisuchatbotImage from "../assets/jisuchatbot.png";
import TwilioImage from "../assets/twilio.png";
import GmailsmtpImage from "../assets/gsmtp.png";
import GooglecalendarImage from "../assets/gcalendar.png";
import OwmweatherImage from "../assets/owm.png";
import EventcalendarImage from "../assets/eventcalendar.png";
import PhpcrudImage from "../assets/phpcrud.png";
import SpringbootcurdImage from "../assets/springbootcrud.png";
import LawchatImage from "../assets/lawchat.png";
import LibraryImage from "../assets/angularlibrary.png";
import VideosharingImage from "../assets/angularvideo.png";
import {
  SiReact,
  SiMui,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiXampp,
  SiTailwindcss,
  SiPrisma,
  SiSocketdotio,
  SiCloudinary,
  SiCss3,
  SiPython,
  SiHtml5,
  SiPhp,
  SiKotlin,
  SiAndroid,
  SiDotnet,
  SiSwift,
  SiSpringboot,
  SiMongodb,
  SiNextdotjs,
  SiTypescript,
  SiAngular,
  SiRasa,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { TbBrandCSharp } from "react-icons/tb";

const projectsData = (isDark) => [
  {
    title: "Uniserve: Service Management System",
    category: "Fullstack - Web Application",
    description:
      "This is our capstone project, primarily focused on room and equipment reservations, along with announcements, reports, and the management of accounts, rooms, and equipment inventory.",
    image: CapstoneImage,
    techStack: [
      { icon: <SiReact />, name: "React", color: "text-blue-400" },
      { icon: <SiMui />, name: "Material-UI", color: "text-blue-500" },
      { icon: <SiNodedotjs />, name: "Node.js", color: "text-green-500" },
      {
        icon: <SiExpress />,
        name: "Express.js",
        color: isDark ? "text-gray-300" : "text-gray-600",
      },
      { icon: <SiMysql />, name: "MySQL", color: "text-blue-500" },
      { icon: <SiXampp />, name: "XAMPP", color: "text-orange-400" },
    ],
    github: "https://github.com/JisuKayl/CITS-Service-Management-main",
  },
  {
    title: "Petlandia: Veterinary System",
    category: "Fullstack - Web Application",
    description:
      "A veterinary management system, featuring appointment scheduling and patient records. Includes WebSocket-based notifications, Cloudinary for file uploads (video), and Recharts for data visualization.",
    image: PetlandiaImage,
    techStack: [
      { icon: <SiReact />, name: "React", color: "text-blue-400" },
      { icon: <SiMui />, name: "Material-UI", color: "text-blue-500" },
      { icon: <SiTailwindcss />, name: "Tailwind", color: "text-teal-400" },
      { icon: <SiNodedotjs />, name: "Node.js", color: "text-green-500" },
      {
        icon: <SiExpress />,
        name: "Express.js",
        color: isDark ? "text-gray-300" : "text-gray-600",
      },
      { icon: <SiMysql />, name: "MySQL", color: "text-blue-500" },
      { icon: <SiPrisma />, name: "Prisma ORM", color: "text-blue-500" },
      {
        icon: <SiSocketdotio />,
        name: "WebSocket",
        color: isDark ? "text-gray-400" : "text-gray-600",
      },
      { icon: <SiCloudinary />, name: "Cloudinary", color: "text-blue-500" },
    ],
    github: "https://github.com/JisuKayl/Petlandia-Veterinary-System",
  },
  {
    title: "WS Chat: Real-Time Chat",
    category: "Fullstack - Web Application",
    description:
      "A simple real-time chat application utilizing WebSocket for instant messaging. Features user account creation, join upon login, real-time messaging, and a leave button for disconnecting from the chat room.",
    image: WschatImage,
    techStack: [
      { icon: <SiReact />, name: "React", color: "text-blue-400" },
      { icon: <SiCss3 />, name: "CSS", color: "text-blue-500" },
      {
        icon: <SiExpress />,
        name: "Express.js",
        color: isDark ? "text-gray-300" : "text-gray-600",
      },
      { icon: <SiMysql />, name: "MySQL", color: "text-blue-500" },
      { icon: <SiPrisma />, name: "Prisma ORM", color: "text-blue-500" },
      {
        icon: <SiSocketdotio />,
        name: "WebSocket",
        color: isDark ? "text-gray-400" : "text-gray-600",
      },
    ],
    github: "https://github.com/JisuKayl/PrismaORM-Websocket-RealtimeChat-Test",
  },
  {
    title: "React Big Calendar: Event Scheduler",
    category: "Fullstack - Web Application",
    description:
      "A test project utilizing React Big Calendar for event scheduling and management. Users can add, edit, and delete events, with data stored in a database for persistence.",
    image: EventcalendarImage,
    techStack: [
      { icon: <SiReact />, name: "React", color: "text-blue-400" },
      { icon: <SiCss3 />, name: "CSS", color: "text-blue-500" },
      {
        icon: <SiExpress />,
        name: "Express.js",
        color: isDark ? "text-gray-300" : "text-gray-600",
      },
      { icon: <SiMysql />, name: "MySQL", color: "text-blue-500" },
    ],
    github: "https://github.com/JisuKayl/React-Big-Calendar-Event-Test",
  },
  {
    title: "CRUD Items: PHP & MySQL Test",
    category: "Fullstack - Web Application",
    description:
      "A simple CRUD application using PHP and MySQL, primarily built for practice, featuring item creation, editing, deletion, and listing. Styled with Tailwind for a clean UI.",
    image: PhpcrudImage,
    techStack: [
      { icon: <SiHtml5 />, name: "HTML", color: "text-orange-500" },
      { icon: <SiTailwindcss />, name: "Tailwind", color: "text-teal-400" },
      { icon: <SiPhp />, name: "PHP", color: "text-purple-500" },
      { icon: <SiMysql />, name: "MySQL", color: "text-blue-500" },
    ],
    github: "https://github.com/JisuKayl/CrudItems-Tailwind-Php-Sql-Test",
  },
  {
    title: "Jisu Chatbot: Rasa AI Test",
    category: "Backend - Conversational AI",
    description:
      "A test project using machine learning for basic conversational AI. It can introduce itself, describe its creator, and explain its development. Features remain limited as it is still experimental.",
    image: JisuchatbotImage,
    techStack: [
      { icon: <SiPython />, name: "Python", color: "text-blue-500" },
      { icon: <SiRasa />, name: "Rasa", color: "text-purple-500" },
    ],
    github: "https://github.com/JisuKayl/Rasa-Machine-Learning-Test",
  },
  {
    title: "Syncbook: Phonebook App",
    category: "Fullstack - Android Application",
    description:
      "A simple phonebook application that allows users to add, edit, and delete contacts. It also includes a search functionality for quick access to saved contacts.",
    image: SyncbookImage,
    techStack: [
      { icon: <SiKotlin />, name: "Kotlin", color: "text-purple-500" },
      {
        icon: <SiAndroid />,
        name: "Android Studio",
        color: "text-green-400",
      },
      {
        icon: <AiOutlineConsoleSql />,
        name: "SQLite",
        color: "text-blue-500",
      },
    ],
    github: "https://github.com/JisuKayl/SyncBook-Kotlin-PhonebookApp",
  },
  {
    title: "KaylGPT: Static Chatbot",
    category: "Android Application",
    description:
      "Originally built as a dynamic chatbot using the ChatGPT API, but later converted to a static chatbot as it requires billing. Includes info section with made-up descriptions.",
    image: KaylgptImage,
    techStack: [
      { icon: <FaJava />, name: "Java", color: "text-red-500" },
      {
        icon: <SiAndroid />,
        name: "Android Studio",
        color: "text-green-400",
      },
    ],
    github:
      "https://github.com/JisuKayl/KaylGpt-StaticChatbot-WithOptionForDynamicResponse",
  },
  {
    title: "Jisubee: Fast Food System",
    category: "Fullstack - Desktop Application",
    description:
      "A fast food management system allowing admins to manage menu items and users to place orders, search the menu, view order history, and print receipts.",
    image: JisubeeImage,
    techStack: [
      { icon: <TbBrandCSharp />, name: "C#", color: "text-purple-600" },
      { icon: <SiDotnet />, name: ".NET", color: "text-purple-600" },
      { icon: <SiMysql />, name: "MySQL", color: "text-blue-500" },
    ],
    github: "https://github.com/JisuKayl/CSharp-DotNet-MsSQL-FastFoodSystem",
  },
  {
    title: "Himnario: Lyrics Management App",
    category: "Fullstack - iOS Application",
    description:
      "An app for managing song lyrics, allowing users to add, edit, delete, and view songs with codes, titles, and lyrics. Includes a favorites feature for quick access.",
    image: DefaultImage,
    techStack: [{ icon: <SiSwift />, name: "Swift", color: "text-orange-500" }],
    github: "https://github.com/JisuKayl/Swift-Wam3-Finals",
  },
  {
    title: "Twilio: SMS Service",
    category: "Fullstack - Web API Integration",
    description:
      "A test project integrating Twilio's SMS API for sending text messages. It allows users to input a phone number and message, then send it using Twilio's service.",
    image: TwilioImage,
    techStack: [
      { icon: <SiReact />, name: "React", color: "text-blue-400" },
      { icon: <SiCss3 />, name: "CSS", color: "text-blue-500" },
      {
        icon: <SiExpress />,
        name: "Express.js",
        color: isDark ? "text-gray-300" : "text-gray-600",
      },
    ],
    github: "https://github.com/JisuKayl/Twilio-SMS-Integration-Test",
  },
  {
    title: "Gmail SMTP: Email Service",
    category: "Fullstack - Web API Integration",
    description:
      "An integration test for sending emails using Gmail's SMTP service. Users can compose an email, specify a recipient, and send messages through the configured SMTP server.",
    image: GmailsmtpImage,
    techStack: [
      { icon: <SiReact />, name: "React", color: "text-blue-400" },
      { icon: <SiCss3 />, name: "CSS", color: "text-blue-500" },
      {
        icon: <SiExpress />,
        name: "Express.js",
        color: isDark ? "text-gray-300" : "text-gray-600",
      },
    ],
    github: "https://github.com/JisuKayl/Gmail-SMTP-Integration-Test",
  },
  {
    title: "Google Calendar: Event Scheduler",
    category: "Fullstack - Web API Integration",
    description:
      "An integration test for Google Calendar API, allowing users to authenticate with their Google account and manage events, including adding, updating, and deleting scheduled events.",
    image: GooglecalendarImage,
    techStack: [
      { icon: <SiReact />, name: "React", color: "text-blue-400" },
      { icon: <SiCss3 />, name: "CSS", color: "text-blue-500" },
      {
        icon: <SiExpress />,
        name: "Express.js",
        color: isDark ? "text-gray-300" : "text-gray-600",
      },
      { icon: <SiMysql />, name: "MySQL", color: "text-blue-500" },
    ],
    github: "https://github.com/JisuKayl/Google-Calendar-Integration-Test",
  },
  {
    title: "OpenWeatherMap: Weather Forecast",
    category: "Fullstack - Web API Integration",
    description:
      "An integration test for OpenWeatherMap API, allowing users to search for weather forecasts by city and retrieve real-time weather data, including temperature, humidity, and conditions.",
    image: OwmweatherImage,
    techStack: [
      { icon: <SiReact />, name: "React", color: "text-blue-400" },
      { icon: <SiCss3 />, name: "CSS", color: "text-blue-500" },
      {
        icon: <SiExpress />,
        name: "Express.js",
        color: isDark ? "text-gray-300" : "text-gray-600",
      },
    ],
    github: "https://github.com/JisuKayl/OpenWeatherMap-Integration-Test",
  },
  {
    title: "Case Program: Sping Boot REST API",
    category: "Backend - REST API",
    description:
      "A CRUD-based REST API built with Spring Boot and MongoDB. It enables case management operations, including creating, reading, updating, and deleting records through structured API endpoints.",
    image: SpringbootcurdImage,
    techStack: [
      {
        icon: <SiSpringboot />,
        name: "Spring Boot",
        color: "text-green-500",
      },
      { icon: <SiMongodb />, name: "MongoDB", color: "text-green-400" },
    ],
    github: "https://github.com/JisuKayl/CaseProgram-RestAPI-Springboot",
  },
  {
    title: "Lawchat: Chat UI Prototype",
    category: "Frontend - UI Prototype",
    description:
      "An assessment project during my OJT internship. It features UI functionalities like adding users to a group and deleting chats, serving as a frontend prototype without backend integration.",
    image: LawchatImage,
    techStack: [
      {
        icon: <SiNextdotjs />,
        name: "Next.js",
        color: isDark ? "text-white" : "text-black",
      },
      { icon: <SiTypescript />, name: "TypeScript", color: "text-blue-400" },
      { icon: <SiTailwindcss />, name: "Tailwind", color: "text-teal-400" },
    ],
    github: "https://github.com/JisuKayl/LawChat-App",
  },
  {
    title: "LibraryHub: Library Management System",
    category: "Frontend - Mockup Website",
    description:
      "A simple UI for a library management system, to practice components, structure, and basic aspects of Angular.",
    image: LibraryImage,
    techStack: [
      { icon: <SiAngular />, name: "Angular.js", color: "text-red-600" },
      { icon: <SiTypescript />, name: "TypeScript", color: "text-blue-400" },
      { icon: <SiCss3 />, name: "CSS", color: "text-blue-500" },
    ],
    github: "https://github.com/JisuKayl/AngularJS-LibraryForm-QuickWebPage",
  },
  {
    title: "Sonoro Acers: Video Sharing Platform",
    category: "Frontend - Mockup Website",
    description:
      "A video-sharing platform UI with basic routing, designed to explore AngularJS components and navigation.",
    image: VideosharingImage,
    techStack: [
      { icon: <SiAngular />, name: "Angular.js", color: "text-red-600" },
      { icon: <SiTypescript />, name: "TypeScript", color: "text-blue-400" },
      { icon: <SiCss3 />, name: "CSS", color: "text-blue-500" },
    ],
    github:
      "https://github.com/JisuKayl/AngularJS-SonoroAcersVideoSharing-QuickWebPage",
  },
];

export default projectsData;
