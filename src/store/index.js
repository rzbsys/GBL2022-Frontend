// createStore 함수 deprecated 주의
import { createStore, combineReducers } from 'redux';

import authReducer from './auth/reducer';

const combined = combineReducers({
    Auth : authReducer
});

const store = createStore(combined);

export default store;