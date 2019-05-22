import React, { Component } from "react";
import { DeletePopUp } from "./DeletePopUp";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  showConfirmation = e => {
    if (this.state.clicked === true) return;
    e.preventDefault();
    this.setState({ clicked: true });
  };

  hideConfirmation = e => {
    console.log("Hiding");
    e.preventDefault();
    this.setState({ clicked: false });
  };

  itemClicked() {
    if (this.state.clicked === true) {
      return (
        <DeletePopUp
          visible={true}
          item={this.state.items}
          cancel={this.hideConfirmation}
          delete={this.props.deleteMe}
        />
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <li onClick={this.showConfirmation}>
        {this.props.text}
        {this.itemClicked()}
      </li>
    );
  }
}

export default TodoItem;
