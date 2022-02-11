import React from 'react';
import classes from './component.module.css'

const SearchBar = (props) => {
    // Basic search bar, onChange sets App.js searchValue to the input value
    return (
        <div className={classes.searchBarContainer}>
        <form onSubmit={props.handleSubmit}>
        <input
            className={classes.searchBar}
            type="text"
            placeholder={props.searchState}
            onChange={props.handleSearch}
            onSubmit={props.handleSubmit}
        />
        </form>
        </div>
    )
}

export default SearchBar