import React, { useEffect, useState } from 'react';
import './style.scss';
import { GetUserScoreList } from 'api/Rank';

function RankItem({ rank, name, score, id }) {

    const [LastScore, SetLastScore] = useState(0);

    useEffect(() => {
        GetUserScoreList(id).then((res) => {
            const LastIndex = res.scores.length - 1;
            SetLastScore(res.scores[LastIndex].score);
        });
    }, []);

    return (
        <div className='RankItem'>
            <div className="Rank">
                <h1>{rank + 1}등</h1>
                <h4 className='w3'>+{LastScore}</h4>
            </div>
            <div className="TextBox">
                <h2>전민국</h2>
                <p className='Score w5'>{score}점</p>
            </div>
        </div>
    );
}

export default RankItem;