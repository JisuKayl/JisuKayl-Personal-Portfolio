import React, { useState, useEffect, useContext } from "react";
import ProfileSection from "../components/ProfileSection";
import ContentSection from "../components/ContentSection";
import { FaBars, FaTimes } from "react-icons/fa";
import { ThemeProvider, ThemeContext } from "../context/ThemeContext";

const HomeContent = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    const handleNavigation = (e) => {
      if (e.target.hash) {
        e.preventDefault();

        if (showMobileMenu) {
          setShowMobileMenu(false);
        }
        const targetId = e.target.hash.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, null, e.target.hash);
        }
      }
    };

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach((link) => {
      link.addEventListener("click", handleNavigation);
    });

    return () => {
      anchorLinks.forEach((link) => {
        link.removeEventListener("click", handleNavigation);
      });
      document.documentElement.style.scrollBehavior = "";
    };
  }, [showMobileMenu]);

  return (
    <div
      className={`h-screen ${
        isDark ? "bg-black" : "bg-violet-50"
      } overflow-hidden`}
    >
      <div className="h-full md:p-8 relative">
        <button
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className={`md:hidden fixed top-2 left-2 z-20 p-2 rounded-full ${
            isDark ? "bg-[#666666] text-white" : "bg-violet-200 text-gray-800"
          } opacity-50`}
          aria-label={showMobileMenu ? "Close menu" : "Open menu"}
        >
          {showMobileMenu ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>

        <div className="h-full flex flex-col md:flex-row gap-6">
          <div
            className={`
              fixed inset-0 z-10 ${
                isDark ? "bg-[#2a2a2a]" : "bg-violet-200"
              } transform transition-transform duration-500 ease-in-out
              ${showMobileMenu ? "translate-x-0" : "-translate-x-full"}
              md:static md:block md:w-1/4 md:min-w-[280px] md:translate-x-0
              h-full p-4 md:rounded-xl ${
                isDark ? "border-[#444444]" : "border-violet-300"
              } border-2 overflow-y-auto
            `}
          >
            <ProfileSection />
          </div>
          <div
            className={`w-full md:w-3/4 h-full p-4 md:rounded-xl ${
              isDark
                ? "bg-[#2a2a2a] border-[#444444]"
                : "bg-violet-200 border-violet-300"
            } border-2`}
          >
            <ContentSection />
          </div>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <ThemeProvider>
      <HomeContent />
    </ThemeProvider>
  );
};

export default Home;
