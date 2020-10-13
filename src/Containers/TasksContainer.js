import React from 'react';
import { Task } from '../Components/Task';
import NewTaskForm from '../Components/NewTaskForm';
import SearchBar from '../Components/SearchBar';
import { EditTaskForm } from '../Components/EditTaskForm';

class TasksContainer extends React.Component {
	state = {
		searchTerm: ''
	};

	renderTasks = (category) => {
		if (category === 'All') {
            const searched = this.props.tasks.filter(task => {
                return task.text.toLowerCase().includes(this.state.searchTerm.toLowerCase())
            })
			return  searched.map((task, index) => {
				return <Task editHandler={this.props.editHandler} deleteClickHandler={this.props.deleteClickHandler} key={index} task={task} />;
			});
		} else {
			const filtered = this.props.tasks.filter((task) => {
				return task.category === category;
			});
            const searched = filtered.filter(task => {
               return task.text.toLowerCase().includes(this.state.searchTerm.toLowerCase())
            })
			return searched.map((task, index) => {
				return <Task editHandler={this.props.editHandler} deleteClickHandler={this.props.deleteClickHandler} key={index} task={task} />;
			});
		}
	};

	searchHandler = (e) => {
		this.setState({
			searchTerm: e.target.value
		});
	};
	render() {
		return (
			<div className="tasks">
				<h5>Tasks</h5>
				<SearchBar searchTerm={this.state.searchTerm} searchHandler={this.searchHandler} />
                {this.props.showEdit? <EditTaskForm submitHandler={this.props.editSubmitHandler}changeHandler={this.props.changeHandlerForEdit}task={this.props.taskToEdit}/>: null}
				<NewTaskForm submitHandler={this.props.submitHandler} />
				<div>{this.renderTasks(this.props.category)}</div>
			</div>
		);
	}
}

export default TasksContainer;
