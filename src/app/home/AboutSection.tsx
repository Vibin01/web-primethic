"use client"
import { useEffect } from "react";

export default function AboutSection() {

      useEffect(() => {
      const shouldScroll = sessionStorage.getItem("scrollToPlatform");
      if (shouldScroll === "true") {
        sessionStorage.removeItem("scrollToPlatform");
        const platformSection = document.getElementById("platform");
        platformSection?.scrollIntoView({ behavior: "smooth" });
      }
    }, []);

  return (
    <section id="platform" className="w-full bg-[#F4FAFF] pt-[5%] pb-[32%] lg:pb-[10%] px-[5%] lg:px-[9%]">
      
      {/* Title */}
            <h2 className='text-[20px] md:text-[26px] lg:text-[32px] xl:text-[40px] 2xl:text-[60px] font-bold mb-6 md:mb-14 2xl:mb-18 text-center'>

        Meaning Behind the Name: <span className="text-[#0668E1]">PRIMETHIC</span>
      </h2>

      {/* Subtitle */}
      <p className="text-center font-medium text-[15px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]  lg:max-w-[70%] mx-auto mb-10 lg:mb-15 leading-relaxed">
        PRIMETHIC is more than our name—it is the foundation of our identity. 
        It captures the philosophy that guides every platform we build, 
        and every problem we choose to solve.
      </p>

   
    <div className="flex flex-col justify-center md:items-center xl:justify-evenly gap-32 xl:gap-[6%] 2xl:gap-[7%] xl:flex-row ">
      {/* PRIME CARD */}
      <div className="relative w-[90%] md:w-[70%] xl:w-[45%] md:mr-[7%] rounded-[20px_20px_20px_0px] lg:rounded-[32px_32px_32px_0px] bg-white p-4 lg:p-8 2xl:p-10 shadow-[-2px_2px_6px_0px_#0668E10F,_-8px_7px_11px_0px_#0668E10D,_-18px_16px_15px_0px_#0668E108,_-32px_29px_17px_0px_#0668E103,_-51px_45px_19px_0px_#0668E100]">

        {/* Header */}
        <div className="mb-4 lg:mb-7 flex items-center gap-0.5 md:gap-2 font-semibold text-semibold text-[16px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] ">

          
             <img
            src="/logo/primethic-logo-blue.svg"
            alt="Ethic Icon"
            className="w-5 h-5 lg:w-10 lg:h-10"
          />
         
          <span>latform Excellence</span>
        </div>

                     <div className="flex flex-col pl-1 gap-2 lg:gap-0 items-start font-extrabold text-[#0668E1] text-[16px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px]">
      <div className=" lg:w-[30px] flex flex-col justify-center items-center">      
              <span>R</span>
              <span>I</span>
              <span>M</span>
              <span>E</span>
              </div>
            </div>

        {/* Content */}
               <div className=" w-[100%] absolute left-1/7 xl:left-1/6 2xl:left-1/6 top-1/8 md:top-1/4 translate-y-1/8 border-2 border-[#0668E1] bg-white p-5 lg:p-9 rounded-[16px_16px_0_16px] lg:rounded-[24px_24px_0_24px]">


          <p className="text-[14px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] leading-relaxed ">
            <span className="font-extrabold">PRIME</span> represents the core of engineering excellence and intelligent platform design. It reflects our belief in building strong, scalable foundations that enable progress, elevate human potential, and advance people and industries through technology.
          </p>
        </div>
      </div>

      {/* ETHIC CARD */}
      <div className="relative w-[90%] md:w-[70%] xl:w-[45%] md:mr-[7%] rounded-[20px_20px_20px_0px] lg:rounded-[32px_32px_32px_0px] bg-white p-4 lg:p-8 2xl:p-10 shadow-[-2px_2px_6px_0px_#0668E10F,_-8px_7px_11px_0px_#0668E10D,_-18px_16px_15px_0px_#0668E108,_-32px_29px_17px_0px_#0668E103,_-51px_45px_19px_0px_#0668E100]">

        {/* Header */}
        <div className="mb-4 lg:mb-7 flex items-center gap-0.5 md:gap-2 font-semibold text-semibold text-[16px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] ">

          <img
            src="/logo/E-logo.svg"
            alt="Ethic Icon"
            className="w-5 h-5 lg:w-10 lg:h-10"
          />
          <span>ngineered Transformation</span>
        </div>

        {/* Content */}
                     <div className="flex flex-col pl-1 gap-2 lg:gap-0 items-start font-extrabold text-[#0668E1] text-[16px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px]">
      <div className=" lg:w-[30px] flex flex-col justify-center items-center">
              <span>T</span>
              <span>H</span>
              <span>I</span>
              <span>C</span>
            </div>
            </div>
               <div className=" w-[100%] absolute left-1/6 xl:left-1/6  2xl:left-1/6 top-1/8 md:top-1/4 translate-y-1/8 border-2 border-[#0668E1] bg-white p-5 lg:p-9 rounded-[16px_16px_0_16px] lg:rounded-[24px_24px_0_24px]">

         
          <p className="text-[14px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] leading-relaxed ">
            <span className="font-extrabold">ETHIC</span> emphasizes that transformation should be deliberate, purposeful, and grounded in integrity. It guides our work to be fair, responsible, and thoughtfully designed—ensuring that what we build creates real value and lasting impact.
          </p>
        </div>
      </div>
    </div>

    </section>
  );
}
