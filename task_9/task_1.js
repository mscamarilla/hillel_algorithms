//1. https://www.e-olymp.com/ru/problems/6276 - 10 балов

let n = 7; //количество камней
let m = 4; //максимум камней за ход

function play(n,m) {
    return n % (m + 1);
}

console.log(play(n,m));