import React from 'react';

const SearchBar = (props) => (
    <div className="container">
        <input type="text" value={props.searchText} className="form-control" onChange={props.handleChange} placeholder="Filter here..." />
    </div>
);

export default SearchBar;