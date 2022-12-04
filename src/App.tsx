import { motion, useScroll } from "framer-motion";

import { AnimatedDiv } from "./components/AnimatedDiv";
import { AnimatedList } from "./components/AnimatedList";
import { AnimatedTextP } from "./components/AnimatedTextP";
import { Caroucel } from "./components/Carousel";
import { ExpandableCard } from "./components/ExpandableCard";
import { Filtering } from "./components/Filtering";
import { ReorderList } from "./components/ReorderList";
import { Label } from "./components/ui/Label";
// import ListIcon from "./components/ui/icons/list.svg";

export const App = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div>
      <motion.div
        className="fixed top-0 left-0 right-0 origin-[0%] h-[3px] bg-myRed"
        style={{ scaleX: scrollYProgress }}
      ></motion.div>
      <Label text="Filtering Animation" />
      <Filtering />

      <Label text="Drag It!" />
      <ReorderList />

      <Label text="Caroucel" />
      <Caroucel />

      <div className="flex flex-wrap gap-8 justify-center">
        <div>
          <Label text="Animated Text" />
          <AnimatedTextP />
        </div>

        <div>
          <Label text="Animated List" />
          <AnimatedList />
        </div>

        <div>
          <Label text="Animated Div" />
          <AnimatedDiv />
        </div>
      </div>

      <Label text="Expandable Card" />
      <ExpandableCard />
    </div>
  );
};
