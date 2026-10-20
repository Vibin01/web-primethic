import React from "react";

const responseSteps = [
  {
    num: "01",
    title: "Detect",
    description: "Recognize emerging change.",
  },
  {
    num: "02",
    title: "Interpret",
    description: "Understand where alignment is weakening.",
  },
  {
    num: "03",
    title: "Focus",
    description: "Identify what requires attention.",
  },
  {
    num: "04",
    title: "Intervene",
    description: "Create time for informed action.",
  },
  {
    num: "05",
    title: "Preserve",
    description: "Keep the next transition connected.",
  },
];

export default function PrimethicResponseSection() {
  return (
    <section className="w-full">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-xl">
        {/* Left Column: Heading & Descriptions */}
        <div className="w-full md:w-[45%] text-white">
          {/* Eyebrow */}
          <p className="font-bold text-xl text-white uppercase tracking-wider mb-xs">
            PRIMETHIC RESPONSE
          </p>

          {/* Main Heading */}
          <h2 className="font-heading font-extrabold text-white text-h2 leading-tight mb-sm">
            Design for Change.
            <br />
            Not Only for Process.
          </h2>

          {/* Paragraph 1 */}
          <p className="font-bold text-h5 text-white leading-relaxed mb-md">
            Most hiring systems record activity, move workflows and capture outcomes.
          </p>

          {/* Paragraph 2 */}
          <p className="font-medium text-base text-white mb-sm">
            Primethic designs for what happens between those stages.
          </p>

          {/* Paragraph 3 */}
          <p className="font-medium text-base text-white leading-relaxed">
            Alignment Continuity keeps understanding, intention, decisions and actions sufficiently connected as conditions change.
          </p>

          {/* Divider line */}
          <div className="border-t border-[#DEEDFF] my-md" />

          {/* Paragraph 4 (Emphasis after divider) */}
          <p className="font-bold text-base text-white">
            It does not assume that people will remain fixed. It enables the system to recognize when continuity is beginning to weaken.
          </p>
        </div>

        {/* Right Column: 5 Steps Cards + Bottom Note */}
        <div className="w-full md:w-[50%] flex flex-col gap-sm">
          {responseSteps.map((step) => (
            <div
              key={step.num}
              className="bg-white rounded-md p-sm shadow-mobile-small md:shadow-web-small flex items-center gap-sm"
            >
              {/* Downward Shield Badge with centered text */}
              <div className="relative shrink-0 size-iconsize-xl flex items-center justify-center pb-1">
                <svg
                  viewBox="0 0 42 46"
                  fill="none"
                  className="absolute inset-0 w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 6 0
                       H 36
                       A 6 6 0 0 1 42 6
                       V 31
                       C 42 35 39.5 37.5 35.8 38.8
                       L 22.8 43.4
                       C 21.6 43.8 20.4 43.8 19.2 43.4
                       L 6.2 38.8
                       C 2.5 37.5 0 35 0 31
                       V 6
                       A 6 6 0 0 1 6 0
                       Z"
                    fill="#0668E1"
                  />
                </svg>
                <span className="relative z-10 text-white font-bold text-lg leading-none">
                  {step.num}
                </span>
              </div>

              {/* Text content */}
              <div>
                <h3 className="font-heading font-bold text-base text-primary">
                  {step.title}
                </h3>
                <p className="font-medium text-xl text-[#1B1C17] mt-0.5">
                  {step.description}
                </p>
              </div>
            </div>
          ))}

          {/* Bottom Card / Banner */}
          <div className="bg-[#FFFFFF33] border border-[#D3E6FF] rounded-md p-sm text-white shadow-mobile-small md:shadow-web-small">
            <p className="font-medium text-xl leading-relaxed text-white">
              The objective is not to control human behaviour. It is to help systems respond intelligently when human behaviour changes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
