import React from 'react'
import Cat from "./Cat.js"
class Categories extends React.Component {

    singleCategory = () => {
        return this.props.categories.map((cat, idx) => {
            return <Cat category={cat} key={idx} selectCategory={this.props.selectCategory} selected={this.props.selected}/>})
    }
    render() {
        return (
            <div className="categories">
               {this.singleCategory()}
            </div>
        )
    }
}

export default Categories