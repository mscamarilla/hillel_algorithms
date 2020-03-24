//2. Реализовать функцию, которая выводит k-ое число Трибоначчи. Циклом ( 1 бал). Рекурсия (2 бала)
//0, 1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, 927, 1705, 3136, 5768, 10609, 19513, 35890, 66012, 121415, 223317

//цикл
function trib_loop(n) {
    let a = 0;
    let b = 1;
    let c = 1;
    for (let i = 4; i <= n; i++) {
        let d = a + b + c;
        a = b;
        b = c;
        c = d;
    }
    return c;
}

//рекурсия
function trib_rec(n) {

    if (n == 1) {
        return 0;
    }

    if (n <= 3) {
        return 1;
    } else {
        return trib_rec(n - 1) + trib_rec(n - 2) + trib_rec(n - 3);
    }

}

//рекурсия с запоминанием
let temp = {};

function trib_rec_mem(n) {

    if (n === 1) {
        return 0;
    }
    if (n <= 3) {
        return 1;
    }

    if (!temp[n - 1]) {
        let res = trib_rec_mem(n - 1);
        temp[n - 1] = res;
    }

    if (!temp[n - 2]) {
        let res = trib_rec_mem(n - 2);
        temp[n - 2] = res;
    }

    if (!temp[n - 3]) {
        let res = trib_rec_mem(n - 3);
        temp[n - 3] = res;
    }

    return temp[n - 1] + temp[n - 2] + temp[n - 3];
}

console.log(trib_rec_mem(5)); //4
console.log(trib_rec_mem(7)); //13
console.log(trib_rec_mem(13));//504