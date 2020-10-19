import React from 'react';
import CategoryButton from '../Components/CategoryButton';

class CategoryContainer extends React.Component {
  mapCategories = () => {
    return this.props.categories.map(category => <CategoryButton category={category} selected={this.props.selected} appHandleClick={this.props.appHandleClick} />)
  }

  render() {
    return (
      <div className="categories">
        <h5>Category filters</h5>
        {this.mapCategories()}
      </div>
    )
  }
}

export default CategoryContainer;