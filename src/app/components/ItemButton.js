import React from "react";

function ItemButton(props) {
  return (
    <div
      onClick={() => {
        if (props.handler) props.handler();
      }}
      className="item-card-button"
    >
      <button style={props.styles || {}} className="custom-button">
        {props.children}
      </button>
    </div>
  );
}

export default ItemButton;
