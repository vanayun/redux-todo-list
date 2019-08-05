import React, { Component } from 'react'

class TodoInput extends Component {

  todoText = React.createRef();

  handleInsert = (e) => {
    e.preventDefault(); // form의 새로고침 방지를 위해 추가.
    this.props.addTodo(this.todoText.current.value);
    this.todoText.current.value = '';
  }

  render() {
     return (
      <div>
        <form onSubmit={this.handleInsert}>
          <input type="text" ref={this.todoText}></input>
          <button>추가</button>
        </form>
      </div>
    )
  }
}
export default TodoInput;