// 1. https://www.e-olymp.com/ru/problems/776 - dfs (2 бала)

let n = 7;
let m = 1;
let g = Array(n+1).fill([]);
let used = [];

function roads(ribs) {
    //наполнение графа
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


let ribs = [
    [1, 3],
];
console.log(roads(ribs));
