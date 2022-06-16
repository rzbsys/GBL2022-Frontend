import React, { useEffect, useState } from 'react';
import './style.scss';
import { GetUserScoreList, GetUserInfo } from 'api/Rank';


function RankItem({ rank, score, id, SearchText }) {

    const [LastScore, SetLastScore] = useState(0);
    const [UserName, SetUserName] = useState('');

    useEffect(() => {
        GetUserScoreList(id).then((res) => {
            const LastIndex = res.scores.length - 1;
            SetLastScore(res.scores[LastIndex].score);
        });

        GetUserInfo(id).then((res) => {
            SetUserName(res.user.username);
        });
    }, []);
    if (UserName.includes(SearchText)) {
        return (
            <div className='RankItem'>
                <div className="Rank">
                    <h1>{rank + 1}등</h1>
                    <h4 className='w3'>+{LastScore}</h4>
                </div>
                <div className="TextBox">
                    <h2>{UserName}</h2>
                    <p className='Score w5'>{score}점</p>
                </div>
            </div>
        );
    } else {
        return null
    }

}

export default RankItem;