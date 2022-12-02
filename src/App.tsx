import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import images from "./images";

export const App = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef<any>();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <div>
      <motion.div ref={carousel} className="carousel">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          whileTap={{ cursor: "grabbing" }}
          className="inner-carousel"
        >
          {images.map((image) => (
            <motion.div key={image} className="item">
              <img src={image} alt="img" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};
