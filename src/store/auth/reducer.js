import * as actions from './action';

const initState = {
    isAuthenticated: false,
    isRegisterd: false,
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
                userPicture: action.payload.userPicture,
                isRegisterd: action.payload.isRegisterd
            };
        case actions.LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                isRegisterd: false,
                userName: null,
                userToken: null,
                userPicture: null
            };
        case actions.REGISTER:
            return {
                ...state,
                isRegisterd: true
            }
        default:
            return state;
    }
}

export default authReducer;