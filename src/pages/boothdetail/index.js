import React, { useEffect, useState } from 'react';
import './style.scss';
import Logo from 'components/logo';

import Summary from './summary';
import Video from './video';
import Place from './place';
import { useNavigate } from 'react-router-dom';
import BackIcon from 'assets/image/left-arrow.svg';
import { toast } from 'react-toastify';

import AlertDialogSlide from './dialog';
import SimpleDialog from './selectbox';


function BoothDetail() {

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

    const navigate = useNavigate();
    useEffect(() => {
        const scrollRef = document.querySelector('.Detail');
        scrollRef.addEventListener('scroll', () => {
            if (scrollRef.scrollTop > 100) {
                scrollRef.classList.add('scrolledDetail');
            } else {
                scrollRef.classList.remove('scrolledDetail');
            }
        });
    }, []);

    function ReserveButton() {
        setOpen1(true);
    }

    function ConfirmAgree() {
        setOpen2(true);
        
    }

    function SelectBoxCallback(cnt) {
        toast.success(`${cnt}차시에 성공적으로 예약되었습니다.`);
    }

    function ConfirmDeny() {

    }


    return (
        <div className='defaultFrame'>
            <AlertDialogSlide agree={ConfirmAgree} deny={ConfirmDeny} open={open1} setOpen={setOpen1} Boothname="부스이름"></AlertDialogSlide>
            <SimpleDialog open={open2} setOpen={setOpen2} callbackfunc={SelectBoxCallback}></SimpleDialog>
            <Logo fixed></Logo>
            <div className="GotoBack" onClick={() => { navigate(-1) }}>
                <img src={BackIcon} alt="" />
                뒤로가기
            </div>
            <div className="BoothDetailImage">
                <h1>안녕안녕안녕안녕안녕안녕안녕안녕</h1>
                <img className='' src="https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E" alt="" />
            </div>
            <div className="Detail">
                <Summary></Summary>
                <Video></Video>
                <Place></Place>
                <button className='ReserveButton w7' onClick={ReserveButton}>예약하기(1/5팀)</button>
            </div>
        </div>
    );
}

export default BoothDetail;