import React, { Component } from 'react';
import TodoListItem from './TodoListItem';

class TodoList extends Component {
  render() {
    const { list, doUpdate, doEdit, doDelete } = this.props;

    return (
      <div>
      {
        list.map((item) => (
        <TodoListItem key={item.id} 
          item={item}
          doUpdate={doUpdate}
          doEdit={doEdit}
          doDelete={doDelete}
        ></TodoListItem>))
      }
      </div>
    )
  }
}

export default TodoList;