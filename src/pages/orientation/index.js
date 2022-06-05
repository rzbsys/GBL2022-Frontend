import React from 'react';
import './style.scss';

import RotateIcon from 'assets/image/rotate.gif';

function Orientation() {
    return (
        <div className='orientation'>
            <img src={RotateIcon} alt="" />
            <div className="OrientationTextBox">
                <h1>화면을 세로로<br />돌려주세요.</h1>
                <p>모바일 환경에서<br />가모로드를 지원하지 않습니다.</p>
            </div>
        </div>
    );
}

export default Orientation;