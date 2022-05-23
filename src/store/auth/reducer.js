import * as actions from './action';

const initState = {
    isAuthenticated: false,
    userName: null,
    userPicture: null,
    userUid: null
};


const authReducer = (state = initState, action) => {
    switch (action.type) {
        case actions.LOGIN:
        return {
                ...state,
                isAuthenticated: true,
                userName: action.payload.userName,
                userUid: action.payload.userUid,
                userPicture: action.payload.userPicture
            };
        case actions.LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                userName: null,
                userToken: null,
                userPicture: null
            };
        default:
            return state;
    }
}

export default authReducer;