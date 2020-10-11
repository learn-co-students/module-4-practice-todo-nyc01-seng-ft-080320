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

  deleteClickHandler = taskObj => {
      const currentState = [...this.state.tasks]
      const filtered = currentState.filter(task => {
          return task.text !== taskObj.text
      })
      this.setState({tasks: filtered})
  }

  newTaskSubmitHandler = taskObj => {
      if(taskObj.text !== ''){
      const newArr = [...this.state.tasks, taskObj]
      this.setState({tasks: newArr })
      }
  }

  categoryClickHandler = e => {
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
        < CategoriesForm clickHandler={this.categoryClickHandler} />
        <TasksContainer deleteClickHandler={this.deleteClickHandler} tasks={this.state.tasks} category={this.state.category} submitHandler={this.newTaskSubmitHandler}/>
      </div>
    );
  }
}


export default App;
