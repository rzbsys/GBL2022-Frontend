import React from 'react';
import './style.scss';

function Congestion({ congestion }) {
    return (
        <div className={`congestion cong_widget${congestion}`}>
            {
                {
                    0: "혼잡",
                    1: "준비중",
                    2: "원활"
                }[congestion]
            }
        </div>
    );
}

export default Congestion;