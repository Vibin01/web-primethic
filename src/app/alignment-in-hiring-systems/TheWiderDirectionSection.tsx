import React from "react";

export default function TheWiderDirectionSection() {
  return (
    <section className="w-full py-[10%] md:py-[5%]">
      {/* Eyebrow */}
      <p className="font-bold text-xl text-primary uppercase tracking-wide mb-xs">
        THE WIDER DIRECTION
      </p>

      {/* Main Heading */}
      <h2 className="font-extrabold text-h2 leading-tight mb-sm md:mb-md">
        <span className="text-[#1B1C17] block">Hiring Is the First Application.</span>
        <span className="text-primary block">Alignment Continuity Goes Further.</span>
      </h2>

      {/* Description */}
      <p className="font-medium text-base text-[#1B1C17] leading-relaxed mb-lg md:max-w-[60%]">
        Connect EC demonstrates how Primethic&apos;s Alignment Architecture can be applied to a real-world system shaped by changing intentions, decisions, actions and conditions.
      </p>

      {/* Blue Callout Box */}
      <div className="w-full md:w-fit bg-primary rounded-md p-md md:px-lg md:py-md shadow-mobile-small md:shadow-web-small">
        <p className="font-bold text-base text-white">
          Because alignment is not only a hiring requirement.
        </p>
        <p className="font-bold text-base text-white mt-xs">
          It is a condition every human system must preserve.
        </p>
      </div>
    </section>
  );
}
