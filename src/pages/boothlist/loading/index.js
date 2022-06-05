import React from 'react';
import './style.scss';
import LoadingGIF from 'assets/image/clock.gif';

function Loading() {
    return (
        <div className="LoadingEffect">
            <img src={LoadingGIF} alt="" />
            <h1>로딩중</h1>
        </div>
    );
}

export default Loading;