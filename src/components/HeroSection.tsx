import { ChevronDown } from "lucide-react";
import portraitImg from "@/assets/nimitt-portrait.png";

const HeroSection = () => {
  const scrollToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollDown = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector("#education")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center"
      style={{ paddingTop: "140px", paddingBottom: "80px" }}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-16 lg:gap-8 items-center">
          {/* Left column */}
          <div className="order-2 lg:order-1">
            {/* Eyebrow */}
            <p
              className="font-body font-medium text-accent mb-6"
              style={{
                fontSize: "12px",
                letterSpacing: "3px",
                textTransform: "uppercase",
              }}
            >
              Student · Founder · Builder
            </p>

            {/* Heading */}
            <h1
              className="font-display font-bold text-foreground uppercase text-balance"
              style={{
                fontSize: "clamp(42px, 5vw, 68px)",
                lineHeight: "1.1",
                letterSpacing: "-0.02em",
              }}
            >
              Building real things in a world full of plans.
            </h1>

            {/* Amber rule */}
            <div className="mt-8 h-[2px] w-[60px] bg-accent" />

            {/* Bio */}
            <p
              className="mt-8 font-body text-muted-foreground"
              style={{
                fontSize: "16px",
                lineHeight: "1.8",
                maxWidth: "480px",
              }}
            >
              I'm Nimitt — a business student at IIM Bangalore who launched a
              gemstone brand, built an AI receptionist from scratch, and helped
              run a 5,000-person event. I don't just study entrepreneurship. I
              do it.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#experience"
                onClick={scrollToWork}
                className="hero-btn-filled font-body font-bold text-accent-foreground inline-flex items-center justify-center active:scale-[0.97]"
                style={{
                  fontSize: "13px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  padding: "14px 32px",
                  backgroundColor: "hsl(var(--accent))",
                  transition: "background-color 0.25s ease, transform 0.15s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#C8901A")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "hsl(var(--accent))")
                }
              >
                View My Work
              </a>
              <a
                href="/resume.pdf"
                className="hero-btn-outline font-body font-bold text-foreground inline-flex items-center justify-center active:scale-[0.97]"
                style={{
                  fontSize: "13px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  padding: "14px 32px",
                  border: "1.5px solid hsl(var(--foreground))",
                  backgroundColor: "transparent",
                  transition:
                    "background-color 0.25s ease, color 0.25s ease, transform 0.15s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "hsl(var(--foreground))";
                  e.currentTarget.style.color = "hsl(var(--background))";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "hsl(var(--foreground))";
                }}
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Right column — portrait */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative amber square */}
              <div
                className="absolute bg-accent"
                style={{
                  width: "80px",
                  height: "80px",
                  bottom: "-16px",
                  right: "-16px",
                  zIndex: 0,
                }}
              />
              {/* Photo frame */}
              <div
                className="relative z-10"
                style={{
                  width: "min(380px, 70vw)",
                  aspectRatio: "3 / 4",
                  outline: "3px solid hsl(var(--accent))",
                  outlineOffset: "8px",
                  overflow: "hidden",
                  backgroundColor: "#E8E8E2",
                }}
              >
                <img
                  src={portraitImg}
                  alt="Nimitt Jain — student, founder, builder"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-pointer"
        aria-label="Scroll down"
      >
        <span
          className="font-body font-medium"
          style={{
            fontSize: "11px",
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <ChevronDown size={16} className="animate-bounce" />
      </button>
    </section>
  );
};

export default HeroSection;
