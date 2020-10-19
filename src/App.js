import React from 'react';
import './App.css';
import { CATEGORIES } from './data';
import CategoryContainer from './Containers/CategoryContainer';
import TaskContainer from './Containers/TaskContainer';

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
    category: 'All'
  }

  appHandleClick = category => {
    this.setState({category: category})
  }

  appHandleSubmit = formData => {
    this.setState(prev => ({
      tasks: [...prev.tasks, formData]
    }))
  }

  appHandleDelete = task => {
    this.setState(prev => ({
      tasks: prev.tasks.filter(stateTask => { return task !== stateTask })
    }))
  }

  render() {
    return (
      <div className="App">
        <h2>My tasks</h2>
        <CategoryContainer categories={CATEGORIES} selected={this.state.category} appHandleClick={this.appHandleClick} />
        <TaskContainer appHandleDelete={this.appHandleDelete} appHandleSubmit={this.appHandleSubmit} categories={CATEGORIES} tasks={this.state.tasks} selected={this.state.category} />
      </div>
    );
  }
}


export default App;
