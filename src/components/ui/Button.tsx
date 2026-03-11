"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  size = "md",
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 font-semibold rounded-full transition-all duration-200 cursor-pointer select-none";

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-[0.9rem]",
    lg: "px-8 py-4 text-base",
  };

  const variants = {
    primary:
      "bg-[#c92e8e] text-white hover:bg-[#e040aa] hover:shadow-[0_12px_30px_rgba(201,46,142,0.4)] hover:-translate-y-[2px]",
    ghost:
      "bg-transparent text-[#f5f4f0] border border-white/10 hover:border-white/30 hover:bg-white/5",
  };

  const classes = cn(base, sizes[size], variants[variant], className);

  const MotionComp = motion.button;
  const MotionLink = motion(Link);

  if (href) {
    return (
      <MotionLink
        href={href}
        className={classes}
        whileTap={{ scale: 0.97 }}
      >
        {children}
      </MotionLink>
    );
  }

  return (
    <MotionComp
      onClick={onClick}
      className={classes}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </MotionComp>
  );
}
