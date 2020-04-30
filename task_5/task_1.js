// 1. Хеши. Написать функцию сохранения пароля используя хеш bcrypt или SHA-2 или любой другой,
// и реализовать функцию сравнение строк, сравнением их хешей. (2 бала)

const bcrypt = require('bcryptjs');
const password = 'old_password';

function hashPassword(password) {
    return bcrypt.hashSync(password);
}

function checkPassword(password, hash) {
    return bcrypt.compareSync(password, hash);
}

function authentification(input_password) {
    let old_password_hash = hashPassword(password);
    let new_password = checkPassword(input_password, old_password_hash);

    if (new_password === true) {
        console.log('passwords are equals')
    } else {
        console.log('passwords are NOT equals')
    }
}

authentification('new_password');