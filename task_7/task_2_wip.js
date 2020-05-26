// 2. https://www.e-olymp.com/ru/problems/2022 - поиск цикла (4 бала)

let n = 6;
let m = 6;
let g = Array(n + 1).fill([]);
let color = Array(n + 1).fill(0);
let parent = [];
let mins = [];
let is_cycle = 'No';
let min = 1e9;

function loops(ribs) {
    //матрица смежности
    for (let i = 0; i < m; i++) {
        g[ribs[i][0]] = [];
        g[ribs[i][1]] = [];
    }

    for (let i = 0; i < m; i++) {
        g[ribs[i][0]].push(ribs[i][1]);
        //g[ribs[i][1]].push(ribs[i][0]);
    }

    for (let i = 1; i <= n; i++) {
        if (color[i] === 0) {
            dfs(i);
        }
    }

    return is_cycle;

}

function dfs(u) {
    color[u] = 1;

    for (let i = 0; i < g[u].length; i++) {
        let to = g[u][i];
        parent[to] = u;

        if (color[to] === 0) {
            dfs(to);
        }

        if (color[to] === 1) {
            is_cycle = 'Yes';
            console.log(parent)
            parent.forEach(function (item) {
                min = Math.min(item, min);

            });

            is_cycle += '\n' + min;

            break;
        }
    }

    color[u] = 2;
}

//TODO: проверить на нескольких циклах. каждый цикл писать в мэп или массив. оттуда уже брать минимум
let ribs = [
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 2],
    [4, 6],
];
console.time('FirstWay');
console.log(loops(ribs));
console.timeEnd('FirstWay');
