import React from 'react';

class TaskCard extends React.Component {
  handleDelete = () => {
    this.props.appHandleDelete(this.props.task)
  }

  render() {
    return (
      <div className="task">
        <div className="label">
          {this.props.task.category}
        </div>
        <div className="text">
          {this.props.task.text}
        </div>
        <button className="delete" onClick={this.handleDelete}>X</button>
      </div>
    );
  }
}

export default TaskCard;