import React from "react";
import "./TodoList.css";

export class DeletePopUp extends React.Component {
  render() {
    if (this.props.visible) {
      return (
        <div className="Content">
          <div className="PopUpHeader">Delete this Item from your List ?</div>
          <div className="Content">
            You added this item before .Deleting will permanently remove it from
            the list
          </div>
          <div className="confirm-buttons">
            <button onClick={this.props.cancel} className="cancel">
              CANCEL
            </button>
            <button onClick={this.props.delete} className="delete">
              DELETE
            </button>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
