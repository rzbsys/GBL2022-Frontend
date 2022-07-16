import React from 'react';
import './style.scss';

function Subject({ subject }) {
    return (
        <div className='poster_subject'>
            {subject}
        </div>
    );
}

export default Subject;