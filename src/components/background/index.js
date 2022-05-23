import React from 'react';
import './style.scss';


function Background() {
    const RandomDgree = Math.random() * 1000 % 360;
    
    return (
        <div className="background">
            <div className="triangle" style={{transform:`rotate(${RandomDgree}deg)`}}></div>
            <div className="rectangle" style={{transform:`rotate(${RandomDgree + 20}deg)`}}></div>
            <div className="circle" style={{transform:`rotate(${RandomDgree + 80}deg)`}}></div>
        </div>
    );
}

export default Background;