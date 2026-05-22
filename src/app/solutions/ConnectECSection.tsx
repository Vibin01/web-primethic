export default function ConnectECSection() {
  return (
    <section className="w-full ">
      <div className="">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          
          {/* Left Content */}
          <div className=" w-full md:w-1/2 ">
            
            {/* Small Heading */}
            <p className="text-xl  font-bold uppercase text-[#1B1C17]">
              OUR FIRST SOLUTION
            </p>

            {/* Main Title */}
            <h1 className="text-h2 font-extrabold text-[#0668E1]">
              Connect EC
            </h1>

            {/* Subtitle */}
            <h2 className="text-h4 font-bold text-[#1B1C17] mt-2">
              Hiring Made Easy
            </h2>

            {/* Description */}
            <div className="mt-md space-y-sm">
              <p className="text-base font-medium ">
                Predict no-shows. Get timely feedback.
                <br />
                Achieve hiring goals—all in one place.
              </p>

              <p className="text-base font-medium ">
                A behavioral hiring platform aligning decisions,
                execution, and outcomes.
              </p>

              <p className="text-base font-medium ">
                Hiring doesn’t fail due to lack of effort.
                <br />
                It fails when decisions, execution, and outcomes
                don’t stay aligned.
              </p>

              <p className="text-base font-medium ">
                Connect EC brings everything together—
                <br />
                so hiring becomes clear, structured, and predictable.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center md:p-[5%]">
            <img
              src="/solutions/connectec-web.svg"
              alt="Connect EC Dashboard"
              className="w-full Sobject-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}