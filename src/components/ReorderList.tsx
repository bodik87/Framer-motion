const data = [
  { title: "1. First element" },
  { title: "2. Second element" },
  { title: "3. Third element" },
];

const bgColors = ["bg-myGreen", "bg-myYellow", "bg-myRed"];

export const ReorderList = () => {
  return (
    <>
      {data.map((item, i) => (
        <div
          className={`${bgColors[i]} px-4 py-2 w-[40%] mx-auto rounded-lg mb-2 text-sm`}
        >
          {item.title}
        </div>
      ))}
    </>
  );
};
