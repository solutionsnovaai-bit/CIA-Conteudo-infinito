import { motion } from "motion/react";
import { cn } from "@/src/lib/utils";
import { wordReveal } from "@/src/lib/animations";

interface AnimatedTextProps {
  text: string;
  className?: string;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "p";
}

export function AnimatedText({ text, className, stagger = 0.08, as: Tag = "h1" }: AnimatedTextProps) {
  const words = text.split(" ");

  return (
    <Tag className={cn("flex flex-wrap gap-x-[0.3em]", className)}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={wordReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            delay: i * stagger,
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
}
