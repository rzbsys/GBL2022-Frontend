import React from 'react';
import './style.scss';

import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Block() {
    const navigate = useNavigate();
    function CancelClick() {
        if (window.confirm('예약을 취소하시겠습니까?')) {
            toast.error('예약이 취소되었습니다.');
        }
    }

    return (
        <div className='ReserveBlock'>
            <img src="https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E" alt="" />
            <div className='ReserveTextbox'>
                <p>1차시</p>
                <h1>부스명부부스명부</h1>
                <div className="ButtonBox">
                    <button className='DetailButton w7' onClick={() => { navigate('/booth/1') }}>부스 보기</button>
                    <button className='CancelButton w7' onClick={CancelClick}>예약 취소</button>
                </div>
            </div>
        </div>
    );
}

export default Block;