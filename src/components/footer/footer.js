import React, { Component } from 'react';

import './footer.css';

import TasksFilter from '../task-filter/task-filter';

export default class Footer extends Component {
  render() {
    const { todoCount, onActive, onCompleted, onAll, clearCompleted } = this.props;
    return (
      <footer className="footer">
        <span className="todo-count">{todoCount} items left</span>
        <TasksFilter onActive={() => onActive()} onCompleted={() => onCompleted()} onAll={() => onAll()} />
        <button className="clear-completed" onClick={() => clearCompleted()}>
          Clear completed
        </button>
      </footer>
    );
  }
}

Footer.propTypes = {
  todoCount: (props, propName, componentName) => {
    const value = props[propName];
    if (typeof value === 'number' && !isNaN(value)) {
      return null;
    }

    return new TypeError(`${componentName}: ${propName} should be a number`);
  },
  onActive: (props, propName, componentName) => {
    const value = props[propName];
    if (typeof value === 'function') {
      return null;
    }

    return new TypeError(`${componentName}: ${propName} should be a function`);
  },
  onCompleted: (props, propName, componentName) => {
    const value = props[propName];
    if (typeof value === 'function') {
      return null;
    }

    return new TypeError(`${componentName}: ${propName} should be a function`);
  },
  onAll: (props, propName, componentName) => {
    const value = props[propName];
    if (typeof value === 'function') {
      return null;
    }

    return new TypeError(`${componentName}: ${propName} should be a function`);
  },
  clearCompleted: (props, propName, componentName) => {
    const value = props[propName];
    if (typeof value === 'function') {
      return null;
    }

    return new TypeError(`${componentName}: ${propName} should be a function`);
  },
};

Footer.defaultProps = {
  onAll: () => {},
  onActive: () => {},
  onCompleted: () => {},
  clearCompleted: () => {},
  todoCount: 0,
};
