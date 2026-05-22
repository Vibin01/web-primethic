import { FaCaretRight } from "react-icons/fa";

const flowItems = ["understand", "decide", "act"];

const cards = [
  {
    title: "understand",
    icon: "/home/icons/understand-round-icon.svg",
  },
  {
    title: "Decide",
    icon: "/home/icons/decide-round-icon.svg",
  },
  {
    title: "Act",
    icon: "/home/icons/act-round-icon.svg",
  },
];

const paragraphs = [
  "When this flow remains coherent, alignment holds.",
  "When it breaks, outcomes drift.",
  "We design for coherence across this flow—so intent is preserved while adapting through feedback.",
];

export default function HowItWorks() {
  return (
    <section className="mx-auto px-[5%] md:px-[8%] py-[8%] md:py-[5%]  bg-[#F7FBFF]">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-md">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2">
          
          {/* Heading */}
          <h1 className="font-extrabold text-h2">
            How It Works
          </h1>

          {/* Subtitle */}
          <h3 className="font-bold text-base mt-md">
            Every system follows a simple flow:
          </h3>

          {/* Flow */}
          <div className="flex items-center gap-lg mt-sm  md:flex-nowrap">
            {flowItems.map((item, index) => (
              <div key={index} className="flex items-center ">
                <FaCaretRight className="size-iconsize-sm" />
                <span className="font-bold text-base text-[#1B1C17] capitalize">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Paragraphs */}
          <div className="mt-md space-y-sm">
            {paragraphs.map((text, index) => (
              <p
                key={index}
                className="font-medium text-base text-[#2C2C2C]"
              >
                {text}
              </p>
            ))}
          </div>
        </div>

        {/* Right Cards */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="grid grid-cols-3 gap-md">
            {cards.map((card, index) => (
              <div
                key={index}
                className="w-full  bg-white border border-[#D1E4FE] rounded-md p-md flex flex-col items-center justify-center"
              >
                {/* Icon */}
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="size-[clamp(52px,cal(90_/_var(--width)_*_100vw),110px)] p-[0.1%] object-contain"
                  />

                {/* Title */}
                <h4 className="font-bold text-base text-[#0668E1] mt-md capitalize">
                  {card.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}