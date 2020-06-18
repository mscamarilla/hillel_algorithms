//2. https://www.e-olymp.com/ru/problems/5222 - 20 балов
let n = 4;
let reg = [2, 3, 4, 9];

function play(n, reg) {

    let res = 0;
    let j = 0;
    for (let i = 0; i < n; i++) {
        if(reg[i] % 5 === 0 || reg[i] % 5 === 1){
            j = 0;
        }
        if(reg[i] % 5 === 2 || reg[i] % 5 === 3){
            j = 1;
        }
        if(reg[i] % 5 === 4){
            j = 2;
        }

        res = res ^ j;
    }

    if (res === 0) {
        return  "Watson";
    } else {
        return  "Rybka";
    }
}
console.log(play(n, reg));
