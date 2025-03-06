import React from "react";
import ProfileSection from "../components/ProfileSection";
import ContentSection from "../components/ContentSection";

const Home = () => {
  return (
    <div>
      <div className="min-h-screen bg-black flex gap-6 p-8 ">
        <div className="w-1/4 p-4  rounded-xl bg-[#2a2a2a] border-[#444444] border-2">
          <ProfileSection />
        </div>
        <div className="w-3/4 p-4 rounded-xl bg-[#2a2a2a] border-[#444444] border-2">
          <ContentSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
