import React from "react";

const frameworkItems = [
  {
    icon: "/home/icons/within-individuals-icon.svg",
    title: "Within individuals.",
    description: "Expectations, decisions, and actions aligned.",
  },
  {
    icon: "/home/icons/between-teams-icon.svg",
    title: "Between teams.",
    description: "Shared expectations drive coordinated action.",
  },
  {
    icon: "/home/icons/across-system-icon.svg",
    title: "Across systems.",
    description: "Alignment remains consistent as systems interact.",
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
    description: "The path forward remains visible.",
  },
  {
    icon: "/home/icons/reliable-outcomes-icon.svg",
    title: "Reliable outcomes.",
    description: "Outcomes reflect expectations.",
  },
];

export default function HeroSection() {
  return (
    <section className=" mt-[15%] pb-[5%]">
      <div className="w-full ">
        {/* Small Heading */}
        <h1 className="font-extrabold text-h2  text-[#0668E1] ">
          Alignment Intelligence
        </h1>

        {/* Main Heading */}
        <h3 className="font-bold text-h5   md:max-w-[40%] mb-xl ">
          We build systems where alignment holds under real-world conditions
        </h3>

        {/* Framework Section */}
        <div className="mb-md md:mb-xl">
          <h4 className="font-bold text-h6 text-[#0668E1] mb-sm">
            The Framework
          </h4>

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
          <h4 className="font-bold text-h6 text-[#0668E1] mb-sm">
            The Impact
          </h4>

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
