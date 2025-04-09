import React, { Component } from 'react';
import { ToDoForm } from './components/ToDoForm';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='container d-grid col-12 text-center d-flex flex-column justify-content-start min-vh-100 p-3'>
        <ToDoForm />
      </div>
    );
  }
}
