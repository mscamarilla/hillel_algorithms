// 3. https://www.e-olymp.com/ru/problems/977 - является ли граф деревом (2 бала)

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;
var g = [];
var used = [];
var n = '';


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

function is_tree(matrix) {

    let ribs = 0; //ребра
    //матрица смежности
    for (let i = 0; i < n; i++) {
        g[i+1] = [];
        matrix[i].forEach(function (item, index) {
            if(item === 1){
                g[i+1].push(index+1);
                ribs++;
            }
        })
    }
    //матрица симметрична, ребра нужно поделить на 2
    ribs = ribs / 2;

    //если компонента связности 1, а ребер на 1 меньше, чем вершин, это дерево
    if(components() === 1 && ribs === n-1){
        return 'YES';
    }

    return 'NO';
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
    n = readLine();
    var arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(readLine().split(' ').map(v=>+v));
    }
    g = Array(n+1).fill([]);


    var result = is_tree(arr);
    console.log(result);
}