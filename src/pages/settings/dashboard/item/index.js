import { GetBooth } from 'api/Booth';
import React, { useEffect, useState } from 'react';
import './style.scss';

function DashboardItem({ id, score }) {
    const [BoothName, SetBoothName] = useState('');

    useEffect(() => {
        GetBooth(id).then((res) => {
            SetBoothName(res.booth.name);
        });
    }, []);

    return (
        <div className='DashboardItemFrame'>
            <h2 className='BoothName'>{BoothName}</h2>
            <h2 className='w4'>+{score}</h2>
        </div>
    );
}

export default DashboardItem;