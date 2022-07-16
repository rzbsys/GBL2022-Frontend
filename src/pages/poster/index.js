import React, { useEffect, useState, useTransition, useMemo } from 'react';
import './style.scss';
import Logo from 'components/logo';
import Background from 'components/background';
import QRButton from './qrbutton';
import Header from './header';
import BoothItem from './boothitem';
import SearchBar from './searchbar';
import { useDispatch, useSelector } from 'react-redux';

import { BoothIn } from 'store/booth/action';
import { GetBoothList } from 'api/Booth';
import LoadingEffect from './loading';
import { toast } from 'react-toastify';

import PdfLoading from './pdfloading';

function PosterlistPage() {
    const BoothState = useSelector((state) => state.Booth);
    const dispatch = useDispatch();
    const [Loading, SetLoading] = useState(true);
    const [SearchWord, SetSearchWord] = useState('');
    const [PdfLoadingEnable, SetPdfLoadingEnable] = useState(false);
    const [isPending, startTransition] = useTransition({
        timeoutMs: 3000
    });


    const SearchBooths = useMemo(() => {
        if (SearchWord === '') {
            return BoothState.boothlist;
        } else {
            return BoothState.boothlist.filter((booth) => {
                return booth.name.toLowerCase().includes(SearchWord.toLowerCase());
            });
        }
    }, [SearchWord, BoothState]);

    useEffect(() => {
        GetBoothList().then((res) => {
            if (res.booths) {
                dispatch(BoothIn(res.booths));
                SetLoading(false);
            } else {
                toast.error('부스정보를 불러올 수 없습니다.');
            }
        });
    }, []);

    return (
        <div className='defaultFrame' style={{ overflowY: 'scroll' }}>
            {
                PdfLoadingEnable && <PdfLoading></PdfLoading>
            }
            <Background></Background>
            <Logo fixed></Logo>
            <QRButton></QRButton>
            <Header></Header>
            <SearchBar startTransition={startTransition} SetSearchWord={SetSearchWord}></SearchBar>
            <div className="BoothItemFrame">
                {
                    Loading || isPending
                        ? <LoadingEffect></LoadingEffect>
                        : SearchBooths.map((item, index) => {
                            if (item.name.split('//분야1//')[0] !== 'GBL') {
                                return <BoothItem SetPdfLoadingEnable={SetPdfLoadingEnable} category={item.name.split('//분야1//')[0]} congestion={item.congestion} key={index} title={item.name.split('//분야1//')[1]} subtitle={item.content} boothid={item.id}></BoothItem>
                            } else {
                                return null;
                            }
                        })
                }
            </div>
        </div>
    )
}

export default PosterlistPage;