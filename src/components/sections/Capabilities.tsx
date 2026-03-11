"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, FileText, MessageSquare, Eye, TrendingUp, LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

type Cap = {
  id: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  product: string;
  heading: string;
  desc: string;
  metrics: { value: string; label: string }[];
  features: string[];
};

const caps: Cap[] = [
  {
    id: "speech",
    icon: Mic,
    title: "Speech AI",
    subtitle: "Voice & Audio Intelligence",
    product: "SynthVoice Pro™",
    heading: "Speech AI & Voice Technology",
    desc: "Voice AI is transforming customer experience, enterprise automation, and accessibility. Our Speech AI platform rivals Amazon Polly and ElevenLabs while offering on-premise deployment and domain-specific fine-tuning that public APIs cannot match.",
    metrics: [
      { value: "95%+", label: "ASR Accuracy" },
      { value: "100+", label: "Languages" },
      { value: "45%", label: "Agent Cost Cut" },
    ],
    features: [
      "Automatic Speech Recognition with 95%+ accuracy across 100+ languages",
      "Text-to-Speech synthesis indistinguishable from human voice",
      "Real-time voice conversion and speaker cloning",
      "Emotion detection and sentiment classification from audio",
      "Noise suppression and audio enhancement for call centers",
    ],
  },
  {
    id: "ocr",
    icon: FileText,
    title: "OCR & Documents",
    subtitle: "Document Intelligence",
    product: "DocuSense AI™",
    heading: "OCR & Document Intelligence",
    desc: "Modern enterprises are drowning in unstructured document data. Our DocuSense AI™ platform extracts structured intelligence from any document type — PDFs, scanned images, handwritten forms — outperforming Google Vision API and AWS Textract.",
    metrics: [
      { value: "99%+", label: "Field Accuracy" },
      { value: "10K+", label: "Docs/Hour" },
      { value: "0", label: "Human Touchpoints" },
    ],
    features: [
      "99%+ field-level accuracy on structured documents (invoices, contracts, ID cards)",
      "Handwriting recognition and intelligent form processing",
      "Table extraction and reconstruction from unstructured PDFs",
      "KYC document verification for passports, driver's licenses, government IDs",
      "ERP integration via REST API (SAP, Oracle, Salesforce)",
    ],
  },
  {
    id: "nlp",
    icon: MessageSquare,
    title: "NLP & LLMs",
    subtitle: "Language Understanding",
    product: "LinguaBot™",
    heading: "NLP & LLM Integration",
    desc: "We fine-tune models on your proprietary data, implement retrieval-augmented generation (RAG) architectures, and build the observability layer to ensure LLMs behave predictably at scale — not just in demos.",
    metrics: [
      { value: "50+", label: "Languages" },
      { value: "35–50%", label: "Ticket Reduction" },
      { value: "0", label: "Hallucinations" },
    ],
    features: [
      "Enterprise chatbot and virtual assistant development (LinguaBot™)",
      "Document Q&A and knowledge base search using RAG architecture",
      "Real-time sentiment analysis and brand monitoring",
      "Automated content moderation at social media scale",
      "Named entity recognition and information extraction pipelines",
    ],
  },
  {
    id: "vision",
    icon: Eye,
    title: "Computer Vision",
    subtitle: "Visual Intelligence",
    product: "VisionEdge™",
    heading: "Computer Vision & Facial Analysis",
    desc: "Visual data is the richest — and most underutilized — data source in most enterprises. Our computer vision platforms are deployed in security, manufacturing, retail, and healthcare, competing with AWS Rekognition and Clarifai.",
    metrics: [
      { value: "70%+", label: "Defect Reduction" },
      { value: "Real-time", label: "Processing" },
      { value: "GDPR", label: "Compliant" },
    ],
    features: [
      "Real-time facial recognition and liveness detection (anti-spoofing)",
      "Object detection and classification at video-stream speed",
      "Anomaly and defect detection for manufacturing quality control",
      "Crowd analytics and footfall measurement for retail and venues",
      "License plate recognition and vehicle tracking",
    ],
  },
  {
    id: "forecast",
    icon: TrendingUp,
    title: "Predictive Analytics",
    subtitle: "Forecasting & Time Series",
    product: "ForecastIQ™",
    heading: "Predictive Analytics & Forecasting",
    desc: "Data without foresight is just history. Our predictive analytics practice converts complex temporal datasets into forward-looking intelligence — enabling proactive decisions across supply chain, finance, energy, and operations.",
    metrics: [
      { value: "<5%", label: "MAPE Error Rate" },
      { value: "20–30%", label: "Inventory Savings" },
      { value: "25%", label: "Maintenance Cut" },
    ],
    features: [
      "Demand forecasting with MAPE under 5% for retail and logistics",
      "Anomaly detection for infrastructure monitoring and predictive maintenance",
      "Financial market pattern recognition and risk modeling",
      "Churn prediction and lifetime value modeling for SaaS",
      "AutoML pipelines with explainability dashboards",
    ],
  },
];

export default function Capabilities() {
  const [active, setActive] = useState("speech");
  const current = caps.find((c) => c.id === active)!;

  return (
    <section
      id="capabilities"
      className="py-28 px-6 md:px-12 bg-[#090912]"
    >
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <SectionHeader
            label="Deep Capabilities"
            title={<>Research-Led.<br />Production-Hardened.</>}
            description="Five core AI capability areas, each representing a full-stack offering from model selection to cloud deployment."
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-16">
          {/* Tab nav */}
          <Reveal delay={0.1}>
            <div className="flex flex-col gap-2 lg:sticky lg:top-28">
              {caps.map((c) => {
                const Icon = c.icon;
                return (
                  <motion.button
                    key={c.id}
                    onClick={() => setActive(c.id)}
                    className={`flex items-center gap-4 px-5 py-4 rounded-xl border text-left transition-all duration-200 ${
                      active === c.id
                        ? "bg-[rgba(201,46,142,0.12)] border-[rgba(201,46,142,0.25)]"
                        : "bg-transparent border-transparent hover:bg-white/[0.03]"
                    }`}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className={`w-8 h-8 flex items-center justify-center rounded-lg transition-colors ${
                      active === c.id ? "bg-[rgba(201,46,142,0.2)] text-[#e040aa]" : "bg-white/[0.05] text-[#8a8a9a]"
                    }`}>
                      <Icon size={16} />
                    </div>
                    <div>
                      <strong
                        className={`block text-[0.9rem] font-semibold transition-colors ${
                          active === c.id ? "text-[#e040aa]" : "text-[#f5f4f0]"
                        }`}
                      >
                        {c.title}
                      </strong>
                      <span className="text-[0.75rem] text-[#8a8a9a]">{c.subtitle}</span>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </Reveal>

          {/* Content panel */}
          <Reveal delay={0.2}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="pt-2"
              >
                {/* Product badge */}
                <span className="inline-block text-[0.78rem] font-bold text-white bg-gradient-to-r from-[#c92e8e] to-[#7c3aed] px-4 py-1.5 rounded-full mb-5">
                  {current.product}
                </span>

                <h3 className="font-syne text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-[#f5f4f0]">
                  {current.heading}
                </h3>

                <p className="text-[#8a8a9a] text-[0.95rem] leading-[1.75] mb-8">
                  {current.desc}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {current.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-4 text-center"
                    >
                      <strong className="block font-syne text-2xl font-extrabold text-[#c92e8e] tracking-tight">
                        {m.value}
                      </strong>
                      <span className="text-[0.7rem] text-[#8a8a9a] uppercase tracking-wider">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="flex flex-col gap-3">
                  {current.features.map((f) => (
                    <div key={f} className="flex items-start gap-3 text-[0.88rem] text-[#f5f4f0]/80">
                      <span className="text-[#c92e8e] font-bold mt-0.5 min-w-[1rem]">→</span>
                      {f}
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
