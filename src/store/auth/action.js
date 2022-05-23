export const LOGIN = 'AUTH/LOGIN';
export const LOGOUT = 'AUTH/LOGIN';

export const Login = (userName, userUid, userPicture) => {
    return {
        type: LOGIN,
        payload: {
            userName,
            userUid,
            userPicture
        }
    }
}

export const Logout = () => {
    return {
        type: LOGOUT,
    }
}