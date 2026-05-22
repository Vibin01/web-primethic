"use client"
import { useEffect } from "react";

export default function PrinciplesSection() {
    useEffect(() => {
    const shouldScroll = sessionStorage.getItem("scrollToPlatform");
    if (shouldScroll === "true") {
      sessionStorage.removeItem("scrollToPlatform");
      const platformSection = document.getElementById("platform");
      platformSection?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <section id="platform" className="w-full bg-[#F4FAFF] py-[7%] px-[5%] lg:px-[7%]">
      {/* Heading */}
      <h2 className='mt-[15%] lg:mt-0 text-[20px] md:text-[26px] lg:text-[32px] xl:text-[40px] 2xl:text-[60px] font-bold mb-9 md:mb-14 2xl:mb-18 text-center'>

        The Principles Behind Our Platforms
      </h2>

      {/* Subtitle */}
      <p className="text-center font-medium text-[15px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]  md:max-w-[70%] mx-auto mb-14 lg:mb-20 leading-relaxed">
        Our values shape every platform we build, embedding excellence and purpose at their core. 
        They ensure our solutions are innovative, ethical, and transformative—driving impact with integrity.
      </p>

      {/* 3 Column Grid */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-16 lg:gap-4 xl:gap-16 mb-10 lg:mb-0 mx-auto">
       
        {/* 1) Maximize Human Insight (MHI) */}
        <div className="flex relative flex-col items-center text-center">
          <img 
            src="/home/primethic-maximize-human-insight-principle.svg" 
            alt="Conceptual illustration of a person analyzing behavioral insights, representing PRIMETHIC’s Maximize Human Insight principle. " 
            className="h-[200px] mb-8"
          />
       

          <h3 className="font-bold text-[18px]  xl:text-[22px] 2xl:text-[24px]  mb-5">
            Maximize Human Insight
          </h3>

          <p className="leading-relaxed text-[15px] xl:text-[17px] 2xl:text-[18px] font-medium">
            We design platforms that grow and adapt alongside human needs. 
            By harnessing behavioral data and advanced analytics, we deliver actionable insights 
            that empower smarter, more inspired decisions.
          </p>
        </div>
    <img 
            src="/home/vector/wave-line.svg" 
            alt="wave line" 
            className="h-[20px] xl:h-[25px]  py-1 lg:py-0 mb-8 rotate-90 lg:rotate-0"
          />
        {/* 2) Personalized Human Growth (PHG) */}
        <div className="flex flex-col items-center text-center">
          <img 
            src="/home/primethic-personalized-individual-growth-principle.svg" 
            alt="Conceptual illustration of a person’s individual growth, representing PRIMETHIC’s Personalized Individual Growth principle. " 
            className="h-[200px] mb-8 "
          />

          <h3 className="font-bold text-[18px]  xl:text-[22px] 2xl:text-[24px]  mb-5">
            Personalized Individual Growth
          </h3>

          <p className="leading-relaxed text-[15px] xl:text-[17px] 2xl:text-[18px] font-medium">
            We craft experiences that nurture individual potential. 
            Tailored to unique journeys, our platforms foster learning, empathy, 
            and responsible decision-making that strengthens communities.
          </p>
        </div>
<img 
            src="/home/vector/wave-line.svg" 
            alt="wave line" 
            className="h-[25px] lg:h-[20px] xl:h-[25px] py-1 lg:py-0 mb-8 rotate-90 lg:rotate-0"
          />
        {/* 3) Drive Honest Actions (DHA) */}
        <div className="flex flex-col items-center text-center">
          <img 
            src="/home/primethic-drive-honest-action-principle.svg" 
            alt="Conceptual illustration symbolizing honest actions and ethical behavior, representing PRIMETHIC’s Drive Honest Action principle" 
            className="h-[200px] mb-8"
          />

         
          <h3 className="font-bold text-[18px]  xl:text-[22px] 2xl:text-[24px]  mb-5">
            Drive Honest Actions 
          </h3>

          <p className="leading-relaxed text-[15px] xl:text-[17px] 2xl:text-[18px] font-medium">
            We create environments that champion authenticity. 
            Our platforms promote transparent communication and constructive engagement, 
            building trust and enabling confident collaboration.
          </p>
        </div>

      </div>
    </section>
  );
}
