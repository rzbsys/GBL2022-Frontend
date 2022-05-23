import React from 'react';
import Background from 'components/background';
import './style.scss';
import Checkbox from './checkbox';

function RegisterPage() {
    return (
        <>
            <Background></Background>
            <h1 className='RegisterTitle'>아래에서 관심있는<br/>분야를 선택해주세요.</h1>
            <fieldset className="CheckboxFrame">
                <Checkbox></Checkbox>
                <Checkbox></Checkbox>
                <Checkbox></Checkbox>
                <Checkbox></Checkbox>
            </fieldset>
        </>
    );
}

export default RegisterPage;