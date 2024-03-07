import Equal from "../Equal";
import Operator from "../Operator";

interface MathOperatorsProps {
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const MathOperators = ({ setValue }: MathOperatorsProps) => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col">
        <Operator setValue={setValue}>+</Operator>
        <Operator setValue={setValue}>-</Operator>
        <Operator setValue={setValue}>*</Operator>
        <Operator setValue={setValue}>/</Operator>
      </div>
      <div className="flex flex-col">
        <Operator setValue={setValue}>(</Operator>
        <Operator setValue={setValue}>)</Operator>
        <Equal setValue={setValue} />
      </div>
    </div>
  );
};

export default MathOperators;
