import React, { useState, useRef, useEffect } from 'react';
import './style.scss';
import { throttle } from 'lodash';

function Header() {
    // 하드코딩 수정필요
    const [NevEnable, SetNevEnable] = useState(false);
    const NavRef1 = useRef();
    const NavRef2 = useRef();
    
    var ScrollRef;
    useEffect(() => {
        ScrollRef = document.querySelector('.defaultFrame');
        ScrollRef.addEventListener('scroll', throttledScroll);
        return () => {
            ScrollRef.removeEventListener('scroll', throttledScroll);
        };
    }, [NevEnable]);

    const throttledScroll = throttle(() => {
        const Threshold = 100;
        const Background = document.querySelector('.background');
        const QRCode = document.querySelector('.QRButton');
        const progressbar = document.querySelector('.Progress');
        progressbar.style.width = `${ScrollRef.scrollTop / (ScrollRef.scrollHeight - document.documentElement.clientHeight) * 100}%`;

        if (ScrollRef.scrollTop > Threshold && !NevEnable) {
            SetNevEnable(true);
            NavRef1.current.classList.add("NavRef1EnabledHeader");
            NavRef2.current.classList.add("NavRef2EnabledHeader");
            Background.classList.add("disabledBackground");
            QRCode.classList.add('ScrolledQRButton');
        } else if (ScrollRef.scrollTop <= Threshold && NevEnable) {
            SetNevEnable(false);
            NavRef1.current.classList.remove("NavRef1EnabledHeader");
            NavRef2.current.classList.remove("NavRef2EnabledHeader");
            Background.classList.remove("disabledBackground");
            QRCode.classList.remove('ScrolledQRButton');
        }
    }, 200);


    return (
        <>
            <div className="NavbarScrolled" ref={NavRef1}>
                <div className="Progress"></div>
                <h2>포스터 목록</h2>
            </div>
            <div className="Header" ref={NavRef2}>
                <h1 className='HeaderTitle'>포스터 목록</h1>
            </div>

        </>
    );
}

export default Header;