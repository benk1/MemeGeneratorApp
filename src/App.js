import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import MemeGenerator from './components/MemeGenerator';

//import TodoItems from './components/TodoItems';
//import AddTodo from './components/AddTodo';
//import MyInfo from './components/MyInfo';
import Header from './components/Header';

class App extends Component {
  state = {
    todos: [
      { content: 'buy sausages', id: 1 },
      { content: 'go to work', id: 2 },
      { content: 'buy milk', id: 3 },
      { content: 'time to chill out', id: 4 }
    ],
    characters: {},
    loading: false
  };
  handleDelete = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos
    });
  };
  addTodo = todo => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
  };
  async componentDidMount() {
    this.setState({
      loading: true
    });
    const { data: characters } = await axios.get(
      'https://swapi.co/api/people/1/'
    );
    //console.log(characters);
    this.setState({
      loading: false,
      characters
    });
  }

  render() {
    const { todos, characters, loading } = this.state;
    const text = loading ? 'Loading...' : characters.name;
    const todosLength = todos.length;
    return (
      <div className='App container'>
        <h1>Meme Generator App</h1>
        <Header />
        <MemeGenerator />
      </div>
    );
  }
}

export default App;
