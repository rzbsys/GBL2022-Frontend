import React from 'react';
import './style.scss';
import ReactPlayer from 'react-player'



function Video() {
    return (
        <>
            <h2 className='w8 DetailTitle'>소개 동영상</h2>
            <ReactPlayer url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" controls className="DetailVideo"></ReactPlayer>
        </>
    );
}

export default Video;