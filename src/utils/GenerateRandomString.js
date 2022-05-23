function GenerateRandomString() {
    return Math.random().toString(36).substring(2, 11);
}

export default GenerateRandomString;