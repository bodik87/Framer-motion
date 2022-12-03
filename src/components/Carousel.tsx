import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import images from "../images";

export const Caroucel = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef<any>();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <motion.div
      ref={carousel}
      className="carousel min-h-[20rem] cursor-grab overflow-hidden rounded-xl mt-2 mx-36"
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        whileTap={{ cursor: "grabbing" }}
        className="inner-carousel flex rounded-xl gap-2"
      >
        {images.map((image) => (
          <motion.div key={image} className="item min-h-[20rem] min-w-[14rem]">
            <img
              src={image}
              className="w-full h-full pointer-events-none rounded-xl"
              alt="img"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
