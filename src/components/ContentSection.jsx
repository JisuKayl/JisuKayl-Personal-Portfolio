import React from "react";
import About from "./About";
import Projects from "./Projects";

const ContentSection = () => {
  return (
    <div className="h-full overflow-y-auto">
      <div className="space-y-6 pb-6">
        <About />
        <Projects />
      </div>
    </div>
  );
};

export default ContentSection;
