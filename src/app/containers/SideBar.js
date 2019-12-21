import React, { Component } from "react";
import {
  Col,
  Row,
  ListGroup,
  ListGroupItem,
  FormGroup,
  Label,
  CustomInput
} from "reactstrap";

class SideBar extends Component {
  render() {
    let { SwitchInput, Range, ClearButton, CustomCheckbox } = this.props;
    return (
      <div className="col-xs-12 col-md-12 col-lg-3">
        <div className="row">
          <div className="sidebar-price-control">{Range()}</div>
        </div>
        <div className="row">{SwitchInput()}</div>
        <div className="row">{ClearButton("Reset all filters")}</div>
        <div className="row">{CustomCheckbox()}</div>
      </div>
    );
  }
}

export default SideBar;
