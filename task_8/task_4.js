//4. https://www.hackerrank.com/challenges/floyd-city-of-blinding-lights/problem - алгоритм Флойда (3 бала) ( 3 вложенных цикла - 3 бала )
let n = 5;
let m = 7;
let matrix = Array(n + 1);
for (let i = 0; i < m; i++) {
    matrix[i] = Array(n + 1).fill(10 ** 6);
}

function floyd(graf) {

    for (let i = 0; i < graf.length; i++) {
        matrix[graf[i][0]] [graf[i][0]] = 0;
        matrix[graf[i][1]] [graf[i][1]] = 0;
        matrix[graf[i][0]] [graf[i][1]] = graf[i][2];
    }

    let result = [];

    floyd_solve();

    vs.forEach(function (item) {
        let cost = matrix[item[0]][item[1]];
        result.push(cost < 10 ** 6 ? cost : -1);
    });

    return result.join('\n');
}

function floyd_solve() {
    for (let k = 0; k <= n; k++) {
        for (let i = 0; i <= n; i++) {
            for (let j = 0; j <= n; j++) {
                matrix[i][j] = Math.min(matrix[i][j], matrix[i][k] + matrix[k][j]);
            }
        }
    }

}

let graf = [
    [1, 2, 20],
    [1, 3, 50],
    [1, 4, 70],
    [1, 5, 90],
    [2, 3, 30],
    [3, 4, 40],
    [4, 5, 60],

];
let vs = [
    [1, 4],
    [5, 1],
    [2, 5],
    [3, 4],
    [1, 4],
    [1, 2],
    [3, 1],
    [1, 2],

];
console.log(floyd(graf, vs));
