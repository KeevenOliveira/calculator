"use client";
import { useState } from "react";

import NumbersContainer from "@/components/NumbersContainer";

export default function Home() {
  const [value, setValue] = useState(0);

  return (
    <main className="w-full h-dvh">
      <input
        className="bg-black color-white outline-none -webkit-appearance-none -moz-appearance-textfield w-screen h-2/5 text-8xl text-end"
        type="number"
      />

      <NumbersContainer />
    </main>
  );
}
