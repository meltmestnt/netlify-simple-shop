import React from "react";

function ClearButton(props) {
  return (
    <button onClick={e => props.clearHandle()} className="custom-button-rect">
      {props.text}
    </button>
  );
}

export default ClearButton;
