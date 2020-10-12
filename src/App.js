import React from 'react';
import './App.css';
import { CATEGORIES } from './data'
import Categories from './Categories.js'
import Tasks from './Tasks.js'


class App extends React.Component {

  state = {
    catFilter: "",
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
    ]
  }

  newTask = (e) => {
    e.preventDefault()
    console.log(e.target.what.value, e.target.category.value)
    let newTask = {text: e.target.what.value,
    category: e.target.category.value}
    this.setState(prevState => {
      return {tasks: [...prevState.tasks, newTask]}
    })
  }
  deleteTask = (e) =>{
    
    let newTasks = this.state.tasks.filter(task => {
      return task.text !== e.target.value})
    this.setState({tasks: newTasks})
  }
  filteredTasks = () => {
    return this.state.tasks.filter(task => {
      return task.category.includes(this.state.catFilter)
    })
  }
  selectCategory = (e)=>{
    let value = e.target.textContent


    if (e.target.textContent === "All"){
      value = ""
    }
    console.log(value)
    this.setState({catFilter: value})
  }
  render() {
    return (
      <div className="App">
        <h2>My tasks</h2>
        <Categories categories={CATEGORIES} selectCategory={this.selectCategory} selected={this.state.catFilter} />
        
        <Tasks newTask={this.newTask} tasks={this.filteredTasks()} deleteTask={this.deleteTask} />
      </div>
    );
  }
}


export default App;
