import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HTML from "../assets/icons/HTML.svg";
import CSS from "../assets/icons/CSS.svg";
import JAVASCRIPT from "../assets/icons/JavaScript.svg";
import BOOTSTRAP from "../assets/icons/Bootstrap.svg";
import TAILWIND from "../assets/icons/tailwind_css.svg";
import NPM from "../assets/icons/Npm-Dark.svg";
import VITE from "../assets/icons/Vite-Dark.svg";
import REACTJS from "../assets/icons/React-Dark.svg";
import NODEJS from "../assets/icons/NodeJS-Dark.svg";
import EXPRESSJS from "../assets/icons/ExpressJS-Dark.svg";
import MONGODB from "../assets/icons/MongoDB.svg";
import MYSQL from "../assets/icons/MySQL-Dark.svg";
import PYTHON from "../assets/icons/Python-Dark.svg";
import WORDPRESS from "../assets/icons/wordpress.svg";
import GITHUB from "../assets/icons/Github-Dark.svg";
import ILLUSTRATOR from "../assets/icons/Illustrator.svg";
import CANVA from "../assets/icons/canvapro.svg";
import GIT from "../assets/icons/git.svg";
import CHATGPT from "../assets/icons/gpt.svg";

const Technologies = () => {
  const tools = [
    { icon: HTML },
    { icon: CSS },
    { icon: JAVASCRIPT },
    { icon: BOOTSTRAP },
    { icon: TAILWIND },
    { icon: NPM },
    { icon: VITE },
    { icon: REACTJS },
    { icon: NODEJS },
    // { icon: EXPRESSJS },
    // { icon: MONGODB },
    // { icon: MYSQL },
    { icon: PYTHON },
    { icon: WORDPRESS },
    { icon: GIT },
    { icon: GITHUB },
    { icon: CANVA },
    { icon: ILLUSTRATOR },
    { icon: CHATGPT },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      className="pb-10"
    >
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap justify-center gap-4 ">
        {tools.map((tool, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, scale: 0.8, rotate: -5 },
              visible: {
                opacity: 1,
                scale: 1,
                rotate: 0,
                transition: { duration: 0.5, ease: "easeOut" },
              },
            }}
            whileHover={{
              scale: 1.1,
              transition: { type: "spring", stiffness: 300 },
            }}
            className="p-3 rounded-xl border border-stone-600 hover:border-stone-400 cursor-pointer backdrop-blur-sm bg-[#38bdf81c] transition-all duration-100"
          >
            <div className="flex flex-col items-center text-stone-300">
              <img src={tool.icon} alt="Logo Image" className="h-10 w-10" />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Technologies;
