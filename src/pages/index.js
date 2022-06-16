import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import "styles/global.scss";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from 'utils/FirebaseApp';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import LoginPage from './login';
import RegisterPage from './register';
import Loading from 'components/loading';
import AdminPage from './admin';
import Navbar from 'components/navbar';
import { useSelector, useDispatch } from 'react-redux';
import BoothlistPage from './boothlist';
import BoothDetail from './boothdetail';
import SettingPage from './settings';
import MapPage from './map';
import ReservePage from './reserve';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Redirect from 'utils/Redirect';
import Orientation from './orientation';
import RankingPage from './ranking';
import { CheckValid } from 'utils/useGoogleLogin';


function App() {
    const location = useLocation();
    const dispatch = useDispatch();
    const AuthState = useSelector(state => state.Auth);
    const [AuthLoad, setAuthLoad] = useState(true);
    
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            CheckValid(user, dispatch)
            setAuthLoad(false);
        });
    }, []);

    function ValidateURL(url) {
        const NonAnimateURL = ['ranking', 'booth', 'settings', 'map', 'reserve', 'admin']
        for (let i = 0; i < NonAnimateURL.length; i++) {
            if (url.includes(NonAnimateURL[i])) {
                return false;
            }
        }
        return true;
    }

    return (
        <>
            <Orientation></Orientation>
            <ToastContainer
                hideProgressBar={true}
                autoClose={2000}
                className="toast-frame"
                bodyClassName="toast-body"
                position={"bottom-center"}
                closeButton={null}
                transition={Slide}
            />
            {
                AuthLoad && <Loading></Loading>
            }
            <TransitionGroup className='AppFrame'>
                <CSSTransition key={ValidateURL(location.pathname)} classNames='pageSliderGlobal' timeout={300}>
                    <Routes location={location}>
                        <Route path='/admin/*' element={<AdminPage></AdminPage>}></Route>
                        {
                            !AuthState.isAuthenticated
                                ? <>
                                    <Route path='/' element={<LoginPage></LoginPage>}></Route>
                                    <Route path='*' element={<Redirect url='/'></Redirect>}></Route>
                                </>
                                : !AuthState.isRegisterd
                                    ? <>
                                        <Route path='/' element={<RegisterPage></RegisterPage>}></Route>
                                        <Route path='*' element={<Redirect url='/' />}></Route>
                                    </>
                                    : <Route path='/*' element={<Navbar>
                                        <TransitionGroup className='Content'>
                                            <CSSTransition key={location.pathname} classNames='pageSliderNav' timeout={300}>
                                                <Routes location={location}>
                                                    <Route path='' element={<Redirect url='/boothlist' />}></Route>
                                                    <Route path='boothlist' element={<BoothlistPage></BoothlistPage>}></Route>
                                                    <Route path='booth/:id' element={<BoothDetail></BoothDetail>}></Route>
                                                    <Route path='settings' element={<SettingPage></SettingPage>}></Route>
                                                    <Route path='map' element={<MapPage></MapPage>}></Route>
                                                    <Route path='reserve' element={<ReservePage></ReservePage>}></Route>
                                                    <Route path='ranking' element={<RankingPage></RankingPage>}></Route>
                                                </Routes>
                                            </CSSTransition>
                                        </TransitionGroup>
                                    </Navbar>}>
                                    </Route>
                        }
                    </Routes>
                </CSSTransition>
            </TransitionGroup>
        </>
    );
}

export default App;