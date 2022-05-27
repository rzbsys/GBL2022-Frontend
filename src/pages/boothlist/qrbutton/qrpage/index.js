import React, { useEffect } from 'react';
import './style.scss';

import Logo from 'components/logo';
import { QRCodeCanvas } from 'qrcode.react';
import { useSelector } from 'react-redux';

function QRPage({ setisOpen }) {
    const AuthState = useSelector(state => state.Auth);

    function ClosePage() {
        const QRRef = document.querySelector('.QRPage');
        QRRef.classList.remove('QRPageEnabled');
        setTimeout(() => {
            setisOpen(false);
        }, 400);

    }

    useEffect(() => {
        setTimeout(() => {
            const QRRef = document.querySelector('.QRPage');
            const ButtonRef = document.querySelector('.backbutton')
            QRRef.classList.add('QRPageEnabled');
            setTimeout(() => {
                ButtonRef.classList.add('backbuttonEnabled');
            }, 300);
        }, 100);
    }, []);

    return (
        <div className="QRPage">
            <Logo fixed></Logo>
            <h1 className='w3 QRtitle'>QR코드를 담당자에게<br />제시해주세요.</h1>

            <div className='CardFrame'>
                <div className="QR">
                    <QRCodeCanvas value={AuthState.userUid} imageSettings={{width:100, height:100}}></QRCodeCanvas>
                </div>
                <button className='w6 backbutton' onClick={ClosePage}>뒤로가기</button>
            </div>
        </div>
    );
}

export default QRPage;