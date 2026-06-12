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

              <div className="flex flex-col sm:flex-row gap-sm">
                <div className="flex items-start gap-xs rounded-md p-sm bg-white border-[#D3E6FF] border shadow-[1px_9px_20px_0px_#BDDBFF0D,_3px_37px_37px_0px_#BDDBFF0A,_8px_82px_50px_0px_#BDDBFF08,_14px_146px_59px_0px_#BDDBFF03,_21px_229px_64px_0px_#BDDBFF00]">
                <div> 
                  <XCircle className="size-iconsize-sm  fill-red-500 text-white" />
                </div>  <div>
                    <h4 className="font-bold text-xl text-[#F0431D] mb-1">
                      Hiring doesn't fail due to lack of effort.
                    </h4>
                    <p className="text-xl text-[#F0431D] font-medium">
                      It fails when decisions, execution, and outcomes don't
                      stay aligned.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-xs rounded-md p-sm bg-white border-[#D3E6FF] border shadow-[1px_9px_20px_0px_#BDDBFF0D,_3px_37px_37px_0px_#BDDBFF0A,_8px_82px_50px_0px_#BDDBFF08,_14px_146px_59px_0px_#BDDBFF03,_21px_229px_64px_0px_#BDDBFF00]">
                  <img src={"/solutions/icons/tick-icon.svg"} alt="tick icon" className="size-iconsize-sm " />
                  <div>
                    <h4 className="font-bold text-xl text-[#0668E1] mb-1">
                      Hiring doesn't fail due to lack of effort.
                    </h4>
                    <p className="text-xl text-[#0668E1] font-medium">
                      so hiring becomes <span className="font-bold">visible, connected,</span> and <span className="font-bold">predictable.</span>
                    </p>
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
