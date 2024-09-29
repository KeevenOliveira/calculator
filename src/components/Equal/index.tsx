import { useCallback, memo } from "react";

import safeEval from "@/utils/safeEval";
import { Button } from "@/styles/button";
import { toast } from "react-toastify";

interface EqualProps {
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const Equal: React.FC<EqualProps> = ({ setValue }) => {
  const formatExpression = (expression: string): string =>
    expression.replace(/x/g, "*").replace(/(\d+|\))(?=\()/g, "$1*");

  const handleEqual = useCallback(() => {
    setValue((prev: string) => {
      if (!prev || prev === "0") return "0";

      try {
        const formattedExpression = formatExpression(prev);
        const result = safeEval(formattedExpression);

        const roundedResult = Number(parseFloat(result).toFixed(10)).toString();

        return roundedResult === "0" ? "0" : roundedResult;
      } catch (error) {
        console.log(error);
        toast.error("Erro na expressão");
        return "0";
      }
    });
  }, [setValue]);

  return (
    <Button
      onClick={handleEqual}
      $background="#FF5245"
      className="p-5 px-12 color h-1/2 rounded-lg my-5"
    >
      =
    </Button>
  );
};

export default memo(Equal);
