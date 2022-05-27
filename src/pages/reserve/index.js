import React from 'react';
import "./style.scss";

import Logo from 'components/logo';
import Block from './block';
import Background from 'components/background';

function ReservePage() {
    return (
        <div className='defaultFrame'>
            <Background></Background>
            <Logo></Logo>
            <h1 className='ReserveTitle'>예약 목록</h1>
            <div className="ReserveGrid">
                <Block></Block>
                <Block></Block>
                <Block></Block>
                <Block></Block>
                <Block></Block>
                <Block></Block>
            </div>
        </div>
    );
}

export default ReservePage;