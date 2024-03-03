"use client";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState(0);

  return (
    <main className="w-full h-dvh p-5">
      <input
        className="bg-black color-white outline-none -webkit-appearance-none -moz-appearance-textfield w-screen h-2/5 border-4 border-white text-8xl text-end"
        type="number"
      />
    </main>
  );
}
