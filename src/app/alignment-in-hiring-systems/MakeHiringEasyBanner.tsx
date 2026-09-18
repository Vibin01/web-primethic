"use client"

import { TriangleAlert } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { PiArrowsLeftRightBold } from "react-icons/pi";
import { VscArrowBoth } from "react-icons/vsc";
import { toast } from "sonner";

const acrossRoles = [
  {
    role: "Candidates",
    img: "/home/icons/candidate-icon.svg",
    url: "https://candidate.connectec.app/register",
  },
  {
    role: "Recruiters",
    img: "/home/icons/recruiter-icon.svg",
    url: "https://recruiter.connectec.app/register",
  },
  {
    role: "Employers",
    img: "/home/icons/employer-icon.svg",
    url: "https://employer.connectec.app/register",
  },
];

const mobileAcrossRoles = [
  {
    role: "Candidates",
    img: "/home/icons/candidate-icon.svg",
    url: "https://play.google.com/store/apps/details?id=com.primethic.connectec",
    type: "link",
  },
  {
    role: "Recruiters",
    img: "/home/icons/recruiter-icon.svg",
    url: "https://play.google.com/store/apps/details?id=com.primethic.connectec",
    type: "link",
  },
  {
    role: "Employers",
    img: "/home/icons/employer-icon.svg",
    url:"",
    type: "toast",
  },
];

  

export default function MakeHiringEasyBanner() {

      const showDesktopWarning = () => {
  toast.custom((t) => (
     <div className="relative flex  items-start gap-xs rounded-lg border-2 border-[#63a8fd6b] bg-white p-sm shadow-lg">
         <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#a3c5ee89]">
           <TriangleAlert className="size-iconsize-sm text-[#0668E1]" />
         </div>
   
         <div className="flex-1">
           <p className="text-base font-semibold text-[#0668E1]">
             Desktop browser recommended
           </p>
   
           <p className="mt-1 text-[13px] font-medium leading-5 text-[#666]">
             For the best experience, please use a desktop browser to access the
             dashboard.
           </p>
         </div>
   
         <button
           onClick={() => toast.dismiss(t)}
           className="text-sm font-medium text-[#666] hover:text-[#222]"
         >
           ✕
         </button>
       </div>
  ));
};

  return (
    <section>
      <div className="">
        <div
          style={{
            background:
              "linear-gradient(90deg, #D9EDFF33 0%, #EAF5FF33 50%, #DAEDFF33 100%)",
          }}
          className="w-full rounded-xl border border-[#0668E1] p-md md:p-xl flex flex-col md:flex-row items-center justify-between gap-xl"
        >
          {/* Left Content */}
          <div className=" w-full">
            {/* Heading */}
            <h2 className="text-[#1B1C17] font-extrabold text-h2">
              Hiring Alignment made EASY
            </h2>

            {/* Description */}
            <div className="mt-1 mb-xl pb-sm">
              <p className=" font-bold text-base ">
                Stop guessing. Start seeing.
              </p>
            </div>

            <p className="mt-xl font-bold text-base text-[#0668E1]">
              Unlock Connect EC for Free
            </p>

              {/* Mobile */}
<div className="flex md:hidden items-center gap-1 sm:gap-sm mt-sm">
  {mobileAcrossRoles.map((role, index) => (
    <div
      key={role.role}
      className="flex items-center gap-1 sm:gap-sm"
    >
      {role.type === "toast" ? (
        <button
          type="button"
          onClick={showDesktopWarning}
          className={`
            cursor-pointer
            group
            flex
            flex-col
            items-start
            gap-xs
            rounded-md
            border
            border-[#DEEDFF]
            p-sm
            shadow-[0px_2px_10px_2px_#0668E10D]
            transition-all
            duration-300
            hover:border-[#0668E1]
            hover:text-[#0668E1]
          `}
        >
          <div className="flex w-full items-center justify-between">
            <img
              src={role.img}
              alt={role.role}
              className="size-iconsize-sm scale-110"
            />

            <BsArrowUpRightCircleFill
              className="
                size-iconsize-sm
                scale-85
                opacity-0
                text-[#0668E1]
                group-hover:opacity-100
              "
            />
          </div>

          <span className="text-xl font-medium">{role.role}</span>
        </button>
      ) : (
        <Link
          href={role.url}
          target="_blank"
          className={`
            cursor-pointer
            group
            flex
            flex-col
            items-start
            gap-xs
            rounded-md
            border
            border-[#DEEDFF]
            p-sm
            shadow-[0px_2px_10px_2px_#0668E10D]
            transition-all
            duration-300
            hover:border-[#0668E1]
            hover:text-[#0668E1]
          `}
        >
          <div className="flex w-full items-center justify-between">
            <img
              src={role.img}
              alt={role.role}
              className="size-iconsize-sm scale-110"
            />

            <BsArrowUpRightCircleFill
              className="
                size-iconsize-sm
                scale-85
                opacity-0
                text-[#0668E1]
                group-hover:opacity-100
              "
            />
          </div>

          <span className="text-xl font-medium">{role.role}</span>
        </Link>
      )}

      {index < mobileAcrossRoles.length - 1 && (
        <PiArrowsLeftRightBold
          className="size-iconsize-sm scale-105 font-medium text-[#B2D0F6]"
        />
      )}
    </div>
  ))}
</div>

{/* Desktop */}
<div className="hidden md:flex items-center gap-1 sm:gap-sm mt-sm">
  {acrossRoles.map((role, index) => (
    <div
      key={role.role}
      className="flex items-center gap-1 sm:gap-sm"
    >
      <Link
        href={role.url}
        target="_blank"
        className={`cursor-pointer
          group
          flex
          flex-col
          items-start
          gap-xs
          rounded-md
          border
          border-[#DEEDFF]
          p-sm
          shadow-[0px_2px_10px_2px_#0668E10D]
          transition-all
          duration-300
          hover:border-[#0668E1]
          hover:text-[#0668E1]
        `}
      >
        <div className="flex w-full items-center justify-between">
          <img
            src={role.img}
            alt={role.role}
            className="size-iconsize-sm scale-110"
          />

          <BsArrowUpRightCircleFill
            className="
              size-iconsize-sm
              scale-85
              opacity-0
              text-[#0668E1]
              group-hover:opacity-100
            "
          />
        </div>

        <span className="text-xl font-medium">{role.role}</span>
      </Link>

      {index < acrossRoles.length - 1 && (
        <PiArrowsLeftRightBold
          className="size-iconsize-sm scale-105 font-medium text-[#B2D0F6]"
        />
      )}
    </div>
  ))}
</div>
          </div>

          {/* Right Cube Image */}
          <div className="flex justify-center md:justify-end md:w-[85%] ">
            <Image
              src="/solutions/make-hiring-easy.svg"
              alt="make-hiring-easy"
              width={880}
              height={180}
              className="w-auto h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
