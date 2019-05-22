import React from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";

const imageUrl =
  "https://images.pexels.com/photos/16347/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], clicked: false };
    this.addItem = this.addItem.bind(this);
    this.deleteItemNow = this.deleteItemNow.bind(this);
  }
  addItem(e) {
    if (this._inputElement.value !== "") {
      let newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };

      this.setState(prevState => {
        return {
          items: prevState.items.concat(newItem)
        };
      });

      this._inputElement.value = "";
    }

    console.log(this.state.items);

    e.preventDefault();
  }

  deleteItemNow(key) {
    let filteredItems = this.state.items.filter(function(item) {
      return item.key !== key;
    });

    this.setState({
      items: filteredItems
    });
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <img src={imageUrl} alt="imageName" />
          <p>This is my first React app</p>

          <form onSubmit={this.addItem}>
            <input ref={a => (this._inputElement = a)} />
            <button type="submit">add</button>
          </form>
        </div>
        <TodoItems
          entries={this.state.items}
          popUp={this.popUp}
          deleteItem={this.deleteItemNow}
        />
      </div>
    );
  }
}

export default TodoList;
