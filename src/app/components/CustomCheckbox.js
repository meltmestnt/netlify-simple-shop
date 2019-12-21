import React from "react";

function CustomCheckbox(props) {
  return (
    <div className="custom-input-wrapper">
      <label htmlFor="custom-checkbox">Sort by price</label>
      <div className="custom-checkbox-wrapper">
        <input
          type="checkbox"
          id="custom-checkbox"
          className={`custom-checkbox ${props.sorted &&
            "custom-checkbox-checked"}`}
          value={props.sorted}
          onChange={e => props.checkboxHandle(!props.sorted)}
        />
        <span>&#10004;</span>
      </div>
    </div>
  );
}

export default CustomCheckbox;
