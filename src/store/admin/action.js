export const LOGIN = 'ADMIN/LOGIN';
export const LOGOUT = 'ADMIN/LOGOUT'

export const AdminLogin = (boothid) => ({
    type: LOGIN,
    payload: boothid
});

export const AdminLogout = () => ({
    type: LOGOUT
})