import React from "react";

function CustomSwitch(props) {
  return (
    <div className="custom-input-wrapper">
      <label className="" htmlFor="sidebar-switch">
        Only in stock
      </label>
      <div className="custom-switch-wrapper">
        <input
          onChange={e => {
            props.switchHandle(!props.inStock);
          }}
          type="checkbox"
          id="sidebar-switch"
          className={`custom-switch ${props.inStock &&
            "custom-switch-checked"}`}
          value={props.inStock}
        />
        <span></span>
      </div>
    </div>
  );
}

export default CustomSwitch;
