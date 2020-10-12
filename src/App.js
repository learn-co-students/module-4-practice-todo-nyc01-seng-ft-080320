import React from 'react';
import './App.css';
import { CATEGORIES } from './data';
import Button from './Components/Button';
import TasksContainer from './Containers/TasksContainer';
import ToggleButton from './Components/ToggleButton';
import Task from './Components/Task';

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
    filter: "All",
    clicked: false
  }

  filterTasks = (filterValue) => {

    this.setState({
      filter: filterValue,
    })
  }

  renderButtons = () => {
    return CATEGORIES.map(el => <Button clicked={this.state.clicked} filter={this.state.filter} value={el} filterTasks={this.filterTasks}/>)
  }

  toggleButton = () => {
    this.setState((prevState) => {
      return {
        clicked: !prevState.clicked
      }
    })
  }

  handleSubmit = (e, selectedValue) => {
    e.preventDefault()
    let task = {
      text: e.target.task.value,
      category: selectedValue
    }
    
    let newTaskArray = [task, ...this.state.tasks]
    this.setState({
      tasks: newTaskArray
    })

  }

  deleteTask = (taskObj) => {
    let taskArray = [...this.state.tasks]
    let index = taskArray.indexOf(taskObj)
    taskArray.splice(index, 1)
    this.setState({
      tasks: taskArray
    })
  }

  render() {
    return (
      <div className="App">
        < ToggleButton toggleButton={this.toggleButton} clicked={this.state.clicked}/>
        <h2>My tasks</h2>
        <div class="categories">
        <h5>category filters</h5>
        {this.renderButtons()}
        </div>
        < TasksContainer deleteTask={this.deleteTask} handleSubmit={this.handleSubmit} clicked={this.state.clicked} tasks={this.state.tasks} filterValue={this.state.filter}/>
      </div>
    );
  }
}


export default App;
