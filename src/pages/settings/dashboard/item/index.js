import React from 'react';
import './style.scss';

function DashboardItem({ name, score }) {
    return (
        <div className='DashboardItemFrame'>
            <h2>{name}</h2>
            <h2 className='w4'>+{score}</h2>
        </div>
    );
}

export default DashboardItem;