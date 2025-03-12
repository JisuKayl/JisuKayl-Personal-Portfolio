import React, { useRef, useEffect } from "react";
import ProfileSection from "../components/ProfileSection";
import ContentSection from "../components/ContentSection";
import { FaBars, FaTimes } from "react-icons/fa";

const Home = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
  const needsNavigationRefresh = useRef(false);

  useEffect(() => {
    const setupSmoothScrolling = () => {
      const anchorLinks = document.querySelectorAll('a[href^="#"]');

      anchorLinks.forEach((anchor) => {
        const newAnchor = anchor.cloneNode(true);
        if (anchor.parentNode) {
          anchor.parentNode.replaceChild(newAnchor, anchor);
        }
      });
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();

          const targetId = this.getAttribute("href");
          const targetElement = document.querySelector(targetId);

          if (targetElement) {
            const mobileContent = document.getElementById("mobile-content");

            if (window.innerWidth < 768 && mobileContent) {
              const mobileContentRect = mobileContent.getBoundingClientRect();
              const targetRect = targetElement.getBoundingClientRect();
              const relativePosition = targetRect.top - mobileContentRect.top;
              mobileContent.scrollTo({
                top: relativePosition + mobileContent.scrollTop,
                behavior: "smooth",
              });
            } else {
              targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
            setShowMobileMenu(false);
          }
        });
      });
    };
    setupSmoothScrolling();

    if (showMobileMenu) {
      needsNavigationRefresh.current = true;
    }
    if (showMobileMenu && needsNavigationRefresh.current) {
      const timer = setTimeout(() => {
        setupSmoothScrolling();
        needsNavigationRefresh.current = false;
      }, 100);
      return () => clearTimeout(timer);
    }
    const handleResize = () => {
      setupSmoothScrolling();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
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

        <div className="hidden md:flex gap-6 h-full">
          <div className="w-1/4 min-w-[280px] h-full p-4 rounded-xl bg-[#2a2a2a] border-[#444444] border-2 overflow-y-auto overflow-x-hidden">
            <ProfileSection />
          </div>
          <div className="w-3/4 h-full p-4 rounded-xl bg-[#2a2a2a] border-[#444444] border-2 overflow-y-auto overflow-x-hidden">
            <ContentSection />
          </div>
        </div>

        <div className="md:hidden h-full">
          <div className="w-full h-full p-4 rounded-xl bg-[#2a2a2a] border-[#444444] border-2 overflow-y-auto overflow-x-hidden">
            <ContentSection />
          </div>

          <div
            className={`
              fixed top-0 left-0 h-screen w-3/4 p-4 bg-[#2a2a2a] border-r-[#444444] border-r-2
              transform transition-transform duration-300 ease-in-out z-10 overflow-x-hidden
              ${showMobileMenu ? "translate-x-0" : "-translate-x-full"}
            `}
          >
            <div className="pt-12 h-full flex flex-col overflow-x-hidden">
              <div className="flex-grow overflow-y-auto overflow-x-hidden">
                <ProfileSection />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
