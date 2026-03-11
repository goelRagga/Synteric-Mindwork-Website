"use client";

import { motion } from "framer-motion";
import { Mic, FileText, MessageSquare, Eye, TrendingUp, Workflow, LucideIcon } from "lucide-react";
import { Reveal, StaggerContainer, staggerItem } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

const products: { icon: LucideIcon; tag: string; name: string; desc: string; alts: string }[] = [
  {
    icon: Mic,
    tag: "Speech AI",
    name: "SynthVoice Pro™",
    desc: "End-to-end voice AI platform. Real-time ASR, TTS synthesis, speaker diarization across 100+ languages. Deployable on AWS, Google Cloud, Azure, or on-premise. SOC 2 Type II certified.",
    alts: "Amazon Polly, ElevenLabs, Deepgram",
  },
  {
    icon: FileText,
    tag: "Document AI",
    name: "DocuSense AI™",
    desc: "Automated extraction from invoices, contracts, IDs, and forms with 99%+ field accuracy. Pre-built compliance workflows for financial services and healthcare.",
    alts: "AWS Textract, ABBYY FlexiCapture, Hyperscience",
  },
  {
    icon: MessageSquare,
    tag: "NLP & LLM",
    name: "LinguaBot™",
    desc: "Context-aware chatbots and virtual assistants built on RAG + LLM architecture. Native integrations with Salesforce, ServiceNow, Zendesk, Slack, and Microsoft Teams.",
    alts: "IBM Watson Assistant, Google CCAI, Intercom Fin",
  },
  {
    icon: Eye,
    tag: "Computer Vision",
    name: "VisionEdge™",
    desc: "Real-time object detection, facial recognition, and anomaly detection. Edge and cloud deployment. GDPR/CCPA compliant identity modules.",
    alts: "AWS Rekognition, Azure Computer Vision",
  },
  {
    icon: TrendingUp,
    tag: "Predictive AI",
    name: "ForecastIQ™",
    desc: "Automated time series forecasting with explainability dashboards. Pre-built connectors for Snowflake, BigQuery, Databricks, Tableau, and Power BI.",
    alts: "DataRobot, H2O.ai, SAS Forecasting",
  },
  {
    icon: Workflow,
    tag: "Automation",
    name: "OmniFlow AI™",
    desc: "Orchestrates multiple AI capabilities — OCR + NLP + workflow + ERP integration — into end-to-end intelligent process automation.",
    alts: "UiPath AI Center, Automation Anywhere, ServiceNow AI",
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="py-28 px-6 md:px-12 bg-gradient-to-b from-[#050508] to-[#090912]"
    >
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <SectionHeader
            label="Our Product Suite"
            title={<>Six AI Platforms.<br />Infinite Possibilities.</>}
            description="Every product is a full-stack AI capability — from model fine-tuning to cloud deployment and monitoring."
          />
        </Reveal>

        <StaggerContainer
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.07] border border-white/[0.07] rounded-2xl overflow-hidden"
          staggerDelay={0.08}
        >
          {products.map((p) => {
            const Icon = p.icon;
            return (
            <motion.div
              key={p.name}
              variants={staggerItem}
              className="group relative bg-[#050508] p-10 cursor-pointer overflow-hidden"
              // whileHover={{ backgroundColor: "rgba(201,46,142,0.04)" }}
              transition={{ duration: 0.25 }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: "radial-gradient(circle at 30% 30%, rgba(201,46,142,0.08) 0%, transparent 60%)" }}
              />

              <div className="mb-5 w-10 h-10 flex items-center justify-center rounded-lg bg-[rgba(201,46,142,0.12)] text-[#c92e8e] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                <Icon size={20} />
              </div>

              <span className="inline-block text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#c92e8e] bg-[rgba(201,46,142,0.12)] px-3 py-1 rounded-full mb-3">
                {p.tag}
              </span>

              <h3 className="font-syne text-[1.1rem] font-bold mb-2 tracking-tight text-[#f5f4f0] group-hover:text-white transition-colors">
                {p.name}
              </h3>

              <p className="text-[0.87rem] text-[#8a8a9a] leading-relaxed">
                {p.desc}
              </p>

              {/* <div className="mt-5 text-[#c92e8e] text-[0.78rem] font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                Learn more →
              </div> */}
            </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
