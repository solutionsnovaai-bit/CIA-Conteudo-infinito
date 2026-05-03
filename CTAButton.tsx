import React from "react";
import { motion } from "motion/react";
import { cn } from "@/src/lib/utils";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  variant?: "primary" | "outline" | "danger" | "gold";
  size?: "md" | "lg" | "xl";
  glow?: boolean;
}

export function CTAButton({ 
  children, 
  className, 
  href = "https://pay.kiwify.com.br/lRRpH6F",
  variant = "primary",
  size = "lg",
  glow = true
}: CTAButtonProps) {
  const variants = {
    primary: "bg-primary text-background border-primary hover:bg-opacity-90",
    outline: "bg-transparent text-text border-border hover:bg-surface",
    danger: "bg-danger text-text border-danger hover:bg-opacity-90",
    gold: "bg-gold text-background border-gold hover:bg-opacity-90",
  };

  const sizes = {
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl font-bold",
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      animate={glow ? {
        boxShadow: [
          "0 0 0px rgba(0, 255, 136, 0)",
          "0 0 30px rgba(0, 255, 136, 0.3)",
          "0 0 0px rgba(0, 255, 136, 0)",
        ],
      } : {}}
      transition={glow ? {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      } : {}}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg border transition-all duration-300",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
      <ArrowRight className="w-5 h-5" />
    </motion.a>
  );
}
