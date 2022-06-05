export const LOGIN = 'AUTH/LOGIN';
export const LOGOUT = 'AUTH/LOGOUT';
export const REGISTER = 'AUTH/REGISTER';

export const Login = (userName, userUid, userPicture, isRegisterd) => {
    console.log(userName);
    return {
        type: LOGIN,
        payload: {
            userName,
            userUid,
            userPicture,
            isRegisterd
        }
    }
}

export const Logout = () => {
    return {
        type: LOGOUT,
    }
}

export const Register = () => {
    return {
        type: REGISTER
    }
}