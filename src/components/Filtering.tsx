import { useEffect, useState } from "react";

interface ICard {
  categoryName: string;
  word: string;
  translate: string;
  practice: string;
  id: string;
}

const categoryNames = ["All", "Body", "Colors", "Computers", "School"];

const btnStyle =
  "border-2 font-bold shadow-xl px-4 py-1 w-fit text-center mx-auto rounded-lg mb-2 mr-2 text-sm cursor-pointer bg-myRed border-red-700 text-white";

export const Filtering = () => {
  const [cards, setCards] = useState<ICard[]>([]);
  const [filteredCards, setFilteredCards] = useState<ICard[]>([]);
  const [activeCategory, setActiveCategory] = useState("");

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
    setFilteredCards(cards.filter((card) => card.categoryName === category));
    setActiveCategory(category);
  };

  return (
    <div>
      <div className="w-fit mx-auto">
        {categoryNames.map((categoryName) => (
          <button
            key={categoryName}
            className={btnStyle}
            onClick={() => filterCategory(categoryName)}
          >
            {categoryName}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 w-9/12 mx-auto gap-4">
        {filteredCards.map((card) => (
          <div
            key={card.id}
            className="bg-gradient-to-tr from-myRed/50 via-purple-300 to-blue-300 mb-2 w-full shadow-xl px-4 py-2 mx-auto rounded-lg text-sm text-center border-2 border-white"
          >
            <p className="font-bold text-lg">{card.word}</p>
            <p className="text-sm font-semibold">{card.translate}</p>
            <p>{card.practice}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
