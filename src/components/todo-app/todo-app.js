import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import "./todo-app.css";

import Header from "../header/header";
import TodoList from "../task-list/task-list";
import Footer from "../footer/footer";

export default class App extends Component {
  state = {
    todoData: [
      { label: "Completed task", id: 1 },
      { label: "Editing task", id: 2 },
      { label: "Active task", id: 3 },
    ],
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      let newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      return {
        todoData: newArray,
      };
    });
  };

  render() {
    return (
      <section className="todoapp">
        <Header />
        <TodoList todos={this.state.todoData} onDeleted={this.deleteItem} />
        <Footer />
      </section>
    );
  }
}
