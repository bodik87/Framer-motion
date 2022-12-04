import React, { FC, ReactNode, SVGProps } from "react";

interface LabelProps {
  text: string;
  Icon?: JSX.Element;
}
export const Label = ({ text, Icon }: LabelProps) => {
  return (
    <>
      <div className="bg-myRed rounded-lg px-4 py-1 font-bold mt-10 mb-3 bold mx-auto w-max text-white shadow-xl border-2 border-white/70 select-none">
        {Icon}
        {text}
      </div>
    </>
  );
};
