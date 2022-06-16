import React from 'react';
import './style.scss';

function SearchBar({SetSearchText}) {
    return (
        <input onChange={(e) => {SetSearchText(e.target.value)}} type="text" className='Searchbar w6' placeholder='검색'/>
    );
}

export default SearchBar;