// 3. https://www.e-olymp.com/ru/problems/977 - является ли граф деревом (2 бала)

let n = 3; //вершины
let ribs = 0; //количество ребер
let g = Array(n+1).fill([]);
let used = [];

function is_tree(matrix) {
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


let matrix = [
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0],
];
console.log(is_tree(matrix));
