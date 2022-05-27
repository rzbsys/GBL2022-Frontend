import React from 'react';
import './style.scss';
import Logo from 'components/logo';

function MapPage() {
    return (
        <div className='defaultFrame'>
            <Logo fixed></Logo>
            <h1 className='MapTitle'>부스 지도</h1>
        </div>
    );
}

export default MapPage;