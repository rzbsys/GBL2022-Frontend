import { GetBooth } from 'api/Booth';
import React, { useEffect, useState } from 'react';
import './style.scss';

function DashboardItem({ id, score }) {
    const [BoothName, SetBoothName] = useState('불러오는중...');

    useEffect(() => {
        GetBooth(id).then((res) => {
            SetBoothName(res.booth.name.split('//분야1//')[1].split('//분야2//')[0]);
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