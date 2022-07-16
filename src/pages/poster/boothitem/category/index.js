import React from 'react';
import './style.scss';

function Category({category}) {
    return (
        <div className='category'>
            {
                {
                    "AI" : "인공지능 수학",
                    "STA" : "확률과 통계"
                }[category]
            }
        </div>
    );
}

export default Category;