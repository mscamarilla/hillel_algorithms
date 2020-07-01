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

function play(n, m) {
    return n % (m + 1);
}


function main() {
    var first_line = readLine().split(' ');
    let n = parseInt(first_line[0]);
    let m = parseInt(first_line[1]);

    let result = play(n, m);//вывести список вершин, смежных с вершиной u
    console.log(result);
}