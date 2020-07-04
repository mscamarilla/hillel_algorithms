//2. https://www.e-olymp.com/ru/problems/4671 - 30 баллов

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

function prefix_function(s) {
    let n = s.length;
    let pi = Array(n);

    pi[0] = 0;

    for (let i = 1; i < n; i++) {
        let j = pi[i - 1];

        while (j > 0 && s[i] !== s[j]) {
            j = pi[j - 1];
        }

        if (s[i] === s[j]) {
            j++;
        }

        pi[i] = j;
    }

    return pi;
}

function solve(s, t) {
    let a = s + '#' + t;
    let n = s.length;
    let res = 0;

    let pi = prefix_function(a);

    for (let i = 0; i <= a.length; i++) {
        if(pi[i] === n){
            res = i-2*n+1;
        }
    }

    return res;
}



function main() {
    var t = readLine();
    var s = readLine();
    let result = solve(s,t);
    console.log(result);
}