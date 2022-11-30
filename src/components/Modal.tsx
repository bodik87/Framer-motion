import { FC } from "react";

interface ModalProps {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
}

export const Modal = ({ children, title, onClose }: ModalProps) => {
  const closeHandler = (e: any) => {
    e.stopPropagation();
  };

  return (
    <>
      <div
        onClick={onClose}
        className="fixed bg-black/50 top-0 bottom-0 right-0 left-0 "
      >
        <div
          onClick={closeHandler}
          className="w-[500px] p-5 rounded bg-white absolute top-10 left-1/2 -translate-x-1/2"
        >
          <h1 className="text-xl text-center mb-2">{title}</h1>
          {children}
        </div>
      </div>
    </>
  );
};
