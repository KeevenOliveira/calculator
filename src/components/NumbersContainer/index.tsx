import Number from "../Number";

interface NumbersContainerProps {
  setValue: (value: string) => void;
}

const NumbersContainer = ({ setValue }: NumbersContainerProps) => {
  return (
    <div className="text-6xl flex flex-col items-center">
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
        <Number>.</Number>
        <Number>←</Number>
      </div>
    </div>
  );
};

export default NumbersContainer;
