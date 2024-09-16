import { memo, useCallback } from "react";

import { Button } from "@/styles/button";

interface DeleteLastProps {
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const DeleteLast: React.FC<DeleteLastProps> = ({ setValue }) => {
  const deleteLast = useCallback(() => {
    setValue((prev: string) =>
      prev === "0" || prev?.length === 1 ? "0" : prev?.slice(0, -1)
    );
  }, [setValue]);

  return (
    <Button className="p-5 px-12" onClick={deleteLast}>
      ←
    </Button>
  );
};

export default memo(DeleteLast);
