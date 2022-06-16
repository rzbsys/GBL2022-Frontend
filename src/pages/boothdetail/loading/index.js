import React, { useEffect } from 'react';
import './style.scss';
import LoadEffeect from 'assets/image/loadeffect.gif';

function ReserveLoading({ name, SetIsLoad, LoadFunc }) {

    useEffect(() => {
        const LoadingRef = document.querySelector('.ReserveLoading')
        LoadingRef.classList.add('ReserveLoadingEnable');

        setTimeout(() => {
            LoadFunc().then(() => {
                LoadingRef.classList.remove('ReserveLoadingEnable');
                setTimeout(() => {
                    SetIsLoad(false);
                }, 300);
            });
        }, 2000);

    }, []);

    return (
        <div className='ReserveLoading'>
            <h1 className='boothname'>{name}</h1>
            <h1>부스의 예약을 진행하고 있어요.</h1>
            <p>지금 페이지를 벗어나면, 예약이 취소될 수 있어요.</p>
            <img src={LoadEffeect} alt="" />
        </div>
    );
}

export default ReserveLoading;