import React from "react";
import ReactDOM from "react-dom/client";

import NewTaskForm from "../new-task-form/new-task-form";

function Header() {
  return (
    <header className="header">
      <h1> todos </h1>
      <NewTaskForm />
    </header>
  );
}

export default Header;
