import React from 'react';
import './style.scss';

export function Button({id, text, className, name, value, Checked = false}) {
    return (
        <>
            <input className={name + id} defaultChecked={Checked} id={name + id} type="radio" name={name} value={value} />
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