import { useCallback, memo } from "react";
import { Button } from "../../styles/button";

interface NumberProps {
  digit: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const Number: React.FC<NumberProps> = ({ digit, setValue }) => {
  const handleClick = useCallback(() => {
    setValue((prev: string) => {
      if (digit === "." && prev.includes(".")) return prev;
      return prev === "0" ? digit : prev + digit;
    });
  }, [digit, setValue]);

  return (
    <Button className="p-5 px-12" onClick={handleClick}>
      {digit}
    </Button>
  );
};

export default memo(Number);
