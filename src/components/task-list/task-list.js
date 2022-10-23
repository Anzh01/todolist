import React, { Component } from "react";
import ReactDOM from "react-dom/client";

import "./task-list.css";
import Task from "../task/task";

export default class TodoList extends Component {
  render() {
    const { todos, onDeleted, onToggleDone } = this.props;
    const elements = todos.map((item) => {
      const { id, label, completed, displayed } = item;
      return (
        <li key={id}>
          <Task
            label={label}
            completed={completed}
            displayed={displayed}
            onDeleted={() => onDeleted(id)}
            onToggleDone={() => onToggleDone(id)}
          />
        </li>
      );
    });

    return <ul className="todo-list">{elements}</ul>;
  }
}
