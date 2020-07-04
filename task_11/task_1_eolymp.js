//1. https://www.e-olymp.com/ru/problems/2463 - 30 баллов

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

    for (let i = 1; i < n; ++i) {
        let j = pi[i - 1];

        while (j > 0 && s[i] !== s[j]) {
            j = pi[j - 1];
        }

        if (s[i] === s[j]) {
            j++;
        }
        pi[i] = j;
    }

    let k = n - pi[n - 1];

    if (n % k === 0) {
        return k;
    } else {
        return n;
    }
}


function main() {
    var first_line = readLine();
    let result = prefix_function(first_line);
    console.log(result);
}