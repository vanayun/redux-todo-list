import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import * as todoActions from '../store/modules/todo';
import Todo from '../components/Todo';

class TodoContainer extends Component {

  // state = {
  //   list : [],
  //   isEditing : false
  // }

  // id = 0;

  handleEdit = (id) => {
    const { TodoActions } = this.props;
    TodoActions.editTodo(id);

    // const { list } = this.state;
    // this.setState({
    //   list : list.map((item) => {
    //     if(item.id === id) {
    //       return {
    //         ...item,
    //         isEditing: true
    //       }
    //     } else {
    //       return item
    //     }
    //   })
    // })
  }

  handleUpdate = (id, text) => {
    const { list } = this.state;
    this.setState({
      list : list.map((item) => {
        if(item.id === id) {
          return {
            ...item,
            text,
            createAt: moment().format('YYYY[-]MM[-]DD HH[:]MM'),
            isEditing: false
          }
        } else {
          return item
        }
      })
    })
  }

  handleDelete = (id) => {
    const { list } = this.state;
    this.setState({
      list : list.filter((item) => item.id !== id)
    })
  }

  handleAddTodo = (text) => {
    if(!text) {
      alert('할 일을 입력해주세요!');
      return false;
    }
    const { list, isEditing } = this.state;
    const itemData = {
      id : this.id++,
      createAt : moment().format('YYYY[-]MM[-]DD HH[:]mm'),
      isEditing,
      text
    }
    this.setState({
      list : [itemData].concat(list)
    })
  }

  render() {
    return (
      <div>
        {Todo}
      </div>
    );
  }
}

const mapStateToProps = ({todo}) => ({
  input: todo.input,
  list: todo.list
})

const mapDispatchToProps = dispatch => ({
  TodoActions: bindActionCreators(todoActions, dispatch)
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoContainer);