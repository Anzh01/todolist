import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import NewTaskFrom from "../new-task-form/new-task-form";

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1> todos </h1>
        <NewTaskFrom onItemAdded={this.props.onItemAdded} />
      </header>
    );
  }
}
