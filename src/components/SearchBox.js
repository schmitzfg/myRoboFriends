import React from 'react';
import '../index.css';

const SearchBox = ({searchChange}) => {
    return (
        <div className='searchbox'>
            <input className='input' type='search' placeholder='search robots' onChange={searchChange} />
        </div>
    );
}

export default SearchBox;