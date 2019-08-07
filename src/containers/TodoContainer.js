import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Todo from '../components/Todo';
import * as todoActions from '../store/modules/todo';

class TodoContainer extends Component {

  handleChange = e => {
    const { TodoActions } = this.props;
    TodoActions.changeInput(e.target.value);
  };

  handleSubmit = e => {
    e.preventDefault();
    const { TodoActions, text } = this.props;
    TodoActions.addTodo(text);
    TodoActions.changeInput('');
  }

  handleComplete = id => {
    const { TodoActions } = this.props;
    TodoActions.complete(id);
  }

  handleRemove = id => {
    const { TodoActions } = this.props;
    TodoActions.removeTodo(id);
  }

  render() {
    const { text, list } = this.props;
    return (
      <div>
        <Todo
          text={text}
          todoList={list}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          onComplete={this.handleComplete}
          onRemove={this.handleRemove}
        >
        </Todo>
      </div>
    );
  }
}

const mapStateToProps = ({ todo }) => ({
  text: todo.text,
  list: todo.list
});

const mapDispatchToProps = dispatch => ({
  TodoActions: bindActionCreators(todoActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoContainer);