import React from 'react';
import TaskCard from '../Components/TaskCard';
import CreateForm from '../Components/CreateForm';

class TaskContainer extends React.Component {
  mapTasks = () => {
    if (this.props.selected === 'All') {
      return this.props.tasks.map(task => <TaskCard appHandleDelete={this.props.appHandleDelete} task={task} />)
    } else {
      const selectedTasks = this.props.tasks.filter(task => {return task.category === this.props.selected})
      return selectedTasks.map(task => <TaskCard appHandleDelete={this.props.appHandleDelete} task={task} />)
    }
  }

  render() {
    return (
      <div className="tasks">
        <h5>Tasks</h5>
        <CreateForm appHandleSubmit={this.props.appHandleSubmit} categories={this.props.categories.filter(category => {return category !== 'All'})}/>
        <div>{this.mapTasks()}</div>
      </div>
    );
  }
}

export default TaskContainer;