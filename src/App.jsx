import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
import Contact from "./components/Contact";
import { motion } from "motion/react";

const App = () => {
  return (
    <>
      <div className="overflow-x-hidden text-stone-300 antialiased">
        <div className="fixed inset-0 -z-10">
          <div className="relative h-full w-full bg-[#0f0f0f]">
            {/* Grid pattern with subtle blue tint */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b1a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b1a_1px,transparent_1px)] bg-[size:16px_24px]"></div>

            {/* Soft blue radial glow */}
            <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#38bdf81c,#0f0f0f)]"></div>
          </div>
        </div>
        <div className="container mx-auto px-6">
          <Navbar />
          <Hero />
          <Technologies />
          <Projects />
          <Experiences />
          <Contact />
        </div>
      </div>
    </>
  );
};

export default App;
