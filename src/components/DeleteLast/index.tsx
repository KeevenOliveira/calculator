import { SetStateAction } from "react";
import { Button } from "@/styles/button";

interface DeleteLastProps {
  setValue: React.Dispatch<SetStateAction<string>>;
}

const DeleteLast = ({ setValue }: DeleteLastProps) => {
  const deleteLast = () => {
    setValue((prev: string) => {
      if (prev === "0" || !prev) return "0";
      return prev.slice(0, -1);
    });
  };

  return (
    <Button className="p-5 px-12" onClick={deleteLast}>
      ←
    </Button>
  );
};

export default DeleteLast;
