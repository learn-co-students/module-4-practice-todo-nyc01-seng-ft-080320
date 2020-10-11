import React from 'react'
import '../App.css';


class CategoriesForm extends React.Component{

   
    render(){
        return(
            <div >
                <h5>Category filters</h5>
                <div className="categories" onClick={this.props.clickHandler}>
                    <button >All</button>
                    <button>Code</button>
                    <button>Food</button>
                    <button>Money</button>
                    <button>Misc</button>
                </div>


            </div>
        )
    }
}

export default CategoriesForm