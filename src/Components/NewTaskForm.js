import React from 'react';

class NewTaskForm extends React.Component {

    state = {
        text: "",
        category: "Code"
    }

    // dropDown = (e) => {
    //    this.setState({
    //        category: e.target.value
    //    })
    // }

    // textArea = (e) => {
    //     this.setState({
    //         text: e.target.value
    //     })
    // }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    localSubmitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state)
        this.setState({
            text:"",
            category: "Code"
        })
    }

	render() {
		return (
			<form onSubmit={this.localSubmitHandler}className="new-task-form">
				<input name="text" type="text" placeholder="New task details" value={this.state.text} onChange={this.changeHandler}/>
                <select name="category"value={this.state.category}onChange={this.changeHandler}>
                    <option>Code</option>
                    <option>Food</option>
                    <option>Money</option>
                    <option >Misc</option>
                </select>
                <input type="submit" value="Add task"/>
			</form>
		);
	}
}

export default NewTaskForm;
