// 5. Используя очередь (из 2 задания) найти кратчайший путь в матрице из точки S (start) в точку F (finish),
// # - блок, нельзя ступать в эту клетку. O - пустая клетка (2 бала)
// Дека из стрима


class Node {
    constructor(value) {
        this.next = null;
        this.prev = null;
        this.value = value;
    }
}

class Dequeue {
    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null
    }

    push(value) {
        let newNode = new Node(value);
        if (this.size === 0) {
            this.head = this.tail = newNode;
        } else {
            newNode.prev = this.tail;

            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.size++;
    }

    back() {
        return this.tail.value;
    }


    front() {
        return this.head.value;
    }

    pop() {
        if (this.size === 0) {
            return null;
        }
        const result = this.tail.value;
        this.tail = this.tail.prev;


        if (this.size === 1) {
            this.head = null;
        }

        this.size--;

        if (this.size === 1) {
            this.tail = this.head;
        }
        return result;
    }

    shift() {
        if (this.size === 0) {
            return null;
        }

        const result = this.head.value;

        this.head = this.head.next;

        if (this.size === 1) {
            this.tail = null;
        }

        this.size--;

        if (this.size === 1) {
            this.head = this.tail;
        }
        return result;
    }

    unshift(value) {
        let newNode = new Node(value);
        if (this.size === 0) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.size++;
    }

    clear() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    getSize() {
        return this.size;
    }
}

const map1 = [
    ['S', 'O', 'O', '#', 'O', 'O'],
    ['#', '#', 'O', '#', 'O', 'O'],
    ['O', 'O', 'O', '#', 'O', 'O'],
    ['O', '#', '#', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'O', 'O', 'F'],
];// 13
const map2 = [
    ['S', 'O', 'O', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'O', 'O', 'F'],
]; // 9
const map3 = [
    ['S', '#', 'O', 'O', 'O', 'O'],
    ['#', 'O', 'O', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'O', 'O', 'F'],

]; // -1
const map4 = [
    ['S', 'O', 'O', 'O', 'O', 'O'],
    ['O', '#', '#', 'O', 'O', 'O'],
    ['O', '#', 'F', 'O', 'O', 'O'],
    ['O', '#', 'O', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'O', 'O', 'O'],

];// 6


function solve(map) {
    const N = map.length; // строки
    const M = map[0].length; // столбцы

    let d = []; // делаем новую матрицу волн и заполняем ее отрицательными значениями

    for (let i = 0; i <= N + 1; i++) {
        d.push(Array(M + 1).fill(-1));
    }

    let start = []; // точка старта
    let finish = []; // точка финиша

    const dequeue = new Dequeue();

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {

            if (map[i][j] === 'S') { //обнаружили старт
                start = [i + 1, j + 1];
            }

            if (map[i][j] === 'F') { //обнаружили финиш
                finish = [i + 1, j + 1];
            }

            if (map[i][j] !== '#') {
                d[i + 1][j + 1] = 0; // заполняем новую матрицу волн нулями в свободных ячейках
            }
        }
    } // вышли из лабиринта, создав его копию - матрицу волн, пометили вход и выход

    const used = [];
    for (let i = 0; i <= N + 1; i++) {
        used.push(Array(M + 1).fill(0)); //посещенные ячейки, пока все пустые
    }

    dequeue.push(start); // стартовую ячейку добавляем в деку
    used[start[0]][start[1]] = true; //отмечаем ее как посещенную

    while (dequeue.getSize() > 0) {

        let [i1, j1] = dequeue.shift();

        if (d[i1 + 1][j1] === 0 && !used[i1 + 1][j1]) {
            used[i1 + 1][j1] = true;
            d[i1 + 1][j1] = d[i1][j1] + 1; // расстояние к новой вершине будет растояние до текущей + 1
            dequeue.push([i1 + 1, j1]);
        }

        if (d[i1][j1 + 1] === 0 && !used[i1][j1 + 1]) {
            used[i1][j1 + 1] = true;
            d[i1][j1 + 1] = d[i1][j1] + 1; // расстояние к новой вершине будет растояние до текущей + 1
            dequeue.push([i1, j1 + 1]);
        }

        if (d[i1 - 1][j1] === 0 && !used[i1 - 1][j1]) {
            used[i1 - 1][j1] = true;
            d[i1 - 1][j1] = d[i1][j1] + 1; // расстояние к новой вершине будет растояние до текущей + 1
            dequeue.push([i1 - 1, j1]);
        }

        if (d[i1][j1 - 1] === 0 && !used[i1][j1 - 1]) {
            used[i1][j1 - 1] = true;
            d[i1][j1 - 1] = d[i1][j1] + 1; // расстояние к новой вершине будет растояние до текущей + 1
            dequeue.push([i1, j1 - 1]);
        }


    }

    console.log(d);
    console.log(`RESULT IS: ${d[finish[0]][finish[1]]}`);
}


solve(map1);
solve(map2);
solve(map3);
solve(map4);