import React from "react";
import { cn } from "@/src/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "gold" | "accent";
}

export function Badge({ children, className, variant = "primary" }: BadgeProps) {
  const variants = {
    primary: "bg-primary/10 text-primary border-primary/20",
    gold: "bg-gold/10 text-gold border-gold/20",
    accent: "bg-accent/10 text-accent border-accent/20",
  };

  return (
    <span className={cn(
      "px-3 py-1 rounded font-mono text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase border",
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
}
