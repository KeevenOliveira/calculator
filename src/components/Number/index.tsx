interface NumberProps {
  children: React.ReactNode;
}

const Number = ({ children }: NumberProps) => {
  return <button className="p-5 px-10">{children}</button>;
};

export default Number;
