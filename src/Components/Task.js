import React from 'react'

class Task extends React.Component {

    deleteTask = () => {
        this.props.deleteTask(this.props.task)
    }

    render() {
        return (
            <React.Fragment>
                <div className="task">
                    <div className="label">{this.props.task.category}</div>
                    <div className="text">{this.props.task.text}</div>
                    <button className="delete" onClick={this.deleteTask}>X</button>
                </div>
            </React.Fragment>
        )
    }

}

export default Task