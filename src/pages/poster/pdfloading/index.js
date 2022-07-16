import React, { useEffect } from 'react';
import './style.scss';
import Lottie from 'lottie-web';
import Animation from './loading.json';

function PdfLoading() {


    useEffect(() => {
        const Ref = document.querySelector('.PdfLoading');
        setTimeout(() => {
            Ref.classList.add('PdfLoadingshow');
        }, 10);

        const container = document.querySelector('.Lottie');
        Lottie.loadAnimation({
            container : container,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: Animation
        });
    });

    return (
        <div className="PdfLoading">
            <h1><span className="blue">부스 정보</span>를<br/>불러오고 있습니다.</h1>
            <p>로딩이 완료되면 자동으로<br/>페이지로 이동합니다.</p>
            <div className='Lottie'></div>
        </div>
    );
}

export default PdfLoading;