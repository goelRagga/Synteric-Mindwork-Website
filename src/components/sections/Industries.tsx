"use client";

import { motion } from "framer-motion";
import {
  Building2,
  HeartPulse,
  Film,
  Landmark,
  GraduationCap,
  ShoppingBag,
  Truck,
  Factory,
  LucideIcon,
} from "lucide-react";
import { Reveal, StaggerContainer, staggerItem } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

const industries: { icon: LucideIcon; name: string; desc: string }[] = [
  {
    icon: Building2,
    name: "Financial Services & Fintech",
    desc: "Credit risk scoring, fraud detection, AML transaction monitoring, and algorithmic trading signal generation.",
  },
  {
    icon: HeartPulse,
    name: "Healthcare & Life Sciences",
    desc: "Medical imaging AI achieving radiologist-level accuracy, clinical NLP, and HIPAA-compliant patient models.",
  },
  {
    icon: Film,
    name: "Media & AdTech",
    desc: "Content recommendation engines, automated video tagging, real-time audience segmentation, generative AI.",
  },
  {
    icon: Landmark,
    name: "Government & Public Sector",
    desc: "Smart city platforms, citizen services automation, and FedRAMP-aligned critical infrastructure security.",
  },
  {
    icon: GraduationCap,
    name: "Education & EdTech",
    desc: "Adaptive learning systems, automated essay scoring, AI tutoring bots improving course completion by 40%+.",
  },
  {
    icon: ShoppingBag,
    name: "Retail & E-Commerce",
    desc: "Visual product search, demand forecasting, and real-time personalization engines lifting revenue 15–25%.",
  },
  {
    icon: Truck,
    name: "Logistics & Supply Chain",
    desc: "Route optimization, predictive ETA modeling, and warehouse robotics vision reducing last-mile costs by 30%.",
  },
  {
    icon: Factory,
    name: "Manufacturing",
    desc: "Computer vision QC, predictive maintenance, and defect detection reducing escape rates by 70%+.",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-28 px-6 md:px-12 bg-[#050508]">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <SectionHeader
            label="Industries We Serve"
            title={<>Built for Your<br />Industry&apos;s Reality.</>}
            description="From Series A startups to Fortune 500 organizations — we architect AI for the specific demands of your sector."
          />
        </Reveal>

        <StaggerContainer
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          staggerDelay={0.07}
        >
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.name}
                variants={staggerItem}
                className="group bg-white/[0.03] border border-white/[0.07] rounded-xl p-6 transition-all duration-300 hover:border-[rgba(201,46,142,0.3)] hover:-translate-y-1 cursor-default"
                whileHover={{ backgroundColor: "rgba(201,46,142,0.04)" }}
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/[0.05] text-[#c92e8e] mb-4 transition-transform duration-300 group-hover:scale-110">
                  <Icon size={20} />
                </div>
                <h4 className="font-syne text-[0.92rem] font-bold mb-2 text-[#f5f4f0]">
                  {ind.name}
                </h4>
                <p className="text-[0.8rem] text-[#8a8a9a] leading-relaxed">
                  {ind.desc}
                </p>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
