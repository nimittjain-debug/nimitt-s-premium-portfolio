import nimittPortrait from "@/assets/nimitt-portrait.png";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden"
      style={{ backgroundColor: "#ffffff", color: "#000000", padding: "120px 32px 48px" }}
    >
      {/* Top greeting */}
      <div className="w-full" style={{ position: "relative", zIndex: 4 }}>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "16px",
            fontWeight: 400,
            letterSpacing: "0.02em",
          }}
        >
          👋 hi, my name is Nimitt and I am a
        </p>
      </div>

      {/* Massive name block with portrait sandwiched between */}
      <div
        className="w-full flex flex-col"
        style={{ marginTop: "24px", position: "relative" }}
      >
        <h1
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: "20vw",
            lineHeight: 0.9,
            letterSpacing: "-0.04em",
            textTransform: "uppercase",
            margin: 0,
            position: "relative",
            zIndex: 1,
          }}
        >
          NIMITT
        </h1>

        {/* Portrait — between NIMITT (behind) and JAIN (front) */}
        <img
          src={nimittPortrait}
          alt="Nimitt Jain portrait"
          style={{
            position: "absolute",
            left: "50%",
            bottom: 0,
            transform: "translateX(-50%)",
            height: "70vh",
            width: "auto",
            objectFit: "contain",
            filter: "grayscale(100%)",
            backgroundColor: "transparent",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        <h1
          className="text-stroke-black"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 200,
            fontSize: "20vw",
            lineHeight: 0.9,
            letterSpacing: "-0.04em",
            textTransform: "uppercase",
            margin: 0,
            position: "relative",
            zIndex: 3,
          }}
        >
          JAIN
        </h1>
      </div>

      {/* Bottom row: tagline + CTAs */}
      <div
        className="w-full flex flex-col md:flex-row items-start md:items-end justify-between gap-8"
        style={{ marginTop: "48px", position: "relative", zIndex: 4 }}
      >
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            fontWeight: 400,
            maxWidth: "360px",
            lineHeight: 1.5,
          }}
        >
          building real things in a world full of plans.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="#contact"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "13px",
              fontWeight: 500,
              padding: "14px 24px",
              border: "1px solid #000",
              backgroundColor: "#000",
              color: "#fff",
              textDecoration: "none",
              transition: "all 0.2s ease",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#fff";
              e.currentTarget.style.color = "#000";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#000";
              e.currentTarget.style.color = "#fff";
            }}
          >
            You need a developer
          </a>
          <a
            href="#projects"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "13px",
              fontWeight: 500,
              padding: "14px 24px",
              border: "1px solid #000",
              backgroundColor: "transparent",
              color: "#000",
              textDecoration: "none",
              transition: "all 0.2s ease",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#000";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#000";
            }}
          >
            See my work
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
