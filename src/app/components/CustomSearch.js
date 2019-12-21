import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
function CustomSearch(props) {
  const [state, setState] = React.useState({
    isTyping: false,
    keyword: ""
  });
  let styles = {
    position: "absolute",
    top: `50%`,
    left: `50%`,
    transform: `translate(-60%, -43%)`,
    display: state.isTyping ? "block" : "none"
  };
  return (
    <div className="custom-input-wrapper">
      <input
        type="text"
        placeholder="Search items..."
        className="custom-search-input"
        value={state.keyword}
        onChange={e => {
          setState({
            isTyping: true,
            keyword: e.target.value
          });
          props.handleSearch(e.target.value);
        }}
        onBlur={e => {
          setState({ ...state, isTyping: false });
          props.handleSearch(e.target.value);
        }}
      />
      <span></span>
      <button className="search-button">
        <FontAwesomeIcon
          icon={faSearch}
          style={{ display: state.isTyping ? "none" : "block" }}
        ></FontAwesomeIcon>
        <div className="lds-ring" style={styles}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </button>
    </div>
  );
}

export default CustomSearch;
