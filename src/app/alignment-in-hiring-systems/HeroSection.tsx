import AlignmentCards from "./AlignmentCard";

export default function HeroSection() {
  return (
    <section className="w-full bg-white mt-[15%] pb-[5%]">
      <div className="md:max-w-[80%] ">
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
          across the hiring journey.
        </h1>

        {/* Description */}
        <div className="flex flex-col md:flex-row gap-xl justify-between w-full mb-xl">
          <div className="flex gap-sm">
            <img
              src="/solutions/icons/tick-icon.svg"
              alt="tickicon"
              className="size-iconsize-sm"
            />

            <p
              className="font-medium
          text-base
          text-[#1B1C17]
          
          text-nowrap
          
          mb-xs"
            >
              <span className="font-bold">Clarity</span> Make informed
              decisions.
            </p>
          </div>
          <div className="flex gap-sm">
            <img
              src="/solutions/icons/tick-icon.svg"
              alt="tickicon"
              className="size-iconsize-sm"
            />
            <p
              className="font-medium
          text-base
          text-[#1B1C17]
        
          text-nowrap

          mb-xs"
            >
              <span className="font-bold"> Continuity </span> Stay aligned.
            </p>
          </div>
          <div className="flex gap-sm">
            <img
              src="/solutions/icons/tick-icon.svg"
              alt="tickicon"
              className="size-iconsize-sm"
            />
            <p
              className="font-medium
          text-base
          text-[#1B1C17]
          
          mb-xl
          text-nowrap
          "
            >
              <span className="font-bold"> Predictability</span> Achieve
              reliable outcomes.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <AlignmentCards />
      </div>
    </section>
  );
}
