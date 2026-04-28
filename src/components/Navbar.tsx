import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const sectionIds = ["hero", "experience", "projects", "skills", "contact"];

const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#hero" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setDrawerOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const isActive = (href: string) => `#${activeSection}` === href;

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: scrolled ? "rgba(255,255,255,0.7)" : "transparent",
          backdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
          borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "1px solid transparent",
          transition: "background-color 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease",
        }}
      >
        <div
          className="flex items-center justify-between mx-auto w-full"
          style={{ height: "72px", padding: "0 32px" }}
        >
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleClick(e, "#hero")}
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "24px",
              color: "#000",
              textDecoration: "none",
              letterSpacing: "-0.02em",
            }}
          >
            NJ.
          </a>

          {/* Center links */}
          <div
            className="hidden md:flex items-center"
            style={{ gap: "40px" }}
          >
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  style={{
                    position: "relative",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "12px",
                    fontWeight: 500,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#000",
                    textDecoration: "none",
                    paddingBottom: "6px",
                  }}
                >
                  {link.label}
                  {active && (
                    <span
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "4px",
                        height: "4px",
                        borderRadius: "999px",
                        backgroundColor: "#000",
                      }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Say hello pill */}
          <a
            href="#contact"
            onClick={(e) => handleClick(e, "#contact")}
            className="hidden md:inline-flex items-center"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.08em",
              padding: "10px 24px",
              backgroundColor: "#000",
              color: "#fff",
              borderRadius: "999px",
              textDecoration: "none",
              gap: "8px",
              transition: "transform 0.2s ease, background-color 0.2s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
          >
            say hello →
          </a>

          <button
            className="md:hidden"
            onClick={() => setDrawerOpen(!drawerOpen)}
            aria-label="Toggle menu"
            style={{ color: "#000" }}
          >
            {drawerOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className="fixed inset-0 z-40 flex flex-col items-center justify-center transition-all duration-300 ease-out md:hidden"
        style={{
          backgroundColor: "#fff",
          opacity: drawerOpen ? 1 : 0,
          pointerEvents: drawerOpen ? "auto" : "none",
        }}
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => handleClick(e, link.href)}
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "16px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#000",
              padding: "16px 0",
              textDecoration: "none",
            }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={(e) => handleClick(e, "#contact")}
          style={{
            marginTop: "16px",
            fontFamily: "Inter, sans-serif",
            fontSize: "13px",
            padding: "12px 28px",
            backgroundColor: "#000",
            color: "#fff",
            borderRadius: "999px",
            textDecoration: "none",
          }}
        >
          say hello →
        </a>
      </div>
    </>
  );
};

export default Navbar;
