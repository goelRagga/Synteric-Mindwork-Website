"use client";

import { Reveal, StaggerContainer, staggerItem } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";
import { Mic, Eye, BrainCircuit, FileSearch, Server, Monitor, Cloud, Activity, LucideIcon } from "lucide-react";

const stacks: { icon: LucideIcon; title: string; items: string[] }[] = [
  {
    icon: Mic,
    title: "Speech AI",
    items: ["OpenAI Whisper", "Wav2Vec2", "XTTS", "SpeechT5", "RVC"],
  },
  {
    icon: Eye,
    title: "Vision",
    items: ["YOLOv8", "Detectron2", "OpenCV", "MediaPipe", "DeepFace"],
  },
  {
    icon: BrainCircuit,
    title: "NLP / LLM",
    items: ["GPT-4o", "Claude 3 Opus", "Llama 3", "Mistral", "Custom Fine-tunes"],
  },
  {
    icon: FileSearch,
    title: "OCR",
    items: ["Google Vision API", "AWS Textract", "PyTesseract", "PaddleOCR", "Custom Pipelines"],
  },
  {
    icon: Server,
    title: "Backend",
    items: ["Python / FastAPI", "Node.js / WS", "GoLang", "PostgreSQL", "Redis / ES"],
  },
  {
    icon: Monitor,
    title: "Frontend",
    items: ["React / Next.js", "Angular", "WebRTC", "TailwindCSS", "TypeScript"],
  },
  {
    icon: Cloud,
    title: "Cloud",
    items: ["AWS (preferred)", "Google Cloud", "Microsoft Azure", "Docker", "Kubernetes"],
  },
  {
    icon: Activity,
    title: "MLOps",
    items: ["MLflow", "Weights & Biases", "Ray Serve", "BentoML", "Prometheus / Grafana"],
  },
];

export default function TechStack() {
  return (
    <section id="tech" className="py-28 px-6 md:px-12 bg-[#090912]">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <SectionHeader
            label="Technology Stack"
            title={<>Chosen for Performance,<br />Not Hype Cycles.</>}
            description="Our engineering teams select technologies based on performance benchmarks, maintainability, and enterprise security standards."
          />
        </Reveal>

        <StaggerContainer
          className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4"
          staggerDelay={0.06}
        >
          {stacks.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                variants={staggerItem}
                className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-5 hover:border-[rgba(201,46,142,0.2)] transition-colors duration-200"
              >
                <div className="flex items-center gap-2.5 mb-3 pb-2.5 border-b border-white/[0.07]">
                  <Icon size={14} className="text-[#c92e8e] shrink-0" />
                  <h5 className="text-[0.7rem] font-bold tracking-[0.12em] uppercase text-[#c92e8e]">
                    {s.title}
                  </h5>
                </div>
                <ul className="flex flex-col gap-1.5">
                  {s.items.map((item) => (
                    <li key={item} className="text-[0.78rem] text-[#8a8a9a]">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
