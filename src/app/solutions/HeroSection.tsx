import AlignmentCards from "./AlignmentCard";

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
      </div>
    </section>
  );
}
