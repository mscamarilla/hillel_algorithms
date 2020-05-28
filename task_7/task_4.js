// 4. https://www.e-olymp.com/ru/problems/997 - Поиск в ширину (2 бала)
class Node {
    constructor(step, children) {
        this.prev = null;
        this.value = {step: step, children: children};
    }
}

class Queue {
    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;

    }

    push(step, children) {
        let newNode = new Node(step, children);
        if (this.size === 0) {
            this.head = this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.prev = newNode;
            this.tail = newNode;
        }

        this.size++;
    }

    pop() {
        if (this.size === 0) {
            return null;
        }
        const result = this.head.value;
        this.head = this.head.prev;


        if (this.size === 1) {
            this.head = null;
        }

        this.size--;

        if (this.size === 1) {
            this.tail = this.head;
        }
        return result;
    }

    getSize() {
        return this.size;
    }
}
let n = 5;
let start = [1,1];
let finish = [3,1];
let found = 0;
let used = [];
for (let i = 0; i < n + 1; i++) {
    used.push(Array(n + 1).fill(false));
}
let current_children = [];
let v = new Queue();


function add_step(a, b, c) {
    if (1 <= a && a <= n && 1 <= b && b <= n && used[a][b] === false) {

        used[a][b] = true;

        if ((a === finish[0] && b === finish[1])) {
            found = c;
        }

        current_children.push([a, b]);


    }
}

function horse() {
    v.push(0, [start]);
    used[start[0]][start[1]] = true;

    let i = 0;

    while (v.getSize() !== 0) {

        i++;

        if (found > 0) {
            return found;
        }

        let cur = v.pop();

        for (let j = 0; j < cur.children.length; j++) {
            add_step(cur.children[j][0] + 1, cur.children[j][1] + 2, i);
            add_step(cur.children[j][0] + 2, cur.children[j][1] + 1, i);
            add_step(cur.children[j][0] - 1, cur.children[j][1] - 2, i);
            add_step(cur.children[j][0] - 2, cur.children[j][1] - 1, i);
            add_step(cur.children[j][0] + 1, cur.children[j][1] - 2, i);
            add_step(cur.children[j][0] - 2, cur.children[j][1] + 1, i);
            add_step(cur.children[j][0] - 1, cur.children[j][1] + 2, i);
            add_step(cur.children[j][0] + 2, cur.children[j][1] - 1, i);

        }
        v.push(i, current_children);
        current_children = [];
    }
}

console.log(horse())