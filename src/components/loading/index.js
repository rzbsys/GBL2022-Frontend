import React from 'react';
import './style.scss';

import LogoIcon from 'assets/image/logo.svg';
import { useEffect } from 'react';
import Lottie from 'lottie-web';
import animation from './loading.json';

function Loading() {


    const container = document.querySelector('.LoadingLoading');
    useEffect(() => {
        Lottie.loadAnimation({
            container: container,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: animation,
        });
    }, []);
        

    return (
        <div className='Loading'>
            <img src={LogoIcon} alt="" />

            <div className='LoadingLoading'></div>
            <h2>불러오는중...</h2>
        </div>
    );
}

export default Loading;