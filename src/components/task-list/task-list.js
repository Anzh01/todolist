import React, { Component } from "react";
import ReactDOM from "react-dom/client";

import "./task-list.css";
import Task from "../task/task";

export default class TodoList extends Component {
  render() {
    const { todos, onDeleted } = this.props;
    const elements = todos.map((item) => {
      const { id, label } = item;
      return (
        <li key={id}>
          <Task label={label} onDeleted={() => onDeleted(id)} />
        </li>
      );
    });

    return <ul className="todo-list">{elements}</ul>;
  }
}
