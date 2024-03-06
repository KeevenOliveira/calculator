import { SetStateAction } from "react";

import Number from "../Number";
import DeleteLast from "../DeleteLast";
interface NumbersContainerProps {
  setValue: React.Dispatch<SetStateAction<number>>;
}

const NumbersContainer = ({ setValue }: NumbersContainerProps) => {
  return (
    <div>
      <div>
        <Number setValue={setValue}>7</Number>
        <Number setValue={setValue}>8</Number>
        <Number setValue={setValue}>9</Number>
      </div>
      <div>
        <Number setValue={setValue}>4</Number>
        <Number setValue={setValue}>5</Number>
        <Number setValue={setValue}>6</Number>
      </div>
      <div>
        <Number setValue={setValue}>1</Number>
        <Number setValue={setValue}>2</Number>
        <Number setValue={setValue}>3</Number>
      </div>
      <div>
        <Number setValue={setValue}>0</Number>
        <Number setValue={setValue}>.</Number>
        <DeleteLast setValue={setValue} />
      </div>
    </div>
  );
};

export default NumbersContainer;
