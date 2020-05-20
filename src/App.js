import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      list: []
    };
  }

  updateInput(key, value) {
    // update react state
    this.setState({ [key]: value });
  }

  addItem() {
    // create a new item with unique id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };

    // copy current list of items
    const list = [...this.state.list];

    // add the new item to the list
    list.push(newItem);

    // update state with new list, reset the new item input
    this.setState({
      list,
      newItem: ""
    });
  }

  deleteItem(id) {
    // copy current list of items
    const list = [...this.state.list];
    // filter out the item being deleted
    const updatedList = list.filter(item => item.id !== id);

    this.setState({ list: updatedList });
  }

  render() {
    document.body.style.backgroundColor = "#b1f3fb";
    return (
      <div className="App">
        <h1> Open ToDo List</h1>

        <input
          className="action-button"
          type="text"
          onChange={e => this.updateInput("newItem", e.target.value)}
          placeholder="Give me stuff to do"
          value={this.state.newItem}
        />
        <button
          className="action-button shadow animate blue"
          onClick={() => this.addItem()}
        >
          I promise I'll do it!
        </button>

        <br />
        <ul>
          {this.state.list.map(item => {
            return (
              <li class="unordered" key={item.id}>
                {item.value}
                <button
                  class="action-button"
                  onClick={() => this.deleteItem(item.id)}
                >
                  Delete?
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
