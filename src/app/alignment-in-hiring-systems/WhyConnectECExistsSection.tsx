import React from "react";
import { GradientButton } from "@/components/button/GradientButton";

const badges = [
  "Recognize the shift.",
  "Create time to act.",
  "Preserve continuity.",
];

export default function WhyConnectECExistsSection() {
  return (
    <section className="w-full py-[10%] md:py-[5%]">
      {/* Eyebrow */}
      <p className="font-bold text-xl text-primary uppercase tracking-wide mb-xs">
        WHY CONNECT EC EXISTS
      </p>

      {/* Main Heading */}
      <h2 className="font-extrabold text-h2 leading-tight mb-md">
        <span className="text-[#1B1C17] block">Systems Should Not Expect</span>
        <span className="text-[#1B1C17] block">People to Remain Fixed.</span>
        <span className="text-primary block mt-xs">They Should Be Designed to</span>
        <span className="text-primary block">Respond When People Change.</span>
      </h2>

      {/* Pill Badges */}
      <div className="flex flex-col md:flex-row flex-wrap items-center gap-sm w-full">
        {badges.map((badge, idx) => (
          <div
            key={idx}
            className="w-full md:w-auto bg-[#F2F8FF] border border-[#B2D0F6] rounded-full px-md py-xs flex items-center justify-center text-center"
          >
            <span className="font-medium text-xl text-primary whitespace-nowrap">
              {badge}
            </span>
          </div>
        ))}
      </div>

      {/* Divider Line */}
      <div className="w-full border-t border-[#D3E6FF] my-lg md:my-xl" />

      {/* Bottom Footer Row */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-md">
        <div>
          <h3 className="font-bold text-h5 text-[#1B1C17]">
            PRIMETHIC.
          </h3>
          <p className="font-medium text-base text-[#1B1C17] mt-xs">
            We design systems where alignment holds through change.
          </p>
        </div>

        <div>
          <GradientButton text="Explore Connect EC" className="!px-20" link="https://connectec.app/" />
        </div>
      </div>
    </section>
  );
}
