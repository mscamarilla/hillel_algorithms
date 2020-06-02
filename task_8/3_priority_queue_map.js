'use strict';

const fs = require('fs');

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
class QElement {
    // from - с какой вершины пришли (для дебага)
    // to - в какую вершину идем
    // priority - вес ребра
    constructor(from, to, priority) {
        this.from = from;
        this.to = to;
        this.priority = priority;
    }
}

class PriorityQueue {

    constructor() {
        this.items = [];
    }

    // добавление в очередь
    enqueue(from, to, priority) {
        // создание елемента
        let qElement = new QElement(from, to, priority);
        let contain = false;

        // перебор массива для определения позиции для добавления
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].priority > qElement.priority) {
                // позиция найдена
                this.items.splice(i, 0, qElement);
                contain = true;
                break;
            }
        }
        // если у элемента самый высокий приоритет из всех уже имеющихся в очереди,
        // он добавляется в конец очереди
        if (!contain) {
            this.items.push(qElement);
        }
    }

    //удаление элемента
    dequeue() {
        // возвращает первый элемент из очереди и удаляет его.
        // если очередь пуста, возвращает "Underflow"
        if (this.isEmpty())
            return "Underflow";
        return this.items.shift();
    }

    // возвращает элемент с самым высоким приоритетом
    front() {
        if (this.isEmpty())
            return "No elements in Queue";
        return this.items[0];
    }

    // возвращает true, если очередь пустая
    isEmpty() {
        return this.items.length === 0;
    }

    // возвращает элемент с самым низким приоритетом
    rear() {
        if (this.isEmpty())
            return "No elements in Queue";
        return this.items[this.items.length - 1];
    }

    //возвращает все элементы очереди
    printPQueue() {
        let str = "";
        for (let i = 0; i < this.items.length; i++)
            str += 'from:' + this.items[i].from + ' to:' + this.items[i].to + ' prior:' + this.items[i].priority + " ";
        return str;
    }
}

// Complete the shortestReach function below.
function shortestReach(n, m, edges, s) {

    let d = []; // расстояния (индекс - расстояние от старта до вершины с этим индексом)
    for (let i = 0; i <= n; i++) {
        d[i] = 10 ** 6; // изначально все расстояния большие
    }

    d[s] = 0; // а до стартовой вершины расстояние 0

    let q = new PriorityQueue();

    let g = new Map();

    //массив дочерних вершин. граф неориентированный, добавляем в обе стороны
    for (let i = 0; i < m; i++) {
        //ребро в одну сторону
        let vertex_first = edges[i][0];
        let v_edges_first = g.has(vertex_first) ? g.get(vertex_first) : [];
        v_edges_first.push([edges[i][1], edges[i][2]]);
        g.set(vertex_first, v_edges_first);

        //ребро в другую сторону
        let vertex_second = edges[i][1];
        let v_edges_second = g.has(vertex_second) ? g.get(vertex_second) : [];
        v_edges_second.push([edges[i][0], edges[i][2]]);
        g.set(vertex_second, v_edges_second);
    }

    q.enqueue(s, s, 0);     //идем в старт из старта за стоимость 0.

    while (!q.isEmpty()) {
        let c = q.front();
        q.dequeue();

        let dst = c.priority;
        let v = c.to;

        //для каждого потомка вершины улучшаем расстояние
        let g_v = g.get(v);
        for (let j = 0; j < g_v.length; j++) {
            let to = g_v[j][0]; //куда идем
            let len = g_v[j][1]; // стоимость хода
            let n_dst = dst + len;
            if (n_dst < d[to]) {
                d[to] = n_dst;
                q.enqueue(v, to, d[to])
            }
        }
    }
    let result = [];
    for (let i = 1; i <= n; i++) {
        if (i !== s) {
            if (d[i] === 10 ** 6) {
                result.push(-1);
            } else {
                result.push(d[i]);
            }
        }
    }

    return result;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

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

        let result = shortestReach(n,m, edges, s);

        ws.write(result.join(" ") + "\n");
    }

    ws.end();
}
