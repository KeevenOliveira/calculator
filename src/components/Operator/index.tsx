import { SetStateAction } from "react";

import { Button } from "@/styles/button";

interface OperatorProps {
  children: React.ReactNode;
  setValue: React.Dispatch<SetStateAction<number>>;
}

const Operator = ({ children }: OperatorProps) => {
  return (
    <Button color="#808080" className="p-5 px-12 color">
      {children}
    </Button>
  );
};

export default Operator;
