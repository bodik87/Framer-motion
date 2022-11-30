import axios from "axios";
import React, { FC, useState } from "react";
import { IProduct } from "../models";
import { Error } from "./Error";

const productData: IProduct = {
  title: "",
  price: 13.5,
  description: "lorem ipsum set",
  image: "https://i.pravatar.cc",
  category: "electronic",
  rating: {
    rate: 0,
    count: 0,
  },
};

interface CreateProductProps {
  onCreate: (product: IProduct) => void;
}

export const CreateProduct = ({ onCreate }: CreateProductProps) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");

    if (value.trim().length === 0) {
      setError("Please enter valid title!");
      return;
    }
    productData.title = value;

    const response = await axios.post<IProduct>(
      "https://fakestoreapi.com/products",
      productData
    );
    onCreate(response.data);
  };
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col items-center justify-center"
    >
      <input
        value={value}
        onChange={changeHandler}
        className="border py-2 px-2 mb-2 w-full rounded outline-none"
        placeholder="Enter product name..."
      />
      {error && <Error error={error} />}
      <button className="py-2 px-4 border bg-yellow-400 rounded hover:bg-yellow-500 active:bg-yellow-600">
        Create
      </button>
    </form>
  );
};
