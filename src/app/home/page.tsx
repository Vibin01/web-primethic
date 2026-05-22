import React from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import PrinciplesSection from "./PrinciplesSection";
import InnovationSection from "./InnovationSection";
import { TeamSection } from "./TeamSection";
import { BannerSection } from "./BannerSection";
import HowItWorks from "./HowItWorkSection";
import FoundationSection from "./FoundationSection";
import PrimethicSection from "./PrimethicSection";

const HomePage = () => {
  return (
    <>
      <div className="space-y-[5%]">
        <div className="pt-[15%] md:pt-0 px-[5%] lg:px-[8%] ">
          <HeroSection />
        </div>
      <div className="pt-[10%] md:pt-0 px-[5%] lg:px-[8%] ">
          <PrimethicSection />
        </div>
        <div className="mt-[10%] md:mt-0 bg-[#F7FBFF]">
          <HowItWorks />
        </div>
        <div className="pt-[10%] md:pt-0  px-[5%] lg:px-[8%]">
          <FoundationSection />
        </div>
        <div className="mt-[10%] md:mt-0 bg bg-[#F7FBFF]">
          <TeamSection />
        </div>
      </div>
    </>
  );
};
export default HomePage;
