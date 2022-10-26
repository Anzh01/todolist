import React, { Component } from "react";

import "./task-filter.css";

export default class TasksFilter extends Component {
  static propTypes = {
    onAll: (props, propName, componentName) => {
      const value = props[propName];
      if (typeof value === "function") {
        return null;
      }

      return new TypeError(
        `${componentName}: ${propName} should be a function`
      );
    },
    onActive: (props, propName, componentName) => {
      const value = props[propName];
      if (typeof value === "function") {
        return null;
      }

      return new TypeError(
        `${componentName}: ${propName} should be a function`
      );
    },
    onCompleted: (props, propName, componentName) => {
      const value = props[propName];
      if (typeof value === "function") {
        return null;
      }

      return new TypeError(
        `${componentName}: ${propName} should be a function`
      );
    },
  };

  static defaultProps = {
    onAll: () => {},
    onActive: () => {},
    onCompleted: () => {},
  };

  render() {
    const { onAll, onActive, onCompleted } = this.props;
    return (
      <ul className="filters">
        <li>
          <button onClick={onAll}>All</button>
        </li>
        <li>
          <button onClick={onActive}>Active</button>
        </li>
        <li>
          <button onClick={onCompleted}>Completed</button>
        </li>
      </ul>
    );
  }
}
