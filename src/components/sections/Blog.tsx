"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Reveal, StaggerContainer, staggerItem } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

const posts = [
  {
    tag: "LLM Deployment",
    title: "How to Deploy LLMs in Enterprise Without Hallucinations",
    desc: "A practical guide to RAG architectures, guardrails, and observability layers that make LLMs production-safe.",
  },
  {
    tag: "Architecture",
    title: "RAG vs Fine-Tuning: Which AI Architecture Is Right for Your Business?",
    desc: "A decision framework for enterprise AI teams evaluating retrieval-augmented generation against custom fine-tuning.",
  },
  {
    tag: "Voice AI",
    title: "Voice AI for Call Centers: ROI Calculator and Implementation Guide",
    desc: "How to quantify the business case for voice AI automation — with real benchmarks from production deployments.",
  },
  {
    tag: "Computer Vision",
    title: "Computer Vision in Manufacturing: Reducing Defects with AI",
    desc: "Case study walkthrough of deploying visual inspection AI that cuts defect escape rates by 70%+.",
  },
  {
    tag: "Document AI",
    title: "AI Document Processing vs Manual Data Entry: A Cost Comparison",
    desc: "Side-by-side ROI analysis of intelligent document processing against traditional manual workflows.",
  },
  {
    tag: "Compliance",
    title: "HIPAA-Compliant AI: Building Healthcare NLP Systems That Pass Compliance",
    desc: "Architecture patterns and compliance checkpoints for deploying NLP in regulated healthcare environments.",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-28 px-6 md:px-12 bg-[#090912]">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <SectionHeader
            label="Thought Leadership"
            title={<>Insights for<br />Enterprise AI Teams.</>}
            description="Practical guidance on deploying AI in production — written by engineers who ship systems, not just slide decks."
          />
        </Reveal>

        <StaggerContainer
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          staggerDelay={0.07}
        >
          {posts.map((post) => (
            <motion.article
              key={post.title}
              variants={staggerItem}
              className="group bg-white/[0.03] border border-white/[0.07] rounded-xl p-7 hover:border-[rgba(201,46,142,0.3)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              whileHover={{ backgroundColor: "rgba(201,46,142,0.04)" }}
            >
              <span className="inline-block text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#c92e8e] bg-[rgba(201,46,142,0.12)] px-3 py-1 rounded-full mb-4">
                {post.tag}
              </span>
              <h4 className="font-syne text-[0.97rem] font-bold mb-3 text-[#f5f4f0] leading-snug group-hover:text-white transition-colors">
                {post.title}
              </h4>
              <p className="text-[0.82rem] text-[#8a8a9a] leading-relaxed mb-5">
                {post.desc}
              </p>
              <span className="inline-flex items-center gap-1.5 text-[#c92e8e] text-[0.78rem] font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                Read article <ArrowRight size={14} />
              </span>
            </motion.article>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
