// 1. https://www.e-olymp.com/ru/problems/776 - dfs (2 бала)

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;
var g = [];
var used = [];
var n = '';
var m = '';


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

function Graph(ribs) {

    //матрица смежности
    for (let i = 0; i < m; i++) {
        g[ribs[i][0]] = [];
        g[ribs[i][1]] = [];
    }

    for (let i = 0; i < m; i++) {
        g[ribs[i][0]].push(ribs[i][1]);
        g[ribs[i][1]].push(ribs[i][0]);
    }


    let result = components() - 1;

    return result;
}
//подсчет компонент
function components() {
    let c = 0;
    for (let i = 1; i <= n; i++) {
        if (!used[i]) {
            c++;
            dfs(i);
        }
    }
    return c;
}

//поиск в глубину
function dfs(u) {
    if (g[u]) {
        used[u] = true;
        for (let i = 0; i < g[u].length; i++) {
            let to = g[u][i];
            if (!used[to]) {
                dfs(to);
            }
        }
    }
}



function main() {
    var first_line = readLine().split(' ');
    n = parseInt(first_line[0]);
    m = parseInt(first_line[1]);
    var arr = [];
    for (let i = 0; i < m; i++) {
        arr.push(readLine().split(' ').map(v=>+v));
    }
    g = Array(n+1).fill([]);


    var result = Graph(arr);
    console.log(result);
}