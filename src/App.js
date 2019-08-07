import React, { Component } from 'react';
import TodoContainer from './containers/TodoContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Vana's Todo List</h1>
        </header>
        <section>
          <TodoContainer></TodoContainer>
        </section>
        <footer>
          ⓒ 2019. Vana
        </footer>
      </div>
    )
  }
}

export default App;
