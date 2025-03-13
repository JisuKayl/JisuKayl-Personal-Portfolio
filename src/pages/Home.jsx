import React, { useState, useEffect } from "react";
import ProfileSection from "../components/ProfileSection";
import ContentSection from "../components/ContentSection";
import { FaBars, FaTimes } from "react-icons/fa";

const Home = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

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
    <div className="h-screen bg-black overflow-hidden">
      <div className="h-full bg-black p-8 relative">
        <button
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="md:hidden fixed top-4 left-4 z-20 bg-[#444444] p-2 rounded-full text-white"
          aria-label={showMobileMenu ? "Close menu" : "Open menu"}
        >
          {showMobileMenu ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>

        <div className="h-full flex flex-col md:flex-row gap-6">
          <div
            className={`
    fixed inset-0 z-10 bg-[#2a2a2a] transform transition-transform duration-300 ease-in-out
    ${showMobileMenu ? "translate-x-0" : "-translate-x-full"}
    md:static md:block md:w-1/4 md:min-w-[280px] md:translate-x-0
    h-full p-4 rounded-xl border-[#444444] border-2 overflow-y-auto
  `}
          >
            <ProfileSection />
          </div>
          <div className="w-full md:w-3/4 h-full p-4 rounded-xl bg-[#2a2a2a] border-[#444444] border-2">
            <ContentSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
