import Image from "next/image";
import { Check } from "lucide-react";

const cardData = [
  {
    icon: "/solutions/icons/for-employer-icon.svg",
    title: "For Employers",
    subtitle: "See hiring clearly. Stay on track.",
    points: [
      "See hiring demand and progress clearly",
      "Detect bottlenecks across interviews and offers",
      "Track candidate commitment before joining",
      "Make informed, timely hiring decisions",
    ],
  },
  {
    icon: "/solutions/icons/for-recruiter-icon.svg",
    title: "For Recruiters",
    subtitle: "Execute without fragmentation.",
    points: [
      "Predict no-shows before they disrupt hiring",
      "Manage interviews, schedules, and panels in one place",
      "Capture structured feedback without repeated typing",
      "Stay aligned across every stage—from interview to offer",
    ],
  },
  {
    icon: "/solutions/icons/for-candidate-icon.svg",
    title: "For Candidates",
    subtitle: "Make decisions with clarity.",
    points: [
      "Track interviews, schedules, and offers in one place",
      "Stay informed at every stage",
      "Access feedback across interview and offer stages",
      "Make decisions with clarity—not guesswork",
    ],
  },
];

export default function HiringCardsSection() {
  return (
    <section className="w-full ">
      <div className="">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
          
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-white border border-[#D3E6FF] rounded-md p-md"
            >
                <Image
                    src={card.icon}
                    alt={card.title}
                    width={22}
                    height={22}
                    className="object-contain size-iconsize-md mb-sm"
                  />
              {/* Top */}
              <div className="flex items-start gap-xs">
                

                <div>
                  <h3 className="text-[#0668E1] font-bold text-base">
                    {card.title}
                  </h3>

                  <p className="font-medium text-xl ">
                    {card.subtitle}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-[#D2E5FF] my-sm"></div>

              {/* Points */}
              <div className="space-y-sm">
                {card.points.map((point, pointIndex) => (
                  <div key={pointIndex} className="flex items-start gap-xs">
                    
                  <img src={"/solutions/icons/tick-icon.svg"} alt="tick-icon" className="size-iconsize-sm p-[0.2%] mt-[0.2%] object-contain"/>

                    <p className="font-medium text-xl">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}