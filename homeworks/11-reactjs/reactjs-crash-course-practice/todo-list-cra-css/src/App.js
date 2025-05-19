import React, { Component } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";

import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";

import "./App.css";

class App extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => this.setState({ todos: res.data }))
      .catch((err) => console.log(err));
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  // Delete todo
  delTodo = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) =>
        this.setState({
          todos: [...this.state.todos.filter((todo) => todo.id !== id)],
        })
      )
      .catch((err) => console.log(err));
  };

  // Add Todo
  addTodo = (title) => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title,
        completed: false,
      })
      .then((res) =>
        this.setState({
          todos: [...this.state.todos, res.data],
        })
      )
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <AddTodo addTodo={this.addTodo} />
                    <Todos
                      todos={this.state.todos}
                      markComplete={this.markComplete}
                      delTodo={this.delTodo}
                    />
                  </>
                }
              />
              <Route exact path="/about" Component={About} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
