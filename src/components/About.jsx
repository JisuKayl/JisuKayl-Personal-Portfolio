import React from "react";
import { FaLaptopCode, FaMobileAlt, FaRobot, FaServer } from "react-icons/fa";

const About = () => {
  return (
    <div id="about" className="text-white">
      <div className="mb-6 p-4 bg-[#3a3a3a] rounded-lg space-y-2">
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
        {[
          {
            icon: <FaLaptopCode className="text-3xl text-blue-400" />,
            title: "Web Development",
            description:
              "I build user-friendly web applications, primarily using React.js and Tailwind CSS for the frontend, with Node.js and Express.js for the backend.",
          },
          {
            icon: <FaMobileAlt className="text-3xl text-green-400" />,
            title: "App Development",
            description:
              "I develop mobile applications using Android Studio, working with SQLite and Firebase, Swift for IOS, and C# .NET applications in Microsoft Visual Studio.",
          },
          {
            icon: <FaRobot className="text-3xl text-purple-400" />,
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
        ].map((skill, index) => (
          <div key={index} className="p-4 bg-[#3a3a3a] rounded-lg">
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
