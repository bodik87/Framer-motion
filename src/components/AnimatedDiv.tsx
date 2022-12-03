import { motion } from "framer-motion";

export const AnimatedDiv = () => {
  const pVariants = {
    hidden: { opacity: 0, x: "-100%" },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <motion.div
      className="bg-myRed shadow-xl rounded-xl w-24 h-24 flex items-center justify-center font-bold text-myDark p-5 mx-auto text-4xl"
      animate={{ rotate: 360 }}
      transition={{
        delay: 0.5,
        duration: 2,
        repeat: Infinity,
        repeatDelay: 1,
        repeatType: "reverse",
        type: "spring",
      }}
    >
      🤢
    </motion.div>
  );
};
