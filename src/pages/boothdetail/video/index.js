import React, { useEffect, useState } from 'react';
import './style.scss';
import ReactPlayer from 'react-player'
import { GetVideoUrl } from 'api/Booth';


function Video({bid}) {
    const [VideoUrl, SetVideoUrl] = useState('');

    useEffect(() => {
        GetVideoUrl(bid).then((res) => {
            console.log(res)

            const vid_id = res.videos[0].url
            // SetVideoUrl(`https://drive.google.com/uc?id=${vid_id}&export=download`);
            SetVideoUrl(`https://drive.google.com/file/d/${vid_id}/preview`);
        });
    }, [bid]);

    return (
        <>
            <h2 className='w8 DetailTitle'>소개 동영상</h2>
            {/* {
                VideoUrl && VideoUrl !== 'NONE' && <video controls className='DetailVideo'>
                    <source src={VideoUrl} type='video/mp4'></source>
                </video>
            } */}

            {
                VideoUrl && VideoUrl !== 'NONE' && <iframe className='DetailVideo' allowFullScreen src={VideoUrl} title="boothvideo" frameBorder={0}></iframe>
            }
        </>
    );
}

export default Video;