import React from "react";

const problemCards = [
  {
    badgeTop: "INTERVIEW CONFIRMED",
    badgeBottom: "PARTICIPATION SHIFTS",
    title: "Confirmed Does Not Always Mean Committed.",
    description:
      "An interview can remain scheduled while responsiveness and expected participation begin to change.",
  },
  {
    badgeTop: "OFFER ACCEPTED",
    badgeBottom: "JOINING SHIFTS",
    title: "Accepted Does Not Always Mean Assured.",
    description:
      "An offer can remain accepted while engagement and joining confidence begin to weaken.",
  },
  {
    badgeTop: "ROLE ACTIVE",
    badgeBottom: "PROGRESS SHIFTS",
    title: "Open Does Not Always Mean Moving.",
    description:
      "A role can remain active while urgency, activity and hiring momentum begin to slow.",
  },
];

export default function SystemProblemsSection() {
  return (
    <section className="w-full">
      {/* Header */}
      <div className="mb-md md:mb-lg">
        <p className="font-bold text-base text-primary uppercase tracking-wide mb-xs">
          THE SYSTEMs PROBLEM
        </p>

        <h2 className="font-extrabold text-h2 leading-tight">
          <span className="text-[#1B1C17] block">The Process Can Continue.</span>
          <span className="text-primary block">The Connection Can Weaken.</span>
        </h2>
      </div>

      {/* 3 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
        {problemCards.map((card, index) => (
          <div
            key={index}
            className="bg-white border border-[#DCEBFA] rounded-md p-md shadow-mobile-small md:shadow-web-small flex flex-col"
          >
            <div>
              {/* Badge Header Box */}
              <div className="bg-[#EEF6FF] border border-[#CCE3FD] rounded-xs p-sm mb-md">
                <span className="text-primary font-bold text-xl uppercase block">
                  {card.badgeTop}
                </span>
                <span className="text-primary font-bold text-xl uppercase block mt-0.5">
                  {card.badgeBottom}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-bold text-h6 text-[#1B1C17] mb-sm">
                {card.title}
              </h3>
            </div>

            {/* Description */}
            <p className="font-medium text-xl text-[#1B1C17]">
              {card.description}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Summary Callout Banner */}
      <div className="mt-md md:mt-lg bg-white border border-[#DCEBFA] rounded-md p-sm md:p-md shadow-mobile-small md:shadow-web-small flex flex-col md:flex-row items-center justify-between gap-md">
        {/* Left Side */}
        <div className="w-full md:w-1/2 px-xs md:px-sm">
          <p className="font-bold text-base text-[#1B1C17] text-center">
            The recorded stage shows where the process stands.
          </p>
        </div>

        {/* Right Side Pill */}
        <div className="w-full md:w-1/2 bg-[#EEF6FF] border border-[#CCE3FD] rounded-md p-sm md:p-md">
          <p className="font-bold text-xl text-primary">
            It does not always show whether the people carrying it forward remain aligned.
          </p>
        </div>
      </div>
    </section>
  );
}
