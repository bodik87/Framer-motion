import { AnimatedDiv } from "./components/AnimatedDiv";
import { AnimatedList } from "./components/AnimatedList";
import { AnimatedTextP } from "./components/AnimatedTextP";
import { Caroucel } from "./components/Carousel";
import { Filtering } from "./components/Filtering";
import { ReorderList } from "./components/ReorderList";
import { Label } from "./components/ui/Label";
import ListIcon from "./components/ui/icons/list.svg";

export const App = () => {
  return (
    <div>
      <Label text="Caroucel" />
      <Caroucel />

      <div className="sm:flex gap-10 justify-center">
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

      {/* <Label text="Drag It!" Icon={ListIcon} /> */}
      <ReorderList />

      <Label text="Filtering Animation" />
      <Filtering />
    </div>
  );
};
