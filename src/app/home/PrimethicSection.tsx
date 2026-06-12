const cards = [
  {
    title: "WHY ALIGNMENT",
    icon: "/home/icons/question-box-icon.svg",
    topText: "When continuity holds, alignment becomes sustainable.",
    subtitle: "Continuity in Action",
    items: [
      {
        number: "01",
        color: "#589AEB",
        text: "What you understand shapes what you decide.",
      },
      {
        number: "02",
        color: "#0668E1",
        text: "What you decide shapes what gets done.",
      },
      {
        number: "03",
        color: "#044AA0",
        text: "What gets done shapes the outcome.",
      },
    ],
    bottomText:
      "Alignment holds when continuity is preserved across each transition.",
  },
  {
    title: "THE REALITY",
    icon: "/home/icons/question-box-icon.svg",
    topText:
      "As systems grow and interact, continuity becomes harder to maintain.",
    subtitle: "When Continuity Weakens",
    items: [
      {
        number: "01",
        color: "#589AEB",
        text: "Decisions gradually drift from what was intended.",
      },
      {
        number: "02",
        color: "#0668E1",
        text: "Execution moves in a different direction.",
      },
      {
        number: "03",
        color: "#044AA0",
        text: "Outcomes become increasingly difficult to predict.",
      },
    ],
    bottomText:
      "Not because capability is absent. But continuity weakens across transitions.",
  },
  {
    title: "PRIMETHIC",
    icon: "/home/icons/primethic-box-icon.svg",
    topText:
      "We ensure alignment holds consistently under real-world conditions.",
    subtitle: "We Design Systems That Preserve",
    items: [
      {
        number: "01",
        color: "#589AEB",
        text: "Continuity — Preserve intent across transitions.",
      },
      {
        number: "02",
        color: "#0668E1",
        text: "Execution — Translate direction into action consistently.",
      },
      {
        number: "03",
        color: "#044AA0",
        text: "Alignment — Keep outcomes consistently aligned with aspiration.",
      },
    ],
    bottomText:
      "So outcomes remain reliable - even as complexity increases.",
  },
];

export default function PrimethicSection() {
  return (
    <section className="w-full">
      {/* Cards */}
      <div className="flex flex-col lg:flex-row justify-center items-stretch gap-md">
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-full bg-white border border-[#D3E6FF] rounded-md p-sm shadow-[0px_4px_40px_5px_rgba(6,104,225,0.10)] flex flex-col"
          >
            {/* Icon */}
            <div className="size-iconsize-xl rounded-sm bg-[#E6F0FC] flex items-center justify-center mb-sm">
              <img
                src={card.icon}
                alt={card.title}
                className=" object-contain"
              />
            </div>

            {/* Title */}
            <h2 className="font-bold text-base text-[#0668E1] uppercase">
              {card.title}
            </h2>

            {/* Divider */}
            <div className="w-full border-t border-[#D2E5FF] my-sm" />

            {/* Top Text */}
            <p className="font-medium text-xl text-[#2C2C2C] mb-md">
              {card.topText}
            </p>

            {/* Subtitle */}
            <h3 className="font-bold text-xl text-[#2C2C2C] mb-sm">
              {card.subtitle} 
            </h3>

            {/* Items */}
            <div className="space-y-sm">
              {card.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex gap-xs">
<svg
  viewBox="0 0 57 62"
  className="shrink-0 size-iconsize-xl"
>
  <path
    d="M8 0
       H49
       Q57 0 57 8
       V43
       Q57 49 51 52
       L33 60
       Q28.5 62 24 60
       L6 52
       Q0 49 0 43
       V8
       Q0 0 8 0Z"
    fill={item.color}
  />

  <text
    x="28.5"
    y="31"
    textAnchor="middle"
    fill="white"
    fontWeight="600"
    dominantBaseline="middle"
    className=" text-[18px] md:text-xl"
  >
    {item.number}
  </text>
</svg>

                  <p className="font-medium text-xl text-[#2C2C2C]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Box */}
            <div className="mt-auto pt-md">
              <div className="bg-[#EEF6FF] border border-[#B2D0F6] rounded-sm p-sm  flex items-center">
                <p className="font-medium text-xl text-[#0668E1]">
                  {card.bottomText}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

    
    </section>
  );
}