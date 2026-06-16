import AlignmentCards from "./AlignmentCard";

export default function HeroSection() {
  return (
    <section className="w-full bg-white">
      <div className="md:max-w-[80%] mt-[8%]">
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
        <div className="flex flex-col md:flex-row gap-sm justify-between w-full">
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
              Creating clarity in <span className="font-bold">decisions,</span>
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
              consistency in <span className="font-bold">execution,</span>
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
              and predictability in <span className="font-bold">outcomes.</span>
            </p>
          </div>
        </div>

        {/* Buttons */}
        <AlignmentCards />
      </div>
    </section>
  );
}
