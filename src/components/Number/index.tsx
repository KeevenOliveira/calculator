import { SetStateAction } from "react";

import { Button } from "../../styles/button";
interface NumberProps {
  children: React.ReactNode;
  setValue: React.Dispatch<SetStateAction<string>>;
}

const Number = ({ children, setValue }: NumberProps) => {
  return (
    <Button
      className="p-5 px-12"
      onClick={() => {
        if (children) {
          setValue((prev: string) => {
            if (prev === "0") {
              return children.toString();
            }
            return prev + children;
          });
        }
      }}
    >
      {children}
    </Button>
  );
};

export default Number;
