import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EXPERIENCES } from "../constants";

const fadeInUp = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
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
            staggerChildren: 0.2,
          },
        },
      }}
      className="pb-4"
    >
      {/* Heading */}
      <motion.h2
        className="my-20 text-center text-4xl"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.2 }}
      >
        Experiences
      </motion.h2>

      <div className="">
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            className="mx-auto w-full max-w-5xl rounded-2xl border  border-[#ffffff1a] bg-[#ffffff0a]  px-6 py-8 backdrop-blur-md shadow-lg shadow-[#38bdf81a] hover:scale-[1.01] transition-all duration-300 hover:shadow-[#38bdf844] mb-6"
            variants={fadeInUp}
            whileHover={{

              scale: 1.02,
            }}
          >
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Year */}
              <motion.div className="w-full lg:w-1/4">
                <motion.p
                  className="text-sm text-stone-400"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.2 }}
                >
                  {experience.year}
                </motion.p>
              </motion.div>

              {/* Content */}
              <motion.div className="w-full lg:w-3/4">
                <motion.h3
                  className="mb-2 text-xl font-semibold text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.2 }}
                >
                  {experience.role} -{" "}
                  <span className="text-sm text-stone-400">
                    {experience.company}
                  </span>
                </motion.h3>

                <motion.p
                  className="mb-4 text-stone-300"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.2 }}
                >
                  {experience.description}
                </motion.p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {experience.technologies.map((technology, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="rounded bg-cyan-500 px-2 py-1 text-sm font-medium text-[#0f0f0f] backdrop-blur"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.2,
                        delay: techIndex * 0.05,
                      }}
                    >
                      {technology}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experiences;
