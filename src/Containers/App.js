import React from 'react';
import '../App.css'
import CategoriesForm from '../Components/CategoriesForm';
import { CATEGORIES } from '../Components/data'
import TasksContainer from '../Containers/TasksContainer'

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
    category: "All"
  }

  clickHandler = e => {
    const prevCategory = this.state.category
    const allButtons = document.querySelectorAll('button')
    for(let button of allButtons){
        if (button.innerText === prevCategory){
            button.classList.remove('selected')
        }
    }
    e.target.classList.add('selected') 
   this.setState({category: e.target.innerText})
  }

  render() {
    return (
      <div className="App">
        <h2>My tasks</h2>
        < CategoriesForm clickHandler={this.clickHandler} />
        <TasksContainer tasks={this.state.tasks} category={this.state.category} />
      </div>
    );
  }
}


export default App;
