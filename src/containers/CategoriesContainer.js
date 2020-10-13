import React from 'react'
import Category from '../components/Category'

class CategoriesContainer extends React.Component{

    renderCategories = () => {
        return this.props.categories.map(cat => <Category category={cat} />)
    }
    
    render() {

        console.log(this.props.categories)
        return <div className="categories">
            <h5>Category filters</h5>
            {this.renderCategories()}
        </div>
    }
}

export default CategoriesContainer