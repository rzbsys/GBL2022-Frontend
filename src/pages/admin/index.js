import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './login/index';
import './style.scss';
import MainPage from './main';
import { useSelector } from 'react-redux';
import BoothDetail from 'pages/boothdetail';

function AdminPage() {
    const AdminState = useSelector((state) => state.Admin);

    return (
        <Routes>
            {
                !AdminState.isAdmin
                ? <Route path='*' element={<LoginPage></LoginPage>}></Route>
                : <>
                    <Route path='booth/:id' element={<BoothDetail></BoothDetail>}></Route>
                    <Route path='*' element={<MainPage></MainPage>}></Route>
                </>
            }
        </Routes>
    );
}

export default AdminPage;