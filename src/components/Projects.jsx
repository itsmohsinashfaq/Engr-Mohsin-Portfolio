import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PROJECTS } from "../constants";

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

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
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
      <h2 className="my-20 text-center text-4xl">Projects</h2>

      <div className="grid gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className="mx-auto w-full max-w-5xl rounded-2xl border border-[#ffffff1a] bg-[#ffffff0a] p-6 backdrop-blur-md shadow-lg  shadow-[#38bdf81a]  hover:scale-[1.01] transition-all duration-300 hover:shadow-[#38bdf844]"
          >
            <div className="flex flex-col lg:flex-row lg:items-start gap-6">
              {/* Project Image */}
              <motion.div
                className="w-full lg:w-1/4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  width={250}
                  height={250}
                  className="rounded-xl border border-stone-800 shadow-md"
                />
              </motion.div>

              {/* Project Content */}
              <motion.div className="w-full lg:w-3/4">
                <h3 className="mb-2 text-2xl font-semibold text-left">
                  {project.title}
                </h3>
                <p className="mb-4 text-stone-400 text-left">
                  {project.description}
                </p>

                {/* Technologies Badges */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((technology, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="rounded bg-cyan-500 px-3 py-1 text-sm font-medium text-[#0f0f0f] "
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={inView ? { scale: 1, opacity: 1 } : {}}
                      transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                    >
                      {technology}
                    </motion.span>
                  ))}
                </div>

                {/* Source Code Button */}
                {project.code && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-md border border-cyan-400 px-4 py-2 text-sm text-cyan-400 hover:bg-cyan-400 hover:text-[#0f0f0f] transition-all duration-200"
                  >
                    View Source Code
                  </a>
                )}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
