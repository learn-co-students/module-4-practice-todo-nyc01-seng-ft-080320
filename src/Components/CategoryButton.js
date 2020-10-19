import React from 'react';

class CategoryButton extends React.Component {
  handleClick = () => {
    this.props.appHandleClick(this.props.category);
  }

  render() {
    if (this.props.selected === this.props.category) {
      return (
        <button className="selected" onClick={this.handleClick}>{this.props.category}</button>
        );
    } else {
      return (
        <button onClick={this.handleClick}>{this.props.category}</button>
        );
    }
  }
}

export default CategoryButton;