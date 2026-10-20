"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { GradientButton } from "@/components/button/GradientButton";

export default function HeroSection() {
  const scrollToConnectEC = () => {
    const el = document.getElementById("connect-ec");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-white ">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-xl">
        {/* Left Column: Text & CTA */}
        <div className="w-full md:w-[60%]">
          {/* Eyebrow */}
          <p className="font-bold text-base text-[#1B1C17] uppercase ">
            ALIGNMENT IN HIRING SYSTEMS
          </p>

          {/* Main Heading */}
          <h1 className="font-heading font-extrabold text-primary text-h2 leading-tight mb-md">
            Hiring Keeps Moving.
            <br />
            Alignment Does Not Always
            <br />
            Move With It.
          </h1>

          {/* Subtitle / Description 1 */}
          <p className="font-medium text-base text-[#1B1C17] leading-relaxed mb-sm">
            Systems record progress. People continue responding to changing priorities, expectations and circumstances.
          </p>

          {/* Description 2 (Bold highlight) */}
          <p className="font-bold text-xl text-[#1B1C17] mb-xs">
            Primethic applies Alignment Continuity to hiring systems.
          </p>

          {/* CTA Button */}
          <GradientButton text="Explore Connect EC " className="px-xl" />
        </div>

        {/* Right Column: Status Card */}
        <div className="w-full md:w-[35%] flex justify-center md:justify-end">
          <div className="w-full bg-white border border-[#E2EEFC] rounded-lg p-md shadow-mobile-medium md:shadow-web-medium">
            {/* INTERVIEW */}
            <div>
              <span className="text-primary font-bold text-lg tracking-wider uppercase block">
                INTERVIEW
              </span>
              <p className="text-[#1B1C17] font-bold text-base">
                Scheduled
              </p>
            </div>

            {/* Divider */}
            <div className="border-b border-[#E2EFFE] my-sm" />

            {/* OFFER */}
            <div>
              <span className="text-primary font-bold text-lg tracking-wider uppercase block">
                OFFER
              </span>
              <p className="text-[#1B1C17] font-bold text-base">
                Accepted
              </p>
            </div>

            {/* Divider */}
            <div className="border-b border-[#E2EFFE] my-sm" />

            {/* ROLE */}
            <div className="mb-sm">
              <span className="text-primary font-bold text-lg tracking-wider uppercase block">
                ROLE
              </span>
              <p className="text-[#1B1C17] font-bold text-base">
                Open
              </p>
            </div>

            {/* Highlighted Blue Block */}
            <div className="bg-[#0668E1] rounded-md p-md text-white border border-[#D3E6FF]">
              <span className="text-white font-medium text-lg uppercase block">
                CONTINUITY
              </span>
              <p className="text-white font-bold text-base">
                Still Changing
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
