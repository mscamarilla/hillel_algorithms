//2. https://www.e-olymp.com/ru/problems/2941 - 50 баллов
// (Решить можно любым способом, например: Дерево Фенвика, Дерево отрезков, sqrt Декомпозиция)

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

let n = 0; //размер массива
let q = 0; //количество операций
let tree = []; //дерево отрезков


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
function buildTree(tree, arr, v, left, right) {
    if (left !== right) {
        let tm = Math.floor((left + right) / 2);
        buildTree(tree, arr, v * 2, left, tm);
        buildTree(tree, arr, v * 2 + 1, tm + 1, right);
        tree[v] = tree[v * 2] + tree[v * 2 + 1];
    } else {
        tree[v] = arr[left]
    }
}
function sum(tree, v, left, right, from, to) {
    if (from > to) {
        return 0;
    }
    if (from === left && to === right) {
        return tree[v];
    }
    let tm = Math.floor((left + right) / 2);
    return sum(tree, v * 2, left, tm, from, Math.min(to, tm))
        + sum(tree, v * 2 + 1, tm + 1, right, Math.max(from, tm + 1), to);
}
function update(tree, v, left, right, index, new_val) {
    if (left !== right) {
        let tm = Math.floor((left + right) / 2);
        if (index <= tm) {
            update(tree, v * 2, left, tm, index, new_val);
        } else {
            update(tree, v * 2 + 1, tm + 1, right, index, new_val);
        }
        tree[v] = tree[v * 2] + tree[v * 2 + 1];
    } else {
        tree[v] = new_val;
    }
}


function solve(arr, ops, q) {
    let res = [];
    buildTree(tree, arr, 1, 0, n - 1);

    for (let i = 0; i < q; i++) {
        if (ops[i][0] === '?') {
            res.push(sum(tree, 1, 0, n - 1, parseInt(ops[i][1])-1, parseInt(ops[i][2])-1));
        } else if (ops[i][0] === '=') {
            update(tree, 1, 0, n - 1, parseInt(ops[i][1])-1, parseInt(ops[i][2]));
        }
    }

    return res.join('\n');
}


function main() {
    var first_line = readLine().split(' ');
    n = parseInt(first_line[0]);
    q = parseInt(first_line[1]);
    tree = Array(4 * n);
    let arr = [];
    var second_line = readLine().split(' ');
    for (let i = 0; i<n; i++){
        arr.push(parseInt(second_line[i]))
    }

    let ops = [];
    for (let i = 0; i<q; i++){
        ops.push(readLine().split(' '));
    }

    let result = solve(arr, ops, q);//вывести список вершин, смежных с вершиной u
    console.log(result);
}