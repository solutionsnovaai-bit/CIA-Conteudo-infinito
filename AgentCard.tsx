import React from "react";
import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

interface AgentCardProps {
  icon: LucideIcon | string;
  name: string;
  delay?: number;
}

export function AgentCard({ icon: Icon, name, delay = 0 }: AgentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ 
        y: -10,
        rotate: 2,
        borderColor: "var(--color-primary)",
        boxShadow: "0 20px 40px rgba(0, 255, 136, 0.15)" 
      }}
      className="p-6 rounded-2xl bg-surface-elevated border border-border flex flex-col items-center justify-center gap-4 text-center transition-all duration-300 group shadow-2xl"
    >
      <div className="w-12 h-12 rounded-lg bg-background flex items-center justify-center text-primary text-2xl group-hover:scale-110 transition-transform duration-300 shadow-inner">
        {typeof Icon === "string" ? <span>{Icon}</span> : <Icon className="w-6 h-6" />}
      </div>
      <h3 className="font-display font-bold text-text group-hover:text-primary transition-colors duration-300 uppercase tracking-tight text-sm">
        {name}
      </h3>
    </motion.div>
  );
}
