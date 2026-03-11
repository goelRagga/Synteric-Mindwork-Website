"use client";

import { Target, FlaskConical, Shield, Lock, CircleDollarSign, Handshake, LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

const rows = [
  {
    cap: "Custom model fine-tuning",
    us: "Always",
    cloud: "Limited",
    agency: "Yes (expensive)",
  },
  {
    cap: "On-premise deployment",
    us: "Yes",
    cloud: "Rare",
    agency: "Case-by-case",
  },
  {
    cap: "Domain-specific accuracy",
    us: "Optimized",
    cloud: "General purpose",
    agency: "Varies",
  },
  {
    cap: "Time to first production",
    us: "8–12 weeks",
    cloud: "Self-serve only",
    agency: "6–18 months",
  },
  {
    cap: "Pricing model",
    us: "Outcome-based",
    cloud: "Pay-per-token/API",
    agency: "T&M hourly",
  },
  {
    cap: "Ongoing model improvement",
    us: "Included",
    cloud: "Not included",
    agency: "Separate SOW",
  },
];

const commitments: { icon: LucideIcon; text: string }[] = [
  { icon: Target, text: "Custom AI — no generic wrappers; every model trained on your data" },
  { icon: FlaskConical, text: "Research-led — we implement state-of-the-art papers before they become mainstream" },
  { icon: Shield, text: "Production-hardened — architectures tested against real enterprise load from day one" },
  { icon: Lock, text: "Enterprise security — SOC 2 practices, end-to-end encryption, data residency options" },
  { icon: CircleDollarSign, text: "Transparent pricing — milestone-based contracts with defined deliverables" },
  { icon: Handshake, text: "Long-term partnership — model retraining, performance SLAs, and roadmap alignment included" },
];

export default function WhyUs() {
  return (
    <section id="why" className="py-28 px-6 md:px-12 bg-[#050508]">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <SectionHeader
            label="Why Synteric Mindworks"
            title={
              <>
                We Occupy a{" "}
                <em className="not-italic text-[#c92e8e]">Distinct Position.</em>
              </>
            }
            description="Not a cloud vendor. Not a consultancy. We architect custom AI capabilities purpose-built for your data, industry, and compliance needs."
          />
        </Reveal>

        {/* Comparison table */}
        <Reveal delay={0.15}>
          <div className="mt-16 overflow-x-auto rounded-2xl border border-white/[0.07]">
            <table className="w-full text-[0.88rem] border-collapse">
              <thead>
                <tr className="border-b border-white/[0.07]">
                  <th className="text-left px-6 py-4 text-[0.78rem] font-bold tracking-[0.06em] uppercase text-[#8a8a9a] bg-white/[0.02]">
                    Capability
                  </th>
                  <th className="text-left px-6 py-4 text-[0.78rem] font-bold tracking-[0.06em] uppercase text-[#c92e8e] bg-[rgba(201,46,142,0.06)]">
                    Synteric Mindworks
                  </th>
                  <th className="text-left px-6 py-4 text-[0.78rem] font-bold tracking-[0.06em] uppercase text-[#8a8a9a] bg-white/[0.02]">
                    Big Cloud AI
                  </th>
                  <th className="text-left px-6 py-4 text-[0.78rem] font-bold tracking-[0.06em] uppercase text-[#8a8a9a] bg-white/[0.02]">
                    AI Consultancies
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr
                    key={r.cap}
                    className={`border-b border-white/[0.05] transition-colors hover:bg-white/[0.02] ${
                      i % 2 === 0 ? "" : "bg-white/[0.01]"
                    }`}
                  >
                    <td className="px-6 py-4 font-medium text-[#f5f4f0]/85">{r.cap}</td>
                    <td className="px-6 py-4 font-semibold text-[#f5f4f0] bg-[rgba(201,46,142,0.04)]">
                      <span className="text-[#c92e8e] mr-1">✓</span>
                      {r.us}
                    </td>
                    <td className="px-6 py-4 text-[#8a8a9a]">{r.cloud}</td>
                    <td className="px-6 py-4 text-[#8a8a9a]">{r.agency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        {/* Commitments */}
        <Reveal delay={0.2}>
          <h3 className="font-syne text-xl font-bold mt-16 mb-8 text-[#f5f4f0]">
            Our Six Core Commitments
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {commitments.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.text}
                  className="flex items-start gap-4 bg-white/[0.03] border border-white/[0.06] rounded-xl p-5 hover:border-[rgba(201,46,142,0.2)] transition-colors duration-200"
                >
                  <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-[rgba(201,46,142,0.12)] text-[#c92e8e] shrink-0 mt-0.5">
                    <Icon size={16} />
                  </div>
                  <p className="text-[0.85rem] text-[#8a8a9a] leading-relaxed">{c.text}</p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
