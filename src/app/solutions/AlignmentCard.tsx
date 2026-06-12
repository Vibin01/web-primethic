"use client";

import Link from "next/link";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { IoPersonSharp } from "react-icons/io5";
import { MdGroups } from "react-icons/md";
import { VscArrowBoth } from "react-icons/vsc";

const withinRoles = [
  {
    role: "Candidates",
    img: "/home/icons/candidate-icon.svg",
    url: "/resources/alignment-test/register?mode=single&phase=uncertainty",
  },
  {
    role: "Recruiters",
    img: "/home/icons/recruiter-icon.svg",
    url: "/resources/alignment-test/register?mode=single&phase=uncertainty",
  },
  {
    role: "Employers",
    img: "/home/icons/employer-icon.svg",
    url: "/resources/alignment-test/register?mode=single&phase=uncertainty",
  },
];
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

export default function AlignmentCards() {
  return (
    <div className="grid  md:grid-cols-[1fr_auto_1fr] gap-xl ">
      {/* ALIGNMENT WITHIN */}
      <div className="pr-xl">
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
      <div className=" bg-[#DEEDFF] w-full md:w-[2px] h-[2px] md:h-full " />
      {/* ALIGNMENT ACROSS */}
      <div>
        <div className="mb-md flex items-center">
          <h3 className="flex items-center text-base font-bold uppercase gap-sm">
            <MdGroups
              className="
                  size-iconsize-sm 
                  "
            />
            Experience Alignment Across Hiring
          </h3>
        </div>

        <div className="flex items-center gap-xs md:gap-sm">
          {acrossRoles.map((role, index) => (
            <div key={role.role} className="flex items-center gap-xs md:gap-sm">
              <Link
                href={role.url}
                target="_blank"
                className={`${role.role === "Candidates" ? "pointer-events-none" : "cursor-pointer"}
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
                <VscArrowBoth className="size-iconsize-sm font-medium" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
