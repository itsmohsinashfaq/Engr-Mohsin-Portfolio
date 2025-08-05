import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import MohsinImage from "../assets/Engineer Mohsin Image.png";
import { HERO_CONTENT } from "../constants";
import { FaDownload } from "react-icons/fa";

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
        {/* Image Section */}
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
              initial={{ opacity: 1, scale: 0.9, y: 20 }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: [0, -5, 0],
                      scale: [1, 1.02, 1],
                    }
                  : {}
              }
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-full lg:w-1/2"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="flex flex-col items-center lg:items-start mt-10">
            <h2 className="pb-2 text-4xl tracking-tighter lg:text-8xl">
              MOHSIN
            </h2>
            <span className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">
              Website Developer
            </span>
            <p className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter text-center lg:text-left">
              {HERO_CONTENT}
            </p>

            <a
              href="/resume/engr-mohsin-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-gray-200 rounded-full p-3 text-sm text-stone-800 mb-10 flex items-center gap-2"
            >
              <span className="font-semibold">Get My Resume</span>
              <FaDownload />
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
