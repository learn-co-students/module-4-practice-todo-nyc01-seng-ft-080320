import React from 'react'
import Task from '../components/Task'

class TasksContainer extends React.Component {
    renderTasks = () => {
        return this.props.tasks.map(taskObj => <Task task={taskObj} />)
    }

    render() {
        return <div className="tasks">
            <h5>Tasks</h5>
            <div>
                {this.renderTasks()}
            </div>
        </div>
    }
}

export default TasksContainer