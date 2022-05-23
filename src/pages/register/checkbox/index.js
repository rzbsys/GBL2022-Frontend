import React from 'react';
import './style.scss';
import GenerateRandomString from 'utils/GenerateRandomString';

function Checkbox({value = GenerateRandomString()}) {
    return (
        <div className='RegisterCheckBox'>
            <input type="checkbox" id={value}/> 
            <label htmlFor={value}></label>       
        </div>
    );
}

export default Checkbox;