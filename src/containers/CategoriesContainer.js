import React from 'react'
import Category from '../components/Category'

class CategoriesContainer extends React.Component{

    renderCategories = () => {
        return this.props.categories.map(cat => <Category category={cat} 
            selected={this.props.selected}
            clickHandler={this.props.clickHandler}/>
        )
    }
    
    render() {
        return <div className="categories">
            <h5>Category filters</h5>
            {this.renderCategories()}
        </div>
    }
}

export default CategoriesContainer