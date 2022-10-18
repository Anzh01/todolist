import React from "react";
import ReactDOM from "react-dom/client";

import "./task-filter.css";

function TasksFilter() {
  return (
    <ul className="filters">
      <li>
        <button className="selected">All</button>
      </li>
      <li>
        <button>Active</button>
      </li>
      <li>
        <button>Completed</button>
      </li>
    </ul>
  );
}

export default TasksFilter;
