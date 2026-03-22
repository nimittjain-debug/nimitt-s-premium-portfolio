import portraitImg from "@/assets/nimitt-portrait.png";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-end overflow-hidden"
      style={{ paddingBottom: "80px" }}
    >
      {/* Portrait — positioned right, bleeding tall */}
      <div
        className="absolute top-0 right-0 h-full flex items-end justify-end pointer-events-none select-none"
        style={{ width: "55%" }}
      >
        <img
          src={portraitImg}
          alt="Nimitt Jain"
          className="h-[85%] w-auto max-w-none object-contain object-bottom"
          style={{ marginRight: "5%" }}
        />
      </div>

      {/* Text — left side, bottom-aligned */}
      <div className="container relative z-10">
        <h1
          className="font-display font-black text-foreground uppercase"
          style={{
            fontSize: "clamp(48px, 7vw, 96px)",
            lineHeight: "0.95",
            letterSpacing: "-0.03em",
            maxWidth: "65%",
          }}
        >
          Building real things in a world full of plans.
        </h1>
      </div>

      {/* Mobile override — stack vertically */}
      <style>{`
        @media (max-width: 767px) {
          #hero {
            flex-direction: column !important;
            align-items: flex-start !important;
            justify-content: flex-end !important;
            padding-bottom: 48px !important;
          }
          #hero > div:first-child {
            position: relative !important;
            width: 100% !important;
            height: auto !important;
            display: flex !important;
            justify-content: center !important;
            margin-top: 100px;
          }
          #hero > div:first-child img {
            height: auto !important;
            width: 75% !important;
            max-height: 55vh;
          }
          #hero h1 {
            max-width: 100% !important;
            font-size: clamp(36px, 10vw, 56px) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
