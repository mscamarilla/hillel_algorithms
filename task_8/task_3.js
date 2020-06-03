// 3. https://www.hackerrank.com/challenges/dijkstrashortreach/problem - поиск цикла (3 бала)

let n = 4; //кол-во вершин
let m = 5; //кол-во ребер
let s = 1; //стартовая вершина
let edges = [   // массив ребер
    [1, 2, 24],
    [1, 2, 5],
    [1, 4, 20],
    [3, 1, 3],
    [4, 3, 12],
];


class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
        this.size = 0;
    }

    enqueue(val, priority) {
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        let index = this.values.length - 1;
        const current = this.values[index];

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];

            if (parent.priority <= current.priority) {
                this.values[parentIndex] = current;
                this.values[index] = parent;
                index = parentIndex;
            } else break;
        }
        this.size++;
    }

    dequeue() {
        if (this.size === 0) {
            return null;
        }
        if(this.size === 1) {
            let node = this.values[0];
            this.values = [];
            this.size = 0;
            return node;
        }

        const max = this.values[0];
        const end = this.values.pop();
        this.values[0] = end;

        let index = 0;
        const length = this.values.length;
        const current = this.values[0];
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.values[leftChildIndex];
                if (leftChild.priority > current.priority) swap = leftChildIndex;
            }
            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];
                if (
                    (swap === null && rightChild.priority > current.priority) ||
                    (swap !== null && rightChild.priority > leftChild.priority)
                )
                    swap = rightChildIndex;
            }

            if (swap === null) break;
            this.values[index] = this.values[swap];
            this.values[swap] = current;
            index = swap;

        }
        this.size--;
        return max;

    }

    isEmpty() {
        return this.size === 0;
    }

    front() {
        if (this.isEmpty())
            return "No elements in Queue";
        return this.values[0];
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

    q.enqueue(s, 0);     //идем в старт из старта за стоимость 0.

    while (!q.isEmpty()) {
        let c = q.front();
        q.dequeue();

        let dst = Math.abs(c.priority);
        let v = c.val;

        //для каждого потомка вершины улучшаем расстояние
        let g_v = g.get(v);
        for (let j = 0; j < g_v.length; j++) {
            let to = g_v[j][0]; //куда идем
            let len = g_v[j][1]; // стоимость хода
            let n_dst = dst + len;
            if (n_dst < d[to]) {
                d[to] = n_dst;
                q.enqueue(to, -d[to])
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


console.log(shortestReach(n, m, edges, s));