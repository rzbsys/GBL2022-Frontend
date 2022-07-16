import React, { useEffect } from 'react';
import './style.scss';
import { GetPdfUrl } from 'api/Booth';
import { useState } from 'react';


function Pdf({ bid }) {
    const [PdfUrl, SetPdfUrl] = useState('');

    useEffect(() => {
        GetPdfUrl(bid).then((res) => {
            const code = res.images[0].image;
            const url = `https://drive.google.com/file/d/${code}/view`;
            SetPdfUrl(url);
        });
    }, []);

    function ViewPdf() {
        window.open(PdfUrl, '_blank');
    }

    return (
        <>
            <h2 className='w8 DetailTitle'>부스 개요</h2>
            <div className="PdfText w6" onClick={ViewPdf}>
                부스 개요 보기
            </div>
        </>
    );
}

export default Pdf;