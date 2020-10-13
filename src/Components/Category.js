import React from 'react'

class Category extends React.Component {

    changeCategory = (e) => {
        this.props.changeCategory(this.props.category)
    }

    render() {
        return (
            <button onClick={this.changeCategory} className={(this.props.selected === this.props.category) ? "selected" : "null"}>{this.props.category}</button>
        )
    }

}

export default Category