export const WhyNow = () => {
  const cardText = [
    "Real-time learning from practitioners—fast, relevant, and future-ready.",
    "Open, community-powered access to knowledge without paywalls or gatekeepers.",
    "Connecting purposeful people to co-create and grow through shared missions.",
  ];

  return (
    <div className="py-20 px-6 bg-[#0E001B]/50 backdrop-blur-sm mx-auto md:w-[90%] w-[95%] rounded-lg">
      <div className="px-2 md:px-20 my-20 flex flex-col md:flex-row md:flex md:justify-center  items-center">
        <div className="">
          <h2 className="text-white text-3xl font-[Montesrrat] text-left font-bold mb-10 leading-snug text-pretty">
            Where <span className="text-purple-600">Purposeful People</span>{" "}
            Begin a Mission
          </h2>
          <p className="text-left text-white">
            Purple is a movement that bridges the energy of youth with the
            wisdom of experts to reimagine how knowledge flows. It breaks away
            from outdated systems, enabling students to learn beyond textbooks,
            borders, and gatekeepers. By uniting purpose-driven people, Purple
            creates a space for open, fast, and practical learning that’s built
            for today’s world.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-16 font-poppins">
          Why Now?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
          {cardText.map((text, index) => (
            <div
              key={index}
              className="backdrop-blur-sm rounded-lg text-white text-center flex items-center justify-center w-[285px] h-[237px] p-5 bg-purple-950/30 shadow-lg font-poppins text-[18px] leading-[1.4]"
            >
              {text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
