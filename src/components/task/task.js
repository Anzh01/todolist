import React, { Component } from "react";
import PropTypes from "prop-types";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

import "./task.css";

export default class Task extends Component {
  render() {
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
            {formatDistanceToNow(new Date(), { addSuffix: true })}
          </span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy" onClick={onDeleted}></button>
      </div>
    );
  }
}
