import { ChevronDown } from "lucide-react";
import portraitImg from "@/assets/nimitt-portrait.png";

const HeroSection = () => {
  const scrollToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      <div className="flex flex-col md:flex-row h-full">
        {/* Left column */}
        <div
          className="order-2 md:order-1 flex flex-col justify-center flex-shrink-0"
          style={{ width: "100%", padding: "40px" }}
        >
          {/* Eyebrow */}
          <p
            className="font-body font-medium text-accent"
            style={{
              fontSize: "11px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}
          >
            Student · Founder · Builder
          </p>

          {/* Heading */}
          <h1
            className="font-display font-bold text-foreground uppercase"
            style={{
              fontSize: "clamp(52px, 7vw, 88px)",
              lineHeight: "1.05",
              letterSpacing: "-1px",
              marginBottom: "32px",
            }}
          >
            Building real things in a world full of plans.
          </h1>

          {/* Amber rule */}
          <div
            className="bg-accent"
            style={{ width: "72px", height: "3px", marginBottom: "32px" }}
          />

          {/* Bio */}
          <p
            className="font-body"
            style={{
              fontSize: "15px",
              lineHeight: "1.85",
              color: "#6B7280",
              maxWidth: "420px",
              marginBottom: "40px",
            }}
          >
            I'm Nimitt — a business student at IIM Bangalore who launched a
            gemstone brand, built an AI receptionist from scratch, and helped
            coordinate a 5,000-person product event. I don't just study
            entrepreneurship. I do it.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#experience"
              onClick={scrollToWork}
              className="font-body font-bold inline-flex items-center justify-center active:scale-[0.97]"
              style={{
                fontSize: "12px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                padding: "14px 36px",
                backgroundColor: "hsl(var(--accent))",
                color: "hsl(var(--foreground))",
                transition: "background-color 0.25s ease",
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
              className="font-body font-bold inline-flex items-center justify-center active:scale-[0.97]"
              style={{
                fontSize: "12px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                padding: "14px 36px",
                border: "1.5px solid hsl(var(--foreground))",
                color: "hsl(var(--foreground))",
                backgroundColor: "transparent",
                transition: "background-color 0.25s ease, color 0.25s ease",
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

          {/* Scroll indicator — desktop only */}
          <div
            className="hidden md:flex items-center gap-2 text-muted-foreground mt-auto pt-12"
            style={{
              fontSize: "10px",
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            <span className="font-body">Scroll</span>
            <ChevronDown size={12} className="animate-bounce" />
          </div>
        </div>

        {/* Right column — portrait */}
        <div className="order-1 md:order-2 flex-shrink-0 h-[40vh] md:h-full">
          <img
            src={portraitImg}
            alt="Nimitt Jain"
            className="w-full h-full object-cover object-top grayscale"
          />
        </div>
      </div>

      {/* Desktop layout override */}
      <style>{`
        @media (min-width: 768px) {
          #hero > div > div:first-child {
            width: 58% !important;
            padding: 0 40px 0 64px !important;
          }
          #hero > div > div:last-child {
            width: 42% !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
