import React from 'react'

class Button extends React.Component {


    filterTasks = (e) => {
        this.props.filterTasks(e.target.textContent)
    }

    render() {
        return(
            <button className={this.props.filter === this.props.value ? "selected" : null} onClick={this.filterTasks}>{this.props.value}</button>
        )
    }
}

export default Button