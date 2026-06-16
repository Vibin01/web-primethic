import AlignmentCards from "./AlignmentCard";

export default function HeroSection() {
  return (
    <section className="w-full bg-white">
<<<<<<< HEAD
      <div className="md:max-w-[80%] mt-[8%]">
=======
      <div
        className="md:max-w-[60%] mt-[8%]"
      >
>>>>>>> a058e2410b6512ea713e52c1b3c0f84543a4dcc5
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
<<<<<<< HEAD
        <div className="flex justify-between w-full">
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
=======
        <p
          className="font-medium
          text-base
          text-[#1B1C17]
          md:w-[70%]
          mb-xs"
        >
          Creating clarity in <span className="font-bold">decisions,</span>
        </p>
        <p
          className="font-medium
          text-base
          text-[#1B1C17]
          md:w-[70%]
          mb-xs"
        >
          consistency in <span className="font-bold">execution,</span>
        </p><p
          className="font-medium
          text-base
          text-[#1B1C17]
          md:w-[70%]
          mb-xl"
        >
          and predictability in <span className="font-bold">outcomes.</span>
        </p>

        {/* Buttons */}
        <AlignmentCards/>
>>>>>>> a058e2410b6512ea713e52c1b3c0f84543a4dcc5
      </div>
    </section>
  );
}
