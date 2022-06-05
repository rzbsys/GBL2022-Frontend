import React, { useEffect, useState } from 'react';
import './style.scss';
import Logo from 'components/logo';

import Summary from './summary';
import Video from './video';
import Place from './place';
import { useNavigate, useParams } from 'react-router-dom';
import BackIcon from 'assets/image/left-arrow.svg';

import AlertDialogSlide from './dialog';
import SimpleDialog from './selectbox';
import ReserveLoading from './loading';
import { useSelector } from 'react-redux';

import FindBooth from 'utils/FindBooth';
import { GenerateBook } from 'api/Book';

function BoothDetail() {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [IsLoad, SetIsLoad] = useState(false);
    const [BookSelected, SetBookSelected] = useState(-1);
    const { id } = useParams();

    const BoothInfo = useSelector((state) => {
        const res = FindBooth(state.Booth.boothlist, id);
        return res
    });

    const UserState = useSelector((state) => state.Auth);


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
        SetIsLoad(true);
        SetBookSelected(cnt);
    }

    async function BookLoadFunc() {
        GenerateBook(id, UserState.userUid, BookSelected).then((res) => {
            console.log(res);
        });
    };


    return (
        <div className='defaultFrame'>
            {
                IsLoad && <ReserveLoading LoadFunc={BookLoadFunc} IsLoad={IsLoad} SetIsLoad={SetIsLoad}></ReserveLoading>
            }
            <AlertDialogSlide agree={ConfirmAgree} open={open1} setOpen={setOpen1} Boothname="부스이름"></AlertDialogSlide>
            <SimpleDialog open={open2} setOpen={setOpen2} callbackfunc={SelectBoxCallback}></SimpleDialog>
            <Logo fixed></Logo>
            <div className="GotoBack" onClick={() => { navigate(-1) }}>
                <img src={BackIcon} alt="" />
                뒤로가기
            </div>
            <div className="BoothDetailImage">
                <h1>{BoothInfo.name}</h1>
                <img className='' src="https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E" alt="" />
            </div>
            <div className="Detail">
                <Summary text={BoothInfo.content}></Summary>
                <Video></Video>
                <Place></Place>
                <button className='ReserveButton w7' onClick={ReserveButton}>예약하기(1/5팀)</button>
            </div>
        </div>
    );
}

export default BoothDetail;