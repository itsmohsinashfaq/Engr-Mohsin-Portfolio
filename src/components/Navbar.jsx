import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/Engr.MohsinLogo.webp";

// Animation variant
const fadeDown = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const brandColors = {
  linkedin: "#0A66C2",
  github: "#333",
  instagram: "#E1306C",
  whatsapp: "#25D366",
};

const Navbar = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.header
      ref={ref}
      variants={fadeDown}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="py-5 my-3 sm:my-5 "
    >
      <nav className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between sm:items-center ">
        {/* Logo */}
        <motion.div
          variants={fadeDown}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex items-center justify-center mb-3 sm:mb-0"
        >
          <a href="/" aria-label="Home">
            <img
              src={logo}
              className="mx-2"
              width={45}
              height={33}
              alt="Logo"
            />
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          variants={fadeDown}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex items-center justify-center gap-6 text-2xl text-gray-300"
        >
          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/se-mohsin/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            animate={{ color: [ brandColors.linkedin,"#ccc", brandColors.linkedin] }}
            transition={{
              repeat: Infinity,
              repeatDelay: 5,
              duration: 1,
              delay: 0,
            }}
          >
            <FaLinkedin />
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://www.github.com/engineer-mohsin/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
            animate={{ color: [brandColors.github,"#ccc", brandColors.github] }}
            transition={{
              repeat: Infinity,
              repeatDelay: 5,
              duration: 1,
              delay: 0,
            }}
          >
            <FaGithub />
          </motion.a>

          {/* Instagram */}
          <motion.a
            href="https://www.instagram.com/se.mohsin/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            animate={{ color: [ brandColors.instagram,"#ccc", brandColors.instagram] }}
            transition={{
              repeat: Infinity,
              repeatDelay: 5,
              duration: 1,
              delay: 0,
            }}
          >
            <FaInstagram />
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/+923001358167?text=Hello%2C%20I%20got%20your%20number%20from%20your%20Portfolio."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            animate={{ color: [ brandColors.whatsapp,"#ccc", brandColors.whatsapp] }}
            transition={{
              repeat: Infinity,
              repeatDelay: 5,
              duration: 1,
              delay: 0,
            }}
          >
            <FaWhatsapp />
          </motion.a>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
