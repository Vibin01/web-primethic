import React from "react";
import VisibilitySection from "./VisibilitySection";
import HeroSection from "./HeroSection";
import ConnectECSection from "./ConnectECSection";
import HiringCardsSection from "./HiringCardsSection";
import WhyConnectEC from "./WhyConnectEC";
import MakeHiringEasyBanner from "./MakeHiringEasyBanner";
import WhatsNextSection from "./WhatsNextSection";

export const metadata = {
  title: "Alignment in Hiring Systems | Connect EC",
  description:
    "Alignment in hiring systems ensures decisions, execution, and outcomes stay consistent across the hiring journey.",
};

const page = () => {
  return (
    <div className="space-y-[5%]">
      <div className="pt-[20%] pb-[5%] md:py-[10%]  px-[5%] md:px-[8%]">
        <HeroSection />
      </div>
      <div className="pt-[15%] md:pt-0 px-[5%] md:px-[8%]">
        <ConnectECSection />
      </div>
      <div className="pt-[15%] md:pt-0 px-[5%] md:px-[8%]">
        <HiringCardsSection />
      </div>
      <div className="pt-[15%] md:pt-0 px-[5%] md:px-[8%]">

      <VisibilitySection />
</div>
      <div className="pt-[15%] md:pt-0 px-[5%] md:px-[8%]">
        <WhyConnectEC />
      </div>
      <div className="pt-[15%] md:pt-0 px-[5%] md:px-[8%]">
        <MakeHiringEasyBanner />
      </div>
<div className="mt-[15%] md:mt-0 bg-[#F7FBFF] px-[5%] md:px-[8%]">
<WhatsNextSection/>
</div>
    </div>
  );
};

export default page;
