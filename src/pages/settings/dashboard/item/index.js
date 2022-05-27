import React from 'react';
import './style.scss';

function DashboardItem() {
    return (
        <div className='DashboardItemFrame'>
            <h2>부스이름</h2>
            <h2 className='w4'>+10</h2>
        </div>
    );
}

export default DashboardItem;