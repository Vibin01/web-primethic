"use client"

import { useEffect } from "react";

type AlignmentCardType = {
  title: string;
  badge: string;
  description: string[];
  align: "left" | "right";
};

const cards: AlignmentCardType[] = [
  {
    title: "Alignment Within",
    badge: "",
    align: "left",
    description: [
      "Creating coherence between expectations, decisions, and actions.",
      "So what is intended remains aligned throughout.",
    ],
  },
  {
    title: "Alignment Across",
    badge: "",
    align: "right",
    description: [
      "Ensuring alignment remains consistent across systems and contexts.",
      "So what holds within continues to hold across.",
    ],
  },
];

const items = [
  {
    icon: "/home/icons/within-individuals-icon.svg",
    title: "Within individuals.",
  },
  {
    icon: "/home/icons/between-teams-icon.svg",
    title: "Between teams.",
  },
  {
    icon: "/home/icons/across-system-icon.svg",
    title: "Across systems.",
  },
];

function AlignmentMobile({ cards }: { cards: AlignmentCardType[] }) {
  return (
    <div className="block md:hidden relative w-full max-w-[400px] mx-auto">
      {/* TOP CARD */}
      <div className="relative mt-md">
        <svg viewBox="0 0 400 220" className="w-full ">
          <defs>
            <linearGradient id="mobileBorder1" x1="1" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#A5D4FF" />
            </linearGradient>

            <linearGradient id="mobileBg1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#EEF6FF" />
            </linearGradient>
          </defs>

          <path
            d="
              M20 20
              H360
              Q380 20 380 40
              V150
              Q380 170 360 175
              L220 205
              Q200 210 180 205
              L40 175
              Q20 170 20 150
              V40
              Q20 20 40 20
              Z
            "
            fill="url(#mobileBg1)"
            stroke="url(#mobileBorder1)"
            strokeWidth="2"
          />
        </svg>

        <div className="absolute inset-0 mb-xl p-[10%] flex flex-col justify-center text-left">
          <h3 className="font-bold text-h5 mb-xs">
            {cards[0].title}{" "}
            <span className="text-[#0A67E8]">{cards[0].badge}</span>
          </h3>
          {cards[0].description.map((text) => (
            <p className="my-1 text-xl font-medium">{text}</p>
          ))}
        </div>
      </div>

      {/* CENTER ICON */}
      <div className="relative z-10 flex justify-center -mt-8 -mb-8">
        <div className="w-[72px] h-[72px] rounded-2xl">
          <img
            src="/home/icons/primethic-icon.svg"
            alt="logo"
            className="w-[70px] h-[70px] scale-125"
          />
        </div>
      </div>

      {/* BOTTOM CARD */}
      <div className="relative">
        <svg viewBox="0 0 400 220" className="w-full h-auto rotate-180">
          <defs>
            <linearGradient id="mobileBorder2" x1="1" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#A5D4FF" />
            </linearGradient>

            <linearGradient id="mobileBg2" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#EEF6FF" />
            </linearGradient>
          </defs>

          <path
            d="
              M20 20
              H360
              Q380 20 380 40
              V150
              Q380 170 360 175
              L220 205
              Q200 210 180 205
              L40 175
              Q20 170 20 150
              V40
              Q20 20 40 20
              Z
            "
            fill="url(#mobileBg2)"
            stroke="url(#mobileBorder2)"
            strokeWidth="2"
          />
        </svg>

        <div className="absolute inset-0 p-[10%] mt-xl flex flex-col justify-center text-right rotate-180">
          <div className="rotate-180 pt-xl">
            <h3 className="font-bold text-h5 pb-xs">
              {cards[1].title}{" "}
              <span className="text-[#0A67E8]">{cards[1].badge}</span>
            </h3>

            {cards[0].description.map((text) => (
              <p className="my-1 text-xl font-medium">{text}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const CardShape = ({ isLeft }: { isLeft: boolean }) => {
  return (
    <svg
      viewBox="0 0 500 220"
      className={`w-full h-auto ${!isLeft ? "scale-x-[-1]" : ""}`}
    >
      <defs>
        <linearGradient id="borderGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#A5D4FF" />
        </linearGradient>

        <linearGradient id="bgGrad" x1="" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E9F4FF" />
        </linearGradient>
      </defs>

      {/* BASE LEFT SHAPE ONLY */}
      <path
        d="
          M20 20
          H410
          Q430 20 440 40
          L480 110
          L440 180
          Q430 200 410 200
          H20
          Q10 200 10 190
          V30
          Q10 20 20 20
          Z
        "
        fill="url(#bgGrad)"
        stroke="url(#borderGrad)"
        strokeWidth="2"
      />
    </svg>
  );
};

function AlignmentCard({ item }: { item: AlignmentCardType }) {
  const isLeft = item.align === "left";

  return (
    <div className="hidden md:block  md:w-[48%] relative">
      <CardShape isLeft={isLeft} />

      {/* TEXT */}
      <div
        className={`absolute inset-0 p-md flex flex-col justify-center ${isLeft ? "items-start" : "items-end"}`}
      >
        <h3
          className={`font-bold text-base ${isLeft ? "text-left" : "text-right"}`}
        >
          {item.title} <span className="text-[#0A67E8]">{item.badge}</span>
        </h3>
        {item.description.map((text) => (
          <p
            className={`mt-3 text-xl font-medium md:w-[80%] ${isLeft ? "text-left " : "text-right"}`}
          >
            {text}
          </p>
        ))}
      </div>
    </div>
  );
}
export default function FoundationSection() {
  useEffect(() => {
    const shouldScroll = sessionStorage.getItem("scrollToMission");
    if (shouldScroll === "true") {
      sessionStorage.removeItem("scrollToMission");
      const teamSection = document.getElementById("mission");
      teamSection?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <section className="w-full">
      <h2 className="font-extrabold text-h2 text-[#1B1C17] text-center mb-md">
        Foundation
      </h2>
      <div className=" md:p-md md:bg-[#FFFFFF] md:rounded-xl md:shadow-[0px_4px_40px_5px_#0668E11A]">
        <h3 className="mb-md text-h5 text-center text-base font-bold text-[#0668E1]">
          Our approach is built on two essentials:
        </h3>

        {/* CARDS */}
        <div className="relative flex flex-col md:flex-row items-center justify-between">
          {cards.map((item, index) => (
            <AlignmentCard key={index} item={item} />
          ))}
          <img
            src={"/home/icons/primethic-icon.svg"}
            alt="primethic"
            className="hidden md:block size-[clamp(80px,_calc(150_/_var(--width)_*_100vw),300px)] absolute left-1/2 -translate-x-1/2 object-cover"
          />
        </div>

        <AlignmentMobile cards={cards} />
      </div>
      {/* VISION & MISSION */}
      <div id="vision" className="pt-xl grid grid-cols-1 md:grid-cols-2 gap-md mt-xl">
        {/* Vision */}
        <div className="rounded-md border border-[#B4D5FF] bg-white shadow-[0px_4px_40px_5px_#0668E11A] p-sm">
          <img
            src="/home/icons/vision-icon.svg"
            alt="vision icon"
            className="size-iconsize-xl"
          />

          <h2 className="mt-sm font-extrabold text-h2 text-[#1B1C17]">
            Vision
          </h2>

          <p className="mt-sm text-base font-medium text-[#1B1C17]">
            To unify individuals, teams, and systems through continuity,
            coherence, and alignment.
          </p>
        </div>

        {/* Mission */}
        <div
          id="mission"
          className="rounded-md border border-[#B4D5FF] bg-white shadow-[0px_4px_40px_5px_#0668E11A] p-sm"
        >
          <img
            src="/home/icons/mission-icon.svg"
            alt="vision icon"
            className="size-iconsize-xl"
          />

          <h2 className="mt-sm font-extrabold text-h2 text-[#1B1C17]">
            Mission
          </h2>

          <p className="mt-sm text-base font-medium text-[#1B1C17]">
            To bridge the gap between aspiration and achievement through
            alignment that sustains under real-world conditions.
          </p>
        </div>
      </div>
    </section>
  );
}
