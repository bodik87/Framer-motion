import { FC, useState } from "react";
import { IProduct } from "../models";

interface ProductProps {
  product: IProduct;
}

export const Product = ({ product }: ProductProps) => {
  const [description, setDescription] = useState(false);

  const btnBgStyle = description ? "bg-blue-300" : "bg-yellow-300";

  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img className="w-1/6 mb-2" src={product.image} alt={product.title} />

      {product.title}

      <strong>{product.price}</strong>

      <button
        onClick={() => setDescription(!description)}
        className={`${btnBgStyle} py-2 px-4 rounded mt-2 mb-2`}
      >
        {description ? "Hide details" : "Show details"}
      </button>

      {description && <p className="text-center">{product.description}</p>}
    </div>
  );
};
