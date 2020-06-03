//2. https://www.hackerrank.com/challenges/primsmstsub/problem - MST (2 бала) решаем алгоритмом Прима

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;
let g = [];
let used = [];

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


// Complete the prims function below.
function prims(m, edges, start) {
    let q = new PriorityQueue();

    //массив дочерних вершин. граф неориентированный, добавляем в обе стороны
    for (let i = 0; i < m; i++) {
        g[edges[i][0]].push([edges[i][1], edges[i][2]]);
        g[edges[i][1]].push([edges[i][0], edges[i][2]]);
    }

    let mst_weight = 0;     //Текущий вес остова.
    q.enqueue(start, start, 0);     //идем в старт из старта за стоимость 0.

    while (!q.isEmpty()) {
        let c = q.front();
        q.dequeue();

        let dst = c.priority;
        let v = c.to;

        if (used[v]) {      //вершина уже добавлена в остов
            continue;
        }

        used[v] = true;
        mst_weight += dst;

        for (let j = 0; j < g[v].length; j++) { //дочерние вершины, в которые можно попасть
            if (!used[g[v][j][0]]) { // если в дочерней еще не были
                q.enqueue(v, g[v][j][0], g[v][j][1]); // то кладем в очередь новую вершину и вес ребра к ней
            }
        }

    }

    return mst_weight;


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nm = readLine().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    let edges = Array(m);

    for (let i = 0; i < m; i++) {
        edges[i] = readLine().split(' ').map(edgesTemp => parseInt(edgesTemp, 10));
    }

    const start = parseInt(readLine(), 10);

    for (let i = 0; i <= n; i++) {
        g[i] = [];
    }

    let result = prims(m, edges, start);

    ws.write(result + "\n");

    ws.end();
}
