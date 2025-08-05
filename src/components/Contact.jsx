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
      className="border-t border-stone-900 pb-20"
    >
      {/* Heading */}
      <motion.h2
        className="my-10 text-center text-4xl"
        variants={fadeUp}
        custom={0}
      >
        Get in Touch
      </motion.h2>

      {/* Content */}
      <div className="text-center tracking-tighter">
        <motion.p className="my-4 text-stone-300" variants={fadeUp} custom={1}>
          {CONTACT.address}
        </motion.p>
        <motion.p className="my-4 text-stone-300" variants={fadeUp} custom={2}>
          <a
            href="https://wa.me/+923700506393?text=Hello%2C%20I%20got%20your%20number%20from%20your%20Portfolio."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            {CONTACT.phoneNo}
          </a>
        </motion.p>
        <motion.a
          href={`mailto:${CONTACT.email}`}
          className="border-b text-stone-300"
          variants={fadeUp}
          custom={3}
        >
          {CONTACT.email}
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Contact;
