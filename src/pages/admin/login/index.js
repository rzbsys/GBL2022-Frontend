import React, { useState, useEffect } from 'react';
import "./style.scss";

import Background from 'components/background';
import Logo from 'components/logo';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { Login } from 'store/auth/action';
import { AdminLogin } from 'store/admin/action';
import { GetBooth } from 'api/Booth';
import { BoothIn } from 'store/booth/action';


function LoginPage() {
    const [Pass, SetPass] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.getItem('AdminPass') === 'admin') {
            LoginFunc(2);
        }
    }, []);

    function LoginFunc(bid) {
            GetBooth(bid).then((res) => {
                dispatch(BoothIn([res.booth]))
            });
            dispatch(AdminLogin(bid));
    }

    function onLogin() {
        if (Pass === 'admin') {
            localStorage.setItem('AdminPass', Pass);
            LoginFunc(2);
        } else {
            toast.warn('비밀번호가 일치하지 않습니다.');
        }
    }

    return (
        <div className='defaultFrame'>
            <Background></Background>
            <Logo fixed></Logo>
            <div className="LoginBox">
                <h1 className='LoginText w8'>GBL2022<br/>관리자 페이지</h1>
                <h3 className='LoginSubText w4'>사전에 부스마다 주어진 코드를<br/>사용하여 로그인할 수 있습니다.</h3>
                <input onChange={(e) => {SetPass(e.target.value)}} type="password" placeholder='비밀번호를 입력하세요.' />
                <button onClick={onLogin} className='LoginButton w6'>관리자 로그인</button>
            </div>
        </div>
    );
}

export default LoginPage;