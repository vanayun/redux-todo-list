import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({list, onComplete, onRemove}) => {
  return (
    <div>
      {
        list.map((item) => (
        <TodoListItem
          key={item.id}
          item={item}
          onComplete={onComplete}
          onRemove={onRemove}
        >
        </TodoListItem>))
      }
    </div>
  );
};

export default TodoList;