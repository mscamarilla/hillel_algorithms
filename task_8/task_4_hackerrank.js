//4. https://www.hackerrank.com/challenges/floyd-city-of-blinding-lights/problem - алгоритм Флойда (3 бала) ( 3 вложенных цикла - 3 бала )
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}


function main() {
    const roadNodesEdges = readLine().split(' ');
    const n = parseInt(roadNodesEdges[0], 10);
    const m = parseInt(roadNodesEdges[1], 10);

    let matrix = Array(n + 1);
    for (let i = 0; i < m; i++) {
        matrix[i] = Array(n + 1).fill(10 ** 6);
    }

    for (let i = 0; i < m; i++) {
        const roadFromToWeight = readLine().split(' ');
        matrix[parseInt(roadFromToWeight[0], 10)] [parseInt(roadFromToWeight[0], 10)] = 0;
        matrix[parseInt(roadFromToWeight[1], 10)] [parseInt(roadFromToWeight[1], 10)] = 0;
        matrix[parseInt(roadFromToWeight[0], 10)] [parseInt(roadFromToWeight[1], 10)] = parseInt(roadFromToWeight[2], 10);
    }

    let vs = [];

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const xy = readLine().split(' ');

        const x = parseInt(xy[0], 10);

        const y = parseInt(xy[1], 10);
        vs.push([x, y])
    }

    function floyd() {

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


    console.log(floyd());
}
