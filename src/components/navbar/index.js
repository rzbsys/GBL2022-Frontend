import React from 'react';
import './style.scss';

import HomeIcon from 'assets/image/home.svg';
import MapIcon from 'assets/image/map.svg';
import SettingIcon from 'assets/image/settings.svg';
import CalendarIcon from 'assets/image/uis_calender.svg';

import NavbarButton from './button';

function Navbar({ children }) {
    return (
        <div className='NavbarFrame'>
                {children}
            <div className="Navbar">
                <NavbarButton checked src={HomeIcon} goto='/boothlist'></NavbarButton>
                <NavbarButton src={MapIcon} goto='/map'></NavbarButton>
                <NavbarButton src={CalendarIcon} goto='/reserve'></NavbarButton>
                <NavbarButton src={SettingIcon} goto='/settings'></NavbarButton>
            </div>
        </div>
    );
}

export default Navbar;