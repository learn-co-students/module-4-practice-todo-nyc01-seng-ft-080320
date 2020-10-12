import React from 'react'

function Task(props){
    return(
        <div className="task">
            <div className="label">{props.task.category}</div>
            <div className="text">{props.task.text}</div>
            <button className="delete" value={props.task.text} onClick={props.deleteTask}>X</button>
        </div>
    )
}

export default Task