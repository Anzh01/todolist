import React, { Component } from 'react';

import './task-list.css';

import Task from '../task/task';

export default class TodoList extends Component {
  render() {
    const { todos, onDeleted, onToggleDone } = this.props;
    const elements = todos.map((item) => {
      const { id, label, completed, displayed } = item;
      return (
        <li key={id}>
          <Task
            label={label}
            completed={completed}
            displayed={displayed}
            onDeleted={() => onDeleted(id)}
            onToggleDone={() => onToggleDone(id)}
          />
        </li>
      );
    });

    return <ul className="todo-list">{elements}</ul>;
  }
}

TodoList.propTypes = {
  todos: (props, propName, componentName) => {
    const value = props[propName];
    if (typeof value === 'object') {
      return null;
    }

    return new TypeError(`${componentName}: ${propName} should be an array`);
  },
  id: (props, propName, componentName) => {
    const value = props[propName];
    if (typeof value === 'number' && !isNaN(value)) {
      return null;
    }

    return new TypeError(`${componentName}: ${propName} should be a number`);
  },
  label: (props, propName, componentName) => {
    const value = props[propName];
    if (typeof value === 'string' && value.length !== 0) {
      return null;
    }

    return new TypeError(`${componentName}: ${propName} should be a text`);
  },
  onDeleted: (props, propName, componentName) => {
    const value = props[propName];
    if (typeof value === 'function') {
      return null;
    }

    return new TypeError(`${componentName}: ${propName} should be a function`);
  },
  onToggleDone: (props, propName, componentName) => {
    const value = props[propName];
    if (typeof value === 'function') {
      return null;
    }

    return new TypeError(`${componentName}: ${propName} should be a function`);
  },
  completed: (props, propName, componentName) => {
    const value = props[propName];
    if (typeof value === 'boolean') {
      return null;
    }

    return new TypeError(`${componentName}: ${propName} should be true or false`);
  },
  displayed: (props, propName, componentName) => {
    const value = props[propName];
    if (typeof value === 'boolean') {
      return null;
    }

    return new TypeError(`${componentName}: ${propName} should be true or false`);
  },
};

TodoList.defaultProps = {
  todos: [],
  id: 0,
  onDeleted: () => {},
  onToggleDone: () => {},
  label: 'New Todo',
  completed: false,
  displayed: true,
};
