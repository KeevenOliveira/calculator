import { useState } from "react";

interface NumberProps {
  children: React.ReactNode;
  setValue?: any;
}

const Number = ({ children, setValue }: NumberProps) => {
  return (
    <button
      className="p-5 px-10"
      onClick={() => {
        if (children) {
          setValue((prev: string) => prev + children);
        }
      }}
    >
      {children}
    </button>
  );
};

export default Number;
