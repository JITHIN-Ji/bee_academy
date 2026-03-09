const Brands = () => {
  const marqueeItems = [
    "✦ Shaping Creative Careers — Fashion & More",
    "✦ Over Two Decades of Creative Education",
    "✦ Traditional Craftsmanship. Cutting-Edge Technology.",
    "✦ From Conceptual Design to Production",
    "✦ Expert Faculty. State-of-the-Art Facilities.",
    "✦ Alumni at Dior, Gucci, Chanel & More",
    "✦ International Accreditation & Award-Winning Programs",
    "✦ Annual Graduate Fashion Show — Industry Exposure",
    "✦ Guaranteed Internship Placement",
    "✦ Lifetime Career Support",
  ];

  const allItems = [...marqueeItems, ...marqueeItems];

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #fffdf5 0%, #ffffff 50%, #fffbea 100%)",
        paddingTop: "72px",
        paddingBottom: "0",
      }}
    >
      {/* Warm glow orb */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[320px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(245,168,0,0.08) 0%, transparent 70%)",
        }}
      />

      {/* ── Academy Name Block ── */}
      <div
        className="mx-auto px-6 md:px-12 mb-12 text-center"
        style={{ maxWidth: "1400px" }}
      >
        {/* Est. badge row */}
        <div className="flex items-center justify-center gap-5 mb-6">
          <div
            className="h-px flex-1 max-w-[140px]"
            style={{ background: "linear-gradient(90deg, transparent, #f5a800)" }}
          />
          <span
            className="text-[9px] font-black tracking-[0.4em] uppercase px-4 py-1.5 rounded-full"
            style={{
              color: "#c47f00",
              background: "rgba(245,168,0,0.10)",
              border: "1px solid rgba(245,168,0,0.30)",
            }}
          >
            Est. 2003
          </span>
          <div
            className="h-px flex-1 max-w-[140px]"
            style={{ background: "linear-gradient(90deg, #f5a800, transparent)" }}
          />
        </div>

        {/* BEE ACADEMY heading */}
        <div className="relative inline-block">
          <h2
            className="text-4xl sm:text-5xl md:text-7xl font-black leading-none"
            style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              letterSpacing: "-0.03em",
            }}
          >
            <span
              style={{
                background: "linear-gradient(135deg, #c47f00 0%, #f5a800 40%, #ffc933 70%, #f5a800 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              BEE
            </span>
            <span
              style={{
                color: "#1a1200",
                WebkitTextFillColor: "#1a1200",
              }}
            >
              {" "}ACADEMY
            </span>
          </h2>

          {/* Underline accent */}
          <div
            className="mt-3 mx-auto"
            style={{
              height: "3px",
              width: "52%",
              background: "linear-gradient(90deg, transparent, #f5a800 30%, #ffd966 70%, transparent)",
              borderRadius: "99px",
            }}
          />
        </div>

        {/* Tagline */}
        <p
          className="mt-5 text-xs md:text-sm font-black tracking-[0.25em] uppercase"
          style={{ color: "#b87800", letterSpacing: "0.25em" }}
        >
          Shaping Creative Careers — Fashion &amp; More
        </p>

        {/* Sub-quote */}
        <p
          className="mt-4 max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
          style={{
            color: "#6b5500",
            fontStyle: "italic",
            fontFamily: "'Georgia', serif",
          }}
        >
          "We combine traditional craftsmanship with cutting-edge technology — preparing students for diverse creative industries worldwide."
        </p>
      </div>

      {/* ── Marquee Ticker ── */}
      <div
        className="relative w-full overflow-hidden py-4"
        style={{
          background: "linear-gradient(135deg, #1a1200 0%, #2b1f00 50%, #1a1200 100%)",
          borderTop: "1px solid rgba(245,168,0,0.25)",
          borderBottom: "1px solid rgba(245,168,0,0.25)",
        }}
      >
        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
          style={{ background: "linear-gradient(90deg, #1a1200, transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
          style={{ background: "linear-gradient(270deg, #1a1200, transparent)" }}
        />

        {/* Scrolling track */}
        <div
          className="flex whitespace-nowrap"
          style={{
            animation: "marquee-bee 35s linear infinite",
            willChange: "transform",
          }}
        >
          {allItems.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center text-sm font-semibold px-10"
              style={{
                color: i % 2 === 0 ? "#f5a800" : "rgba(255,255,255,0.55)",
                letterSpacing: "0.07em",
                fontFamily: "'Georgia', serif",
              }}
            >
              {item}
            </span>
          ))}
        </div>

        <style>{`
          @keyframes marquee-bee {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Brands;