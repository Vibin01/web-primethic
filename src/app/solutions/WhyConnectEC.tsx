import Image from "next/image";

const leftFeatures = [
  "Manage all hiring workflows in one place",
  "Gain real-time visibility across the hiring journey",
  "Detect delays and potential drop-offs early",
];

const rightFeatures = [
  "Coordinate seamlessly across hiring teams",
  "Capture structured and actionable feedback",
  "Create more predictable hiring outcomes",
];

export default function WhyConnectEC() {
  return (
    <section className="w-full ">
      <div className="">
        
        {/* Heading */}
        <h2 className=" text-center font-extrabold text-[#1B1C17] text-h2">
          Why Connect EC
        </h2>

        {/* Content */}
        <div className="mt-xl flex flex-col lg:flex-row items-center justify-between gap-xl">
          
          {/* Left Cards */}
          <div className=" hidden md:block w-[28%] space-y-md">
            {leftFeatures.map((item, index) => (
              <FeatureCard key={index} text={item} />
            ))}
          </div>

          {/* Center Mobile Image */}
          <div className="relative flex justify-center items-center">
            <Image
              src="/solutions/connectec-mobile.svg"
              alt="Connect EC Mobile UI"
              width={320}
              height={520}
              className="w-[220px] md:w-[300px] h-auto object-contain"
              priority
            />
          </div>

          {/* Right Cards */}
          <div className=" hidden md:block w-[28%] space-y-md">
            {rightFeatures.map((item, index) => (
              <FeatureCard key={index} text={item} />
            ))}
          </div>

          <div className="  md:hidden w-full space-y-sm">
            {[...leftFeatures,...rightFeatures].map((item, index) => (
              <FeatureCard key={index} text={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ text }: { text: string }) {
  return (
<div className="w-full  bg-[#FFFFFF] border border-[#D3E6FF] rounded-md p-sm flex items-start gap-xs shadow-[0px_2px_10px_2px_#0668E10D]">
      
      {/* Icon */}
      <img src={"/solutions/icons/tick-icon.svg"} alt="tick icon" className="size-iconsize-sm mt-[0.5%] md:mt-0"/>

      {/* Text */}
      <p className="font-medium text-base">
        {text}
      </p>
    </div>
  );
}