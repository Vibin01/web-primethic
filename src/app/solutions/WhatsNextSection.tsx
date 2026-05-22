import { Shuffle, Users, Building2 } from "lucide-react";

const items = [
  {
    icon: "/solutions/icons/decision.svg",
    title: "Decisions",
  },
  {
    icon: "/solutions/icons/relationship.svg",
    title: "Relationships",
  },
  {
    icon: "/solutions/icons/organization.svg",
    title: "Organizations",
  },
];

export default function WhatsNextSection() {
  return (
    <section className="w-full py-[10%] md:py-[5%]">
      <div className="mx-auto px-4 text-center">
        
        {/* Small Heading */}
        <p className="text-[#1B1C17] font-bold uppercase text-base">
          WHAT’S NEXT
        </p>

        {/* Main Heading */}
        <h2 className="mt-sm text-[#0668E1] font-extrabold text-h2">
          Connect EC is the first step.
        </h2>

        {/* Description */}
        <p className="mt-md font-medium text-base">
          We are building systems that sustain alignment across:
        </p>

        {/* Items */}
        <div className="mt-sm flex justify-center items-center">
          {items.map((item, index) => {

            return (
              <div
                key={index}
                className="flex items-center"
              >
                
                {/* Item */}
                <div className="px-lg flex flex-col items-center">
                    <img src={item.icon} alt={item.title} className="size-iconsize-lg scale-125 md:scale-100 "/>

                  <p className="mt-xs text-[#1B1C17] font-medium text-base mt-xs">
                    {item.title}
                  </p>
                </div>

                {/* Divider */}
                {index !== items.length - 1 && (
                  <div className="hidden md:block w-px h-10 bg-[#D3E6FF]" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}