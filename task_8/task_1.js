//1. https://www.hackerrank.com/challenges/kruskalmstrsub/problem- MST (2 бала) решаем алгоритмом Крускала

let n = 4; //вершины
let m = 12; //ребра

let ribs = [ //массив с ребрами
    [1, 2, 5],
    [1, 3, 3],
    [4, 1, 6],
    [2, 4, 7],
    [3, 2, 4],
    [3, 4, 5],//
    [2, 1, 5],
    [3, 1, 3],
    [1, 4, 6],
    [4, 2, 7],
    [2, 3, 4],
    [4, 3, 5],
];

let parent = []; //массив с корнями
let rk = []; //

//каждой вершине назначается корень. у корня корень он сам. dsu()
function dsu() {
    for (let i = 1; i <= n; i++) {
        parent[i] = i;
        rk[i] = 1;
    }
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

function main(ribs) {

    //сортировка ребер по длине
    ribs.sort((a, b) => a[2] - b[2]);

    let mst_weight = 0;

    dsu();

    for (let i = 0; i < ribs.length; i++) {
        if (merge(ribs[i][0], ribs[i][1])) {      //Если a и b находятся в разных компонентах,
            mst_weight += ribs[i][2];    //Добавить ребро в минимальный остов.
        }
    }

    return mst_weight;
}

console.log(main(ribs));
