import { useState } from "react";

export const Modal = () => {
  let [visibility, setVisibility] = useState(false);
  const showModal = visibility;

  function toogleModal(visibility) {
    let toogleClass = "";
    if (visibility === true) {
      toogleClass = "show-modal";
    } else {
      toogleClass = "hide-modal";
    }
    return toogleClass;
  }

  console.log(toogleModal(showModal));

  return (
    <>
      <div className="modal-container">
        <h2 className="component-title">Modal</h2>
        <button className="show-modal-btn" onClick={() => setVisibility(true)}>
          Show Modal
        </button>
      </div>
      <section className={`modal ${toogleModal(showModal)}`}>
        <div className="bg-modal">
          <p>Soy un modal</p>
          <button onClick={() => setVisibility(false)} className="closebtn">
            Cerrar Modal
          </button>
        </div>
      </section>
    </>
  );
};
