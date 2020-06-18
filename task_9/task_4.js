// 4. https://www.e-olymp.com/ru/problems/2472 - 10 балов

let n = 4;
let k = 4;
let g = Array(n + 1).fill([]);
let ribs = [[1, 2], [2, 3]];
let vs = [4, 2];

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

AddEdge(ribs);//добавить в граф ребро между вершинами (u, v)
let result = Vertex(vs);//вывести список вершин, смежных с вершиной u
console.log(result);
