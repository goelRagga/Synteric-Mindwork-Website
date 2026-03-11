"use client";

import { Mic2, ScanText, BrainCircuit, ScanFace, TrendingUp, LucideIcon } from "lucide-react";
import { Reveal, StaggerContainer, staggerItem } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";

const competencies: { icon: LucideIcon; title: string }[] = [
  { icon: Mic2, title: "Speech AI & Voice Interfaces" },
  { icon: ScanText, title: "OCR & Document Intelligence" },
  { icon: BrainCircuit, title: "NLP & Large Language Models" },
  { icon: ScanFace, title: "Computer Vision & Facial Analysis" },
  { icon: TrendingUp, title: "Predictive Analytics & Forecasting" },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6 md:px-12 bg-[#090912]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <div>
            <Reveal>
              <SectionHeader
                label="About Us"
                title={<>We Build AI That Ships —<br />Not Just AI That Impresses.</>}
              />
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-8 text-[0.95rem] text-[#8a8a9a] leading-[1.8]">
                Founded in 2022, Synteric Mindworks (a division of TCB Infotech Pvt Ltd) was built on a straightforward premise: the gap between AI research and enterprise deployment is where most companies fail. We exist to close that gap.
              </p>
              <p className="mt-4 text-[0.95rem] text-[#8a8a9a] leading-[1.8]">
                While companies like OpenAI, Anthropic, and Cohere define the frontier of AI research, and systems integrators simply resell their APIs, Synteric Mindworks occupies a distinct position — we develop custom, production-hardened AI systems on top of cutting-edge foundations, tailored precisely to your industry, data, and compliance needs.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 grid grid-cols-1 gap-6">
                <div className="border-l-2 border-[#c92e8e] pl-5">
                  <strong className="block font-syne text-[0.85rem] font-bold text-[#f5f4f0] mb-1 uppercase tracking-wider">
                    Our Mission
                  </strong>
                  <p className="text-[0.88rem] text-[#8a8a9a] leading-relaxed">
                    To make advanced artificial intelligence accessible, deployable, and measurable for enterprises of all sizes — from Series A startups to Fortune 500 organizations.
                  </p>
                </div>
                <div className="border-l-2 border-[#c92e8e] pl-5">
                  <strong className="block font-syne text-[0.85rem] font-bold text-[#f5f4f0] mb-1 uppercase tracking-wider">
                    Our Differentiator
                  </strong>
                  <p className="text-[0.88rem] text-[#8a8a9a] leading-relaxed">
                    We don&apos;t sell AI products. We architect AI capabilities. Our engineers combine deep research expertise with backend engineering rigor to deliver systems that handle real-world load, edge cases, and regulatory demands from day one.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: Core Competencies */}
          <div>
            <Reveal delay={0.15}>
              <h3 className="font-syne text-sm font-bold uppercase tracking-[0.12em] text-[#c92e8e] mb-6">
                Core Competencies
              </h3>
            </Reveal>
            <StaggerContainer className="flex flex-col gap-3" staggerDelay={0.07}>
              {competencies.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    variants={staggerItem}
                    className="flex items-center gap-4 bg-white/[0.03] border border-white/[0.07] rounded-xl px-5 py-4 hover:border-[rgba(201,46,142,0.25)] hover:bg-[rgba(201,46,142,0.04)] transition-all duration-200"
                  >
                    <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-[rgba(201,46,142,0.12)] text-[#c92e8e] shrink-0">
                      <Icon size={18} />
                    </div>
                    <span className="text-[0.9rem] font-medium text-[#f5f4f0]">{item.title}</span>
                  </motion.div>
                );
              })}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
