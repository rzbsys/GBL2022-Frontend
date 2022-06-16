import React from 'react';
import './style.scss';

export function Button({id, text, className, name}) {
    return (
        <>
            <input id={name + id} type="radio" name={name} />
            <label className={'w6 ' + className} htmlFor={name + id}>{text}</label>    
        </>

    )
}


function SelectBox({children}) {
    return (
        <div className="SelectBox">
            {children}
        </div>
    );
}

export default SelectBox;