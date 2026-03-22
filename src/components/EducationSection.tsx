import AnimatedHeading from "./AnimatedHeading";
  {
    institution: "MESA SCHOOL OF BUSINESS",
    degree: "Undergraduate Program in Business Management & Entrepreneurship",
    year: "Batch of 2029 · Bangalore",
    tags: ["Theatre Club: Core Member"],
  },
  {
    institution: "IIM BANGALORE",
    degree: "Bachelor of Business Administration, Digital Business and Entrepreneurship",
    year: "Batch of 2029 · Bangalore",
    tags: [],
  },
  {
    institution: "CAMBRIDGE COURT WORLD SCHOOL",
    degree: "PCM — Science Stream",
    year: "Class of 2024 · Jaipur",
    tags: ["Head Prefect Boy", "Science Club President"],
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="w-full" style={{ background: "#F5F5F0", padding: "120px 0" }}>
      <div className="mx-auto" style={{ maxWidth: 1200, padding: "0 24px" }}>
        {/* Section header with ruled line */}
        <div className="flex items-center gap-6" style={{ marginBottom: 80 }}>
          <h2
            className="font-display font-bold text-foreground shrink-0"
            style={{ fontSize: 48, lineHeight: 1.1, letterSpacing: "-0.5px" }}
          >
            EDUCATION
          </h2>
          <div className="w-full h-px" style={{ background: "rgba(13,27,42,0.12)" }} />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educationData.map((item) => (
            <div
              key={item.institution}
              style={{ borderLeft: "3px solid #E8A838", padding: 32 }}
            >
              <p
                className="font-body font-medium uppercase"
                style={{
                  fontSize: 11,
                  color: "#E8A838",
                  letterSpacing: "3px",
                  marginBottom: 12,
                }}
              >
                {item.institution}
              </p>
              <h3
                className="font-display"
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  color: "#0D1B2A",
                  lineHeight: 1.35,
                }}
              >
                {item.degree}
              </h3>
              <p
                className="font-body"
                style={{ fontSize: 13, color: "#6B7280", marginTop: 8 }}
              >
                {item.year}
              </p>
              {item.tags.length > 0 && (
                <div className="flex flex-wrap gap-2" style={{ marginTop: 20 }}>
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-body"
                      style={{
                        fontSize: 11,
                        color: "#0D1B2A",
                        border: "1px solid #0D1B2A",
                        padding: "4px 12px",
                        borderRadius: 20,
                        lineHeight: 1.4,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom divider */}
        <div className="w-full h-px" style={{ background: "rgba(13,27,42,0.08)", marginTop: 80 }} />
      </div>
    </section>
  );
};

export default EducationSection;
