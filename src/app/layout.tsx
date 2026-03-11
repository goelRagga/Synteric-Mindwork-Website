import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-dm",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Synteric Mindworks — Enterprise AI Solutions That Deliver Measurable Results",
  description:
    "Custom-built AI systems in speech recognition, computer vision, NLP, and predictive analytics — engineered for production at scale.",
  keywords:
    "enterprise AI solutions, speech AI, computer vision, NLP, predictive analytics, AI development company, LLM integration, AI consulting",
  openGraph: {
    title: "Synteric Mindworks — Enterprise AI Solutions",
    description:
      "Custom-built AI systems engineered for production at scale. Speech AI, Computer Vision, NLP, Predictive Analytics.",
    type: "website",
    locale: "en_US",
    siteName: "Synteric Mindworks",
  },
  twitter: {
    card: "summary_large_image",
    title: "Synteric Mindworks — Enterprise AI Solutions",
    description: "Custom-built AI systems engineered for production at scale.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",           
    apple: "/apple-icon.png",     
    shortcut: "/shortcut-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="font-dm bg-brand-black text-brand-white antialiased">
        {children}
      </body>
    </html>
  );
}
