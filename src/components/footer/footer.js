import React, { Component } from "react";
import ReactDOM from "react-dom/client";

import "./footer.css";
import TasksFilter from "../task-filter/task-filter";
import { compareAsc } from "date-fns";

export default class Footer extends Component {
  render() {
    const { todoCount, onActive, onCompleted, onAll, clearCompleted } =
      this.props;
    return (
      <footer className="footer">
        <span className="todo-count">{todoCount} items left</span>
        <TasksFilter
          onActive={() => onActive()}
          onCompleted={() => onCompleted()}
          onAll={() => onAll()}
        />
        <button className="clear-completed" onClick={() => clearCompleted()}>
          Clear completed
        </button>
      </footer>
    );
  }
}
