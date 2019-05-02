

const validator = (name, password) => {
    let validName = false,
        validPassword = false;
    if (name === 'admin') {
        validName = true;
    }
    if (password === '123') {
        validPassword = true;
    }
    return { validName, validPassword };
};