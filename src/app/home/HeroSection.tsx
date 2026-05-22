export default function HeroSection() {
  return (
    <section className=" mt-[15%]">
      <div className="w-full ">
        {/* Small Heading */}
        <p className="font-bold text-base  text-[#1B1C17] mb-sm">
          Alignment Intelligence
        </p>

        {/* Main Heading */}
        <h1 className="font-extrabold text-h2  text-[#0668E1] max-w-[850px] mb-xl">
          We build systems where alignment holds under real-world conditions
        </h1>

        {/* Framework Section */}
        <div className="mb-md">
          <h2 className="font-bold text-base  text-[#1B1C17] mb-sm">
            The Framework
          </h2>

          <div className="flex flex-col md:flex-row flex-wrap md:items-center gap-xl text-[#1B1C17]">
            {/* Item 1 */}
            <div className="flex items-center gap-xs">
              <img
                src="/home/icons/within-individuals-icon.svg"
                alt="Within individuals."
              />

              <p className="font-medium text-base ">Within individuals.</p>
            </div>

            {/* Item 2 */}
            <div className="flex items-center gap-xs">
              <img
                src="/home/icons/between-teams-icon.svg"
                alt="Within individuals."
              />

              <p className="font-medium text-base ">Between teams.</p>
            </div>

            {/* Item 3 */}
            <div className="flex items-center gap-xs">
              <img
                src="/home/icons/across-system-icon.svg"
                alt="Within individuals."
              />

              <p className="font-medium text-base ">Across systems.</p>
            </div>
          </div>
        </div>

        {/* Impact Section */}
        <div>
          <h2 className="font-bold text-base  text-[#1B1C17] mb-5">
            The Impact
          </h2>

          <div className="flex flex-col md:flex-row gap-md">
            {/* Card 1 */}
            <div className="w-[65%] md:w-[22%] p-md rounded-md border border-[#D3E6FF] bg-white shadow-[0px_0px_40px_5px_rgba(6,104,225,0.10)] flex items-center gap-xs">
                         <img src="/home/icons/seamless-experiences-icon.svg" alt="Within individuals." />


              <p className="font-medium text-xl text-[#1B1C17]">
                Seamless experiences.
              </p>
            </div>

            {/* Card 2 */}
            <div className="w-[65%] md:w-[22%] p-md rounded-md border border-[#D3E6FF] bg-white shadow-[0px_0px_40px_5px_rgba(6,104,225,0.10)] flex items-center gap-xs">
                                       <img src="/home/icons/clear-decisions-icon.svg" alt="Within individuals." />


              <p className="font-medium text-xl text-[#1B1C17]">
                Clear decisions.
              </p>
            </div>

            {/* Card 3 */}
            <div className="w-[65%] md:w-[22%] p-md rounded-md border border-[#D3E6FF] bg-white shadow-[0px_0px_40px_5px_rgba(6,104,225,0.10)] flex items-center gap-xs">
                      <img src="/home/icons/reliable-outcomes-icon.svg" alt="Within individuals." />


              <p className="font-medium text-xltext-[#1B1C17]">
                Reliable outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
