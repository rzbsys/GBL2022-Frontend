import React, { useEffect } from 'react';
import './style.scss';
import LoadEffeect from 'assets/image/loadeffect.gif';

import { toast } from 'react-toastify';

function ReserveLoading({ SetIsLoad, LoadFunc }) {

    useEffect(() => {
        const LoadingRef = document.querySelector('.ReserveLoading')
        LoadingRef.classList.add('ReserveLoadingEnable');

        setTimeout(() => {
            LoadFunc().then(() => {
                toast.success(`성공적으로 예약되었습니다.`);
                LoadingRef.classList.remove('ReserveLoadingEnable');
                setTimeout(() => {
                    SetIsLoad(false);
                }, 300);
            });
        }, 2000);

    }, []);

    return (
        <div className='ReserveLoading'>
            <h1><span className='boothname'>가나다라마바사</span><br />부스의 예약을 진행하고 있어요.</h1>
            <p>지금 페이지를 벗어나면, 예약이 취소될 수 있어요.</p>
            <img src={LoadEffeect} alt="" />
        </div>
    );
}

export default ReserveLoading;