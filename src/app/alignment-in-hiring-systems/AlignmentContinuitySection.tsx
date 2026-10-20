"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GradientButton } from "@/components/button/GradientButton";

const continuitySteps = [
  {
    step: "01",
    title: "Reveal the Shift",
    description: "Make changing participation, engagement and momentum visible.",
  },
  {
    step: "02",
    title: "Focus Attention",
    description: "Show where continuity may require support.",
  },
  {
    step: "03",
    title: "Create Intervention Time",
    description: "Bring change into view while the outcome can still be influenced.",
  },
  {
    step: "04",
    title: "Intervene",
    description: "Create time for informed action.",
  },
  {
    step: "05",
    title: "Protect What Follows",
    description: "Keep interviews, offers, joining and hiring progress connected.",
  },
];

export default function AlignmentContinuitySection() {
  return (
    <section className="w-full">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-12 lg:gap-16">
        {/* Mobile 3D Cube (shown at top on mobile, hidden on md+) */}
        <div className="w-full flex md:hidden justify-center items-center pt-2 pb-4">
          <img
            src="/solutions/icons/ec-connect-icon.svg"
            alt="Connect EC 3D Cube"
            className="w-[180px] sm:w-[220px] object-contain drop-shadow-[0_16px_36px_rgba(6,104,225,0.2)]"
          />
        </div>

        {/* Left Column: Text & Continuity Steps */}
        <div className="w-full md:w-[58%] lg:w-[56%]">
          {/* Eyebrow */}
          <p className="font-bold text-xl text-primary uppercase tracking-wider mb-xs">
            ALIGNMENT CONTINUITY IN PRACTICE
          </p>

          {/* Heading */}
          <h2 className="font-extrabold text-h2  leading-tight mb-xs">
            <span className="text-[#1B1C17] block">See What the Recorded</span>
            <span className=" block">Stage Cannot Show.</span>
          </h2>

          {/* Intro Description */}
          <p className="font-medium text-base text-[#1B1C17] leading-relaxed mb-md">
            Connect EC is Primethic&apos;s application of Alignment Continuity to hiring. It looks beyond recorded stages to the conditions influencing what happens next.
          </p>

          {/* Steps List */}
          <div className="space-y-0">
            {continuitySteps.map((item, index) => (
              <div
                key={item.step}
                className={`py-sm ${index !== continuitySteps.length - 1
                  ? "border-b border-[#D6E6FC]"
                  : ""
                  }`}
              >
                <div className="flex items-start gap-sm">
                  <span className="text-primary font-bold text-base">
                    {item.step}
                  </span>
                  <div className="flex flex-col">
                    <h3 className="text-primary font-bold text-base">
                      {item.title}
                    </h3>
                    <p className="text-xl text-[#1B1C17] font-medium leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Bottom Callout Box */}
          <div className="mt-md bg-[#DEEDFF] border-[#D3E6FF] border rounded-md p-md">
            <p className="text-primary font-medium text-xl leading-relaxed mb-sm">
              Connect EC does not replace human judgement. It gives human judgement earlier visibility, clearer direction and greater intervention time.
            </p>

            <GradientButton text="Experience Connect EC" className="!px-20" link="https://connectec.app/" />
          </div>
        </div>

        {/* Right Column: 3D Cube (shown on md+, hidden on mobile) */}
        <div className="hidden md:flex md:w-[42%] lg:w-[44%] justify-center items-start py-8">
          <img
            src="/solutions/icons/ec-connect-icon.svg"
            alt="Connect EC 3D Cube"
            className="w-[clamp(130px,calc(220/var(--width)*100vw),590px)] object-contain drop-shadow-[0_24px_48px_rgba(6,104,225,0.22)] transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
