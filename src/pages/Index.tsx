import Navbar from "@/components/Navbar";

const sections = [
  { id: "hero", label: null },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "leadership", label: "Leadership" },
  { id: "contact", label: "Contact" },
] as const;

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      {/* Hero */}
      <section id="hero" className="section-padding">
        <div className="container">
          <h1 className="text-balance max-w-[900px]">Nimitt Jain</h1>
          <div className="mt-6 h-px w-16 bg-accent" />
        </div>
      </section>

      {/* Content sections */}
      {sections.slice(1).map(({ id, label }, i) => {
        const isDark = id === "contact";
        return (
          <section
            key={id}
            id={id}
            className={`section-padding ${isDark ? "dark-section" : ""} ${
              i > 0 ? "border-t border-border" : "border-t border-border"
            }`}
          >
            <div className="container">
              <p className="section-label">{label}</p>
              <h2>{label}</h2>
            </div>
          </section>
        );
      })}
    </main>
  );
};

export default Index;
