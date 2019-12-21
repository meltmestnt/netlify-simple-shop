import React from "react";

function CustomRangeInput(props) {
  let price = props.price > 0 ? props.price : props.maxPrice;
  return (
    <div className="custom-input-wrapper">
      <label className="">Highest price: ${price}</label>
      <input
        min="0"
        max={props.maxPrice}
        step="1"
        onChange={e => {
          props.rangeHandle(+e.target.value);
        }}
        type="range"
        value={price}
        className="custom-range-input"
      />
    </div>
  );
}

export default CustomRangeInput;
