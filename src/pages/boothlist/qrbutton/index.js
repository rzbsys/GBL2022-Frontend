import React, { useState } from 'react';
import './style.scss';

import QRIcon from 'assets/image/qr-code.svg';
import QRPage from './qrpage';

function QRButton() {
    const [isOpen, setisOpen] = useState(false);

    return (
        <>
            <div className="QRButton" onClick={() => {setisOpen(true)}}>
                <img src={QRIcon} alt="" />
                <p className='w6'>점수 입력</p>
            </div>
            {
                isOpen && <QRPage setisOpen={setisOpen}></QRPage>
            }
        </>
    );
}

export default QRButton;