import React, { useEffect } from 'react';
import Loading from 'components/loading';
import { useNavigate } from 'react-router-dom';

function Redirect({url}) {
    const navigate = useNavigate();
    useEffect(() => {
        navigate(url);
    }, []);
    return (
        <Loading></Loading>
    );
}

export default Redirect;