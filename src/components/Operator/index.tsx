import { SetStateAction } from "react";

import { Button } from "@/styles/button";

interface OperatorProps {
  children: React.ReactNode;
  setValue: React.Dispatch<SetStateAction<string>>;
}

const Operator = ({ children, setValue }: OperatorProps) => {
  return (
    <Button
      onClick={() => {
        if (!children) return;
        setValue((prev: string) => {
          if (prev === "0" || !prev) {
            return "";
          }
          return prev + children;
        });
      }}
      color="#808080"
      className="p-5 px-12 color"
    >
      {children}
    </Button>
  );
};

export default Operator;
