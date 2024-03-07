import { Button } from "@/styles/button";

interface EqualProps {
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const Equal = ({ setValue }: EqualProps) => {
  return (
    <Button
      onClick={() => {
        setValue((prev: string) => {
          if (prev === "0" || !prev) return "0";
          try {
            const formatted = prev.replace(/x/g, "*");
            if (formatted.includes("(")) {
              const addMultiplication = formatted.replace(/\(/g, "*(");
              return eval(addMultiplication);
            }

            return eval(prev);
          } catch (e) {
            return "0";
          }
        });
      }}
      background="#FF5245"
      className="p-5 px-12 color h-1/2 rounded-lg my-5"
    >
      =
    </Button>
  );
};

export default Equal;
