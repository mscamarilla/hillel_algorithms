// 4. https://www.e-olymp.com/ru/problems/2472 - 10 балов

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;
let g = [];
let n = '';

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

function AddEdge(ribs) {

    for (let i = 0; i < ribs.length; i++) {
        g[ribs[i][0]] = [];
        g[ribs[i][1]] = [];
    }

    for (let i = 0; i < ribs.length; i++) {
        g[ribs[i][0]].push(ribs[i][1]);
        g[ribs[i][1]].push(ribs[i][0]);
    }
}

//подсчет ребер
function Vertex(vs) {
    let res = [];

    for (let i = 0; i < vs.length; i++) {
        res.push(g[vs[i]].join(' '));
    }

    return res.join('\n');
}

function main() {
    n = parseInt(readLine()); //количество вершин
    let k = parseInt(readLine()); //количество операций
    g = Array(n + 1).fill([]);

    let ribs = [];
    let vs = [];
    for (let i = 0; i < k; i++) {
        let line = readLine().split(' ').map(v => +v);
        if (line[0] === 1) { // добавление ребра
            ribs.push([line[1], line[2]]);
        } else if (line[0] === 2) {
            vs.push(line[1]);

        }
    }
    AddEdge(ribs);//добавить в граф ребро между вершинами (u, v)
    let result = Vertex(vs);//вывести список вершин, смежных с вершиной u
    console.log(result);
}
