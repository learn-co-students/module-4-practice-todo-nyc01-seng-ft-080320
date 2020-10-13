import React from 'react'
import Task from './Task'

class TaskForm extends React.Component {

    //bug here with a default select value. Should be "" but has weird behavior. Need to properly select default value
    state={
        text: "",
        category: "Code"
    }

    renderCategories = () => {
        return this.props.categories.map((category, index) => {
            return <option key={index} value={category}>{category}</option>
        })
    }

    renderCategorySelect = () => {
        return (
            <select onChange={this.changeHandler} name="category">
                {this.renderCategories()}
            </select>
        )
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addTask = (e) => {
        this.props.addTask(this.state)
    }

    render() {
        return (
            <div className="new-task-form">
                <input onChange={this.changeHandler} type="text" placeholder="New Task?" name="text"></input>
                {this.renderCategorySelect()}
                <input onClick={this.addTask} type="submit"></input>
            </div>
        )
    }

}

export default TaskForm