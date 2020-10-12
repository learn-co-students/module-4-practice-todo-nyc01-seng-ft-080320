import React from 'react';

class CreateForm extends React.Component {
  state = {
    text: '',
    category: this.props.categories[0]
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault();
    const formData = this.state
    this.props.appHandleSubmit(formData)
    this.setState({text: '', category: this.props.categories[0]})
  }

  listCategories = () => {
    return this.props.categories.map(category => {return <option value={category}>{category}</option>})
  }

  render() {
    return (
      <form class="new-task-form" onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} name="text" placeholder="New task details" value={this.state.text} />
        <select name="category" onChange={this.handleChange}>{this.listCategories()}</select>
        <input type="submit" value="Add Task" />
      </form>
    );
  }
}

export default CreateForm;