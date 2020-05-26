// 2. https://www.e-olymp.com/ru/problems/2022 - поиск цикла (4 бала)
class Stack {
    constructor() {
        this.arr = Array(100000+1);
        this.head = -1;
    }

    push(value) {
        this.arr[++this.head] = value;
        return value;
    }

    pop() {
        return this.arr[this.head--];
    }

    clear() {
        this.head = -1;
    }

    getSize() {
        return this.head + 1;
    }
}

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;
var g = [];
var color = [];
let used = [];
var n = '';
var m = '';
let parent = new Stack();
let is_cycle = 'No';
let min = 100000+1;



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


function loops(ribs) {
    //обход графа
    for (let i = 0; i < n + 1; i++) {
        g[i] = [];
    }

    for (let i = 0; i < m; i++) {
        g[ribs[i][0]].push(ribs[i][1]);
        g[ribs[i][1]].push(ribs[i][0]);
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
    parent.push(u); // пройденный путь

    for (let i = 0; i < g[u].length; i++) {
        let to = g[u][i];

        used[u] = to; // ребро, по которому идем

        //если в этой вершине еще не были
        if (color[to] === 0) {
            dfs(to);
        }

        // если в вершине уже были, но она не прямой предок
        if (color[to] === 1 && used[to] !== u) {
            //по пройденному пути идем назад до текущей вершины
            for(let b = parent.getSize(), curr = 0; b > 0, curr !== to; b--){
                curr = parent.pop();
                //кажду. предыдущую вершину сравниваем с минимумом
                if(curr < min){
                    min = curr;
                }
                // весь цикл помечаем как окончательно пройденный
                    color[curr] = 2;
                    color[to] = 2;
                }

            is_cycle = 'Yes';
            is_cycle += '\n' + min;

            break;
        }

    }

    color[u] = 2;
}


function main() {
    var first_line = readLine().split(' ');
    n = parseInt(first_line[0]);
    m = parseInt(first_line[1]);
    var arr = [];
    for (let i = 0; i < m; i++) {
        arr.push(readLine().split(' ').map(v=>+v));
    }
    g = Array(n+1);
    color = Array(n + 1).fill(0);
    used = Array(m + 1).fill(0);
    var result = loops(arr);
    console.log(result);
}

