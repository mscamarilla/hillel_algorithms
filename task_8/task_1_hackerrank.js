//1. https://www.hackerrank.com/challenges/kruskalmstrsub/problem- MST (2 бала) решаем алгоритмом Крускала

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;


let parent = []; //массив с корнями
let rk = [];

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function kruskals(n, m, ribs) {
    ribs.sort((a, b) => a[2] - b[2]);

    let mst_weight = 0;

    //каждой вершине назначается корень. у корня корень он сам. dsu
    for (let i = 1; i <= n; i++) {
        parent[i] = i;
        rk[i] = 1;
    }


    for (let i = 0; i < ribs.length; i++) {
        if (merge(ribs[i][0], ribs[i][1])) {      //Если a и b находятся в разных компонентах,
            mst_weight += ribs[i][2];    //Добавить ребро в минимальный остов.
        }
    }

    return mst_weight;
}

//функция для определения корня get_root()
function get_root(v) {
    if (parent[v] === v) {
        return v;
    } else {
        return parent[v] = get_root(parent[v]);   //На выходе из рекурсии переподвешиваем v
    }
}

//фунция добавления ребра в остов дерева merge()
function merge(a, b) {
    let root_a = get_root(a);
    let root_b = get_root(b);

    //если вершины в одной компоненте
    if (root_a === root_b) {
        return false;
        //если вершины в разных компонентах
    } else {
        if (rk[root_a] < rk[root_b]) {
            parent[root_a] = root_b;
        } else if (rk[root_b] < rk[root_a]) {
            parent[root_b] = root_a;
        } else {
            parent[root_a] = root_b;
            rk[root_b]++;
        }

        return true;
    }
}

function main() {
    //const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const gNodesEdges = readLine().split(' ');

    const n = parseInt(gNodesEdges[0], 10);
    const m = parseInt(gNodesEdges[1], 10);

    let ribs = [];

    for (let i = 0; i < m; i++) {
        const gFromToWeight = readLine().split(' ');

        ribs.push([parseInt(gFromToWeight[0], 10),
            parseInt(gFromToWeight[1], 10),
            parseInt(gFromToWeight[2], 10)
        ]);
    }

    const res = kruskals(n, m, ribs);

    console.log(res);
}
