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
             md:h-[202px]
            border border-[#D1E4FE]
            rounded-md
            bg-white
            p-sm
            flex flex-col items-center justify-center
            gap-sm
            shadow-[0px_4px_20px_rgba(6,104,225,0.04)]
            translate-y-[20px] md:translate-y-[20px]
            -mr-2 md:-mr-4"
          >
            {/* Icon */}
<div className="bg-[#F9F9F9] p-1 md:p-xs rounded-full">

            <img
              src="/solutions/icons/candidate-icon.svg"
              alt="Candidate"
              className="size-w-[clamp(30px,_calc(90_/_var(--width)_*_100vw),160px)]  object-contain"
            />
            </div>

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
                mt-1 px-sm"
              >
                Seek the right opportunity.
              </p>
            </div>
          </div>

          {/* Recruiter */}
          <div
            className="w-[clamp(110px,_calc(190_/_var(--width)_*_100vw),480px)]  md:h-[150px]
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
<div className="bg-[#F9F9F9] p-1 md:p-xs rounded-full">
            <img
              src="/solutions/icons/recruiter-icon.svg"
              alt="Recruiter"
              className="size-w-[clamp(30px,_calc(90_/_var(--width)_*_100vw),160px)]  object-contain"
            /></div>

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
                mt-1 px-sm"
              >
                Seek successful closure.
              </p>
            </div>
          </div>

          {/* Employer */}
          <div
            className="w-[clamp(110px,_calc(190_/_var(--width)_*_100vw),480px)]  md:h-[150px]
             md:h-[202px]
            border border-[#D1E4FE]
            rounded-md
            bg-white
            p-sm
            flex flex-col items-center justify-center
            gap-sm
            shadow-[0px_4px_20px_rgba(6,104,225,0.04)]
            translate-y-[20px] md:translate-y-[20px]
            -ml-2 md:-ml-4"
          >
            {/* Icon */}
<div className="bg-[#F9F9F9] p-1 md:p-xs rounded-full">

            <img
              src="/solutions/icons/employer-icon.svg"
              alt="Employer"
              className="size-w-[clamp(30px,_calc(90_/_var(--width)_*_100vw),160px)]  object-contain"
            />
            </div>

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
                text-xl mt-1 px-md"
              >
                Seek the right talent.
              </p>
            </div>
          </div>
        </div>

       

          {/* Text */}
          <p
            className="font-medium text-[#1B1C17]
            text-base
            text-center my-xl py-xl"
          >
            Connect EC creates visibility across all three perspectives.
          </p>

       

        
      </div>
    </section>
  );
}
