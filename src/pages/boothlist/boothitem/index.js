import React, { memo } from 'react';
import './style.scss';
import { useNavigate } from 'react-router-dom';
import Congestion from './congestion';
import Subject from './subject';

function BoothItem({title = 'Test', subtitle = 'Test', boothid, onClickFunc, congestion}) {
    const navigator = useNavigate();
    const publicUrl = process.env.PUBLIC_URL;


    function OnClick() {
        if (!onClickFunc) {
            navigator('/booth/' + boothid);
        } else {
            onClickFunc();
        }
    }

    

    // GetBoothImage(boothid).then((res) => {
    //     imgRef.current.src = res["images"][0]["image"];
    // });


    return (
        <div className='BoothItem' onClick={OnClick}>
            <Congestion congestion={congestion}></Congestion>
            <Subject subject={title.split('//분야2//')[1]}></Subject>
            <img className='BoothImage' src={`${publicUrl}/thumnails/${boothid - 1}.png`} alt="" />  
            <div className="Textbox">
                <h2 className='w7'>{title.split('//분야2//')[0]}</h2>
                <p>{subtitle}</p>
            </div>
        </div>
    );
}

export default memo(BoothItem);