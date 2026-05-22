export default function HeroSection() {
  return (
    <section className="w-full bg-white">
      <div
        className="md:max-w-[60%] mt-[8%]"
      >
        {/* Solutions */}
        <p
          className="font-bold
          text-base
          text-[#1B1C17]
          uppercase mb-sm"
        >
          SOLUTIONS
        </p>

        {/* Heading */}
        <h1
          className="font-extrabold
          text-[#0668E1]
          text-h2 mb-md"
        >
          Systems where alignment holds
          <br />
          from decision to outcome
        </h1>

        {/* Description */}
        <p
          className="font-medium
          text-xl
          
          text-[#1B1C17]
          md:w-[70%]
          mb-xl"
        >
          We build solutions that ensure clarity in decisions, consistency in
          execution, and predictability in outcomes.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Primary Button */}
          <button
            className="
            h-[56px]
            rounded-[12px]
            border-2
            border-[#0072FF]
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

          {/* Secondary Button */}
          <button
            className="
            h-[56px]
            rounded-[12px]
            border-2
            border-[#0668E1]
            bg-white
            px-6
            flex items-center justify-center gap-4"
          >
            <span
              className="font-bold
              text-[16px]
              leading-[24px]
              text-[#0668E1]"
            >
              Unlock Alignment for Free
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
                stroke="#0668E1"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
