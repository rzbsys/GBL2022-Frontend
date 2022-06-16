import React, { useState, useEffect } from 'react';
import './style.scss';
import Logo from 'components/logo';
import Background from 'components/background';
import Header from './header';
import SearchBar from './searchbar';

import RankItem from './rankitem';
import { GetAllScores } from 'api/Rank';
import Json2Array from 'utils/Json2Array';

function RankingPage() {
    const [RankList, SetRankList] = useState([]);
    const [SearchText, SetSearchText] = useState('');
    useEffect(() => {
        GetAllScores().then((res) => {
            SetRankList(Json2Array(res.user_scores));
        });
    },[]);
    

    return (
        <div className='defaultFrame' style={{overflowY:'scroll'}}>
            <Background></Background>
            <Logo fixed></Logo>
            <Header></Header>
            <SearchBar SetSearchText={SetSearchText}></SearchBar>
            <div className="BoothItemFrame">
                {
                    RankList.map((item, index) => {
                        return (
                            <RankItem SearchText={SearchText} id={item[0]} score={item[1]} key={index} rank={index}></RankItem>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default RankingPage;