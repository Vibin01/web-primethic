"use client";
import { FiExternalLink } from "react-icons/fi";

export default function InnovationCard() {
  return (
    <section className="w-full  bg-[#F4FAFF] pt-[5%] pb-[16%] lg:pb-[5%] px-[5%] lg:px-4">
      {/* Heading */}
      <h2 className="mt-[15%] lg:mt-0 text-[20px] md:text-[26px] lg:text-[32px] xl:text-[40px] 2xl:text-[60px] font-bold mb-9 md:mb-14 2xl:mb-18 text-center">
        Innovation in Action
      </h2>

      {/* Card */}
      <div
        className="lg:max-w-[70%] mx-auto bg-white rounded-[20px] lg:rounded-[40px] shadow-[0px_6px_13px_0px_#0668E105,_0px_24px_24px_0px_#0668E105,_0px_53px_32px_0px_#0668E103,_0px_94px_38px_0px_#0668E100,_0px_147px_41px_0px_#0668E100] lg:shadow-[0px_6px_13px_0px_#0668E105,0px_24px_24px_0px_#0668E105,0px_53px_32px_0px_#0668E103,0px_94px_38px_0px_#0668E100,0px_147px_41px_0px_#0668E100]
       p-5 lg:p-12"
      >
        {/* Logo Row */}
        <div className="flex items-center gap-4 mb-8">
          <img
            src="/logo/connect-ec-gamified-ethical-hiring-platform-logo.svg"
            alt="Connect EC, Gamified Ethical Hiring Platform logo, a modern, fair, and engaging recruitment solution "
            className="h-[32px] lg:h-[60px] w-auto object-contain"
          />
        </div>

        {/* Title */}
        <div className="flex items-center gap-2 mb-4">
          <a
          id = "connect-ec-link"
          target="_blank"
            href="https://connectec.app/"
            className=" hover:text-blue-600 transition flex items-center gap-2"
          >
            <h3 className="text-[20px] md:text-[24px] lg:text-[28px] 2xl:text-[32px] font-bold">
              Connect EC
            </h3>
            <FiExternalLink size={20} />
          </a>
        </div>

        {/* Description Paragraphs */}
        <p className="text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] font-medium leading-relaxed mb-4">
          Connect EC is the world’s first gamified ethical hiring
          platform—designed to transform the recruitment experience for both
          employers and candidates.
        </p>

        <p className="text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] font-medium leading-relaxed mb-4">
          Engineered to solve real-time hiring challenges, Connect EC creates a
          unified experience that bridges the gap between hiring intent and
          hiring action. It restores information symmetry in the talent
          acquisition process by predicting no-shows, enabling on-time feedback,
          and ensuring transparency at every stage.
        </p>

        <p className="text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] font-medium leading-relaxed mb-6">
          At its core, EC blends innovation with ethics, reimagining recruitment
          as a collaborative, engaging, and trust-driven journey.
        </p>

        {/* Divider */}
        <div className="border-t border-gray-200 my-6"></div>

        {/* Google Play Button */}
        <a href="#" className="inline-block">
          <img
            src="/logo/play-store.svg"
            alt="Get it on Google Play"
            className="h-[42px] lg:h-[60px] w-auto"
          />
        </a>
      </div>
    </section>
  );
}
