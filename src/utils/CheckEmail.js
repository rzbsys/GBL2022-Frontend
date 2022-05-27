function CheckEmail(email) {
    if (email.indexOf('@dshs.kr') === -1) {
        return false;
    } else {
        return true;
    }
}

export default CheckEmail;