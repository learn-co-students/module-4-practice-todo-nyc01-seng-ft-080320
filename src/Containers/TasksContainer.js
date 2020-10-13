import React from 'react'
import Task from '../Components/Task'
import TaskForm from '../Components/TaskForm'
import CategoriesContainer from './CategoriesContainer'

class TasksContainer extends React.Component {

    renderTasks = () => {
        if (this.props.selected === "All") {
            return this.props.tasks.map((task,index) => <Task task={task} key={index} deleteTask={this.props.deleteTask}/>)
        } else {
            return this.props.tasks.filter(task => task.category === this.props.selected).map((task,index) => <Task task={task} key={index} />)
        }
    }

    render() {
        return (
            <React.Fragment>
                <h5>Category Filters</h5>
                <CategoriesContainer categories={this.props.categories} selected={this.props.selected} changeCategory={this.props.changeCategory}/>
                <div className="tasks">
                    <h5>Tasks</h5>
                    <TaskForm addTask={this.props.addTask} categories={this.props.categories}/>
                    {this.renderTasks()}
                </div>
            </React.Fragment>

        )
    }

}

export default TasksContainer