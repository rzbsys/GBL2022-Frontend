import React from 'react';
import './style.scss';

import UsersIcon from 'assets/image/multiple-users-silhouette.svg';
import ClockIcon from 'assets/image/clock.svg';


function Summary({ text, congestion }) {
    return (
        <>
            <h2 className='w8 DetailTitle'>부스 개요</h2>
            <div className="DetailGrid">
                <div className="First">
                    <img src={ClockIcon} alt="" />
                    <h3 className='w8'>부스 혼잡도</h3>
                    <h2>
                    {{
                        0 : "혼잡",
                        1 : "준비중",
                        2 : "원활"
                    }[congestion]}
                    </h2>
                </div>
                <div className="Second">
                    <img src={UsersIcon} alt="" />
                    <h3 className='w8'>최대 인원수</h3>
                    <h2>5인</h2>
                </div>
                <div className="Third">
                    <h3 className='w6'>부스 소개</h3>
                    <p className='w5'>{text}</p>

                </div>
            </div>

        </>
    );
}

export default Summary;