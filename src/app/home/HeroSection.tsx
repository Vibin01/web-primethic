import React from "react";

const frameworkItems = [
  {
    icon: "/home/icons/within-individuals-icon.svg",
    title: "Within individuals.",
    description: "Understanding, decisions, actions aligned.",
  },
  {
    icon: "/home/icons/between-teams-icon.svg",
    title: "Between teams.",
    description: "Direction, execution, coordination aligned.",
  },
  {
    icon: "/home/icons/across-system-icon.svg",
    title: "Across systems.",
    description: "Alignment remains valid across systems.",
  },
];

const impactItems = [
  {
    icon: "/home/icons/seamless-experiences-icon.svg",
    title: "Seamless experiences.",
    description: "Transitions remain connected.",
  },
  {
    icon: "/home/icons/clear-decisions-icon.svg",
    title: "Clear decisions.",
    description: "Direction remains visible.",
  },
  {
    icon: "/home/icons/reliable-outcomes-icon.svg",
    title: "Reliable outcomes.",
    description: "Intent remains aligned with outcome.",
  },
];

export default function HeroSection() {
  return (
    <section className=" mt-[15%] pb-[5%]">
      <div className="w-full ">
        {/* Small Heading */}
        <p className="font-bold text-base  text-[#1B1C17] mb-sm">
          Alignment Intelligence
        </p>

        {/* Main Heading */}
        <h1 className="font-extrabold text-h2  text-[#0668E1] max-w-[850px] mb-xl">
          We build systems where alignment holds under real-world conditions
        </h1>

        {/* Framework Section */}
        <div className="mb-md md:mb-xl">
          <h2 className="font-bold text-base text-[#1B1C17] mb-sm">
            The Framework
          </h2>

          <div className="flex flex-col md:flex-row md:items-center gap-md text-[#1B1C17]">
            {frameworkItems.map((item,index) => (
              <React.Fragment key={item.title}>
              <div
                className="flex-1 flex items-start gap-sm"
              >
                <img src={item.icon} alt={item.title} />

                <div>
                  <p className="font-medium text-base text-[#1B1C17] mb-1">
                    {item.title}
                  </p>
                  <p className="text-xl text-[#727272]">{item.description}</p>
                </div>
              </div>
            
                {index < impactItems.length - 1 && (
  <div className="hidden md:block self-stretch w-[2px] bg-[#DEEDFF]" />
)}
              
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Impact Section */}
        <div className="pt-md">
          <h2 className="font-bold text-base text-[#1B1C17] mb-sm">
            The Impact
          </h2>

          <div className="flex flex-col md:flex-row  gap-md">
            {impactItems.map((item,index) => (
              <React.Fragment key={item.title}>
              <div
                className="flex-1 flex items-start gap-sm"
              >
                <img src={item.icon} alt={item.title} />

                <div>
                  <p className="font-medium text-base text-[#1B1C17] mb-1">
                    {item.title}
                  </p>
                  <p className="text-xl text-[#727272]">{item.description}</p>
                </div>
              </div>
            
                {index < impactItems.length - 1 && (
  <div className="hidden md:block self-stretch w-[2px] bg-[#DEEDFF]" />
)}
              
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
