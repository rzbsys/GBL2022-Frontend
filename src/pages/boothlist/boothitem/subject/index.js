import React from 'react';
import './style.scss';

function Subject({ subject }) {
    return (
        <div className='subject'>
            {subject}
        </div>
    );
}

export default Subject;