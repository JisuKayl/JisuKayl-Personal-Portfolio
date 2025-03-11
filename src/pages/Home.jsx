import React from "react";
import ProfileSection from "../components/ProfileSection";
import ContentSection from "../components/ContentSection";

const Home = () => {
  return (
    <div className="h-screen bg-black flex gap-6 p-8 overflow-hidden">
      <div className="w-1/4 h-full p-4 rounded-xl bg-[#2a2a2a] border-[#444444] border-2">
        <ProfileSection />
      </div>
      <div className="w-3/4 h-full overflow-y-auto p-4 rounded-xl bg-[#2a2a2a] border-[#444444] border-2">
        <ContentSection />
      </div>
    </div>
  );
};

export default Home;
