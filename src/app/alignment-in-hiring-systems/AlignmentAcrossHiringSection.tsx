import React from "react";

const actorCards = [
  {
    avatar: "/solutions/icons/candidate-icon.svg",
    title: "Career Progress",
    description:
      "Keep expectations, decisions and actions connected as opportunities change.",
    isElevated: false,
  },
  {
    avatar: "/solutions/icons/recruiter-icon.svg",
    title: "Hiring Delivery",
    description:
      "Keep coordination, participation, feedback and commitment moving across hiring stages.",
    isElevated: true,
  },
  {
    avatar: "/solutions/icons/employer-icon.svg",
    title: "Hiring Targets",
    description:
      "Keep priorities, capacity, execution and outcomes connected to operating reality.",
    isElevated: false,
  },
];

export default function AlignmentAcrossHiringSection() {
  return (
    <section className="w-full">
      {/* Outer rounded card container */}
      <div className="bg-[#F8FBFF] border border-[#CCE3FD] rounded-xl p-xl shadow-mobile-medium md:shadow-web-medium">
        {/* Header */}
        <div className="text-center mb-xl  md:pb-md">
          <p className="font-bold text-xl text-primary uppercase tracking-wider mb-xs">
            ALIGNMENT ACROSS HIRING
          </p>

          <h2 className="font-heading font-extrabold text-h2 leading-tight">
            <span className="text-[#1B1C17] block">Three Actors. Three Goals. </span>
            <span className="text-primary block">One Connected System.</span>
          </h2>
        </div>

        {/* 3 Actor Cards */}
        <div className="md:px-[13%] grid grid-cols-1 md:grid-cols-3 gap-md items-center justify-center">
          {actorCards.map((card, index) => (
            <div
              key={index}
              className={`bg-white border rounded-md p-md flex flex-col items-center text-center shadow-mobile-medium md:shadow-web-medium transition-all duration-300 w-full mx-auto ${card.isElevated
                ? "border-[#B5D5FC] md:-translate-y-8 lg:-translate-y-10 py-md z-10"
                : "border-[#D1E4FE] py-md"
                }`}
            >
              {/* Avatar Icon */}
              <img
                src={card.avatar}
                alt={card.title}
                className={`object-contain mb-sm transition-transform duration-300 size-iconsize-2xl scale-110`}
              />

              {/* Title */}
              <h3 className="font-heading font-bold text-h5 text-primary mb-xs">
                {card.title}
              </h3>

              {/* Description */}
              <p className="font-medium text-xl text-[#1B1C17] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-md">
          <p className="text-base">
            <span className="font-medium text-[#1B1C17]">
              Each actor moves towards a different goal.{" "}
            </span>
            <span className="font-bold text-primary">
              Hiring continuity depends on whether those movements remain coordinated.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
