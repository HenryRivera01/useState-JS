import { useState } from "react";
import { Counter } from "./Counter";
import { Modal } from "./Modal";

export const Select = () => {
  let [display, setDisplay] = useState("Counter");

  return (
    <section className="select-container">
      <h2 className="title-select">Select the component</h2>
      <select
        name="select"
        id="select"
        onChange={(e) => setDisplay(e.target.value)}
      >
        <option value="Counter">Counter</option>
        <option value="Modal">Modal</option>
      </select>
      <div className="display-container">
        {display === "Counter" ? <Counter /> : <Modal />}
      </div>
    </section>
  );
};
