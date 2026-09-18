"use client";

import { TriangleAlert } from "lucide-react";
import Link from "next/link";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { IoPersonSharp } from "react-icons/io5";
import { MdGroups } from "react-icons/md";
import { PiArrowsLeftRightBold } from "react-icons/pi";
import { VscArrowBoth } from "react-icons/vsc";
import { toast } from "sonner";

const withinRoles = [
  {
    role: "Candidates",
    img: "/home/icons/candidate-icon.svg",
    url: "https://connectec.app/resources/alignment-test/register?mode=single&phase=uncertainty",
  },
  {
    role: "Recruiters",
    img: "/home/icons/recruiter-icon.svg",
    url: "https://connectec.app/resources/alignment-test/register?mode=single&phase=uncertainty",
  },
  {
    role: "Employers",
    img: "/home/icons/employer-icon.svg",
    url: "https://connectec.app/resources/alignment-test/register?mode=single&phase=uncertainty",
  },
];
const acrossRoles = [
  {
    role: "Candidates",
    img: "/home/icons/candidate-icon.svg",
    url: "https://play.google.com/store/apps/details?id=com.primethic.connectec",
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

export default function AlignmentCards() {
  return (
    <div className="grid  lg:grid-cols-[1fr_auto_1fr] gap-xl pr-xl sm:pr-0 ">
      {/* ALIGNMENT WITHIN */}
      <div>
        <div className="mb-md flex items-center">
          <h3 className="flex items-center text-base font-bold uppercase gap-sm">
            <IoPersonSharp
              className="size-iconsize-sm p-[0.2%]
                  "
            />
            Understand your Alignment Within
          </h3>
        </div>

        <div className="flex items-center gap-xs md:gap-sm">
          {withinRoles.map((role, index) => (
            <div key={role.role} className="flex items-center gap-xs md:gap-sm">
              <Link
                href={role.url}
                target="_blank"
                className="
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
                "
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

              {index < withinRoles.length - 1 && (
                  <span className="inline-block bg-[#DEEDFF] self-stretch mx-sm  w-[2px] " />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className=" bg-[#DEEDFF] sm:w-[50%] md:w-[2px] h-[2px] md:h-full " />
      {/* ALIGNMENT ACROSS */}
      <div  className="">
        <div className="mb-md flex items-center">
          <h3 className=" pr-md  flex items-center text-base font-bold uppercase gap-sm">
            <MdGroups
              className="
                  size-iconsize-sm 
                  
                  "
            />
            Experience Alignment Across Hiring
          </h3>
        </div>

        <div className="flex items-center gap-xs md:gap-sm">
         {/* Mobile */}
<div className="flex md:hidden items-center gap-xs md:gap-sm">
  {mobileAcrossRoles.map((role, index) => (
    <div key={role.role} className="flex items-center gap-xs md:gap-sm">
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
        <PiArrowsLeftRightBold className="size-iconsize-sm scale-105 font-medium text-[#B2D0F6]" />
      )}
    </div>
  ))}
</div>

{/* Desktop */}
<div className="hidden md:flex items-center gap-xs md:gap-sm">
  {acrossRoles.map((role, index) => (
    <div key={role.role} className="flex items-center gap-xs md:gap-sm">
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
        <PiArrowsLeftRightBold className="size-iconsize-sm scale-105 font-medium text-[#B2D0F6]" />
      )}
    </div>
  ))}
</div>
        </div>
      </div>
    </div>
  );
}
