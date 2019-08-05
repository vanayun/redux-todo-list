import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const Todo = () => {
  return (
    <div>
      <TodoInput addTodo={this.handleAddTodo}></TodoInput>
      <TodoList list={this.state.list}
        doEdit={this.handleEdit}
        doUpdate={this.handleUpdate}
        doDelete={this.handleDelete}
      ></TodoList>
    </div>
  );
};

export default Todo;