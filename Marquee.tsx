import { motion } from "motion/react";
import { cn } from "@/src/lib/utils";

interface MarqueeProps {
  items: string[];
  className?: string;
  speed?: number;
}

export function Marquee({ items, className, speed = 20 }: MarqueeProps) {
  return (
    <div className={cn("overflow-hidden whitespace-nowrap flex py-4 border-y border-border/50 bg-surface/30 backdrop-blur-sm", className)}>
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex gap-12 items-center min-w-max px-12"
      >
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-4">
            <span className="text-sm font-mono font-bold uppercase tracking-[0.3em] text-text-muted">
              {item}
            </span>
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
