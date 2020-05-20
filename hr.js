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

function solve(n, m, field) {

    let dp = [];
    //создаем вспомогательный массив и заполняем его -1
    for (let i = 0; i <= n + 1; i++) {
        dp.push(Array(m + 2).fill(-1));
    }

    dp[n + 1][1] = 0;

    //во вспомогательный массив копируем исходный. Так создадутся стенки
    for (let i = n; i > 0; i--) {
        for (let j = 0; j < m; j++) {
            dp[i][j + 1] = parseInt(field[i - 1][j]) + Math.max(dp[i][j], dp[i + 1][j + 1]);
        }
    }
    let result = '';
    let i = n;
    let j = 1;

    while (i > 0 && j <= m) {
        //если значение сверху больше (или равно), чем справа, двигаемся вверх
        if (dp[i - 1][j] >= dp[i][j + 1]) {
            if (dp[i - 1][j] !== -1) {
                result += 'F';
            }
            i--;

        } else {
            //если значение справа больше, чем вверху, двигаемся вправо
            if (dp[i][j + 1] !== -1) {
                result += 'R';
            }
            j++;

        }
    }
    return result;
}


function main() {
    var first_line = readLine().split(' ');
    var n = parseInt(first_line[0]);
    var m = parseInt(first_line[1]);
    var arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(readLine().split(' '));
    }

    var result = solve(n, m, arr);
    console.log(result,'\n');
}
