"use client";

import { useEffect } from "react";

type AlignmentCardType = {
  title: string;
  badge: string;
  description: string;
  align: "left" | "right";
};

const cards: AlignmentCardType[] = [
  {
    title: "Internal Alignment",
    badge: "(PRIME)",
    align: "left",
    description:
      "A smooth flow from understanding to action—bringing clarity, consistency, and reliable outcomes.",
  },
  {
    title: "External Validity",
    badge: "(ETHIC)",
    align: "right",
    description:
      "Ensuring what works within one system also holds true when it interacts with others.",
  },
];

function AlignmentMobile({ cards }: { cards: AlignmentCardType[] }) {
  return (
    <div className="block md:hidden relative w-full max-w-[400px] mx-auto">
      {/* TOP CARD */}
      <div className="relative">
        <svg viewBox="0 0 400 220" className="w-full h-auto">
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

        <div className="absolute inset-0 p-[10%] flex flex-col justify-center text-left">
          <h2 className="font-bold text-h5">
            {cards[0].title}{" "}
            <span className="text-[#0A67E8]">{cards[0].badge}</span>
          </h2>

          <p className="my-sm text-base">
            {cards[0].description}
          </p>
        </div>
      </div>

      {/* CENTER ICON */}
      <div className="relative z-10 flex justify-center -mt-8 -mb-8">
        <div className="w-[72px] h-[72px] rounded-2xl">
          <img src="/home/icons/primethic-icon.svg" alt="logo" className="w-[70px] h-[70px] scale-125" />
        </div>
      </div>

      {/* BOTTOM CARD */}
      <div className="relative">
        <svg viewBox="0 0 400 220" className="w-full h-auto rotate-180">
          <defs>
            <linearGradient id="mobileBorder2" x1="1" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFFFFF"  />
              <stop offset="100%" stopColor="#A5D4FF"  />
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
          <div className="rotate-180">
            <h2 className="font-bold text-h5">
              {cards[1].title}{" "}
              <span className="text-[#0A67E8]">{cards[1].badge}</span>
            </h2>

            <p className="py-sm text-base">
              {cards[1].description}
            </p>
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
        <h2
          className={`font-bold text-base ${isLeft ? "text-left" : "text-right"}`}
        >
          {item.title} <span className="text-[#0A67E8]">{item.badge}</span>
        </h2>

        <p
          className={`mt-3 text-xl md:w-[80%] ${isLeft ? "text-left " : "text-right"}`}
        >
          {item.description}
        </p>
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
      <div className=" ">
        <h2 className="font-extrabold text-h2 text-[#1B1C17]">Foundation</h2>

        <h3 className="mt-[5%] m-md text-center text-base font-bold text-[#0668E1]">
          Our approach is built on two essentials:
        </h3>

        {/* CARDS */}
        <div className="relative flex flex-col md:flex-row items-center justify-between">
          {cards.map((item, index) => (
            <AlignmentCard key={index} item={item} />
          ))}
          <img src={"/home/icons/primethic-icon.svg"} alt="primethic" className="hidden md:block size-[clamp(80px,_calc(150_/_var(--width)_*_100vw),300px)] absolute left-1/2 -translate-x-1/2 object-cover" />
        </div>

        <AlignmentMobile cards={cards}/>

        {/* BOTTOM TEXT */}
        <div className="text-center mt-sm">
          <p className="text-xl font-medium mb-sm">
            Together, they make one thing possible:
          </p>
          <p className="text-xl font-medium">
            alignment that holds — within and across.
          </p>
        </div>

        {/* VISION & MISSION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-md mt-xl">
          {/* Vision */}
          <div className="rounded-md border border-[#B4D5FF] bg-white shadow-[0px_4px_40px_5px_#0668E11A] p-md">
              <img src="/home/icons/vision-icon.svg" alt="vision icon" className="size-iconsize-xl" />

            <h3 className="mt-sm font-extrabold text-h2 text-[#1B1C17]">
              Vision
            </h3>

            <p className="mt-sm text-xl text-[#1B1C17]">
              To unify systems and their environment into seamless coherence.
            </p>
          </div>

          {/* Mission */}
           <div id="mission" className="rounded-md border border-[#B4D5FF] bg-white shadow-[0px_4px_40px_5px_#0668E11A] p-md">
              <img src="/home/icons/Mission-icon.svg" alt="vision icon" className="size-iconsize-xl" />

            <h3 className="mt-sm font-extrabold text-h2 text-[#1B1C17]">
              Mission
            </h3>

            <p className="mt-sm text-xl text-[#1B1C17]">
              To bridge the gap between aspiration and achievement
              <br/>through alignment that sustains under real conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
