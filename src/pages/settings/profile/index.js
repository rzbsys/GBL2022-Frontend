import React from 'react';
import './style.scss';

import { signOut } from 'firebase/auth';
import { auth } from 'utils/FirebaseApp';
import { useDispatch } from 'react-redux';
import { Logout } from 'store/auth/action';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Profile({ src, name }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    function OnClick() {
        signOut(auth).then(() => {
            dispatch(Logout());
            navigate('/');
            toast.success('정상적으로 로그아웃되었습니다.');
        });
    }

    return (
        <div className='Profile'>
            <div className="ProfileImage">
                <img src={src} alt="" />
            </div>
            <div className="ProfileText">
                <p>대전대신고등학교</p>
                <h1>{name}</h1>
                <button className="Logout w7" onClick={OnClick}>
                    로그아웃
                </button>
            </div>
        </div>
    );
}

export default Profile;