"use client";

import { motion } from "framer-motion";
import { Reveal, StaggerContainer, staggerItem } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

const steps = [
  {
    num: "01",
    title: "AI Discovery",
    time: "Week 1–2 · No Commitment",
    desc: "Structured workshops with your technical and business stakeholders. Output: AI Opportunity Map, data readiness assessment, prioritized roadmap.",
  },
  {
    num: "02",
    title: "Research & Architecture",
    time: "Week 2–4",
    desc: "Our research engineers evaluate state-of-the-art models against your data. Delivers Technical Architecture Document before a single line of code is written.",
  },
  {
    num: "03",
    title: "Prototype & Validation",
    time: "Week 4–8",
    desc: "Working prototype against a defined accuracy benchmark. Real performance metrics on your actual data — not synthetic benchmarks. Biweekly stakeholder loops.",
  },
  {
    num: "04",
    title: "Production Development",
    time: "Week 8–16",
    desc: "Agile sprints with continuous integration and automated testing. Your AI system is built to handle production load from first deployment — not retrofitted later.",
  },
  {
    num: "05",
    title: "Deployment & Observability",
    time: "Week 14–18",
    desc: "Zero-downtime production rollout with full monitoring dashboards tracking latency, accuracy drift, and API uptime. 30 days on-call post-launch at no extra cost.",
  },
  {
    num: "06",
    title: "Continuous Improvement",
    time: "Ongoing",
    desc: "Scheduled model retraining on new data, performance optimization, and feature expansion. Performance SLAs and roadmap alignment included.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-28 px-6 md:px-12 bg-[#090912]">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <SectionHeader
            label="Engagement Process"
            title={<>From Discovery to<br />Deployed in 18 Weeks.</>}
            description="A battle-tested process engineered to minimize risk and maximize time-to-value from first conversation to production."
          />
        </Reveal>

        <StaggerContainer
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.07] border border-white/[0.07] rounded-2xl overflow-hidden"
          staggerDelay={0.08}
        >
          {steps.map((s) => (
            <motion.div
              key={s.num}
              variants={staggerItem}
              className="group bg-[#090912] hover:bg-[#0d0d18] p-10 transition-colors duration-300"
            >
              <div className="font-syne text-6xl font-extrabold text-[rgba(201,46,142,0.18)] leading-none mb-5 tracking-[-0.05em] group-hover:text-[rgba(201,46,142,0.3)] transition-colors duration-300">
                {s.num}
              </div>
              <h4 className="font-syne text-[1rem] font-bold mb-2 text-[#f5f4f0]">
                {s.title}
              </h4>
              <p className="text-[0.83rem] text-[#8a8a9a] leading-relaxed mb-4">
                {s.desc}
              </p>
              <span className="text-[0.7rem] font-semibold text-[#c92e8e] uppercase tracking-[0.1em]">
                {s.time}
              </span>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
