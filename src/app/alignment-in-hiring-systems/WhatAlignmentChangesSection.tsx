import React from "react";

const changesData = [
  {
    id: 1,
    text: "Participation can be protected before an interview is missed.",
  },
  {
    id: 2,
    text: "Commitment can be supported before joining becomes uncertain.",
  },
  {
    id: 3,
    text: "Hiring momentum can be restored before a requirement stalls.",
  },
  {
    id: 4,
    text: "Decisions can respond to changing conditions sooner.",
  },
];

export default function WhatAlignmentChangesSection() {
  return (
    <section className="w-full">
      {/* Eyebrow */}
      <p className="font-bold text-xl text-primary uppercase tracking-wide mb-xs">
        WHAT ALIGNMENT CHANGES
      </p>

      {/* Heading */}
      <h2 className="font-extrabold text-h2 leading-tight mb-xs">
        <span className="text-[#1B1C17]">From Recorded Progress to </span>
        <span className="text-primary">Connected Progress.</span>
      </h2>

      {/* Description */}
      <p className="font-medium text-base text-[#1B1C17] leading-relaxed mb-lg">
        Connect EC is Primethic&apos;s application of Alignment Continuity to hiring. It looks beyond recorded stages to the conditions influencing what happens next.
      </p>

      {/* 2x2 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
        {changesData.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-[#D3E6FF] rounded-md p-md md:p-sm shadow-mobile-small md:shadow-web-small flex flex-col justify-start transition-all duration-300 hover:border-primary/40 hover:shadow-web-medium"
          >
            {/* Checkmark Icon */}
            <div className="mb-xs">
              <img
                src="/solutions/icons/tick-icon.svg"
                alt="Tick icon"
                className="size-iconsize-md scale-75 object-contain"
              />
            </div>

            {/* Card Content Text */}
            <p className="font-medium text-xl text-[#1B1C17]">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Summary Lines */}
      <div className="mt-lg space-y-xs">
        <p className="font-bold text-base text-[#1B1C17] leading-snug">
          Hiring becomes more than a sequence of completed stages.
        </p>
        <p className="font-bold text-h6 text-[#1B1C17] leading-snug">
          It becomes a system capable of preserving continuity through change.
        </p>
      </div>
    </section>
  );
}
