import portraitImg from "@/assets/nimitt-portrait.png";

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      <div className="flex flex-col md:flex-row h-full">
        {/* Left — content, vertically centered */}
        <div className="order-2 md:order-1 flex items-end md:items-center flex-shrink-0 p-8 md:p-0"
          style={{ width: "100%" }}
        >
          <div>
            <h1
              className="font-display font-bold text-foreground uppercase"
              style={{
                fontSize: "clamp(48px, 7vw, 92px)",
                lineHeight: "1.0",
                letterSpacing: "-2px",
              }}
            >
              Building real things in a world full of plans.
            </h1>

            {/* Eyebrow label */}
            <p
              className="font-body uppercase"
              style={{
                fontSize: "11px",
                color: "#E8A838",
                letterSpacing: "4px",
                marginTop: "28px",
                marginBottom: "16px",
              }}
            >
              Student · Founder · Builder
            </p>

            {/* Amber rule */}
            <div
              style={{
                width: "64px",
                height: "3px",
                backgroundColor: "#E8A838",
                marginBottom: "28px",
              }}
            />

            {/* Bio */}
            <p
              className="font-body"
              style={{
                fontSize: "15px",
                color: "#6B7280",
                lineHeight: "1.85",
                maxWidth: "400px",
                marginBottom: "36px",
              }}
            >
              I'm Nimitt — a business student at IIM Bangalore who launched a gemstone brand, built an AI receptionist from scratch, and helped coordinate a 5,000-person product event. I don't just study entrepreneurship. I do it.
            </p>

            {/* CTA buttons */}
            <div className="flex gap-[14px]">
              <a
                href="#experience"
                className="font-body font-bold uppercase inline-block"
                style={{
                  fontSize: "12px",
                  letterSpacing: "2px",
                  padding: "13px 32px",
                  backgroundColor: "#E8A838",
                  color: "#0D1B2A",
                  borderRadius: "0",
                  transition: "background-color 0.25s ease",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#C8901A")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#E8A838")}
              >
                View My Work
              </a>
              <a
                href="/resume.pdf"
                className="font-body font-bold uppercase inline-block"
                style={{
                  fontSize: "12px",
                  letterSpacing: "2px",
                  padding: "13px 32px",
                  backgroundColor: "transparent",
                  color: "#0D1B2A",
                  border: "1.5px solid #0D1B2A",
                  borderRadius: "0",
                  transition: "all 0.25s ease",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#0D1B2A";
                  e.currentTarget.style.color = "#FFFFFF";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#0D1B2A";
                }}
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Right — full-bleed grayscale portrait */}
        <div className="order-1 md:order-2 flex-shrink-0 h-[45vh] md:h-full">
          <img
            src={portraitImg}
            alt="Nimitt Jain"
            className="w-full h-full object-cover object-top grayscale"
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-body uppercase"
        style={{
          fontSize: "10px",
          letterSpacing: "3px",
          color: "#9CA3AF",
          animation: "heroScroll 1.5s ease-in-out infinite",
        }}
      >
        Scroll ↓
      </div>

      <style>{`
        @media (min-width: 768px) {
          #hero > div > div:first-child {
            width: 50% !important;
            padding: 0 40px 0 64px !important;
          }
          #hero > div > div:last-child {
            width: 50% !important;
          }
        }
        @keyframes heroScroll {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
