import React from "react";
import HeroSection from "./HeroSection";
import SystemProblemsSection from "./SystemProblemsSection";
import WhereHiringBreaksSection from "./WhereHiringBreaksSection";
import AlignmentAcrossHiringSection from "./AlignmentAcrossHiringSection";
import AlignmentContinuitySection from "./AlignmentContinuitySection";
import PrimethicResponseSection from "./PrimethicResponseSection";
import WhatAlignmentChangesSection from "./WhatAlignmentChangesSection";
import TheWiderDirectionSection from "./TheWiderDirectionSection";
import WhyConnectECExistsSection from "./WhyConnectECExistsSection";

export const metadata = {
  title: "Alignment in Hiring Systems | Connect EC",
  description:
    "Alignment in hiring systems ensures decisions, execution, and outcomes stay consistent across the hiring journey.",
};

const page = () => {
  return (
    <div className="">
      <div className=" mt-[20%] md:mt-[7%] py-[8%] md:py-[6%] px-[5%] lg:px-[8%] ">
        <HeroSection />
      </div>
      <div className="py-[8%] md:py-[6%] px-[5%] md:px-[8%]">
        <SystemProblemsSection />
      </div>
      <div className="py-[8%] md:py-[6%] px-[5%] md:px-[8%]">
        <WhereHiringBreaksSection />
      </div>
      <div className="py-[8%] md:py-[6%] px-[5%] md:px-[8%] bg-primary">
        <PrimethicResponseSection />
      </div>
      <div className="py-[8%] md:py-[6%] px-[5%]">
        <AlignmentAcrossHiringSection />
      </div>
      <div className="py-[8%] md:py-[6%] px-[5%] md:px-[8%]">
        <AlignmentContinuitySection />
      </div>

      <div className="py-[8%] md:py-[6%] px-[5%] md:px-[8%]">
        <WhatAlignmentChangesSection />
      </div>

      <div className="py-[8%] md:py-[6%] bg-[#E6F2FF] px-[5%] md:px-[8%]">
        <TheWiderDirectionSection />
      </div>

      <div className="py-[8%] md:py-[6%] bg-[#F7FBFF] px-[5%] md:px-[8%]">
        <WhyConnectECExistsSection />
      </div>
    </div>
  );
};

export default page;
