import React from 'react'
import Task from "./Task.js"
import TaskForm from './TaskForm.js'
class Tasks extends React.Component {

    taskify = () => {
        return this.props.tasks.map((task, idx)=>{
            return <Task key={idx} task={task} deleteTask={this.props.deleteTask}/>
        })
    }
    render(){
        return(
            <div className="tasks">
              <h5>Tasks</h5>
                <TaskForm newTask={this.props.newTask}/>
            {this.taskify()}
            </div>
        )
    }
}

export default Tasks