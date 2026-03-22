import portraitImg from "@/assets/nimitt-portrait.png";

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      <div className="flex flex-col md:flex-row h-full">
        {/* Left — heading only, vertically centered */}
        <div className="order-2 md:order-1 flex items-end md:items-center flex-shrink-0 p-8 md:p-0"
          style={{ width: "100%" }}
        >
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
      `}</style>
    </section>
  );
};

export default HeroSection;
