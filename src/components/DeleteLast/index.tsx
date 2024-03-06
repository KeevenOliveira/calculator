import { SetStateAction } from "react";
import { Button } from "@/styles/button";

interface DeleteLastProps {
  setValue: React.Dispatch<SetStateAction<number>>;
}

const DeleteLast = ({ setValue }: DeleteLastProps) => {
  const deleteLast = () => {
    setValue((prev: number) => {
      if (prev === 0 || !prev) return 0;
      const str = prev.toString();
      const newValue = str.slice(0, -1);
      return parseInt(newValue);
    });
  };

  return (
    <Button className="p-5 px-12" onClick={deleteLast}>
      ←
    </Button>
  );
};

export default DeleteLast;
