// createStore 함수 deprecated 주의
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구


import authReducer from './auth/reducer';
import BoothReducer from './booth/reducer';
import BookReducer from './book/reducer';

const combined = combineReducers({
    Auth: authReducer,
    Booth: BoothReducer,
    Book: BookReducer
});

const store = createStore(combined, composeWithDevTools());

export default store;