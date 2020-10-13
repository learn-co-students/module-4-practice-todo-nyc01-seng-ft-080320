import React from 'react';
import '../App.css';
import CategoriesForm from '../Components/CategoriesForm';
import { CATEGORIES } from '../Components/data';
import TasksContainer from '../Containers/TasksContainer';

class App extends React.Component {
	state = {
		tasks: [],
		category: 'All'
	};

	componentDidMount = () => {
        fetch('http://localhost:3000/tasks')
        .then((resp) => resp.json())
        .then((tasks) => {
			this.setState({ tasks });
		});
	};

	deleteClickHandler = (taskObj) => {
		const options = {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify(taskObj)
		};
        fetch(`http://localhost:3000/tasks/${taskObj.id}`, options)
        .then((resp) => resp.json())
        .then(() => {
			const currentState = [ ...this.state.tasks ];
			const filtered = currentState.filter((task) => {
				return task.text !== taskObj.text;
			});
			this.setState({ tasks: filtered });
		});
	};

	newTaskSubmitHandler = (taskObj) => {
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify(taskObj)
		};
		if (taskObj.text !== '') {
            fetch('http://localhost:3000/tasks', options)
            .then((resp) => resp.json())
            .then((newTask) => {
				const newArr = [ ...this.state.tasks, newTask ];
				this.setState({ tasks: newArr });
			});
		}
	};

	categoryClickHandler = (e) => {
        console.log(e.target.innerText)
        const prevCategory = this.state.category;
        
		const allButtons = document.querySelectorAll('button');
		for (let button of allButtons) {
			if (button.innerText === prevCategory) {
				button.classList.remove('selected');
			}
		}
		e.target.classList.add('selected');
		this.setState({ category: e.target.innerText });
	};

	render() {
		return (
			<div className="App">
				<h2>My tasks</h2>
				<CategoriesForm clickHandler={this.categoryClickHandler} />
				<TasksContainer
					deleteClickHandler={this.deleteClickHandler}
					tasks={this.state.tasks}
					category={this.state.category}
					submitHandler={this.newTaskSubmitHandler}
				/>
			</div>
		);
	}
}

export default App;
