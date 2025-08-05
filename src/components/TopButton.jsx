import React from "react";
import { FaArrowUp } from "react-icons/fa";

const TopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className="bg-teal-600 text-white p-2 rounded-full shadow-lg hover:scale-110 transition flex justify-center items-center"
      aria-label="Back to top"
    >
      <FaArrowUp size={16} />
    </button>
  );
};

export default TopButton;
