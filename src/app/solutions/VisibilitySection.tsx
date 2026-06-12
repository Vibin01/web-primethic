export default function VisibilitySection() {
  return (
    <section className="">
      <div className="">
        {/* Heading */}
        <h1
          className="text-[#1B1C17]
          text-center font-extrabold
          text-h2"
        >
          One Platform. Complete Visibility.
        </h1>

        {/* Sub Heading */}
        <p
          className="text-center font-bold text-[#1B1C17]
          text-base
          mt-md"
        >
          Connect EC brings together:
        </p>

        {/* Cards Section */}
        <div className="mt-sm flex flex-row items-start justify-center">
          {/* Candidate */}
          <div
            className="w-[clamp(110px,_calc(190_/_var(--width)_*_100vw),480px)] 
            h-[150px] md:h-[202px]
            border border-[#D1E4FE]
            rounded-md
            bg-white
            p-sm
            flex flex-col items-center justify-center
            gap-sm
            shadow-[0px_4px_20px_rgba(6,104,225,0.04)]
            translate-y-[10px] md:translate-y-[20px]
            -mr-2 md:-mr-4"
          >
            {/* Icon */}

            <img
              src="/solutions/icons/candidate-icon.svg"
              alt="Candidate"
              className="size-w-[clamp(60px,_calc(90_/_var(--width)_*_100vw),160px)]  object-contain"
            />

            {/* Text */}
            <div className="text-center">
              <h3
                className="font-bold text-[#0668E1]
                text-base"
              >
                Candidate
              </h3>

              <p
                className="font-medium text-[#1B1C17]
                text-xl
                mt-1"
              >
                Defining decisions
              </p>
            </div>
          </div>

          {/* Recruiter */}
          <div
            className="w-[clamp(110px,_calc(190_/_var(--width)_*_100vw),480px)]  h-[150px]
            md:h-[202px]
            border border-[#D1E4FE]
            rounded-md
            bg-white
            p-sm
            flex flex-col items-center justify-center
            gap-sm
            shadow-[0px_4px_20px_rgba(6,104,225,0.04)]
            relative z-10"
          >
            {/* Icon */}

            <img
              src="/solutions/icons/recruiter-icon.svg"
              alt="Recruiter"
              className="size-w-[clamp(60px,_calc(90_/_var(--width)_*_100vw),160px)]  object-contain"
            />

            {/* Text */}
            <div className="text-center">
              <h3
                className="font-bold text-[#0668E1]
                text-base"
              >
                Recruiter
              </h3>

              <p
                className="font-medium text-[#1B1C17]
                text-xl
                mt-1"
              >
                Driving execution
              </p>
            </div>
          </div>

          {/* Employer */}
          <div
            className="w-[clamp(110px,_calc(190_/_var(--width)_*_100vw),480px)]  h-[150px]
             md:h-[202px]
            border border-[#D1E4FE]
            rounded-md
            bg-white
            p-sm
            flex flex-col items-center justify-center
            gap-sm
            shadow-[0px_4px_20px_rgba(6,104,225,0.04)]
            translate-y-[10px] md:translate-y-[20px]
            -ml-2 md:-ml-4"
          >
            {/* Icon */}

            <img
              src="/solutions/icons/employer-icon.svg"
              alt="Employer"
              className="size-w-[clamp(60px,_calc(90_/_var(--width)_*_100vw),160px)]  object-contain"
            />

            {/* Text */}
            <div className="text-center">
              <h3
                className="font-bold text-[#0668E1]
                text-base"
              >
                Employer
              </h3>

              <p
                className="font-medium text-[#1B1C17]
                text-xl mt-1"
              >
                Designing direction
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="mt-12 md:mt-14
          flex items-center justify-center gap-sm"
        >
          {/* Left Line */}
          <div
            className="hidden md:block
            w-[30%]
            border-t border-[#D1E4FE]"
          />

          {/* Text */}
          <p
            className="font-bold text-[#1B1C17]
            text-base
            whitespace-nowrap text-center"
          >
            When everything is visible:
          </p>

          {/* Right Line */}
          <div
            className="hidden md:block
            w-[30%]
            border-t border-[#D1E4FE]"
          />
        </div>

        {/* Bottom Features */}
        <div
          className="mt-xl
          flex flex-col md:flex-row
          justify-center  items-center
          gap-xl "
        >
          <div className="flex flex-col md:flex-row gap-xl">
          {/* Feature 1 */}
          <div className=" flex items-center gap-sm">
            
            <img
              src={"/solutions/icons/decision-icon.svg"}
              alt="outcome "
              className="size-iconsize-xl  scale-[210%]"
            />

            <p
              className="font-medium text-[#1B1C17]
              text-base"
            >
              Decisions become faster
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center gap-sm">
              <img
                src={"/solutions/icons/execution-icon.svg"}
                alt="outcome "
                className="size-iconsize-xl scale-[210%]"
              />
            <p
              className="font-medium text-[#1B1C17]
              text-base"
            >
              Execution becomes more consistent
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center gap-sm">
            <img
              src={"/solutions/icons/outcome-icon.svg"}
              alt="outcome "
              className="size-iconsize-xl  scale-[210%] "
            />

            <p
              className="font-medium text-[#1B1C17]
              text-base"
            >
              Outcomes become more predictable
            </p>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
