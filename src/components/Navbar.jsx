import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp, FaWhatsappSquare } from "react-icons/fa";
import logo from "../assets/Engr.MohsinLogo.webp";
const Navbar = () => {
  return (
    <>
      <header>
        <nav className="flex items-center justify-between py-5">
          <div className="flex flex-shrink-0 items-center">
            <a href="/" aria-label="Home">
              <img
                src={logo}
                className="mx-2"
                width={45}
                height={33}
                alt="Logo"
              />
            </a>
          </div>
          <div className="m-8 flex items-center justify-center gap-3 text-2xl">
            <a
              href="https://www.linkedin.com/in/se-mohsin/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.github.com/engineer-mohsin/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/se.mohsin/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/+923700506393?text=Hello%2C%20I%20got%20your%20number%20from%20your%20Portfolio."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
