import React, { Component } from 'react';

class TodoListItem extends Component {
  state = {
    text : this.props.item.text
  }

  handleChange = (e) => {
    this.setState({
      text : e.target.value
    })
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.handleSave();
    }
  }

  handleSave = () => {
    const { item } = this.props;
    this.props.doUpdate(item.id, this.state.text);
  }

  handleEdit = () => {
    const { item } = this.props;
    this.props.doEdit(item.id);
  }

  handleDelete = () => {
    const { item } = this.props;
    this.props.doDelete(item.id);
  }

  render() {
    const { item } = this.props;
    let template = '';

    if(item.isEditing) {
      template = (
        <div>
          <input type="text" 
            value={this.state.text} 
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
          >
          </input>
          <button onClick={this.handleSave}>저장</button>
        </div>
      );
    } else {
      template = (
        <div>
          <label>
            <input type="checkbox"></input>
            <span>{item.text} {item.createAt}</span>
          </label>
          <button onClick={this.handleEdit}>수정</button>
          <button onClick={this.handleDelete}>삭제</button>
        </div>
      );
    }
    return (
      <div>
        {template}
      </div>
    )
  }
}

export default TodoListItem;