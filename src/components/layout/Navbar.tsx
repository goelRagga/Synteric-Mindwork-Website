"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "About" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#products", label: "Products" },
  { href: "#industries", label: "Industries" },
  { href: "#why", label: "Why Us" },
  { href: "#blog", label: "Blog" },
];


export function SyntericLogo({ className }: { className?: string }) {
  return (
    <img
      src="./SYNTERIC_LOGO_TEXT.png"
      className="h-8 md:h-[60px] w-auto"
      alt="Synteric Logo"
    />
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-300",
        scrolled
          ? "bg-[#050508]/95 backdrop-blur-xl border-b border-white/[0.07]"
          : "bg-transparent"
      )}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <SyntericLogo className="h-9 w-auto" />
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-8">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-[#8a8a9a] hover:text-[#f5f4f0] text-[0.82rem] font-medium tracking-widest uppercase transition-colors duration-200"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        href="#cta"
        className="hidden md:inline-flex items-center gap-2 bg-[#c92e8e] hover:bg-[#e040aa] text-white text-[0.82rem] font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:-translate-y-[1px] hover:shadow-[0_8px_24px_rgba(201,46,142,0.4)]"
      >
        Book Strategy Call
      </Link>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <span className={cn("w-6 h-0.5 bg-white/80 transition-all duration-300", mobileOpen && "rotate-45 translate-y-2")} />
        <span className={cn("w-6 h-0.5 bg-white/80 transition-all duration-300", mobileOpen && "opacity-0")} />
        <span className={cn("w-6 h-0.5 bg-white/80 transition-all duration-300", mobileOpen && "-rotate-45 -translate-y-2")} />
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#050508]/98 backdrop-blur-xl border-b border-white/[0.07] py-6 px-6 md:hidden"
          >
            <ul className="flex flex-col gap-5">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-[#8a8a9a] hover:text-white text-sm font-medium tracking-widest uppercase transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="#cta"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex bg-[#c92e8e] text-white text-sm font-semibold px-5 py-2.5 rounded-full"
                >
                  Book Strategy Call
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}