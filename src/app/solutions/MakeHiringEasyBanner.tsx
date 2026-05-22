import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function MakeHiringEasyBanner() {
  return (
    <section
 
>
    <div className="">
        
        <div
        
         style={{
    background:
      "linear-gradient(90deg, #D9EDFF33 0%, #EAF5FF33 50%, #DAEDFF33 100%)",
  }}
        className="w-full rounded-xl border border-[#0668E1] p-xl flex flex-col-reverse md:flex-row items-center justify-between gap-xl">
          
          {/* Left Content */}
          <div className=" w-full">
            
            {/* Heading */}
            <h2 className="text-[#1B1C17] font-extrabold text-h2">
              Make Hiring EASY.
            </h2>

            {/* Description */}
            <div className="mt-md space-y-xs">
              <p className=" font-medium text-base">
                Stop guessing. Start seeing.
              </p>

              <p className="font-medium text-base">
                Connect EC — Make hiring EASY.
              </p>
            </div>

            {/* Button */}
  <button
            className="mt-md w-full sm:w-[288px]
            h-[56px]
            rounded-sm
            border-2
            border-[#0668E1]
            bg-[#0668E1]
            px-6
            flex items-center justify-center gap-4"
          >
            <span
              className="font-bold
              text-[16px]
              leading-[24px]
              text-white"
            >
              Unlock Connect EC for Free
            </span>

            {/* Arrow */}
            <svg
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 6H14M14 6L9 1M14 6L9 11"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          </div>

          {/* Right Cube Image */}
          <div className="flex justify-center md:justify-end md:w-[20%]">
            <Image
              src="/solutions/icons/ec-connect-icon.svg"
              alt="Connect EC Cube"
              width={180}
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