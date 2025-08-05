import React, { useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
import Contact from "./components/Contact";
import WhatsAppButton from "./components/WhatsAppButton";
import TopButton from "./components/TopButton";
import { useInView } from "framer-motion";
import { AnimatePresence, motion } from "framer-motion";

const App = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { threshold: 0.2 });

  return (
    <>
      <div className="overflow-x-hidden text-stone-300 antialiased">
        {/* Background Effects */}
        <div className="fixed inset-0 -z-10">
          <div className="relative h-full w-full bg-[#0f0f0f]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b1a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b1a_1px,transparent_1px)] bg-[size:16px_24px]" />
            <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#38bdf81c,#0f0f0f)]" />
          </div>
        </div>
        <div className="container mx-auto px-6">
          <Navbar />
          <div ref={heroRef}>
            <Hero />
          </div>
          <Technologies />
          <Projects />
          <Experiences />
          <Contact />
        </div>
        {/* Floating Buttons (show when Hero scrolled out) */}
        <AnimatePresence>
          {!isHeroInView && (
            <>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="fixed bottom-4 right-2 z-50 flex flex-col gap-3"
              >
                <TopButton />
                <WhatsAppButton />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default App;
