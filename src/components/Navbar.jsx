import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
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
    >
      <nav className="flex items-center justify-between py-5">
        {/* Logo */}
        <motion.div
          variants={fadeDown}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-shrink-0 items-center"
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
          className="m-8 flex items-center justify-center gap-4 text-2xl text-gray-300"
        >
          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/se-mohsin/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            animate={{ color: [ "#ccc", brandColors.linkedin, "#ccc" ] }}
            transition={{ repeat: Infinity, duration: 3, delay: 0 }}
          >
            <FaLinkedin />
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://www.github.com/engineer-mohsin/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
            animate={{ color: [ "#ccc", brandColors.github, "#ccc" ] }}
            transition={{ repeat: Infinity, duration: 3, delay: 1 }}
          >
            <FaGithub />
          </motion.a>

          {/* Instagram */}
          <motion.a
            href="https://www.instagram.com/se.mohsin/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            animate={{ color: [ "#ccc", brandColors.instagram, "#ccc" ] }}
            transition={{ repeat: Infinity, duration: 3, delay: 2 }}
          >
            <FaInstagram />
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/+923001358167?text=Hello%2C%20I%20got%20your%20number%20from%20your%20Portfolio."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            animate={{ color: [ "#ccc", brandColors.whatsapp, "#ccc" ] }}
            transition={{ repeat: Infinity, duration: 3, delay: 3 }}
          >
            <FaWhatsapp />
          </motion.a>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
