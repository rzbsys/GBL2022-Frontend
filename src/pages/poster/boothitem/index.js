import React, { memo, useEffect, useState } from 'react';
import './style.scss';
import Subject from './subject';
import Category from './category';
import { GetPdfUrl } from 'api/Booth';

function BoothItem({ SetPdfLoadingEnable, category, title = 'Test', subtitle = 'Test', boothid, onClickFunc }) {
    const [PdfUrl, SetPdfUrl] = useState('');

    useEffect(() => {
        GetPdfUrl(boothid).then((res) => {
            const code = res.images[0].image;
            const url = `https://drive.google.com/file/d/${code}/view`;
            SetPdfUrl(url);
        });
    }, []);



    // GetBoothImage(boothid).then((res) => {
    //     imgRef.current.src = res["images"][0]["image"];
    // });

    function OnClick() {
        window.open(PdfUrl, '_blank');
    }


    return (
        <div className='PosterItem' onClick={OnClick}>
            <Subject subject={title.split('//분야2//')[1]}></Subject>
            <Category category={category}></Category>
            <div className="Textbox">
                <h2 className='w7'>{title.split('//분야2//')[0]}</h2>
                <p>{subtitle}</p>
            </div>
        </div>
    );
}

export default memo(BoothItem);