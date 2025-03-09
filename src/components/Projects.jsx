import React from "react";
import { FaGithub } from "react-icons/fa";
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

const projects = [
  {
    title: "Uniserve: Service Management System",
    category: "Fullstack Website",
    description:
      "This is our capstone project, primarily focused on room and equipment reservations, along with announcements, reports, and the management of accounts, rooms, and equipment inventory.",
    image: CapstoneImage,
    techStack: [],
    // Techstack used here is React js, Material-UI Node js, Express Js, mysql, xampp,
    github: "https://github.com/JisuKayl/CITS-Service-Management-main",
  },
  {
    title: "Petlandia: Veterinary System",
    category: "Fullstack Website",
    description:
      "A veterinary management system, featuring appointment scheduling and patient records. Includes WebSocket-based notifications, Cloudinary for file uploads (video), and Recharts for data visualization.",
    image: PetlandiaImage,
    // Techstack used here is React js, Material-UI, Tailwind, Node js, Express Js, mysql, prisma orm, websocket, cloudinary
    techStack: [],
    github: "https://github.com/JisuKayl/Petlandia-Veterinary-System",
  },
  {
    title: "WS Chat: Real-Time Chat",
    category: "Fullstack Website",
    description:
      "A simple real-time chat application utilizing WebSocket for instant messaging. Features user account creation, join upon login, real-time messaging, and a leave button for disconnecting from the chat room.",
    image: WschatImage,
    // Techstack used here is React js, Css, Express JS, mysql, prisma orm, websocket
    techStack: [],
    github: "https://github.com/JisuKayl/PrismaORM-Websocket-RealtimeChat-Test",
  },
  {
    title: "Jisu Chatbot: Rasa AI Test",
    category: "Backend - Conversational AI",
    description:
      "A test project using machine learning for basic conversational interactions. It can introduce itself, describe its creator, explain its capabilities, and provide insights into its development. Features are currently limited as it is still in the exploration phase.",
    image: JisuchatbotImage,
    // Techstack used here is Python, Rasa
    techStack: [],
    github: "https://github.com/JisuKayl/Rasa-Machine-Learning-Test",
  },
  {
    title: "React Big Calendar: Event Calendar",
    category: "Fullstack Website",
    description:
      "A test project utilizing React Big Calendar for event scheduling and management. Users can add, edit, and delete events, with data stored in a database for persistence.",
    image: EventcalendarImage,
    // Techstack used here is React js, css, express js, mysql
    techStack: [],
    github: "https://github.com/JisuKayl/React-Big-Calendar-Event-Test",
  },
  {
    title: "CRUD Items: PHP & MySQL",
    category: "Fullstack Website",
    description:
      "A simple CRUD application using PHP and MySQL, featuring item creation, editing, deletion, and listing. Styled with Tailwind for a clean UI.",
    image: PhpcrudImage,
    // Techstack used here is html, tailwind, php, mysql,
    techStack: [],
    github: "https://github.com/JisuKayl/CrudItems-Tailwind-Php-Sql-Test",
  },
  {
    title: "Syncbook: Phonebook App",
    category: "Fullstack Android Application",
    description:
      "A simple phonebook application that allows users to add, edit, and delete contacts. It also includes a search functionality for quick access to saved contacts.",
    image: SyncbookImage,
    // Techstack used here is Kotlin, Android Studio, SQLite,
    techStack: [],
    github: "https://github.com/JisuKayl/SyncBook-Kotlin-PhonebookApp",
  },
  {
    title: "KaylGPT: Static Chatbot",
    category: "Android Application",
    description:
      "Originally built as a dynamic chatbot using the ChatGPT API, but later converted to a static chatbot as it requires billing. Includes info section with made-up descriptions.",
    image: KaylgptImage,
    // Techstack used here is Java, Android Studio
    techStack: [],
    github:
      "https://github.com/JisuKayl/KaylGpt-StaticChatbot-WithOptionForDynamicResponse",
  },
  {
    title: "Jisubee: Fast Food System",
    category: "Fullstack Desktop Application",
    description:
      "A fast food management system allowing admins to manage menu items and users to place orders, search the menu, view order history, and print receipts.",
    image: JisubeeImage,
    // Techstack used here is C# .net, MSSQL (but you can use mysql icon, just mssql tooltip)
    techStack: [],
    github: "https://github.com/JisuKayl/CSharp-DotNet-MsSQL-FastFoodSystem",
  },
  {
    title: "Himnario: Lyrics Management App",
    category: "Fullstack IOS Application",
    description:
      "An app for managing song lyrics, allowing users to add, edit, delete, and view songs with codes, titles, and lyrics. Includes a favorites feature for quick access.",
    image: DefaultImage,
    // Techstack used here is Swift, swiftdata (if no icon available, dont include swiftdata. just swift)
    techStack: [],
    github: "https://github.com/JisuKayl/Swift-Wam3-Finals",
  },
  {
    title: "Twilio: SMS Service",
    category: "Fullstack Web API Integration",
    description:
      "A test project integrating Twilio's SMS API for sending text messages. It allows users to input a phone number and message, then send it using Twilio's service.",
    image: TwilioImage,
    // Techstack used here is react js, css, express js,
    techStack: [],
    github: "https://github.com/JisuKayl/Twilio-SMS-Integration-Test",
  },
  {
    title: "Gmail SMTP: Email",
    category: "Fullstack Web API Integration",
    description:
      "An integration test for sending emails using Gmail's SMTP service. Users can compose an email, specify a recipient, and send messages through the configured SMTP server.",
    image: GmailsmtpImage,
    // Techstack used here is React js, css, express js
    techStack: [],
    github: "https://github.com/JisuKayl/Gmail-SMTP-Integration-Test",
  },
  {
    title: "Google Calendar: Sample Scheduler",
    category: "Fullstack Web API Integration",
    description:
      "An integration test for Google Calendar API, allowing users to authenticate with their Google account and manage events, including adding, updating, and deleting scheduled events.",
    image: GooglecalendarImage,
    // Techstack used here is React js, css, express js, mysql
    techStack: [],
    github: "https://github.com/JisuKayl/Google-Calendar-Integration-Test",
  },
  {
    title: "OpenWeatherMap: Weather Forecast",
    category: "Fullstack Web API Integration",
    description:
      "An integration test for OpenWeatherMap API, allowing users to search for weather forecasts by city and retrieve real-time weather data, including temperature, humidity, and conditions.",
    image: OwmweatherImage,
    // Techstack used here is React js, css, express
    techStack: [],
    github: "https://github.com/JisuKayl/OpenWeatherMap-Integration-Test",
  },
  {
    title: "Case Program: Sping Boot REST API",
    category: "Backend - REST API",
    description:
      "A CRUD-based REST API, featuring MongoDB for data storage. It allows creating, reading, updating, and deleting case records via API endpoints.",
    image: SpringbootcurdImage,
    // Techstack used here is Springboot, MongoDB
    techStack: [],
    github: "https://github.com/JisuKayl/CaseProgram-RestAPI-Springboot",
  },
  {
    title: "Lawchat: Frontend Prototype",
    category: "Frontend Mockup Website",
    description:
      "An assessment project during my OJT internship. It features UI functionalities like adding users to a group and deleting chats, serving as a mockup without backend integration.",
    image: LawchatImage,
    // Techstack used here is Next JS, Typescript, Tailwind
    techStack: [],
    github: "https://github.com/JisuKayl/LawChat-App",
  },
  {
    title: "",
    category: "",
    description: "",
    image: DefaultImage,
    // Techstack used here is
    techStack: [],
    github: "",
  },
  {
    title: "",
    category: "",
    description: "",
    image: DefaultImage,
    // Techstack used here is
    techStack: [],
    github: "",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="text-white">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#2a2a2a] p-4 rounded-lg border border-[#444]"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-60 object-cover rounded-lg mb-3"
            />
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="text-sm text-gray-400">{project.category}</p>
            <p className="text-sm my-2">{project.description}</p>
            <div className="flex items-center justify-between mt-3">
              <div className="flex space-x-3">
                {project.techStack.map((tech, i) => (
                  <div key={i} className="group relative">
                    <span className="text-2xl">{tech.icon}</span>
                    <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-xs text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
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
                <FaGithub className="text-2xl text-gray-300 hover:text-white" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
