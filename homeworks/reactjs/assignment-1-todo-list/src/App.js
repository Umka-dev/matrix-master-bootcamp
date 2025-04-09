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
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleClick = (e) => {
    // Prevent the browser from reloading the page
    e.preventDefault();

    this.setState({
      isSubmitted: true,
    });

    console.log('Form submitted!');
  };

  render() {
    const { title, description, isSubmitted } = this.state;

    return (
      <div className='container d-grid col-12 text-center d-flex flex-column justify-content-start min-vh-100 p-3'>
        <ToDoForm
          title={title}
          description={description}
          handleChange={this.handleChange}
          handleClick={this.handleClick}
        />
        {isSubmitted ? (
          <ToDoList title={title} description={description} />
        ) : null}
      </div>
    );
  }
}
