import { motion } from "framer-motion";

export const AnimatedList = () => {
  const items = ["Text 1", "Text 2", "Text 3"];
  const listVariants = {
    visible: (i: any) => ({
      opacity: 1,
      transition: { delay: i + 0.5 },
    }),
    hidden: { opacity: 0 },
  };

  return (
    <div className="font-bold bold mx-auto w-max cursor-pointer">
      {items.map((el, i) => (
        <motion.li
          key={el}
          className="list-none"
          variants={listVariants}
          initial="hidden"
          animate="visible"
          custom={i}
        >
          {el}
        </motion.li>
      ))}
    </div>
  );
};
