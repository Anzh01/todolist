import React, { Component } from "react";
import PropTypes from "prop-types";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

import "./task.css";

export default class Task extends Component {
  state = {
    completed: false,
  };

  OnLabelClick = () => {
    this.setState((state) => {
      return {
        completed: !state.completed,
      };
    });
  };

  render() {
    let classNames = "view";

    const { completed } = this.state;
    if (completed) {
      classNames += " completed";
    }
    const { label, onDeleted } = this.props;
    return (
      <div className={classNames} onClick={this.OnLabelClick}>
        <input className="toggle" type="checkbox" />
        <label>
          <span className="description">{label}</span>
          <span className="created">
            {formatDistanceToNow(new Date(), { addSuffix: true })}
          </span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy" onClick={onDeleted}></button>
      </div>
    );
  }
}
