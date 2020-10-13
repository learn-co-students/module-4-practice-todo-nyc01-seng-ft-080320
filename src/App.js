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


  render() {
    return (
      <div className="App">
        <h2>My tasks</h2>
        <TasksContainer categories={CATEGORIES} selected={this.state.selected} changeCategory={this.changeCategory} tasks={this.state.tasks}/>
      </div>
    );
  }
}


export default App;
