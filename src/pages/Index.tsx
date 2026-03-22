import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";

const sections = [
  { id: "skills", label: "Skills" },
  { id: "leadership", label: "Leadership" },
  { id: "contact", label: "Contact" },
] as const;

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />

      {/* Remaining content sections */}
      {sections.map(({ id, label }) => {
        const isDark = id === "contact";
        return (
          <section
            key={id}
            id={id}
            className={`section-padding ${isDark ? "dark-section" : ""} border-t border-border`}
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
