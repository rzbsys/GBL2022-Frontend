import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import "styles/global.scss";

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from 'utils/FirebaseApp';

import LoginPage from './login';
import RegisterPage from './register';
import Loading from 'components/loading';

import { useSelector, useDispatch } from 'react-redux';
import { Login } from 'store/auth/action';

function App() {
    const dispatch = useDispatch();
    const AuthState = useSelector(state => state.Auth);
    console.log(AuthState);
    const [AuthLoad, setAuthLoad] = useState(true);
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(Login(user.displayName, user.uid, user.photoURL));
            }
            setAuthLoad(false);
        })

    }, []);

    return (
        <div className='AppFrame'>
            {
                AuthLoad && <Loading></Loading>
            }

            <Router>
                <Routes>
                    {
                        !AuthState.isAuthenticated
                            ? <Route path='/' element={<LoginPage></LoginPage>}></Route>
                            : <>
                                <Route path='/' element={<RegisterPage></RegisterPage>}></Route>

                            </>
                    }
                </Routes>
            </Router>

        </div>
    );
}

export default App;