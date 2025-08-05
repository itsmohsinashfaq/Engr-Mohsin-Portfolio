import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EXPERIENCES } from "../constants";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Experiences = () => {
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
            staggerChildren: 0.15,
            delayChildren: 0.1,
          },
        },
      }}
      className="pb-4"
    >
      {/* Heading */}
      <motion.h2
        className="my-20 text-center text-4xl"
        variants={fadeInUp}
      >
        Experiences
      </motion.h2>

      <div className="">
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            className="mx-auto w-full max-w-5xl rounded-2xl border border-[#ffffff1a] bg-[#ffffff0a] px-6 py-8 backdrop-blur-md shadow-lg shadow-[#38bdf81a] hover:scale-[1.01] transition-all duration-300 hover:shadow-[#38bdf844] mb-6"
            variants={fadeInUp}
            whileHover={{
              scale: 1.015,
              transition: { type: "spring", stiffness: 200 },
            }}
          >
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Year */}
              <div className="w-full lg:w-1/4">
                <p className="text-sm text-stone-400">{experience.year}</p>
              </div>

              {/* Content */}
              <div className="w-full lg:w-3/4">
                <h3 className="mb-2 text-xl font-semibold text-white">
                  {experience.role} -{" "}
                  <span className="text-sm text-stone-400">
                    {experience.company}
                  </span>
                </h3>

                <p className="mb-4 text-stone-300">
                  {experience.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {experience.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="rounded bg-cyan-500 px-2 py-1 text-sm font-medium text-[#0f0f0f] backdrop-blur"
                      variants={fadeInUp}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experiences;
