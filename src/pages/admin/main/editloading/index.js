import React, { useEffect } from 'react';
import './style.scss';
import Lottie from 'lottie-web';
import Animation from './loading.json';

function EditLoading() {


    useEffect(() => {
        const Ref = document.querySelector('.EditLoading');
        setTimeout(() => {
            Ref.classList.add('EditLoadingshow');
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
        <div className="EditLoading">
            <h1><span className="blue">부스 정보</span>를<br/>수정하고 있습니다.</h1>
            <p>변경이 완료되면 자동으로<br/>페이지가 새로고침 됩니다.</p>
            <div className='Lottie'></div>
        </div>
    );
}

export default EditLoading;