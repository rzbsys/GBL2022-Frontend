import React, { useEffect } from 'react';
import "./style.scss";

import Logo from 'components/logo';
import Block from './block';
import Background from 'components/background';
import { useSelector } from 'react-redux';
import BookJsonToList from 'utils/BookJsonToList';

function ReservePage() {
    const BookState = useSelector((state) => {
        return BookJsonToList(state.Book.books);
    });

    console.log(BookState);

    return (
        <div className='defaultFrame'>
            <Background></Background>
            <Logo></Logo>
            <h1 className='ReserveTitle'>예약 목록</h1>
            <div className="ReserveGrid">
                {
                    BookState.map((item, index) => {
                        if (index !== 0) {
                            return (<Block id={item} time={index} key={index}></Block>)
                        }
                    })
                }
            </div>
        </div>
    );
}

export default ReservePage;