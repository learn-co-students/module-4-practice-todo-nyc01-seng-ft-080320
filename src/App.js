import React from 'react';
import './App.css';
import { CATEGORIES } from './data'
import TasksContainer from './Containers/TasksContainer'

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

  changeCategory = (category) => {
    this.setState({selected: category})
  }

  //no real identifier available without shenanigans, so this will delete duplicates (just like the demo...)
  deleteTask = (deletedTask) => {
    console.log(deletedTask.text)
    let newTaskList = [...this.state.tasks]
    let taskIndex = newTaskList.findIndex(task => task.text === deletedTask.text)
    console.log(taskIndex)
    newTaskList.splice(taskIndex, 1)
    this.setState({tasks: newTaskList})
  }


  render() {
    return (
      <div className="App">
        <h2>My tasks</h2>
        <TasksContainer categories={CATEGORIES} selected={this.state.selected} changeCategory={this.changeCategory} tasks={this.state.tasks} deleteTask={this.deleteTask}/>
      </div>
    );
  }
}


export default App;
