import React from 'react'

function Task(props) {

    function Delete() {
        props.deleteTask(props.task)
    }

    return(
        <div className="task">
            <div className="label">{props.task.category}</div>
            <div className="text">{props.task.text}</div>
            {props.clicked ? <button onClick={Delete} class="delete">X</button> : null}
        </div>
    )
}

export default Task