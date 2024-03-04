import Number from "../Number";

const NumbersContainer = () => {
  return (
    <div className="text-6xl flex flex-col items-center">
      <div>
        <Number>7</Number>
        <Number>8</Number>
        <Number>9</Number>
      </div>
      <div>
        <Number>4</Number>
        <Number>5</Number>
        <Number>6</Number>
      </div>
      <div>
        <Number>1</Number>
        <Number>2</Number>
        <Number>3</Number>
      </div>
    </div>
  );
};

export default NumbersContainer;
