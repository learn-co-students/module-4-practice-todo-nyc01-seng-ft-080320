import React from 'react'

class NewTaskForm extends React.Component {

    state = {
        value: "",
        selected: ""
    }

    updateValue = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    updateSelected = (e) => {
        this.setState({
            selected: e.target.value
        })
    }

    submit = (e) => {
        this.props.handleSubmit(e, this.state.selected)
    }

    render() {
        return(
            this.props.clicked ? 
                <form className="new-task-form" onSubmit={this.submit}>
                    <input placeholder="New task details" type="text" name="task" value={this.state.value} onChange={this.updateValue}/>
                    <select onChange={this.updateSelected}>
                        <option>Code</option>
                        <option>Food</option>
                        <option>Money</option>
                        <option>Misc</option>
                    </select>
                    <input type="submit" value="Add task"/>
                </form>
                : null
        )
    }
}

export default NewTaskForm