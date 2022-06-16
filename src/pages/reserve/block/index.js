import React, { useEffect } from 'react';
import './style.scss';

import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteBook, GetUserBookList } from 'api/Book';
import BookJsonToList from 'utils/BookJsonToList';
import { InitBookList } from 'store/book/action';
import { GetBooth } from 'api/Booth';
function Block({time, id}) {
    // const navigate = useNavigate();
    const dispatch = useDispatch();
    const AuthState = useSelector((state) => state.Auth);
    const [BoothName, setBoothName] = React.useState('');
    useEffect(() => {
        GetBooth(id).then((res) => {
            setBoothName(res.booth.name);
        });
    }, []);

    function CancelClick() {
        if (window.confirm('예약을 취소하시겠습니까?')) {
            DeleteBook(id, AuthState.userUid, time).then(() => {
                toast.success('예약이 취소되었습니다.');
                GetUserBookList(AuthState.userUid).then((res) => {
                    if (res.booth_books) {
                        const booklist = BookJsonToList(res.booth_books)
                        dispatch(InitBookList(booklist));    
                    } else {
                        const booklist = BookJsonToList([])
                        dispatch(InitBookList(booklist));    
                    }
                });
            }).catch(() => {
                toast.error("취소에 실패하였습니다.");
            });
        }
    }



    return (
        <div className='ReserveBlock'>
            <img src="https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E" alt="" />
            <div className='ReserveTextbox'>
                <p>{time}차시</p>
                <h1>{BoothName}</h1>
                <div className="ButtonBox">
                    {/* <button className='DetailButton w6' onClick={() => { navigate('/booth/1') }}>부스 보기</button> */}
                    <button className='CancelButton w6' onClick={CancelClick}>예약 취소</button>
                </div>
            </div>
        </div>
    );
}

export default Block;