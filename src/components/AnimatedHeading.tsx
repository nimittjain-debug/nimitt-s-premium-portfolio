import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedHeadingProps {
  text: string;
  lightMode?: boolean;
  fontSize?: number;
}

const AnimatedHeading = ({ text, lightMode = true, fontSize = 48 }: AnimatedHeadingProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const letters = text.split("");

  return (
    <div ref={ref} className="relative inline-block" style={{ whiteSpace: "nowrap", overflow: "visible" }}>
      <h2
        className="font-display font-bold shrink-0"
        style={{
          fontSize,
          lineHeight: 1.1,
          letterSpacing: "-0.5px",
          color: lightMode ? "#0D1B2A" : "#FFFFFF",
        }}
        aria-label={text}
      >
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            className="inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              type: "spring",
              damping: 12,
              stiffness: 200,
              delay: i * 0.05,
            }}
            style={{ display: letter === " " ? "inline" : undefined }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </h2>
      {/* Amber underline */}
      <motion.div
        style={{
          position: "absolute",
          bottom: -8,
          height: 3,
          background: "#E8A838",
        }}
        initial={{ width: "0%", left: "50%" }}
        animate={
          isInView
            ? { width: "100%", left: "0%" }
            : { width: "0%", left: "50%" }
        }
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: letters.length * 0.05 + 0.1,
        }}
      />
    </div>
  );
};

export default AnimatedHeading;
