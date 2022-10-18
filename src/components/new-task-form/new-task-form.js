import React from "react";
import ReactDOM from "react-dom/client";

import "./new-task-form.css";

function NewTaskFrom() {
  return (
    <input
      className="new-todo"
      placeholder="What needs to be done?"
      autoFocus
    />
  );
}

export default NewTaskFrom;
