import React, { Component } from "react";
import TodoItem from "./TodoItem";
// import FlipMove from "react-flip-move";

class TodoItems extends Component {
  constructor(props) {
    super(props);

    this.createTasks = this.createTasks.bind(this);
  }
  popUp(key) {
    this.props.popUp(key);
  }

  createTasks(item) {
    return (
      <TodoItem
        text={item.text}
        key={item.key}
        deleteMe={() => this.props.deleteItem(item.key)}
      />
    );
  }

  render() {
    let todoEntries = this.props.entries;
    let listItems = todoEntries.map(this.createTasks);

    return (
      <ul className="theList">
        {/* <FlipMove duration={250} easing="ease-out"> */}
        {listItems}
        {/* </FlipMove> */}
      </ul>
    );
  }
}

export default TodoItems;
