import React from 'react';
import './style.scss';

import { useDispatch } from 'react-redux';
import { Login } from 'store/auth/action';

import GoogleLogo from 'assets/image/search.svg';
import GoogleLoginApi from 'utils/GoogleLoginApi';

import { signOut, deleteUser } from "firebase/auth";
import CheckEmail from 'utils/CheckEmail';
import { toast } from "react-toastify";
import { auth } from 'utils/FirebaseApp';


function Button() {
    const dispatch = useDispatch();
    function onClick() {
        GoogleLoginApi((result) => {
            const user = result.user;
            console.log(user);
            if (CheckEmail(user.email)) {
                const uid = user.uid;
                const displayName = user.displayName;
                const photoURL = user.photoURL;
                dispatch(Login(displayName, uid, photoURL));
            } else {
                deleteUser(auth.currentUser).then(() => {
                    signOut(auth).then(() => {
                        toast.error('대전대신고등학교에서 발급한 GOOGLE 계정으로 로그인해주세요.');
                    });
                });
            }
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