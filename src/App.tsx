import { useEffect, useState } from "react";
import Lenis from "lenis";
import { motion, AnimatePresence } from "motion/react";
import { HashRouter, Routes, Route } from "react-router-dom";

import { Hero } from "./components/sections/Hero";
import { Pain } from "./components/sections/Pain";
import { Agitation } from "./components/sections/Agitation";
import { BeliefBreak } from "./components/sections/BeliefBreak";
import { Product } from "./components/sections/Product";
import { Mechanism } from "./components/sections/Mechanism";
import { Agents } from "./components/sections/Agents";
import { WhatItCreates } from "./components/sections/WhatItCreates";
import { Opportunity } from "./components/sections/Opportunity";
import { FreeAI } from "./components/sections/FreeAI";
import { Objections } from "./components/sections/Objections";
import { Bonuses } from "./components/sections/Bonuses";
import { Pricing } from "./components/sections/Pricing";
import { Guarantee } from "./components/sections/Guarantee";
import { FinalCTA } from "./components/sections/FinalCTA";
import { Footer } from "./components/sections/Footer";
import { CTAButton } from "./components/shared/CTAButton";
import { ThemeToggle } from "./components/shared/ThemeToggle";
import { SupportChat } from "./components/shared/SupportChat";

function LandingPage() {
  const [showMobileCTA, setShowMobileCTA] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const handleScroll = () => {
      setShowMobileCTA(window.scrollY > 800);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col">
      <Hero />
      <div className="space-y-0">
        <Pain />
        <Agitation />
        <BeliefBreak />
        <Product />
        <Mechanism />
        <Agents />
        <WhatItCreates />
        <Opportunity />
        <FreeAI />
        <Objections />
        <Bonuses />
        <Pricing />
        <Guarantee />
        <FinalCTA />
        <Footer />
      </div>

      <AnimatePresence>
        {showMobileCTA && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 right-0 z-[60] p-4 bg-surface/80 backdrop-blur-xl border-t border-border md:hidden"
          >
            <CTAButton size="lg" className="w-full text-sm py-3" glow>
              QUERO MEU SISTEMA AGORA — 12x R$30,78
            </CTAButton>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <main className="relative min-h-screen bg-background text-text selection:bg-primary selection:text-background overflow-x-hidden">
        <ThemeToggle />
        <SupportChat />
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </main>
    </HashRouter>
  );
}
