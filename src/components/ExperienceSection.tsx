import { motion } from "framer-motion";

const experienceData = [
  {
    date: "DEC 2025 — PRESENT",
    role: "Program Coordinator / Chief Operating Officer",
    company: "DIVUZL",
    bullets: [
      "Led pan-India onboarding of program coordinators across colleges",
      "Collaborated with tech team to build and optimise Divuzl's website and systems",
      "Drove operational planning for Divuzl's London expansion as COO",
      "Shortlisted 12 MBA students from 120+ applicants through 30+ interviews",
      "Currently leading a team of 12 MBA students for international expansion",
    ],
  },
  {
    date: "AUG 2024 — DEC 2025",
    role: "Founder",
    company: "NEERRATNA",
    bullets: [
      "Launched a real-gemstone bracelet brand — ₹70K revenue in 8 weeks",
      "Achieved ₹19K net profit with disciplined unit economics from scratch",
      "Led 3 co-founders through early traction via direct selling and rapid iteration",
      "Built and launched brand website on Shopify end-to-end",
    ],
  },
  {
    date: "OCT 2024 — DEC 2024",
    role: "Founder",
    company: "RIRA",
    bullets: [
      "Built an AI receptionist agent that handles inbound calls and books appointments",
      "Integrated Lovable, n8n, Replit, and Vapi AI into a production-ready voice AI system",
      "Reduced need for human receptionist through end-to-end voice AI automation",
    ],
  },
];

const entryVariants = {
  hidden: { opacity: 0, filter: "blur(12px)", y: 20 },
  visible: { opacity: 1, filter: "blur(0px)", y: 0 },
};

const dotVariants = {
  hidden: { scale: 0 },
  visible: { scale: 1 },
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="w-full" style={{ background: "#0D1B2A", padding: "120px 0" }}>
      <div className="mx-auto" style={{ maxWidth: 1200, padding: "0 24px" }}>
        {/* Section header */}
        <motion.div
          className="flex items-center gap-6"
          style={{ marginBottom: 80 }}
          initial={{ opacity: 0, filter: "blur(12px)", y: 20 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", bounce: 0.3, duration: 1 }}
        >
          <h2
            className="font-display font-bold shrink-0"
            style={{ fontSize: 48, lineHeight: 1.1, letterSpacing: "-0.5px", color: "#FFFFFF" }}
          >
            EXPERIENCE
          </h2>
          <div className="w-full h-px" style={{ background: "rgba(255,255,255,0.12)" }} />
        </motion.div>

        {/* Timeline */}
        <div className="relative" style={{ paddingLeft: 48 }}>
          {/* Vertical line */}
          <div
            className="absolute top-0 bottom-0"
            style={{ left: 48, width: 1, background: "rgba(255,255,255,0.15)" }}
          />

          {experienceData.map((item, index) => (
            <div key={item.company}>
              <motion.div
                className="relative"
                style={{ paddingLeft: 40 }}
                variants={entryVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", bounce: 0.3, duration: 1.5, delay: index * 0.15 }}
              >
                {/* Amber dot */}
                <motion.div
                  className="absolute"
                  style={{
                    left: -5,
                    top: 6,
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: "#E8A838",
                  }}
                  variants={dotVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: "spring", bounce: 0.4, duration: 0.6, delay: index * 0.15 + 0.3 }}
                />

                {/* Date */}
                <p
                  className="font-body font-medium"
                  style={{
                    fontSize: 11,
                    color: "#E8A838",
                    letterSpacing: "3px",
                    marginBottom: 12,
                  }}
                >
                  {item.date}
                </p>

                {/* Role */}
                <h3
                  className="font-display"
                  style={{
                    fontSize: 26,
                    fontWeight: 600,
                    color: "#FFFFFF",
                    lineHeight: 1.3,
                    marginBottom: 8,
                  }}
                >
                  {item.role}
                </h3>

                {/* Company */}
                <p
                  className="font-body"
                  style={{
                    fontSize: 12,
                    color: "rgba(255,255,255,0.5)",
                    letterSpacing: "3px",
                    marginBottom: 20,
                  }}
                >
                  {item.company}
                </p>

                {/* Bullets */}
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="font-body"
                      style={{
                        fontSize: 14,
                        color: "rgba(255,255,255,0.75)",
                        lineHeight: 1.8,
                        paddingLeft: 16,
                        position: "relative",
                      }}
                    >
                      <span
                        className="absolute"
                        style={{ left: 0, color: "#E8A838" }}
                      >
                        ·
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Separator between entries */}
              {index < experienceData.length - 1 && (
                <div
                  style={{
                    height: 1,
                    background: "rgba(255,255,255,0.06)",
                    margin: "72px 0",
                    marginLeft: 40,
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
