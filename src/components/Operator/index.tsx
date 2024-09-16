import React from "react";
import { Button } from "@/styles/button";

interface OperatorProps {
  operator: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const Operator: React.FC<OperatorProps> = ({ operator, setValue }) => {
  const handleClick = React.useCallback(() => {
    setValue((prev: string) => {
      if (prev === "0" || !prev) return operator;
      const lastChar = prev[prev.length - 1];
      if (
        ["+", "-", "*", "/"].includes(lastChar) &&
        ["+", "-", "*", "/"].includes(operator)
      ) {
        return prev.slice(0, -1) + operator;
      }
      return prev + operator;
    });
  }, [operator, setValue]);

  return (
    <Button onClick={handleClick} color="#808080" className="p-5 px-12 color">
      {operator}
    </Button>
  );
};

export default React.memo(Operator);
