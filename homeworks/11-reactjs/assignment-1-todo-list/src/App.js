import React, { Component } from 'react';
import { ToDoForm } from './components/ToDoForm';
import { ToDoList } from './components/ToDoList';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      taskList: [],
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value, // here [name] - allows to create the dynamic object keys
    });
  };

  handleClickAdd = (e) => {
    // Prevent the browser from reloading the page
    e.preventDefault();

    const { title, description, taskList } = this.state;

    if (!title.trim()) {
      alert('Please enter at least the task name');
      return;
    }

    this.setState({
      taskList: [...taskList, { title, description, id: Date.now() }], // add new task data to task list // unic id = timestamp in millisecondss
      title: '', // reset input
      description: '', // reset textarea
    });

    console.log('Form submitted!');
  };

  handleClickDone = (id) => {
    const filteredList = this.state.taskList.filter((item) => item.id !== id);
    this.setState({
      taskList: filteredList,
    });
  };

  render() {
    const { title, description, taskList } = this.state;

    return (
      <div className='container d-grid col-12 text-center d-flex flex-column justify-content-start min-vh-100 p-3'>
        <ToDoForm
          title={title}
          description={description}
          handleChange={this.handleChange}
          handleClickAdd={this.handleClickAdd}
        />
        {taskList.length ? (
          <ToDoList
            taskList={taskList}
            handleClickDone={this.handleClickDone}
          />
        ) : null}
      </div>
    );
  }
}
