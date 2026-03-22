import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const sectionIds = ["hero", "education", "experience", "projects", "skills", "contact"];

const navLinks = [
  { label: "About", href: "#hero" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // IntersectionObserver for active section
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
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
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
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color] duration-300 ease-out"
        style={{
          backgroundColor: scrolled ? "hsl(var(--background))" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(13,27,42,0.08)" : "1px solid transparent",
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div
          className="flex items-center justify-between mx-auto w-full"
          style={{ height: "72px", padding: "0 48px" }}
        >
          <a
            href="#hero"
            onClick={(e) => handleClick(e, "#hero")}
            className="font-body font-bold text-foreground select-none"
            style={{ fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase" }}
          >
            Nimitt Jain
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="font-body font-medium"
                style={{
                  fontSize: "13px",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color: isActive(link.href) ? "#E8A838" : "#0D1B2A",
                  transition: "color 0.25s ease",
                }}
                onMouseEnter={(e) => { if (!isActive(link.href)) (e.currentTarget).style.color = "#E8A838"; }}
                onMouseLeave={(e) => { if (!isActive(link.href)) (e.currentTarget).style.color = "#0D1B2A"; }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setDrawerOpen(!drawerOpen)}
            aria-label="Toggle menu"
          >
            {drawerOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <style>{`
          @media (max-width: 767px) {
            nav > div, .motion-nav > div { height: 60px !important; padding: 0 24px !important; }
          }
        `}</style>
      </motion.nav>

      {/* Mobile drawer */}
      <div
        className="fixed inset-0 z-40 flex flex-col items-center justify-center transition-all duration-300 ease-out md:hidden"
        style={{
          backgroundColor: "hsl(var(--dark-bg))",
          opacity: drawerOpen ? 1 : 0,
          pointerEvents: drawerOpen ? "auto" : "none",
          transform: drawerOpen ? "translateY(0)" : "translateY(-16px)",
        }}
      >
        {navLinks.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => handleClick(e, link.href)}
            className="font-body font-medium hover:text-accent"
            style={{
              fontSize: "16px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "hsl(var(--dark-fg))",
              padding: "16px 0",
              transition: "color 0.25s ease",
              opacity: drawerOpen ? 1 : 0,
              transform: drawerOpen ? "translateY(0)" : "translateY(12px)",
              transitionDelay: drawerOpen ? `${i * 60}ms` : "0ms",
              transitionProperty: "color, opacity, transform",
              transitionDuration: "0.25s, 0.4s, 0.4s",
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;
