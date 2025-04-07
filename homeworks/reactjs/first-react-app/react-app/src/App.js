import React, { Component } from 'react';
import { List } from './components/List';
import { Button } from './components/Button';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'Sam',
      email: 'sam@gmail.com',
      favColors: ['Green', 'Black', 'Red', 'Blue', 'White'],
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    };
  }

  render() {
    return (
      <div className='App'>
        <h1>Hello, {this.state.userName}</h1>
        <h3>Email: {this.state.email}</h3>
        {/* send the color array to the List component */}
        <List data={this.state.favColors} />
        <List data={this.state.numbers} />
        <Button title='Click' />
        <Button title='Submit' />
      </div>
    );
  }
}
