import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import MohsinImage from "../assets/Engineer Mohsin Image.png";
import { HERO_CONTENT } from "../constants";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="pb-4 lg:mb-36"
    >
      <div className="flex flex-wrap lg:flex-row-reverse">
       <motion.div
  className="w-full lg:w-1/2"
  variants={fadeInUp}
  initial="hidden"
  animate={isInView ? "visible" : "hidden"}
>
  <div className="flex justify-center lg:p-8">
    <motion.img
      src={MohsinImage}
      alt="Engineer Mohsin"
      title="Engineer Mohsin"
      className="border border-stone-900 rounded-2xl"
      initial={{ scale: 0.8, rotate: -10, opacity: 0 }}
      animate={isInView ? { scale: 1, rotate: 0, opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    />
  </div>
</motion.div>


        <motion.div
          className="w-full lg:w-1/2"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="flex flex-col items-center lg:place-items-start mt-10">
            <h2 className="pb-2 text-4xl tracking-tighter lg:text-8xl">
              MOHSIN
            </h2>
            <span className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">
              Webiste Developer
            </span>
            <p className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
              {HERO_CONTENT}
            </p>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer noopener"
              download
              className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
