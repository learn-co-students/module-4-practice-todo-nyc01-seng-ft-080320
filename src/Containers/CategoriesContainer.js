import React from 'react'
import Category from '../Components/Category'

class CategoriesContainer extends React.Component {

    //one way of handing "All". I removed "all" from the data.js so it won't appear in the dropdown list. This is smelly, but I wanted to see if it worked and it does!
    handleFilterButtons = () => {
        let buttons = []
        buttons.push(<Category category="All" key="All" selected={this.props.selected} changeCategory={this.props.changeCategory}/>)
       this.props.categories.map(cat => buttons.push(<Category category={cat} key={cat} selected={this.props.selected} changeCategory={this.props.changeCategory}/>))
       return buttons
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