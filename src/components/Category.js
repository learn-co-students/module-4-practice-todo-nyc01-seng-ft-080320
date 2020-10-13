import React from 'react'

class Category extends React.Component{
    render() {
    return <button>{this.props.category}</button>
    }
}

export default Category