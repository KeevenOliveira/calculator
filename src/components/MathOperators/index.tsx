import React from "react";
import Equal from "../Equal";
import Operator from "../Operator";

interface MathOperatorsProps {
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const MathOperators: React.FC<MathOperatorsProps> = ({ setValue }) => {
  const operators = ["+", "-", "*", "/"];
  const parentheses = ["(", ")"];

  return (
    <div className="flex flex-row">
      <div className="flex flex-col">
        {operators.map((op) => (
          <Operator key={op} operator={op} setValue={setValue} />
        ))}
      </div>
      <div className="flex flex-col">
        {parentheses.map((p) => (
          <Operator key={p} operator={p} setValue={setValue} />
        ))}
        <Equal setValue={setValue} />
      </div>
    </div>
  );
};

export default React.memo(MathOperators);
