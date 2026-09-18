const cards = [
  {
    title: "WHY ALIGNMENT",
    icon: "/home/icons/why-alignment-icon.svg",
    topText: "Alignment preserves continuity as conditions change.",
    subtitle: "Continuity in Action",
    items: [
      {
        number: "01",
        color: "#589AEB",
        text: "Understanding carries across transitions.",
      },
      {
        number: "02",
        color: "#0668E1",
        text: "Decisions remain coherent through change.",
      },
      {
        number: "03",
        color: "#044AA0",
        text: "Actions remain connected to intent.",
      },
    ],
    bottomText: "Alignment preserves continuity across every transition.",
  },
  {
    title: "THE REALITY",
    icon: "/home/icons/the-reality-icon.svg",
    topText: "Continuity becomes harder to maintain as conditions change.",
    subtitle: "When Alignment Weakens",
    items: [
      {
        number: "01",
        color: "#589AEB",
        text: "Clarity becomes fragmented across transitions.",
      },
      {
        number: "02",
        color: "#0668E1",
        text: "Decisions drift from what was intended.",
      },
      {
        number: "03",
        color: "#044AA0",
        text: "Actions diverge and outcomes become less predictable.",
      },
    ],
    bottomText: "Alignment can weaken even when capability remains.",
  },
  {
    title: "PRIMETHIC",
    icon: "/home/icons/primethic-box-icon.svg",
    topText: "We design systems that help alignment hold through change.",
    subtitle: "Systems That Preserve Alignment",
    items: [
      {
        number: "01",
        color: "#589AEB",
        text: (
          <>
            <span className="font-bold">Continuity</span> - Keep intent connected across transitions.
          </>
        ),
      },
      {
        number: "02",
        color: "#0668E1",
        text: (
          <>
            <span className="font-bold">Coherence</span> - Keep understanding, intention, and action aligned.
          </>
        ),
      },
      {
        number: "03",
        color: "#044AA0",
        text: (
          <>
            <span className="font-bold">Coordination</span> - Keep individuals, teams, and systems moving together.
          </>
        ),
      },
    ],
    bottomText: "Alignment keeps outcomes connected to aspiration.",
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
            className="w-full bg-white border border-[#D3E6FF] rounded-md p-md md:p-sm shadow-[0px_4px_40px_5px_rgba(6,104,225,0.10)] flex flex-col"
          >
            {/* Icon */}
            <div className="size-iconsize-xl rounded-sm bg-[#E6F0FC]- flex items-center justify-center mb-sm">
              <img
                src={card.icon}
                alt={card.title}
                className=" object-contain"
              />
            </div>

            {/* Title */}
            <h3 className="font-bold text-base text-[#0668E1] uppercase">
              {card.title}
            </h3>

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