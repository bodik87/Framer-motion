import { motion } from "framer-motion";

interface LabelProps {
  text: string;
  Icon?: JSX.Element;
}
export const Label = ({ text, Icon }: LabelProps) => {
  const LabelAnimation = {
    hidden: { opacity: 0, x: 50 },
    visible: (custom: any) => ({
      opacity: 1,
      x: 0,
      transition: { delay: custom * 0.2 },
    }),
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      // viewport={{ amount: 0.5 }}
    >
      <motion.div
        custom={2}
        variants={LabelAnimation}
        className="bg-gradient-to-b from-red-500 to-red-400 rounded-full px-8 py-3 font-bold mt-8 mb-4 bold mx-auto w-max text-white shadow-lg border-4 border-white/70"
      >
        {Icon}
        {text}
      </motion.div>
    </motion.div>
  );
};
