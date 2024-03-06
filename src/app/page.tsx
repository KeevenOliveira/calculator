"use client";
import { useState } from "react";

import NumbersContainer from "@/components/NumbersContainer";
import MathOperators from "@/components/MathOperators";

export default function Home() {
  const [value, setValue] = useState(0);

  return (
    <main className="w-full h-dvh">
      <input
        className="bg-black color-white outline-none -webkit-appearance-none -moz-appearance-textfield w-screen h-2/5 text-8xl text-end p-5"
        type="number"
        value={value}
        onChange={(e) => setValue(parseFloat(e.target.value))}
      />
      <div className="text-6xl flex flex-row justify-end items-center mr-5">
        <NumbersContainer setValue={setValue} />
        <MathOperators setValue={setValue} />
      </div>
    </main>
  );
}
