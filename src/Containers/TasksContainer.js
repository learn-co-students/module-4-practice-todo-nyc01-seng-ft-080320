import React from 'react';
import Task from '../Components/Task';
import NewTaskForm from '../Components/NewTaskForm'


function TasksContainer(props) {

    function renderTask() {
        let tasks = props.filterValue === "All" ? props.tasks : props.tasks.filter(el => el.category === props.filterValue)
        return tasks.map(el => < Task task={el} clicked={props.clicked} deleteTask={props.deleteTask}/>)
    }

    return(
        <div class="tasks">
            <h4>Tasks</h4>
            < NewTaskForm handleSubmit={props.handleSubmit} clicked={props.clicked}/>
            {renderTask()}
        </div>
    )
}

export default TasksContainer