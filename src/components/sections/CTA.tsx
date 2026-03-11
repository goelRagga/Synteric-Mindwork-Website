"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, BarChart2, ClipboardList, Mail, LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import ContactModal from "@/components/dialogs/ContactModal";

const callouts: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Search,
    title: "AI Discovery Session",
    desc: "We review your data assets and identify 2–3 high-ROI AI use cases specific to your industry.",
  },
  {
    icon: BarChart2,
    title: "Honest ROI Estimate",
    desc: "Rough effort and ROI estimate provided — no sales pitch, just transparent scoping and realistic timelines.",
  },
  {
    icon: ClipboardList,
    title: "AI Opportunity Brief",
    desc: "You receive a detailed AI Opportunity Brief within 3 business days after your first call.",
  },
];

export default function CTA() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />

      <section
        id="cta"
        className="relative py-32 px-6 md:px-12 bg-[#050508] text-center overflow-hidden"
      >
        {/* Background glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="w-[800px] h-[800px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(201,46,142,0.14) 0%, transparent 60%)",
              filter: "blur(40px)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <Reveal>
            <h2 className="font-syne text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.08] mb-6">
              Ready to Move from AI Experimentation<br />
              to AI That{" "}
              <em className="not-italic text-[#c92e8e]">Generates Revenue?</em>
            </h2>

            <p className="text-[#8a8a9a] text-[1rem] leading-relaxed max-w-2xl mx-auto mb-4">
              Most enterprises have tried ChatGPT wrappers, off-the-shelf AI tools, and one-size-fits-all platforms. They&apos;ve seen demos that don&apos;t survive contact with real data. Synteric Mindworks is built for what comes after — the hard part.
            </p>

            <p className="text-[#8a8a9a] text-[0.95rem] leading-relaxed max-w-lg mx-auto mb-10">
              Our AI engineers are ready to map your highest-ROI AI opportunity in a free, no-obligation 60-minute strategy session. No sales pitch — just honest scoping.
            </p>

            <div className="flex gap-4 justify-center flex-wrap mb-20">
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 bg-[#c92e8e] hover:bg-[#e040aa] text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(201,46,142,0.5)] text-[0.95rem]"
              >
                Book Free Strategy Session
              </button>
            </div>
          </Reveal>

          {/* What happens on call */}
          <Reveal delay={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              {callouts.map((c, i) => {
                const Icon = c.icon;
                return (
                  <motion.div
                    key={c.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.2, duration: 0.6 }}
                    className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-6 hover:border-[rgba(201,46,142,0.2)] transition-colors duration-200"
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[rgba(201,46,142,0.12)] text-[#c92e8e] mb-4">
                      <Icon size={20} />
                    </div>
                    <strong className="block font-syne text-[0.95rem] font-bold mb-2 text-[#f5f4f0]">
                      {c.title}
                    </strong>
                    <p className="text-[0.82rem] text-[#8a8a9a] leading-relaxed">{c.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="mt-12 text-[#8a8a9a] text-[0.85rem] flex items-center justify-center gap-2">
              <Mail size={14} className="text-[#c92e8e]" />
              <a
                href="mailto:info@syntericmindworks.com"
                className="text-[#c92e8e] hover:underline"
              >
                info@syntericmindworks.com
              </a>
              {"  ·  "}
              <span className="italic">Synteric Mindworks — Powering The Next Wave Of Intelligence.</span>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}