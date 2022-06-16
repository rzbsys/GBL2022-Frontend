import React from 'react';
import './style.scss';
import { useNavigate } from 'react-router-dom';

function BoothItem({title = 'Test', subtitle = 'Test', boothid = 1, onClickFunc}) {
    const navigator = useNavigate();
    function OnClick() {
        if (!onClickFunc) {
            navigator('/booth/' + boothid);
        } else {
            onClickFunc();
        }
    }
    return (
        <div className='BoothItem' onClick={OnClick}>
            <img className='BoothImage' src="https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E" alt="" />  
            <div className="Textbox">
                <h2 className='w7'>{title}</h2>
                <p>{subtitle}</p>
            </div>
        </div>
    );
}

export default BoothItem;