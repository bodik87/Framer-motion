import { motion } from "framer-motion";
import { useState } from "react";

export const ExpandableCard = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <motion.div
      transition={{ layout: { duration: 0.5, type: "spring" } }}
      layout
      style={{ borderRadius: "1rem" }}
      onClick={() => setIsOpen(!isOpen)}
      className="bg-myYellow text-gray-900 px-5 py-4 w-fit max-w-[500px] mx-auto shadow-lg"
    >
      <motion.h1 layout="position" className="font-bold">
        {isOpen ? "Hide 👇" : "Click 👈"}
      </motion.h1>
      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <p className="pt-1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <a
            href="https://bodik87.github.io/index.html"
            target="blank"
            className="font-bold text-xs text-green-800"
          >
            HTML + CSS Portfolio 🎨
          </a>
        </motion.div>
      )}
    </motion.div>
  );
};
