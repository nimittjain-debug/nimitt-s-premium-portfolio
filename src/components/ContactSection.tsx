import { motion } from "framer-motion";
import AnimatedHeading from "./AnimatedHeading";

const contactRows = [
  {
    label: "EMAIL",
    value: "nimitt_ajmera.ug29@mesaschool.co",
    href: "mailto:nimitt_ajmera.ug29@mesaschool.co",
  },
  {
    label: "PHONE",
    value: "+91 7004757007",
    href: null,
  },
  {
    label: "LINKEDIN",
    value: "linkedin.com/in/nimitt-jain-3b7b50265",
    href: "https://linkedin.com/in/nimitt-jain-3b7b50265",
    external: true,
  },
];

const fade = (delay: number) => ({
  initial: { opacity: 0, filter: "blur(12px)", y: 20 },
  whileInView: { opacity: 1, filter: "blur(0px)", y: 0 },
  viewport: { once: true, margin: "-100px" } as const,
  transition: { type: "spring" as const, bounce: 0.3, duration: 1.5, delay },
});

const ContactSection = () => {
  return (
    <>
      <section id="contact" className="w-full" style={{ background: "#F5F5F0", padding: "120px 0 80px" }}>
        <div className="mx-auto" style={{ maxWidth: 1200, padding: "0 24px" }}>
          {/* Header */}
          <div className="flex items-center gap-6" style={{ marginBottom: 24 }}>
            <AnimatedHeading text="LET'S CONNECT" lightMode={true} fontSize={36} />
            <div className="w-full h-px" style={{ background: "rgba(13,27,42,0.12)" }} />
          </div>

          {/* Subheading */}
          <motion.p className="font-body" style={{ fontSize: 16, color: "#6B7280", lineHeight: 1.8, maxWidth: 520, marginBottom: 64 }} {...fade(0.1)}>
            I'm always up for interesting conversations — startups, weird ideas, events, or just a good chat. Reach out anytime.
          </motion.p>

          {/* Contact rows */}
          <div>
            {contactRows.map((row, i) => (
              <motion.div
                key={row.label}
                className="flex items-center"
                style={{ padding: "20px 0", borderBottom: "1px solid rgba(13,27,42,0.06)" }}
                {...fade(0.2 + i * 0.1)}
              >
                <p className="font-body font-medium shrink-0" style={{ fontSize: 10, color: "#E8A838", letterSpacing: "3px", width: 100 }}>
                  {row.label}
                </p>
                <div className="shrink-0" style={{ width: 1, height: 16, background: "rgba(13,27,42,0.12)", marginRight: 24 }} />
                {row.href ? (
                  <a
                    href={row.href}
                    target={row.external ? "_blank" : undefined}
                    rel={row.external ? "noopener noreferrer" : undefined}
                    className="font-body"
                    style={{ fontSize: 15, color: "#0D1B2A", textDecoration: "none", transition: "color 0.25s ease" }}
                    onMouseEnter={(e) => { (e.currentTarget).style.color = "#E8A838"; }}
                    onMouseLeave={(e) => { (e.currentTarget).style.color = "#0D1B2A"; }}
                  >
                    {row.value}
                  </a>
                ) : (
                  <p className="font-body" style={{ fontSize: 15, color: "#0D1B2A" }}>{row.value}</p>
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div style={{ marginTop: 48 }} {...fade(0.5)}>
            <a
              href="mailto:nimitt_ajmera.ug29@mesaschool.co"
              className="font-body font-bold inline-block"
              style={{
                fontSize: 12,
                letterSpacing: "3px",
                color: "#0D1B2A",
                background: "#E8A838",
                padding: "16px 48px",
                borderRadius: 0,
                textDecoration: "none",
                transition: "background 0.25s ease",
              }}
              onMouseEnter={(e) => { (e.currentTarget).style.background = "#C8901A"; }}
              onMouseLeave={(e) => { (e.currentTarget).style.background = "#E8A838"; }}
            >
              SEND ME A MESSAGE
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full" style={{ background: "#0D1B2A", padding: "32px 24px" }}>
        <div className="flex items-center justify-between" style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p className="font-body" style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", letterSpacing: "2px" }}>
            © 2025 NIMITT JAIN
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/nimitt-jain-3b7b50265"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body"
              style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", letterSpacing: "1px", textDecoration: "none", transition: "color 0.2s ease" }}
              onMouseEnter={(e) => { (e.currentTarget).style.color = "#E8A838"; }}
              onMouseLeave={(e) => { (e.currentTarget).style.color = "rgba(255,255,255,0.4)"; }}
            >
              LI
            </a>
            <a
              href="#"
              className="font-body"
              style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", letterSpacing: "1px", textDecoration: "none", transition: "color 0.2s ease" }}
              onMouseEnter={(e) => { (e.currentTarget).style.color = "#E8A838"; }}
              onMouseLeave={(e) => { (e.currentTarget).style.color = "rgba(255,255,255,0.4)"; }}
            >
              GH
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactSection;
