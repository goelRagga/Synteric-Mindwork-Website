"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";

function AnimatedOrb({
  className,
  delay = 0,
}: {
  className: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none blur-[90px] ${className}`}
      animate={{
        x: [0, 40, 0],
        y: [0, 30, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

function StatCounter({
  value,
  suffix,
  label,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
    >
      <strong className="block font-syne text-4xl font-extrabold tracking-tight text-[#f5f4f0]">
        {value}
        <span className="text-[#c92e8e]">{suffix}</span>
      </strong>
      <small className="text-[0.72rem] text-[#8a8a9a] uppercase tracking-[0.1em]">
        {label}
      </small>
    </motion.div>
  );
}

const heroVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] },
  }),
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28 pb-16 overflow-hidden"
    >
      {/* Background orbs */}
      <AnimatedOrb
        className="w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(201,46,142,0.25)_0%,transparent_70%)] -top-32 -left-40"
        delay={0}
      />
      <AnimatedOrb
        className="w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(100,60,200,0.2)_0%,transparent_70%)] -bottom-32 -right-24"
        delay={4}
      />
      <AnimatedOrb
        className="w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(201,46,142,0.15)_0%,transparent_70%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        delay={8}
      />

      {/* Badge */}
      <motion.div
        custom={0.2}
        initial="hidden"
        animate="visible"
        variants={heroVariants}
        className="inline-flex items-center gap-2 bg-[rgba(201,46,142,0.12)] border border-[rgba(201,46,142,0.3)] text-[#e040aa] text-[0.75rem] font-bold tracking-[0.12em] uppercase px-4 py-2 rounded-full mb-8"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#c92e8e] animate-pulse" />
        Powering the Next Wave of Intelligence
      </motion.div>

      {/* H1 */}
      <motion.h1
        custom={0.4}
        initial="hidden"
        animate="visible"
        variants={heroVariants}
        className="font-syne text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-[-0.03em] max-w-4xl"
      >
        Enterprise AI Solutions That Deliver{" "}
        <em className="not-italic text-[#c92e8e]">Measurable Results</em>
        {" "}— Not Just Promises
      </motion.h1>

      {/* Sub */}
      <motion.p
        custom={0.6}
        initial="hidden"
        animate="visible"
        variants={heroVariants}
        className="mt-6 mb-8 text-[1.1rem] text-[#8a8a9a] font-light leading-[1.7] max-w-xl"
      >
        Custom-built AI systems in speech recognition, computer vision, NLP, and
        predictive analytics — engineered for production at scale.
      </motion.p>

      {/* CTAs */}
      <motion.div
        custom={0.8}
        initial="hidden"
        animate="visible"
        variants={heroVariants}
        className="flex gap-4 flex-wrap justify-center"
      >
        <Link
          href="#cta"
          className="inline-flex items-center gap-2 bg-[#c92e8e] hover:bg-[#e040aa] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(201,46,142,0.45)] text-[0.92rem]"
        >
          Schedule Free AI Consultation
        </Link>
        <Link
          href="#products"
          className="inline-flex items-center gap-2 bg-transparent text-[#f5f4f0] font-medium border border-white/10 hover:border-white/30 hover:bg-white/5 px-7 py-3.5 rounded-full transition-all duration-200 text-[0.92rem]"
        >
          Explore Our AI Products →
        </Link>
        {/* <Link
          href="#capabilities"
          className="inline-flex items-center gap-2 bg-transparent text-[#8a8a9a] font-medium hover:text-[#f5f4f0] px-7 py-3.5 rounded-full transition-all duration-200 text-[0.92rem]"
        >
          See Live Demos →
        </Link> */}
      </motion.div>

      {/* Stats strip */}
      {/* <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.7 }}
        className="mt-20 pt-10 border-t border-white/[0.07] flex flex-wrap gap-12 justify-center"
      >
        <StatCounter value={95} suffix="%+" label="Speech Accuracy" delay={1.1} />
        <StatCounter value={99} suffix="%+" label="OCR Field Accuracy" delay={1.2} />
        <StatCounter value={40} suffix="%" label="Cost Reduction" delay={1.3} />
        <StatCounter value={18} suffix="wk" label="To Production" delay={1.4} />
      </motion.div> */}

      {/* Scroll indicator */}
{/* Scroll indicator */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.6 }}
  className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
>
  <span className="text-[#8a8a9a] text-[0.65rem] tracking-[0.15em] uppercase">Scroll</span>
  <motion.svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    animate={{ y: [0, 8, 0] }}
    transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
  >
    <path
      d="M4 6L10 13L16 6"
      stroke="#c92e8e"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </motion.svg>
</motion.div>
    </section>
  );
}
