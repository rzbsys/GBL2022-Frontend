import React, { useEffect, useState } from 'react';
import './style.scss';

import Effect from './trophy.json';
import Lottie from 'lottie-web';
import { GetUserInfo } from 'api/Rank';


function ConfirmProfile({ uid, score, ConfirmCallback, SetConfirmEnable }) {
    const [Name, SetName] = useState('검색중...');
    useEffect(() => {
        const frame = document.querySelector('.ConfirmFrame');
        const timer = setTimeout(() => {
            frame.classList.add('ConfirmFrameshow');
        }, 10)

        const container = document.querySelector('.Effect');
        Lottie.loadAnimation({
            container: container,
            renderer: 'svg',
            loop: false,
            autoplay: true,
            animationData: Effect
        });
        GetUserInfo(uid).then((res) => {
            SetName(res.user.username);
        });

        return () => {
            clearTimeout(timer);
        }
    }, []);


    function Close() {
        const frame = document.querySelector('.ConfirmFrame');
        frame.classList.remove('ConfirmFrameshow');
        setTimeout(() => {
            SetConfirmEnable(false);
        }, 400);
    }

    function Approve() {
        ConfirmCallback();
        Close();
    }

    return (
        <div className='ConfirmFrame'>
            <h1 className='title'><span className="blue">부여할 점수</span>를<br />확인해주세요.</h1>
            <p className='subtitle'>점수를 확인하고 확인 버튼을 눌러주세요.</p>
            <div className="Effect">

            </div>
            <div className="Block">
                <h3>점수</h3>
                <h1>{score}점</h1>
            </div>
            <hr />

            <div className="Block">
                <h3>사용자 이름</h3>
                <h1>{Name}</h1>
            </div>


            <div className="ButtonFrame">
                <button className='Cancel' onClick={Close}>취소</button>
                <button className='Approve' onClick={Approve}>확인</button>
            </div>
        </div>
    );
}

export default ConfirmProfile;