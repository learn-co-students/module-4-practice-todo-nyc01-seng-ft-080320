import React from 'react';
import './App.css';
import { CATEGORIES } from './data'
import CategoriesContainer from './containers/CategoriesContainer'
import TasksContainer from './containers/TasksContainer'

class App extends React.Component {

    state = {
        tasks: [
            {
                text: 'Buy rice',
                category: 'Food'
            },
            {
                text: 'Save a tenner',
                category: 'Money'
            },
            {
                text: 'Build a todo app',
                category: 'Code'
            },
            {
                text: 'Build todo API',
                category: 'Code'
            },
            {
                text: 'Get an ISA',
                category: 'Money'
            },
            {
                text: 'Cook rice',
                category: 'Food'
            },
            {
                text: 'Tidy house',
                category: 'Misc'
            }
        ],
        selected: "All"
    }

    clickHandler = (value) => {
        this.setState({selected: value})
    }

    filterTasks = () => {
        if (this.state.selected === "All"){
            return this.state.tasks
        } else {
            return this.state.tasks.filter(task => task.category === this.state.selected )
        }
    }

    deleteTask = (taskObj) => {
        const newArray = [...this.state.tasks]
        const index = newArray.findIndex(task => task.text === taskObj.text)
        newArray.splice(index, 1)
        this.setState({tasks: newArray})
    }

    addTask = (taskObj) => {
        this.setState(prevState => {
            return {
                tasks: [taskObj, ...prevState.tasks]
            }
        })
    }

    render() {
        return (
        <div className="App">
            <h2>My tasks</h2>
            <CategoriesContainer categories={CATEGORIES} clickHandler={this.clickHandler} selected={this.state.selected}/>
            <TasksContainer tasks={this.filterTasks()} 
                deleteHandler={this.deleteTask} 
                categories={CATEGORIES.slice(1)}
                addTask={this.addTask}
            />
        </div>
        );
    }
}


export default App;
