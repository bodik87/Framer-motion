import { motion } from "framer-motion";

export const AnimatedTextP = () => {
  const pVariants = {
    hidden: { opacity: 0, x: "-100%" },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <motion.p
      className="font-bold bold mx-auto w-max cursor-pointer"
      initial={"hidden"}
      animate={"visible"}
      whileHover={{
        scale: 1.2,
        color: "#F0466D",
      }}
      variants={pVariants}
      transition={{
        delay: 0.5,
        duration: 2,
        repeat: Infinity,
        repeatDelay: 1,
        repeatType: "reverse",
        type: "spring",
      }}
    >
      Animated text
    </motion.p>
  );
};
