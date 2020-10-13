import React from 'react'

const SearchBar = (props) => {
    return (
        <form className="new-task-form">
            <input value={props.searchTerm}onChange={props.searchHandler}/>
        </form>
    )
}

export default SearchBar