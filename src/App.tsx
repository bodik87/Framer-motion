import { motion } from "framer-motion";

import { AnimatedDiv } from "./components/AnimatedDiv";
import { AnimatedTextP } from "./components/AnimatedTextP";
import { Caroucel } from "./components/Carousel";
import { Label } from "./components/ui/Label";

export const App = () => {
  return (
    <div>
      <Label text="Caroucel" />
      <Caroucel />

      <div className="flex gap-10 justify-center">
        <div>
          <Label text="Animated Text" />
          <AnimatedTextP />
        </div>
        <div>
          <Label text="Animated Div" />
          <AnimatedDiv />
        </div>
      </div>
    </div>
  );
};
