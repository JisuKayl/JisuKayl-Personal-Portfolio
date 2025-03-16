import React from "react";
import { FaLaptopCode, FaMobileAlt, FaRobot, FaServer } from "react-icons/fa";

const aboutData = [
  {
    icon: <FaLaptopCode className="text-3xl text-purple-400" />,
    title: "Web Development",
    description:
      "I build user-friendly web applications, primarily using React.js and Tailwind CSS for the frontend, with Node.js and Express.js for the backend.",
  },
  {
    icon: <FaMobileAlt className="text-3xl text-green-400" />,
    title: "App Development",
    description:
      "I develop mobile applications using Android Studio, working with SQLite and Firebase, Swift for iOS, and C# .NET applications in Microsoft Visual Studio.",
  },
  {
    icon: <FaRobot className="text-3xl text-gray-400" />,
    title: "AI-Driven Chatbots",
    description:
      "Currently exploring AI-driven chatbots using Rasa, focusing on creating intelligent conversational agents.",
  },
  {
    icon: <FaServer className="text-3xl text-orange-400" />,
    title: "Service Integrations",
    description:
      "Tested integrations with services like Gmail SMTP, Google Calendar, Leaflet Map, and Twilio SMS.",
  },
];

export default aboutData;
