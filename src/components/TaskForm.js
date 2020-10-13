import React from 'react'
import SelectOption from './SelectOption'

class TaskForm extends React.Component {
    state = {
        text: '',
        category: '',
    }

    renderCategoryOptions = () => {
        return this.props.categories.map(cat => <SelectOption category={cat} />)
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.addTask(this.state)
        this.setState({ text: '', category: '' })
    }

    render() {
        return <form className="new-task-form" onSubmit={this.submitHandler}>
            <input type="text" 
                name="text" 
                placeholder="New task details" 
                value={this.state.text}
                onChange={this.changeHandler}/>
            <select name="category" onChange={this.changeHandler} value={this.state.category}>
                {this.renderCategoryOptions()}
            </select>
            <input type="submit" value="Add task" />
        </form>
    }
}

export default TaskForm