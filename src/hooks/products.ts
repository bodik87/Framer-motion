import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { IProduct } from "../models";

export const useProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const addProduct = (product: IProduct) => {
    setProducts([...products, product]);
  };

  async function fetchProducts() {
    try {
      setError("");
      setLoading(true);
      const response = await axios.get<IProduct[]>(
        "https://fakestoreapi.com/products?limit=5"
      );
      setProducts(response.data);
      setLoading(false);
    } catch (e: unknown) {
      setLoading(false);
      const error = e as AxiosError;
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, loading, error, addProduct };
};
