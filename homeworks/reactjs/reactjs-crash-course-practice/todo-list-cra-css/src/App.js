import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
import { v4 as uuidv4 } from "uuid";

import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: "Take out the trash",
        completed: false,
      },
      {
        id: uuidv4(),
        title: "Dinner with wife",
        completed: false,
      },
      {
        id: uuidv4(),
        title: "Meeting with boss",
        completed: false,
      },
    ],
  };

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
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  // Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Routes>
              {" "}
              {/* Используем Routes вместо просто Route */}
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
