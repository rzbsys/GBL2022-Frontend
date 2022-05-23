import React from 'react';
import "./style.scss";

import Background from '../../components/background';
import Button from './button';

function LoginPage() {
    return (
        <>
            <Background></Background>
            <div className="LoginBox">
                <h1 className='LoginText w8'>GBL2022<br/>로그인 페이지</h1>
                <h3 className='LoginSubText w4'>대전대신고등학교의<br/>계정으로만 사용할 수 있습니다.</h3>
                <Button></Button>   
            </div>
        </>
    );
}

export default LoginPage;