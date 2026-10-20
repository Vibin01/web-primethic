import React from "react";

const steps = [
  {
    title: "Intention",
    description: "What someone expects or wants begins to move.",
    icon: "/solutions/icons/intention-icon.svg",
    connectsToNext: true,
  },
  {
    title: "Decision",
    description: "The record continues to hold the earlier choice.",
    icon: "/solutions/icons/decision-icon.svg",
    connectsToNext: true,
  },
  {
    title: "Action",
    description: "Behaviour begins to diverge from the decision.",
    icon: "/solutions/icons/action-icon.svg",
    connectsToNext: false,
  },
  {
    title: "Outcome",
    description: "The change finally becomes visible.",
    icon: "/solutions/icons/outcome-icon.svg",
    connectsToNext: false,
  },
];

export default function WhereHiringBreaksSection() {
  return (
    <section className="w-full">
      {/* Header */}
      <div className="text-center mb-md md:mb-lg">
        <p className="font-bold text-xl text-primary uppercase tracking-wide mb-xs">
          WHERE HIRING BREAK
        </p>

        <h2 className="font-extrabold text-h2 leading-tight mb-xs">
          <span className="text-[#1B1C17]">The Outcome </span>
          <span className="text-primary">Happens Last.</span>
        </h2>

        <p className="font-medium text-base text-[#1B1C17] mx-auto">
          Hiring rarely breaks at a single moment. The outcome only makes the disconnection visible.
        </p>
      </div>

      {/* 4 Cards Sequence with connecting lines */}
      <div className="flex flex-col md:flex-row items-stretch justify-between w-full">
        {steps.map((step, index) => (
          <React.Fragment key={step.title}>
            {/* The Card */}
            <div className="flex-1 min-w-0 bg-white border border-[#B2D0F6] rounded-md p-md shadow-mobile-medium md:shadow-web-medium flex flex-col justify-start">
              <img
                src={step.icon}
                alt={step.title}
                className="size-iconsize-md object-contain mb-sm"
              />
              <h3 className="font-bold text-base text-[#1B1C17] mb-xs">
                {step.title}
              </h3>
              <p className="font-medium text-xl text-[#1B1C17] leading-relaxed">
                {step.description}
              </p>
            </div>

            {/* Connecting lines between cards */}
            {index < steps.length - 1 && (
              <>
                {step.connectsToNext ? (
                  <>
                    {/* Desktop horizontal connector line */}
                    <div className="hidden md:flex items-center justify-center w-6 lg:w-8 shrink-0">
                      <div className="w-full h-[2px] bg-primary" />
                    </div>
                    {/* Mobile vertical connector line */}
                    <div className="flex md:hidden items-center justify-center h-8 my-0">
                      <div className="w-[2px] h-full bg-primary" />
                    </div>
                  </>
                ) : (
                  <>
                    {/* Gap between Action & Outcome without line */}
                    <div className="hidden md:block w-6 lg:w-8 shrink-0" />
                    <div className="md:hidden h-4 sm:h-6" />
                  </>
                )}
              </>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Bottom Banner */}
      <div className="mt-lg flex justify-center">
        <div className="w-full md:w-auto bg-[#E5F1FF] border-l-4 border-l-primary rounded-r-2xl py-sm px-md md:py-sm md:px-lg">
          <p className="font-medium text-base text-[#1B1C17]">
            By then, much of the opportunity to respond may already be gone.
          </p>
        </div>
      </div>
    </section>
  );
}
