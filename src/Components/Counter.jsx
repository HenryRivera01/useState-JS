import { useState } from "react";

export const Counter = () => {
  let [value, setValue] = useState(0);

  function changeColor(value) {
    let valueClass = "";

    if (value < 0) {
      valueClass = "red";
    } else if (value > 0) {
      valueClass = "green";
    } else {
      valueClass = "blue";
    }

    return valueClass;
  }



  const colorClass = changeColor(value);

  return (
    <div className="counter-container">
      <p className={`number ${colorClass}`}>{value}</p>
      <button onClick={() => setValue(value + 1)}>increase</button>
      <button onClick={() => setValue(value - 1)}>decrease</button>
      <button onClick={() => setValue((value = 0))}>restart</button>
    </div>
  );
};
