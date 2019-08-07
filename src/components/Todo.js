import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const Todo = ({text, onChange, onSubmit, todoList, onComplete, onRemove }) => {
  return (
    <div>
      <TodoInput
        text={text}
        onChange={onChange}
        onSubmit={onSubmit}
      >
      </TodoInput>
      <TodoList
        list={todoList}
        onComplete={onComplete}
        onRemove={onRemove}
      >
      </TodoList>
    </div>
  )
}

export default Todo;