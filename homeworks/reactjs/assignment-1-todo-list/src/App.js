import React, { Component } from 'react';
import { ToDoForm } from './components/ToDoForm';
import { ToDoList } from './components/ToDoList';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      isSubmitted: false,
      taskList: [],
      id: 0,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleClickAdd = (e) => {
    // Prevent the browser from reloading the page
    e.preventDefault();

    const { title, description, taskList, id } = this.state;

    if (!title.trim()) {
      alert('Please enter at least the task name');
      return;
    }

    this.setState({
      id: Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000, // Generate 4 Digit Random Number
      isSubmitted: true,
      taskList: [...taskList, { title, description, id }], // add new task data to task list
      title: '', // reset input
      description: '', // reset textarea
    });

    console.log('Form submitted!');
  };

  handleClickDone = (e) => {
    const filteredList = this.state.taskList.filter((item) => item !== item.id);
    this.setState({
      taskList: filteredList,
    });
  };

  render() {
    const { title, description, isSubmitted, taskList } = this.state;

    return (
      <div className='container d-grid col-12 text-center d-flex flex-column justify-content-start min-vh-100 p-3'>
        <ToDoForm
          title={title}
          description={description}
          handleChange={this.handleChange}
          handleClickAdd={this.handleClickAdd}
        />
        {isSubmitted ? (
          <ToDoList taskList={taskList} onClick={this.handleClickDone} />
        ) : null}
      </div>
    );
  }
}
