import React from 'react';
import './style.scss';
import GenerateRandomString from 'utils/GenerateRandomString';
import CheckedImage from 'assets/image/checked.svg';

function Checkbox({label, value = GenerateRandomString()}) {
    return (
        <div className='RegisterCheckBox'>
            <input type="radio" value={value} id={value} name="RegisterCheckBox"/> 
            <label htmlFor={value}>
                <h2 className='w5'>
                    {label}
                    <img src={CheckedImage} alt="체크버튼" />
                </h2>    
            </label>       
        </div>
    );
}

export default Checkbox;