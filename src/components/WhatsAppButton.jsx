import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/+923001358167?text=Hello%2C%20I%20got%20your%20number%20from%20your%20Portfolio."
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 bg-green-500 text-white rounded-full shadow-lg hover:scale-110 transition flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={24} />
    </a>
  );
};

export default WhatsAppButton;
