import React from 'react';
import './style.scss';

function SearchBar({SetSearchWord, startTransition}) {

    function OnChange(e) {
        startTransition(() => {
            SetSearchWord(e.target.value);
        })
    }

    return (
        <input onChange={OnChange} type="text" className='Searchbar w6' placeholder='검색'/>
    );
}

export default SearchBar;