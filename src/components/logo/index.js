import React from 'react';
import './style.scss';

function Logo({fixed=false}) {

    var LogoClass = 'GBL2021Logo w8';
    if (fixed) {
        LogoClass = LogoClass + ' Logofixed';
    }

    return (
        <h5 className={LogoClass}>GBL2022</h5>
    );
}

export default Logo;