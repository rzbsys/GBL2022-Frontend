import React from 'react';
import './style.scss';

import { useDispatch } from 'react-redux';
import { Login } from 'store/auth/action';

import GoogleLogo from 'assets/image/search.svg';
import GoogleLoginApi from 'utils/GoogleLoginApi';

function Button() {
    const dispatch = useDispatch();
    function onClick() {
        GoogleLoginApi((result) => {
            console.log(result);
            const user = result.user;
            const uid = user.uid;
            const displayName = user.displayName;
            const photoURL = user.photoURL;
            dispatch(Login(displayName, uid, photoURL));    
        });
    }


    return (
        <button className="GoogleLoginButton" onClick={onClick}>
            <img src={GoogleLogo} alt="GoogleLogo" />
            <h2 className='w7'>GOOGLE 계정으로 로그인</h2>
        </button>
    );
}

export default Button;