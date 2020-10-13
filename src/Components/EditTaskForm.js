import React from 'react'

class EditTaskForm extends React.Component {
    render() {
        const { task } = this.props
		return (
			<form onSubmit={this.props.submitHandler}className="new-task-form">
				<input name="text" type="text" placeholder="New task details" value={task.text} onChange={this.props.changeHandler}/>
                <select name="category"value={task.category}onChange={this.props.changeHandler}>
                    <option>Code</option>
                    <option>Food</option>
                    <option>Money</option>
                    <option >Misc</option>
                </select>
                <input type="submit" value="Update task"/>
			</form>
		);
	}
}

export {EditTaskForm}