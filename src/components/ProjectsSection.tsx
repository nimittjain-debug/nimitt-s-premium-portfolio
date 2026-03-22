import { motion } from "framer-motion";
import AnimatedHeading from "./AnimatedHeading";

const projectsData = [
  {
    tag: "LIVE VENTURE",
    title: "Neer Ratna",
    description:
      "A real-gemstone bracelet brand launched at Mesa School of Business. Sourced products, ran offline flea market stalls, built a Shopify website, and ran paid ads.",
    impact: "₹1,00,000 revenue · 8 weeks",
    skills: ["Logistics", "Operations", "Google Ads"],
  },
  {
    tag: "EVENT LEADERSHIP",
    title: "UG Business Case Competition",
    description:
      "Organised Mesa's Business Case Competition at Maverion 2026 — Mesa's annual fest. 2 weeks of end-to-end planning, managing students from different states, welcome kits, sponsor coordination.",
    impact: "₹1,00,000 prize pool · 2 weeks planning",
    skills: ["Event Coordination", "Event Planning", "Sponsorship"],
  },
  {
    tag: "COMMUNITY",
    title: "Product UnConference 2025",
    description:
      "Volunteered with The Product Folks for Product UnConference 2025. Led offline marketing across Bangalore, engaged 100+ participants, coordinated logistics and volunteers.",
    impact: "5,000+ attendees · 100+ participants engaged",
    skills: ["Outreach", "Community Engagement", "Event Ops"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, filter: "blur(12px)", y: 20 },
  visible: { opacity: 1, filter: "blur(0px)", y: 0 },
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="w-full" style={{ background: "#F5F5F0", padding: "120px 0" }}>
      <div className="mx-auto" style={{ maxWidth: 1200, padding: "0 24px" }}>
        {/* Section header */}
        <div className="flex items-center gap-6" style={{ marginBottom: 80 }}>
          <AnimatedHeading text="PROJECTS" lightMode={true} fontSize={40} />
          <div className="w-full h-px" style={{ background: "rgba(13,27,42,0.12)" }} />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectsData.map((item, index) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", bounce: 0.3, duration: 1.5, delay: index * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.3, ease: "easeOut" } }}
              style={{
                border: "1px solid rgba(13,27,42,0.1)",
                borderTop: "3px solid #E8A838",
                padding: 40,
                cursor: "default",
                transition: "border-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(13,27,42,0.25)";
                (e.currentTarget as HTMLDivElement).style.borderTopColor = "#E8A838";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(13,27,42,0.1)";
                (e.currentTarget as HTMLDivElement).style.borderTopColor = "#E8A838";
              }}
            >
              {/* Tag */}
              <p
                className="font-body font-medium"
                style={{ fontSize: 10, color: "#E8A838", letterSpacing: "3px", marginBottom: 16 }}
              >
                {item.tag}
              </p>

              {/* Title */}
              <h3
                className="font-display font-bold"
                style={{ fontSize: 26, color: "#0D1B2A", lineHeight: 1.3 }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className="font-body"
                style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.8, margin: "16px 0" }}
              >
                {item.description}
              </p>

              {/* Impact */}
              <p
                className="font-body"
                style={{ fontSize: 13, color: "#E8A838", fontWeight: 600, marginBottom: 20 }}
              >
                {item.impact}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-body"
                    style={{
                      fontSize: 11,
                      color: "#0D1B2A",
                      border: "1px solid rgba(13,27,42,0.2)",
                      padding: "4px 12px",
                      borderRadius: 20,
                      lineHeight: 1.4,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
