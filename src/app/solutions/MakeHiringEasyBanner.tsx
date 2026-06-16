import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { VscArrowBoth } from "react-icons/vsc";

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

export default function MakeHiringEasyBanner() {
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
<<<<<<< HEAD
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

            <div className="flex items-center gap-1 sm:gap-sm mt-sm">
=======
              Make Hiring EASY.
            </h2>

            {/* Description */}
            <div className="mt-sm ">
              <p className=" font-bold text-base mb-1">
                Stop guessing. Start seeing.
              </p>

              <p className="font-medium text-base">
                Connect EC — Make hiring EASY.
              </p>
            </div>

            <p className="mt-md font-bold text-base text-[#0668E1]">
              Unlock Connect EC for Free
            </p>

            <div className="flex items-center gap-1 sm:gap-sm mt-md">
>>>>>>> a058e2410b6512ea713e52c1b3c0f84543a4dcc5
              {acrossRoles.map((role, index) => (
                <div
                  key={role.role}
                  className="flex items-center gap-1 sm:gap-sm"
                >
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
                    <VscArrowBoth className="size-3 sm:size-iconsize-sm font-medium" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Cube Image */}
<<<<<<< HEAD
          <div className="flex justify-center md:justify-end md:w-[85%]">
=======
          <div className="flex justify-center md:justify-end w-full">
>>>>>>> a058e2410b6512ea713e52c1b3c0f84543a4dcc5
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
