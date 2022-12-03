import React, { FC, ReactNode } from "react";

interface LabelProps {
  text: string;
}
export const Label = ({ text }: LabelProps) => {
  return (
    <h1 className="bg-myRed rounded-lg px-4 py-1 font-bold mt-8 mb-3 bold mx-auto w-max text-white">
      {text}
    </h1>
  );
};
