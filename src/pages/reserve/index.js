import React from 'react';
import "./style.scss";

import Logo from 'components/logo';
import Block from './block';
import Background from 'components/background';
import { useSelector } from 'react-redux';
import EmptyIcon from 'assets/image/empty-folder.png';

function ReservePage() {
    const BookState = useSelector((state) => state.Book.books);
    const count = BookState.filter(element => -1 === element).length;
    return (
        <div className='defaultFrame'>
            <Background></Background>
            <Logo></Logo>
            <h1 className='ReserveTitle'>예약 목록</h1>
            <div className="ReserveGrid">
                {
                    count !== parseInt(process.env.REACT_APP_MAX_BOOK_CNT) + 1
                    ? BookState.map((item, index) => {
                        if (item !== -1) {
                            return (<Block id={item} time={index} key={index}></Block>)
                        }
                    })
                    : <div className="Empty">
                        <img src={EmptyIcon} alt="" />
                        <h1>예약 목록이 존재하지 않습니다.</h1>
                    </div>
                }
            </div>
        </div>
    );
}

export default ReservePage;