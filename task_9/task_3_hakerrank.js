//3. https://www.e-olymp.com/ru/problems/4051 - 30 балов

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

function jump(n, k) {
    let dp = Array(n + 1).fill(0);
    dp[1] = 1; //стартовая клетка
    dp[2] = 1; //минимальный шаг 1 клетка

    for (let i = 3; i <= n; i++) {
        if (i <= k) {
            dp[i] = 2 * dp[i - 1];
        } else {
            dp[i] = 2 * dp[i - 1] - dp[i - k - 1];
        }

    }
    return dp[n];
}


function main() {
    var first_line = readLine().split(' ');
    let n = parseInt(first_line[0]);
    let k = parseInt(first_line[1]);

    let result = jump(n,k);//вывести список вершин, смежных с вершиной u
    console.log(result);
}
