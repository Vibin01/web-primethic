import { XCircle } from "lucide-react";

export default function ConnectECSection() {
  return (
    <section className="w-full ">
      <div className="">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-sm">
          {/* Left Content */}
          <div className=" w-full md:w-[75%] ">
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
              <p className="text-base font-medium pb-sm">
                Predict <span className="font-bold">no-shows.</span>
                <br />
                Get timely <span className="font-bold">feedback.</span>
                <br />
                Achieve <span className="font-bold">hiring goals</span>—all in
                one place.
              </p>

              <h3 className="text-base font-bold pb-sm">
                ALIGNMENT INTELLIGENCE IN ACTION
              </h3>

              <p className="text-base font-medium ">
                Connect EC applies{" "}
                <span className="italic">
                  PRIMETHIC's Alignment Intelligence to hiring.
                </span>
               
              </p>
              <p className="text-base font-medium "> Helping candidates, recruiters, and employers stay aligned from
                interview to joining.</p>

              <div className="md:w-[90%] rounded-md border border-[#D3E6FF] shadow-[0px_4px_40px_5px_#0668E11A] bg-[#FFFFFF] p-md">
      <div className="rounded-sm border border-[#B2D0F6] bg-[#EEF6FF] p-sm">
        <h3 className="text-xl font-bold text-[#1B1C17]">
          Hiring doesn't fail due to lack of effort.
        </h3>

        <p className="mt-xs text-xl text-[#727272]">
          It fails when decisions, execution, and outcomes don't stay aligned.
        </p>
      </div>

      <div className="mt-sm">
        <p className="text-base font-bold text-[#0668E1]">
          Connect EC brings everything together
        </p>

        <div className=" mt-sm flex  items-center justify-between gap-2 text-xl text-[#2C2C2C]">
          <span>so hiring becomes</span>

          {[
    { id: 1, label: "Visible" },
    { id: 2, label: "Connected" },
    { id: 3, label: "Predictable" },
  ].map((step) => (
            <div key={step.id} className="flex items-center gap-xs">
              <span className="flex size-iconsize-sm items-center justify-center rounded-full bg-[#0668E1] text-lg font-bold text-white">
                {step.id}
              </span>

              <span>{step.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
            </div>
          </div>

          {/* Right Image */}
          <div className=" flex ">
            <img
              src="/solutions/ec-connect.svg"
              alt="Connect EC Dashboard"
              className="w-full Sobject-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
