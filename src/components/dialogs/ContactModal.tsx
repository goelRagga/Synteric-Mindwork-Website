"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2, Loader2 } from "lucide-react";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

type Status = "idle" | "loading" | "success" | "error";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 32 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] },
  },
  exit: {
    opacity: 0,
    scale: 0.94,
    y: 20,
    transition: { duration: 0.25, ease: "easeIn" },
  },
};

const fieldVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.07 + 0.15, duration: 0.4 },
  }),
};

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in Name, Email and Message.");
      return;
    }
    setError("");
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setForm({ name: "", email: "", company: "", message: "" });
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again or email us directly.");
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStatus("idle");
      setError("");
    }, 300);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <motion.div
              className="relative w-full max-w-lg pointer-events-auto bg-[#0c0b10] border border-white/[0.09] rounded-2xl shadow-[0_40px_100px_rgba(0,0,0,0.7)] overflow-hidden"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Pink glow top */}
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-40 rounded-full bg-[rgba(201,46,142,0.18)] blur-3xl pointer-events-none" />

              {/* Top bar */}
              <div className="relative flex items-center justify-between px-7 pt-7 pb-5 border-b border-white/[0.06]">
                <div>
                  <h2 className="font-syne text-xl font-extrabold text-[#f5f4f0] tracking-tight">
                    Book Your Free Strategy Session
                  </h2>
                  <p className="text-[0.78rem] text-[#8a8a9a] mt-0.5">
                    60 min · No sales pitch · AI Opportunity Brief included
                  </p>
                </div>
                <button
                  onClick={handleClose}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-[#8a8a9a] hover:text-white transition-all duration-200"
                >
                  <X size={15} />
                </button>
              </div>

              {/* Body */}
              <div className="px-7 py-6">
                <AnimatePresence mode="wait">
                  {status === "success" ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-10 text-center gap-4"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 14 }}
                      >
                        <CheckCircle2 size={52} className="text-[#c92e8e]" />
                      </motion.div>
                      <h3 className="font-syne text-lg font-bold text-[#f5f4f0]">
                        You&apos;re on the list!
                      </h3>
                      <p className="text-[0.83rem] text-[#8a8a9a] max-w-xs leading-relaxed">
                        We&apos;ll reach out within 1 business day to confirm your session. Check your inbox for a confirmation.
                      </p>
                      <button
                        onClick={handleClose}
                        className="mt-2 text-[0.8rem] text-[#c92e8e] hover:underline"
                      >
                        Close
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div key="form" className="flex flex-col gap-4">
                      {/* Name + Email row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                          { name: "name", label: "Full Name *", placeholder: "Jane Smith", i: 0 },
                          { name: "email", label: "Work Email *", placeholder: "jane@company.com", i: 1 },
                        ].map((f) => (
                          <motion.div
                            key={f.name}
                            custom={f.i}
                            variants={fieldVariants}
                            initial="hidden"
                            animate="visible"
                            className="flex flex-col gap-1.5"
                          >
                            <label className="text-[0.73rem] text-[#8a8a9a] uppercase tracking-wider font-medium">
                              {f.label}
                            </label>
                            <input
                              name={f.name}
                              type={f.name === "email" ? "email" : "text"}
                              placeholder={f.placeholder}
                              value={form[f.name as keyof typeof form]}
                              onChange={handleChange}
                              className="bg-white/[0.04] border border-white/[0.08] focus:border-[rgba(201,46,142,0.5)] focus:bg-white/[0.06] rounded-lg px-4 py-2.5 text-[0.88rem] text-[#f5f4f0] placeholder-[#4a4a5a] outline-none transition-all duration-200"
                            />
                          </motion.div>
                        ))}
                      </div>

                      {/* Company */}
                      <motion.div
                        custom={2}
                        variants={fieldVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col gap-1.5"
                      >
                        <label className="text-[0.73rem] text-[#8a8a9a] uppercase tracking-wider font-medium">
                          Company / Organisation
                        </label>
                        <input
                          name="company"
                          type="text"
                          placeholder="Acme Corp"
                          value={form.company}
                          onChange={handleChange}
                          className="bg-white/[0.04] border border-white/[0.08] focus:border-[rgba(201,46,142,0.5)] focus:bg-white/[0.06] rounded-lg px-4 py-2.5 text-[0.88rem] text-[#f5f4f0] placeholder-[#4a4a5a] outline-none transition-all duration-200"
                        />
                      </motion.div>

                      {/* Message */}
                      <motion.div
                        custom={3}
                        variants={fieldVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col gap-1.5"
                      >
                        <label className="text-[0.73rem] text-[#8a8a9a] uppercase tracking-wider font-medium">
                          What are you trying to solve? *
                        </label>
                        <textarea
                          name="message"
                          rows={4}
                          placeholder="Briefly describe your AI challenge or use case..."
                          value={form.message}
                          onChange={handleChange}
                          className="bg-white/[0.04] border border-white/[0.08] focus:border-[rgba(201,46,142,0.5)] focus:bg-white/[0.06] rounded-lg px-4 py-2.5 text-[0.88rem] text-[#f5f4f0] placeholder-[#4a4a5a] outline-none transition-all duration-200 resize-none"
                        />
                      </motion.div>

                      {/* Error */}
                      {error && (
                        <p className="text-[0.78rem] text-red-400">{error}</p>
                      )}

                      {/* Submit */}
                      <motion.div
                        custom={4}
                        variants={fieldVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        <button
                          onClick={handleSubmit}
                          disabled={status === "loading"}
                          className="w-full flex items-center justify-center gap-2 bg-[#c92e8e] hover:bg-[#e040aa] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-6 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(201,46,142,0.45)] text-[0.9rem]"
                        >
                          {status === "loading" ? (
                            <>
                              <Loader2 size={16} className="animate-spin" />
                              Sending…
                            </>
                          ) : (
                            <>
                              <Send size={15} />
                              Book My Free Session
                            </>
                          )}
                        </button>
                      </motion.div>

                      <p className="text-center text-[0.72rem] text-[#4a4a5a]">
                        No spam. No commitment. We respond within 1 business day.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}