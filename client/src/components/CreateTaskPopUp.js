import React, { Component } from "react";
import '../css/createTaskPopUp.css'
export default class CreateTaskPopUp extends Component {
  handleClick = () => {
   this.props.toggle();
  };

render() {
  return (
    <div className="modal">
    <div className="modal_content">
      <span className="close" onClick={this.handleClick}>
        &times;
      </span>
      <form>
        <h3>Register!</h3>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <input type="submit" />
      </form>
    </div>
  </div>
  );
 }
}