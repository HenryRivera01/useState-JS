import { useState } from "react";

export const Modal = () => {
  let [visibility, setVisibility] = useState(false);
  const showModal = visibility;
  
  function toogleModal(visibility){
    let toogleClass = ''
    if(visibility === true){
        toogleClass = 'show-modal'
    } else {
        toogleClass = 'hide-modal'
    }
    return toogleClass
  }
  
  console.log(toogleModal(showModal));
  

  return (
    <div className="modal-container">
      <button
        onClick={() => setVisibility((visibility = true))}
      >
        Show Modal
      </button>
      <div className={`modal ${toogleModal(showModal)}`}>
        <button
          onClick={() => setVisibility((visibility = false))}
          className="closebtn"
        >
          X
        </button>
        <p>Soy un modal</p>
      </div>
    </div>
  );
};
