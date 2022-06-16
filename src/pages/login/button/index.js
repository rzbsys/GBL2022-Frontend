import React from 'react';
import './style.scss';

import { useDispatch } from 'react-redux';
import GoogleLogo from 'assets/image/search.svg';
import useGoogleLogin from 'utils/useGoogleLogin';


function Button() {
    const dispatch = useDispatch();
    const LoginHook = useGoogleLogin(dispatch);

    return (
        <button className="GoogleLoginButton" {...LoginHook}>
            <img src={GoogleLogo} alt="GoogleLogo" />
            <h2 className='w7'>GOOGLE 계정으로 로그인</h2>
        </button>
    );
}

export default Button;