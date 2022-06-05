import React, { useEffect, useState } from 'react';
import './style.scss';

import DashboardItem from './item';

import { useNavigate } from 'react-router-dom';

function Dashboard({ Score, Rank, Activities=[] }) {
    const navigate = useNavigate();

    function RankingClick() {
        navigate('/ranking');
    }

    return (
        <div className='DashboardFrame'>
            <div className="First DashboardBox">
                <h4 className='DashboardItemtitle'>점수</h4>
                <h1 className='DashboardItemcontent'>{Score}점</h1>
            </div>
            <div className="Second DashboardBox" onClick={RankingClick}>
                <h4 className='DashboardItemtitle'>전체 등수 ›</h4>
                <h1 className='DashboardItemcontent'>{Rank}등</h1>
            </div>
            <div className="Third DashboardBox">
                <div style={{ height: '10px' }}></div>

                {
                    Activities.map((item, index) => {
                        return (
                            <DashboardItem name={item.booth_id} score={item.score} key={index}></DashboardItem>
                        )
                    })
                }

                <div style={{ height: '10px' }}></div>
            </div>
        </div>
    );
}

export default Dashboard;