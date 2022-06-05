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

import { GetUserExist } from 'api/Auth';

import { GetUserBookList } from 'api/Book';
import { InitBookList } from 'store/book/action';



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

                GetUserExist(uid).then((res) => {
                    console.log(res);                    
                    GetUserBookList(uid).then((res) => {
                        dispatch(InitBookList(res.booth_books));
                        console.log(res.booth_books);
                        dispatch(Login(displayName, uid, photoURL, res.exist));
                    });
                }).catch(() => {
                    toast.error('로그인에 실패하였습니다.');
                });
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