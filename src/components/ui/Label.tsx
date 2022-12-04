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
        className="bg-myRed rounded-lg px-4 py-2 font-bold mt-8 mb-4 bold mx-auto w-max text-white shadow-xl border-4 border-white/70 select-none"
      >
        {Icon}
        {text}
      </motion.div>
    </motion.div>
  );
};
