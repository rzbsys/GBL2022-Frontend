import React, { useState, useEffect } from 'react';
import './style.scss';
import Logo from 'components/logo';
import Background from 'components/background';
import Header from './header';
import SearchBar from './searchbar';

import RankItem from './rankitem';
import { GetAllScores } from 'api/Rank';
// import Json2Array from 'utils/Json2Array';

function RankingPage() {
    const [RankList, SetRankList] = useState([]);
    const [SearchText, SetSearchText] = useState('');
    useEffect(() => {
        GetAllScores().then((res) => {
            var ScoreArray = [];
            for(var key in res.user_scores) {
                ScoreArray.push({
                    id : key,
                    score : res.user_scores[key]
                });
            }

            ScoreArray.sort(function(a, b) {
                return b.score - a.score;
            });
            
            SetRankList(ScoreArray);
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
                            <RankItem SearchText={SearchText} id={item.id} score={item.score} key={index} rank={index}></RankItem>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default RankingPage;