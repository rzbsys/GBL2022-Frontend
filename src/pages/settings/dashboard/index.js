import React from 'react';
import './style.scss';

import DashboardItem from './item';

function Dashboard() {
    return (
        <div className='DashboardFrame'>
            <div className="First DashboardBox">
                <h4 className='DashboardItemtitle'>점수 ›</h4>
                <h1 className='DashboardItemcontent'>1000점</h1>
            </div>
            <div className="Second DashboardBox">
                <h4 className='DashboardItemtitle'>전체 등수</h4>
                <h1 className='DashboardItemcontent'>100등</h1>
            </div>
            <div className="Third DashboardBox">
                <div style={{height:'10px'}}></div>
                <DashboardItem></DashboardItem>
                <DashboardItem></DashboardItem>
                <DashboardItem></DashboardItem>
                <DashboardItem></DashboardItem>
                <DashboardItem></DashboardItem>
                <DashboardItem></DashboardItem>
                <div style={{height:'10px'}}></div>
            </div>
        </div>
    );
}

export default Dashboard;