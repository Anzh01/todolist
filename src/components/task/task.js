import React, { Component } from "react";
import PropTypes from "prop-types";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

import "./task.css";

export default class Task extends Component {
  static propTypes = {
    label: (props, propName, componentName) => {
      const value = props[propName];
      if (typeof value === "string" && value.length !== 0) {
        return null;
      }

      return new TypeError(`${componentName}: ${propName} should be a text`);
    },
    onDeleted: (props, propName, componentName) => {
      const value = props[propName];
      if (typeof value === "function") {
        return null;
      }

      return new TypeError(
        `${componentName}: ${propName} should be a function`
      );
    },
    onToggleDone: (props, propName, componentName) => {
      const value = props[propName];
      if (typeof value === "function") {
        return null;
      }

      return new TypeError(
        `${componentName}: ${propName} should be a function`
      );
    },
    completed: (props, propName, componentName) => {
      const value = props[propName];
      if (typeof value === "boolean") {
        return null;
      }

      return new TypeError(
        `${componentName}: ${propName} should be true or false`
      );
    },
    displayed: (props, propName, componentName) => {
      const value = props[propName];
      if (typeof value === "boolean") {
        return null;
      }

      return new TypeError(
        `${componentName}: ${propName} should be true or false`
      );
    },
  };

  static defaultProps = {
    onDeleted: () => {},
    onToggleDone: () => {},
    label: "New Todo",
    completed: false,
    displayed: true,
  };

  state = {
    date: new Date(),
  };

  render() {
    const { date } = this.state;
    let classNames = "view";
    const { label, onDeleted, onToggleDone, completed, displayed } = this.props;

    if (completed) {
      classNames += " completed";
    }
    if (!displayed) {
      classNames += " not-displayed";
    }

    return (
      <div className={classNames} onClick={onToggleDone}>
        <input className="toggle" type="checkbox" />
        <label>
          <span className="description">{label}</span>
          <span className="created">
            {formatDistanceToNow(date, { includeSeconds: true })} ago
          </span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy" onClick={onDeleted}></button>
      </div>
    );
  }
}
