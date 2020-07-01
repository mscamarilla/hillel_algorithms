//1. https://www.e-olymp.com/ru/problems/6276 - 10 балов

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

function play(n, reg) {

    let res = 0;
    let j = 0;
    for (let i = 0; i < n; i++) {
        if (reg[i] % 5 === 0 || reg[i] % 5 === 1) {
            j = 0;
        }
        if (reg[i] % 5 === 2 || reg[i] % 5 === 3) {
            j = 1;
        }
        if (reg[i] % 5 === 4) {
            j = 2;
        }

        res = res ^ j;
    }

    if (res === 0) {
        return "Watson";
    } else {
        return "Rybka";
    }
}


function main() {
    var first_line = readLine().split(' ');
    let n = parseInt(first_line[0]);
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(readLine().split(' ').map(v => +v));
    }

    let result = play(n, arr);
    console.log(result);
}