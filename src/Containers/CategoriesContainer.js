import React from 'react'
import Category from '../Components/Category'

class CategoriesContainer extends React.Component {

    handleFilterButtons = () => {
       return this.props.categories.map(cat => <Category category={cat} key={cat} selected={this.props.selected} changeCategory={this.props.changeCategory}/>)
    }

    render() {
        return (
            <div className="categories">
                {this.handleFilterButtons()}
            </div>
        )
    }

}

export default CategoriesContainer