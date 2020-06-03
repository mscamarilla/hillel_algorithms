process.stdin.setEncoding('ascii');

var input_stdin = "";
var textIdx = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    main();
});

function readLine() {
    var tempIdx = textIdx;
    textIdx = input_stdin.indexOf("\n", textIdx);
    if (textIdx !== -1) {
        textIdx += 1;
        return input_stdin.substring(tempIdx, textIdx);
    } else {
        // end of file
        return input_stdin.substring(tempIdx);
    }
}

// Complete the shortestReach function below.
function shortestReach(n, m, edges, s) {
    let g = [];
    let d = [];
    let used = Array(n + 1).fill(false); // посещенные вершины
    for (let i = 0; i <= n; i++) {
        g[i] = [];
        d[i] = 10 ** 6; // изначально все расстояния большие
    }
    d[s] = 0; // а до стартовой вершины расстояние 0
    //обход графа
    for (let i = 0; i < m; i++) {
        g[[edges[i][0]]].push([edges[i][1], edges[i][2]]);
        g[[edges[i][1]]].push([edges[i][0], edges[i][2]]);

    }

    let result = [];


    for (let i = 1; i <= n; i++) {
        let v = -1;
        //для каждой вершины ищем наименьшее расстояние среди ее потомков
        for (let j = 1; j <= n; j++) {
            if (!used[j] && (v === -1 || d[j] < d[v])) {
                v = j;
            }
        }
        //если после обхода всех потомков вершина осталась недостижимой - прерваться
        if (d[v] === 10 ** 6) {
            //result.push(-1);
            break;
        }
        //пометить вершину, как посещенную
        used[v] = true;

        //для каждого потомка вершины улучшаем расстояние
        for (let j = 0; j < g[v].length; j++) {
            let to = g[v][j][0]; //куда идем
            let len = g[v][j][1]; // стоимость хода
            if (d[v] + len < d[to]) {
                d[to] = d[v] + len;
            }
        }

    }
    for (let i = 1; i <= n; i++) {
        if (i !== s) {
            if (!used[i]) {
                result.push(-1);
            } else {
                result.push(d[i]);
            }
        }
    }


    return result;


}

function main() {
    //const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const nm = readLine().split(' ');

        const n = parseInt(nm[0], 10);

        const m = parseInt(nm[1], 10);

        let edges = Array(m);

        for (let i = 0; i < m; i++) {
            edges[i] = readLine().split(' ').map(edgesTemp => parseInt(edgesTemp, 10));
        }

        const s = parseInt(readLine(), 10);

        let result = shortestReach(n, m, edges, s);
        //console.log(result);
        console.log(result.join(" "));
    }

    //ws.end();
}

