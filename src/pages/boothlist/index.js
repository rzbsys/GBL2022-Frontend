import React, { useEffect, useState, useTransition } from 'react';
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

function BoothlistPage() {
    const BoothState = useSelector((state) => state.Booth);
    const dispatch = useDispatch();
    const [Loading, SetLoading] = useState(true);

    const [SearchWord, SetSearchWord] = useState('');
    const [isPending, startTransition] = useTransition({
        timeoutMs: 3000
    });

    useEffect(() => {
        GetBoothList().then((res) => {
            if (res) {
                dispatch(BoothIn(res.booths));
                SetLoading(false);    
            }
        })
    }, []);

    return (
        <div className='defaultFrame' style={{ overflowY: 'scroll' }}>
            <Background></Background>
            <Logo fixed></Logo>
            <QRButton></QRButton>
            <Header></Header>
            <SearchBar startTransition={startTransition} SetSearchWord={SetSearchWord}></SearchBar>
            <div className="BoothItemFrame">
                {
                    Loading || isPending
                        ? <LoadingEffect></LoadingEffect>
                        : BoothState.boothlist.map((item, index) => {
                            if (item.name.includes(SearchWord)) {
                                return <BoothItem key={index} title={item.name} subtitle={item.content} boothid={item.id}></BoothItem>
                            } else {
                                return null;
                            }
                        })
                }
            </div>
        </div>
    )
}

export default BoothlistPage;