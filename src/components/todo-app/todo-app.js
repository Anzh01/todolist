import React, { Component } from 'react';

import './todo-app.css';

import Header from '../header/header';
import TodoList from '../task-list/task-list';
import Footer from '../footer/footer';

export default class App extends Component {
  maxId = 1;

  state = {
    todoData: [this.createItem('Completed task'), this.createItem('Editing task'), this.createItem('Active task')],
  };
  createItem(label) {
    return {
      label,
      id: this.maxId++,
      completed: false,
      displayed: true,
    };
  }

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      const newArr = [...todoData].map((el) => (el.id === id ? { ...el, completed: !el.completed } : { ...el }));

      return {
        todoData: newArr,
      };
    });
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

      return {
        todoData: newArray,
      };
    });
  };

  addItem = (text) => {
    const newItem = this.createItem(text);

    this.setState(({ todoData }) => {
      const newArray = [...todoData, newItem];
      return {
        todoData: newArray,
      };
    });
  };

  onActive = () => {
    this.setState(({ todoData }) => {
      const newArr = [...todoData].map((el) =>
        el.completed ? { ...el, displayed: false } : { ...el, displayed: true }
      );

      return {
        todoData: newArr,
      };
    });
  };

  onCompleted = () => {
    this.setState(({ todoData }) => {
      const newArr = [...todoData].map((el) =>
        !el.completed ? { ...el, displayed: false } : { ...el, displayed: true }
      );

      return {
        todoData: newArr,
      };
    });
  };

  onAll = () => {
    this.setState(({ todoData }) => {
      const newArr = [...todoData].map((el) => (el = { ...el, displayed: true }));
      return {
        todoData: newArr,
      };
    });
  };

  clearCompleted = () => {
    this.setState(({ todoData }) => {
      const newArray = [...todoData].filter((el) => !el.completed);
      return { todoData: newArray };
    });
  };

  render() {
    const doneCount = this.state.todoData.filter((el) => el.completed).length;
    const todoCount = this.state.todoData.length - doneCount;

    return (
      <section className="todoapp">
        <Header onItemAdded={this.addItem} />
        <TodoList todos={this.state.todoData} onDeleted={this.deleteItem} onToggleDone={this.onToggleDone} />
        <Footer
          doneCount={doneCount}
          todoCount={todoCount}
          onActive={this.onActive}
          onCompleted={this.onCompleted}
          onAll={this.onAll}
          clearCompleted={this.clearCompleted}
        />
      </section>
    );
  }
}
