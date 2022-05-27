import React from 'react';
import './style.scss';

import { useNavigate } from 'react-router-dom';


function NavbarButton({ src, goto, checked }) {
    const navigator = useNavigate()
    return (
        <div className='NavbarButtonFrame' onClick={() => {navigator(goto)}}>
            <input defaultChecked={checked} type="radio" id={goto} name='NavbarButtonFrame'/>
            <label htmlFor={goto}>
                <img src={src} alt="" />
            </label>
        </div>
    );
}

export default NavbarButton;