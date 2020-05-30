// 2. https://www.e-olymp.com/ru/problems/2022 - поиск цикла (4 бала)
class Stack {
    constructor() {
        this.arr = Array(100000 + 1);
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

let n = 6;
let m = 6;
let g = Array(n + 1).fill([]);
let color = Array(n + 1).fill(0);
let parent = [];
let v = new Stack();
let is_cycle = 'No';
let min = 1e9;

function loops(ribs) {
    //обход графа
    for (let i = 0; i <= n + 1; i++) {
        g[i] = [];
    }

    //массив дочерних вершин
    for (let i = 0; i < m; i++) {
        g[ribs[i][0]].push(ribs[i][1]);
        g[ribs[i][1]].push(ribs[i][0]);
    }
    //стартовые вершины
    for (let i = 1; i <= n; i++) {
        if (color[i] === 0) {
            v.push([i, 0]); //номер вершины и номер родителя. для стартовых он всегда 0
            dfs();
        }
    }


    return is_cycle;

}

function dfs() {

    while (v.getSize() !== 0) {
        let step = v.pop();
        let u = step[0]; // номер вершины
        let from = step[1]; //откуда в вершину пришли
        color[u] = 1;
        parent.push(u); // пройденный путь

        //дочерние вершины
        for (let i = 0; i < g[u].length; i++) {
            let to = g[u][i];

            //если в этой вершине еще не были и она не та, из которой пришли
            if (color[to] === 0 && to !== from) {
                v.push([to, u]);
            }

            // если в вершине уже были, но она не прямой предок
            if (color[to] === 1 && to !== from) {
                //по пройденному пути идем назад до текущей вершины
                let curr = 0;

                while (parent.length > 0 && curr !== to) {

                    curr = parent.pop();
                    //каждую предыдущую вершину сравниваем с минимумом
                    if (curr < min) {
                        min = curr;
                    }
                    // весь цикл помечаем как окончательно пройденный
                    color[curr] = 2;
                }

                is_cycle = 'Yes';
                is_cycle += '\n' + min;
            }

        }


    }

}

let ribs = [
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 2],
    [4, 6],
];
console.log(loops(ribs));
