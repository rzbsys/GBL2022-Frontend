import React from 'react';
import './style.scss';
import Logo from 'components/logo';

import { useSelector } from 'react-redux';
import Profile from './profile';
import Dashboard from './dashboard';

function SettingPage() {
    const UserData = useSelector(state => state.Auth);

    return (
        <div className='defaultFrame '>
            <Logo></Logo>
            <Profile src={UserData.userPicture}></Profile>
            <Dashboard></Dashboard>
        </div>
    );
}

export default SettingPage;