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

const Certificates = () => {
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
            staggerChildren: 0.2, // one project after another
          },
        },
      }}
      className="pb-4"
    >
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <div>
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center"
            variants={fadeInUp}
          >
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
                className="rounded mb-6"
              />
            </motion.div>

            {/* Project Content */}
            <motion.div className="w-full max-w-xl lg:w-3/4">
              <h3 className="mb-2 text-2xl font-semibold">{project.title}</h3>
              <p className="mb-4 text-stone-400">{project.description}</p>

              {/* Technologies Badges */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((technology, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className="rounded bg-stone-900 p-2 text-sm font-medium text-stone-300"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                  >
                    {technology}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Certificates;
