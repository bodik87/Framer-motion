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
      className="bg-myYellow text-gray-900 px-5 py-3 w-fit max-w-[500px] mx-auto shadow-lg"
    >
      <motion.h1 layout="position" className="font-bold">
        Title ✌
      </motion.h1>
      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <p className="pt-1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
            recusandae tempora ea culpa atque consequuntur natusS.
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};
