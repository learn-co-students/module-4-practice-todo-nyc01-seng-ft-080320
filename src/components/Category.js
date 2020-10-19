import React from 'react'

class Category extends React.Component{
    localClickHandler = (e) => {
        this.props.clickHandler(e.target.textContent)
    }

    render() {
    return <button className={this.props.selected === this.props.category ? "selected" : ""}
            onClick={this.localClickHandler}>
            {this.props.category}
        </button>
    }
}

export default Category