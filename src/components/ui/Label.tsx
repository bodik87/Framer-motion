import React, { FC, ReactNode } from "react";

interface LabelProps {
  text: string;
}
export const Label = ({ text }: LabelProps) => {
  return (
    <div className="bg-myRed rounded-lg px-4 py-1 font-bold mt-10 mb-3 bold mx-auto w-max text-white shadow-xl border-2 border-white/70 select-none">
      {text}
    </div>
  );
};
