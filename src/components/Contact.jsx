import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CONTACT } from "../constants";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const year = new Date().getFullYear();

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
      className=" py-7 text-center backdrop-blur-sm shadow-inner"
    >
      {/* Heading */}
      <motion.h2
        className="mb-10 text-4xl font-bold text-white"
        variants={fadeUp}
        custom={0}
      >
        Get in Touch
      </motion.h2>

      {/* Content */}
      <div className="mx-auto max-w-xl text-stone-300 tracking-tight space-y-2">
        

        <motion.p variants={fadeUp} custom={2}>
          <a
            href={`tel:${CONTACT.phoneNo}`}
            className="cursor-pointer underline"
          >
            {CONTACT.phoneNo}
          </a>
        </motion.p>

        <motion.p variants={fadeUp} custom={3}>
          <a
            href={`mailto:${CONTACT.email}`}
            className="cursor-pointer underline"
          >
            {CONTACT.email}
          </a>
        </motion.p>
      </div>

      {/* Footer */}
      <motion.div
        className="mt-16 text-xs text-stone-500 border-t border-stone-900 pt-3"
        variants={fadeUp}
        custom={4}
      >
        &copy; {year} Mohsin. All rights reserved.
      </motion.div>
    </motion.div>
  );
};

export default Contact;
