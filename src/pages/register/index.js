import React, { useState } from 'react';
import Background from 'components/background';
import './style.scss';
import Checkbox from './checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { Register } from 'store/auth/action';
import Logo from 'components/logo';

import { PostUserSubject } from 'api/Auth';
import { toast } from 'react-toastify';


function RegisterPage() {
    const dispatch = useDispatch();
    const AuthState = useSelector((state) => state.Auth);
    const [SubjectSelected, SetSubjectSelected] = useState();


    function OnClick() {
        PostUserSubject(AuthState.userUid, AuthState.userName).then((res) => {
            dispatch(Register());
        }).catch(() => {
            toast.error('회원가입에 실패하였습니다.');
        });
    }

    return (
        <div className='defaultFrame'>
            <Background></Background>
            <Logo></Logo>
            <h1 className='RegisterTitle'>아래에서 관심있는<br />분야를 선택해주세요.</h1>
            <p className='RegisterSubTitle'>분야에 맞추어 부스의<br />정렬 순서가 달라지고 1개만 선택할 수 있습니다.</p>
            <fieldset className="CheckboxFrame" onChange={(e) => {SetSubjectSelected(e.target.value);}}>
                <Checkbox label='수학' value='수학'></Checkbox>
                <Checkbox label='생명과학' value='생명과학'></Checkbox>
                <Checkbox label='지구과학' value='지구과학'></Checkbox>
                <Checkbox label='물리학' value='물리학'></Checkbox>
                <Checkbox label='화학' value='화학'></Checkbox>
            </fieldset>
            <button className='RegisterSubmit w6' onClick={OnClick}>제출하기</button>
        </div>
    );
}

export default RegisterPage;