import { ChangeEvent, useContext, useState } from "react";
import { CreateProduct } from "./components/CreateProduct";
import { Error } from "./components/Error";
import { Loader } from "./components/Loader";
import { Modal } from "./components/Modal";
import { Product } from "./components/Product";
import { ModalContext } from "./context/ModalContext";
import { useProducts } from "./hooks/products";
import { IProduct } from "./models";

function App() {
  const { products, loading, error, addProduct } = useProducts();
  const { modal, openModal, closeModal } = useContext(ModalContext);

  const createHandler = (product: IProduct) => {
    closeModal();
    addProduct(product);
  };

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {modal && (
        <Modal title="Create product" onClose={closeModal}>
          <CreateProduct onCreate={createHandler} />
        </Modal>
      )}

      {error && <Error error={error} />}
      {loading && <Loader />}
      {products.map((product, index) => (
        <Product key={`${product.id} + ${index}`} product={product} />
      ))}
      {!modal && (
        <button
          onClick={openModal}
          className="fixed bottom-5 right-5 rounded-full bg-red-600 text-white font-semibold py-1 px-4"
        >
          Add product
        </button>
      )}
    </div>
  );
}

export default App;
