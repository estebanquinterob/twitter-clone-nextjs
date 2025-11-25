"use client";
import { useState } from "react";

export default function Counter() {
  const [n, setN] = useState(0);
  return (
    <div>
        <p>solo practico client side, luego lo arreglo</p>
        <button className="border-2 rounded-2xl p-3 m-4" onClick={() => setN(n+1)}>{n}</button>
    </div>
  );
}
