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
      <h2 className="component-title">Counter</h2>
      <p className={`number ${colorClass}`}>{value}</p>
      <div className="buttons-container">
        <button className="button-counter" onClick={() => setValue(value + 1)}>
          increase
        </button>
        <button className="button-counter" onClick={() => setValue(value - 1)}>
          decrease
        </button>
        <button
          className="button-counter"
          onClick={() => setValue((value = 0))}
        >
          restart
        </button>
      </div>
    </div>
  );
};
