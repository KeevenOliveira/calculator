import React from "react";
import Number from "../Number";
import DeleteLast from "../DeleteLast";

interface NumbersContainerProps {
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const NumbersContainer: React.FC<NumbersContainerProps> = ({ setValue }) => {
  const numbers = [
    ["7", "8", "9"],
    ["4", "5", "6"],
    ["1", "2", "3"],
    ["0", "."],
  ];

  return (
    <div>
      {numbers.map((row, rowIndex) => (
        <div data-testid="numbers-container-row" key={`row-${rowIndex}`}>
          {row.map((num) => (
            <Number key={num} digit={num} setValue={setValue} />
          ))}
          {rowIndex === numbers.length - 1 && (
            <DeleteLast setValue={setValue} />
          )}
        </div>
      ))}
    </div>
  );
};

export default React.memo(NumbersContainer);
