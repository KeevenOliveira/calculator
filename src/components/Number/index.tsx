import { SetStateAction } from "react";

import { Button } from "../../styles/button";
interface NumberProps {
  children: React.ReactNode;
  setValue: React.Dispatch<SetStateAction<number>>;
}

const Number = ({ children, setValue }: NumberProps) => {
  return (
    <Button
      className="p-5 px-12"
      onClick={() => {
        if (children) {
          setValue((prev: number) => {
            const str = prev.toString();
            const newValue = str === "0" ? children : str + children;
            return parseFloat(newValue.toString());
          });
        }
      }}
    >
      {children}
    </Button>
  );
};

export default Number;
