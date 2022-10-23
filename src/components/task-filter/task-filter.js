import React, { Component } from "react";
import ReactDOM from "react-dom/client";

import "./task-filter.css";

export default class TasksFilter extends Component {
  render() {
    return (
      <ul className="filters">
        <li>
          <button className="selected" onClick={this.props.onAll}>
            All
          </button>
        </li>
        <li>
          <button onClick={this.props.onActive}>Active</button>
        </li>
        <li>
          <button onClick={this.props.onCompleted}>Completed</button>
        </li>
      </ul>
    );
  }
}
