import React, { Component } from 'react'
import Todos from './Todos'

export default class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'buy some milk' },
      {id:2,content:'play mariocard'}
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos
    })
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      </div>
    )
  }
}
