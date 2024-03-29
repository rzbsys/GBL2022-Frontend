import React, { useEffect, useState } from 'react';
import './style.scss';
import Logo from 'components/logo';

import { useSelector } from 'react-redux';
import Profile from './profile';
import Dashboard from './dashboard';

import { GetUserTotalScore } from 'api/Auth';
import { GetAllScores, GetUserScoreList } from 'api/Rank';

function SettingPage() {
    const UserData = useSelector(state => state.Auth);
    const [Score, SetScore] = useState(-1);
    const [Rank, SetRank] = useState(0);
    const [Activities, SetActivities] = useState([]);

    useEffect(() => {
        GetUserTotalScore(UserData.userUid).then((res) => {
            SetScore(res.total_score);
        });
        GetUserScoreList(UserData.userUid).then((res) => {
            if (res.scores) {
                SetActivities(res.scores);
            }
        });
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


            for (var i = 0; i < ScoreArray.length; i++) {
                if (ScoreArray[i].id === UserData.userUid) {
                    SetRank(i + 1);
                    break;
                }
            }
        });
    }, []);

    return (
        <div className='defaultFrame '>
            <Logo></Logo>
            <Profile name={UserData.userName} src={UserData.userPicture}></Profile>
            <Dashboard Score={Score} Rank={Rank} Activities={Activities}></Dashboard>
        </div>
    );
}

export default SettingPage;