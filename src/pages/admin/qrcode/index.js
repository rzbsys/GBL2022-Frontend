import React from 'react';
import { useEffect } from 'react';
import QrReader from 'react-qr-scanner'
import { toast } from 'react-toastify';
import './style.scss';


function QrCode({ SetQrEnable, QrCallback }) {
    
    useEffect(() => {
        const frame = document.getElementsByClassName('QrFrame')[0];
        const effect = setTimeout(() => {
            frame.classList.add('QrFrameshow');
        }, 10);
        return () => {
            clearTimeout(effect);
        }
    }, []);

    function DetectQR(str) {
        if (str) {
            QrCallback(str.text)
            Close();
        }
    }

    function Close() {
        const frame = document.getElementsByClassName('QrFrame')[0];
        setTimeout(() => {
            frame.classList.remove('QrFrameshow');
            setTimeout(() => {
                SetQrEnable(false);
            }, 400);
        }, 10);
    }

    function OnError(err) {
        console.log(err);
    }

    return (
        <div className="QrFrame">
            <QrReader
                delay={200}
                constraints={{
                    video : {
                        facingMode: 'environment'
                    }
                }}
                onScan={DetectQR}
                onError={OnError}
            ></QrReader>
            <button onClick={Close} className='Cancel'>취소하기</button>
        </div>
    );
}

export default QrCode;