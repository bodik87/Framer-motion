import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ICard {
  categoryName: string;
  word: string;
  translate: string;
  practice: string;
  id: string;
}

const categoryNames = ["All", "Body", "Colors", "Computers", "School"];

const btnStyle =
  "border-2 font-bold shadow-xl px-1.5 sm:px-4 py-1 w-fit text-center rounded-lg mb-2 mr-2 text-sm cursor-pointer bg-myRed border-red-700 text-white";

export const Filtering = () => {
  const [cards, setCards] = useState<ICard[]>([]);
  const [filteredCards, setFilteredCards] = useState<ICard[]>([]);
  const [activeFilter, setActiveFilter] = useState("All");

  const fetching = async () => {
    const response = await fetch(
      "https://6343dcad2dadea1175aebff4.mockapi.io/cards"
    );
    const data = await response.json();
    setCards(data);
    setFilteredCards(data);
  };

  useEffect(() => {
    fetching();
  }, []);

  const filterCategory = (category: string) => {
    if (category !== activeFilter && category !== "All") {
      setFilteredCards(cards.filter((card) => category === card.categoryName));
      setActiveFilter(category);
      return;
    }
    if (category === "All") {
      setActiveFilter(category);
      setFilteredCards(cards);
    } else {
      return;
    }
  };

  console.log("render");

  return (
    <div>
      <div className="flex flex-wrap justify-center">
        {categoryNames.map((categoryName) => (
          <button
            key={categoryName}
            className={
              categoryName === activeFilter
                ? `${btnStyle} border-emerald-600 bg-myGreen`
                : btnStyle
            }
            onClick={() => filterCategory(categoryName)}
          >
            {categoryName}
          </button>
        ))}
      </div>

      <motion.div
        layout
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.5 }}
        exit={{ opacity: 0, scale: 0.5 }}
        className="grid grid-cols-2 sm:grid-cols-3 mx-auto gap-2 sm:gap-4"
      >
        {filteredCards.map((card) => (
          <motion.div
            layout
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.7 }}
            exit={{ opacity: 0, scale: 0.7 }}
            key={card.id}
            className="bg-gradient-to-tr from-myRed/70 via-purple-300 to-blue-400 mb-2 w-full shadow-xl px-4 py-2 mx-auto rounded-lg text-sm text-center border-2 border-white"
          >
            <p className="font-bold text-lg">{card.word}</p>
            <p className="text-sm font-semibold">✔ {card.translate}</p>
            <p>{card.practice}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
