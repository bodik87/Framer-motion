import { Reorder, AnimatePresence } from "framer-motion";
import { useState } from "react";

const data = [
  { title: "😊 First element" },
  { title: "😍 Second element" },
  { title: "😎 Third element" },
];

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

export const ReorderList = () => {
  const [items, setItems] = useState(data);

  const addItem = () =>
    items.length < 4 && setItems([...items, { title: "😜 Forth element" }]);

  const deleteItem = () => items.length > 3 && setItems(items.slice(0, 3));
  const btnStyle =
    "border-2 font-bold shadow-xl px-4 py-1 w-20 text-center mx-auto rounded-lg mb-2 text-sm cursor-pointer";

  return (
    <>
      <div className="flex w-max gap-2 mx-auto mb-2">
        {items.length === 3 && (
          <div
            onClick={addItem}
            className={`bg-myYellow border-slate-500/70 ${btnStyle}`}
          >
            + add
          </div>
        )}
        {items.length === 4 && (
          <div
            onClick={deleteItem}
            className={`bg-myRed border-red-700 ${btnStyle} text-white`}
          >
            🗑 del
          </div>
        )}
      </div>

      <Reorder.Group axis="y" values={items} onReorder={setItems}>
        {items.map((item) => (
          <AnimatePresence key={item.title}>
            <Reorder.Item
              value={item}
              whileDrag={{
                scale: 1.2,
              }}
              {...variants}
            >
              <div
                className={`bg-myGreen mb-2 shadow-xl px-8 py-3 w-fit mx-auto rounded-lg text-sm text-center`}
              >
                {item.title}
              </div>
            </Reorder.Item>
          </AnimatePresence>
        ))}
      </Reorder.Group>
    </>
  );
};
