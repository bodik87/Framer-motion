import { Reorder, useDragControls } from "framer-motion";
import { useState } from "react";

const data = [
  { title: "😊 First element" },
  { title: "😍 Second element" },
  { title: "😜Third element" },
];

export const ReorderList = () => {
  const [items, setItems] = useState(data);
  const controls = useDragControls();
  return (
    <Reorder.Group axis="y" values={items} onReorder={setItems}>
      {items.map((item) => (
        <Reorder.Item key={item.title} value={item}>
          <div
            className={`bg-myGreen shadow-md px-4 py-2 w-fit mx-auto rounded-lg mb-2 text-sm text-center`}
          >
            {item.title}
          </div>
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
};
