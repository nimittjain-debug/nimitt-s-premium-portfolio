import { motion } from "framer-motion";
import AnimatedHeading from "./AnimatedHeading";

const technicalTools = ["Lovable AI", "N8N", "Replit", "Cursor", "Langflow"];
const softSkills = ["Event Management", "Operations & Logistics", "Team Collaboration", "Outreach & Community", "Google Ads"];
const interests = ["Photography", "Cinematography", "Cooking", "Sports", "Travelling", "Art"];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const pillVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" as const, bounce: 0.3, duration: 0.8 } },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="w-full" style={{ background: "#0D1B2A", padding: "120px 0" }}>
      <div className="mx-auto" style={{ maxWidth: 1200, padding: "0 24px" }}>
        {/* Header */}
        <div className="flex items-center gap-6" style={{ marginBottom: 80 }}>
          <AnimatedHeading text="SKILLS & INTERESTS" lightMode={false} />
          <div className="w-full h-px" style={{ background: "rgba(255,255,255,0.12)" }} />
        </div>

        {/* Three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Technical Tools */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(12px)", y: 20 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", bounce: 0.3, duration: 1.5, delay: 0 }}
          >
            <p className="font-body font-medium" style={{ fontSize: 11, color: "#E8A838", letterSpacing: "3px", marginBottom: 32 }}>
              TECHNICAL TOOLS
            </p>
            <motion.div className="flex flex-wrap gap-3" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
              {technicalTools.map((tool) => (
                <motion.span
                  key={tool}
                  variants={pillVariants}
                  className="font-body"
                  style={{
                    fontSize: 13,
                    color: "#FFFFFF",
                    border: "1px solid rgba(255,255,255,0.25)",
                    padding: "8px 20px",
                    borderRadius: 0,
                    cursor: "default",
                    transition: "background 0.2s ease, color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLSpanElement).style.background = "#E8A838";
                    (e.currentTarget as HTMLSpanElement).style.color = "#0D1B2A";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLSpanElement).style.background = "transparent";
                    (e.currentTarget as HTMLSpanElement).style.color = "#FFFFFF";
                  }}
                >
                  {tool}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(12px)", y: 20 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", bounce: 0.3, duration: 1.5, delay: 0.2 }}
          >
            <p className="font-body font-medium" style={{ fontSize: 11, color: "#E8A838", letterSpacing: "3px", marginBottom: 32 }}>
              SOFT SKILLS
            </p>
            <motion.div className="flex flex-wrap gap-3" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
              {softSkills.map((skill) => (
                <motion.span
                  key={skill}
                  variants={pillVariants}
                  className="font-body"
                  style={{
                    fontSize: 13,
                    color: "#FFFFFF",
                    background: "rgba(255,255,255,0.06)",
                    padding: "8px 20px",
                    borderRadius: 0,
                    cursor: "default",
                    transition: "background 0.2s ease, color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLSpanElement).style.background = "#E8A838";
                    (e.currentTarget as HTMLSpanElement).style.color = "#0D1B2A";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLSpanElement).style.background = "rgba(255,255,255,0.06)";
                    (e.currentTarget as HTMLSpanElement).style.color = "#FFFFFF";
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(12px)", y: 20 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", bounce: 0.3, duration: 1.5, delay: 0.4 }}
          >
            <p className="font-body font-medium" style={{ fontSize: 11, color: "#E8A838", letterSpacing: "3px", marginBottom: 32 }}>
              INTERESTS
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {interests.map((item) => (
                <li
                  key={item}
                  className="font-body"
                  style={{ fontSize: 15, color: "rgba(255,255,255,0.75)", lineHeight: 2.2 }}
                >
                  <span style={{ color: "#E8A838", marginRight: 12 }}>—</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Languages strip */}
        <div className="text-center" style={{ marginTop: 64 }}>
          <p className="font-body" style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", letterSpacing: "2px" }}>
            ENGLISH · HINDI
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
