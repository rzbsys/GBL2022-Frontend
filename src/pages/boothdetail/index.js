import React, { useEffect, useState } from 'react';
import './style.scss';
import Logo from 'components/logo';

import Summary from './summary';
import Video from './video';
import Place from './place';
import { useNavigate, useParams } from 'react-router-dom';
import BackIcon from 'assets/image/left-arrow.svg';

// import AlertDialogSlide from './dialog';
// import SimpleDialog from './selectbox';
// import ReserveLoading from './loading';
import { useSelector } from 'react-redux';

import FindBooth from 'utils/FindBooth';
import { GetCongestion } from 'api/Booth';
// import { GenerateBook, GetUserBookList } from 'api/Book';

// import { toast } from 'react-toastify';
// import BookJsonToList from 'utils/BookJsonToList';
// import { InitBookList } from 'store/book/action';
// import { GetBoothBookList } from 'api/Book';
import Pdf from './pdf';


function BoothDetail() {
    // const [open1, setOpen1] = useState(false);
    // const [open2, setOpen2] = useState(false);
    // const [IsLoad, SetIsLoad] = useState(false);
    // const [BookSelected, SetBookSelected] = useState(-1);
    // const [ButtonEnable, SetButtonEnable] = useState(true);
    const { id } = useParams();
    
    // const dispatch = useDispatch();
    // const BookState = useSelector((state) => state.Book);


    // useEffect(() => {
    //     // 이미 예약된 적이 있다면 버튼 표시 안함. 
    //     for (var i = 0; i < BookState.books.length; i++) {
    //         if (BookState.books[i] === parseInt(id)) {
    //             SetButtonEnable(false);
    //             break;
    //         }
    //     }
    //     const timer = setInterval(() => {
    //         GetBoothBookList(id).then((res) => {
    //             console.log(res);
    //         })
    //     }, 5000);
    //     return () => {
    //         clearInterval(timer);
    //     }
    // }, [BookState]);

    const BoothInfo = useSelector((state) => {
        const res = FindBooth(state.Booth.boothlist, id);
        return res
    });

    const [Congestion, SetCongestion] = useState(parseInt(BoothInfo.congestion));

    // const UserState = useSelector((state) => state.Auth);
    const navigate = useNavigate();
    const publicUrl = process.env.PUBLIC_URL;

    
    useEffect(() => {
        const scrollRef = document.querySelector('.Detail');
        scrollRef.addEventListener('scroll', () => {
            if (scrollRef.scrollTop > 100) {
                scrollRef.classList.add('scrolledDetail');
            } else {
                scrollRef.classList.remove('scrolledDetail');
            }
        });
        const get_cong = setInterval(() => {
            GetCongestion(id).then((res) => {
                SetCongestion(parseInt(res['congestion']));
            });
        }, 10000);

        return () => {
            clearInterval(get_cong);
        }

    }, []);

    // function SelectBoxCallback(cnt) {
    //     SetIsLoad(true);
    //     SetBookSelected(cnt);
    // }

    // async function BookLoadFunc() {
    //     await GenerateBook(id, UserState.userUid, BookSelected).then((res) => {
    //         if (res === "Already booked") {
    //             toast.error("예약에 실패하였습니다.");
    //         } else {
    //             GetUserBookList(UserState.userUid).then((res) => {    
    //                 const booklist = BookJsonToList(res.booth_books)
    //                 dispatch(InitBookList(booklist));
    //                 SetButtonEnable(false);
    //                 toast.success(`성공적으로 예약되었습니다.`);
    //             });
    //         }
    //     });
    // };


    return (
        <div className='defaultFrame'>
            {/* {
                IsLoad && <ReserveLoading name={BoothInfo.name} LoadFunc={BookLoadFunc} IsLoad={IsLoad} SetIsLoad={SetIsLoad}></ReserveLoading>
            } */}
            {/* <AlertDialogSlide agree={() => { setOpen2(true); }} open={open1} setOpen={setOpen1} Boothname="부스이름"></AlertDialogSlide> */}
            {/* <SimpleDialog open={open2} setOpen={setOpen2} callbackfunc={SelectBoxCallback}></SimpleDialog> */}

            <Logo fixed></Logo>
            <div className="GotoBack" onClick={() => { navigate(-1) }}>
                <img src={BackIcon} alt="" />
                뒤로가기
            </div>
            <div className="BoothDetailImage">
                <h1>{BoothInfo.name.split('//분야1//')[1].split('//분야2//')[0]}</h1>
                <img className='' src={`${publicUrl}/thumnails/${id - 1}.png`} alt="" />
            </div>
            <div className="Detail">
                <Summary congestion={Congestion} text={BoothInfo.content}></Summary>
                <Pdf bid={id}></Pdf>
                <Video bid={id}></Video>
                <Place></Place>
                {/* {
                    ButtonEnable 
                    ? <button className='ReserveButton w7' onClick={() => { setOpen1(true); }}>예약하기(1/5팀)</button>
                    : <div style={{height:'100px'}}></div>
                } */}
                <div style={{height:"30vh"}}></div>

            </div>
        </div>
    );
}

export default BoothDetail;