import React from 'react'

class TaskForm extends React.Component {
    render() {
        return (
            <form className="new-task-form" onSubmit={this.props.newTask}>
                <input type="text" name="what" placeholder="New Task"/>
                <select name="category">
                    <option>Code</option>
                    <option>Food</option>
                    <option>Money</option>
                    <option>Misc</option>
                </select> 
                <input type="submit" value="Add Task" />
            </form>
                
        )
    }
}

export default TaskForm