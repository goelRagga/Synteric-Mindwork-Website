import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Capabilities from "@/components/sections/Capabilities";
import Products from "@/components/sections/Products";
import TechStack from "@/components/sections/TechStack";
import Industries from "@/components/sections/Industries";
import WhyUs from "@/components/sections/WhyUs";
import Process from "@/components/sections/Process";
import Blog from "@/components/sections/Blog";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Capabilities />
      {/* <Products /> */}
      <TechStack />
      <Industries />
      <WhyUs />
      <Process />
      <Blog />
      <CTA />
      <Footer />
    </main>
  );
}
