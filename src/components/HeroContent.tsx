"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function HeroContent({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
