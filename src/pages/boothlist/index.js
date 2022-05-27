import React from 'react';
import './style.scss';
import Logo from 'components/logo';
import Background from 'components/background';
import QRButton from './qrbutton';
import Header from './header';
import BoothItem from './boothitem';

function BoothlistPage() {
    return (
        <div className='defaultFrame' style={{overflowY:'scroll'}}>
            <Background></Background>
            <Logo fixed></Logo>
            <QRButton></QRButton>
            <Header></Header>
            <div className="BoothItemFrame">
                <BoothItem></BoothItem>
                <BoothItem></BoothItem>
                <BoothItem></BoothItem>
                <BoothItem></BoothItem>
                <BoothItem></BoothItem>
                <BoothItem></BoothItem>
                <BoothItem></BoothItem>
                <BoothItem></BoothItem>
                <BoothItem></BoothItem>
            </div>

        </div>
    )
}

export default BoothlistPage;