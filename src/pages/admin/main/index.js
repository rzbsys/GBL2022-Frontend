import React, { useState } from 'react';
import './style.scss';

import Logo from 'components/logo';
import Background from 'components/background';
import BoothItem from 'pages/boothlist/boothitem';
import SelectBox, { Button } from './selectbox';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function MainPage() {
    const AuthState = useSelector((state) => state.Admin);
    const navigate = useNavigate();

    function onClick() {
        navigate(`/admin/booth/${AuthState.BoothId}`);
    }

    return (
        <>

            <Logo></Logo>
            <Background></Background>

            <h1 className='w8 AdminTitle'>부스 상태 관리</h1>
            <div className="BoothItemFrame">
                <BoothItem onClickFunc={onClick}></BoothItem>
                <SelectBox>
                    <Button name="SelectBoxInAdmin" className="normal" id={0} text="원활"></Button>
                    <Button name="SelectBoxInAdmin" className="ready" id={1} text="준비중"></Button>
                    <Button name="SelectBoxInAdmin" className="crowded" id={2} text="혼잡"></Button>
                </SelectBox>
                <button className='AdminButton w6'>수정하기</button>
            </div>

            <h1 className='w8 AdminTitle SecondPart'>점수 부여</h1>
            <div className="BoothItemFrame">
                <SelectBox>
                    <Button name="Score" className="none" id={0} text="0점"></Button>
                    <Button name="Score" className="crowded" id={80} text="80점"></Button>
                    <Button name="Score" className="ready" id={90} text="90점"></Button>
                    <Button name="Score" className="normal" id={100} text="100점"></Button>
                </SelectBox>
                <button className='AdminButton w6'>QR 코드 스캔하기</button>

            </div>



        </>
    );
}

export default MainPage;