// 2. Реализовать Очередь через список (1 бал)
// очередь - «первый пришёл — первый вышел» (FIFO, англ. first in, first out)
// у очереди есть "голова", которая смотрит всегда на первый добавленный элемент, а добавление новых всегда идет в "хвост"
// линейный список содержит ссылку только на предыдущий элемент

/*
  push - добавить элемент в очередь
  pop - удалить первый добавленный элемент
  getSize - получить размер
  front - получить первый добавленный элемент
  clear - очистить очередь
 */


class Node {
    constructor(value) {
        this.prev = null;
        this.value = value;
    }
}

class Queue {
    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;

    }

    push(value) {
        let newNode = new Node(value);
        if(this.size === 0) {
            this.head = this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.prev = newNode;
            this.tail = newNode;
        }

        this.size++;
    }

    pop() {
        if(this.size === 0) {
            return null;
        }
        const result = this.head.value;
        this.head = this.head.prev;


        if(this.size === 1) {
            this.head = null;
        }

        this.size--;

        if(this.size === 1) {
            this.tail = this.head;
        }
        return result;
    }

    front() {
        if (this.size === 0) {
            return null;
        }
        return this.head.value;
    }

    getSize() {
        return this.size;
    }


    clear() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }
}

const d = new Queue();


d.push(10);
d.push(20);
d.push(30);
d.push(40);

console.log(d); // 10, 20, 30, 40
console.log(d.pop()); // [20, 30, 40] // 10
console.log(d.pop()); // [30, 40] // 20
console.log(d.pop()); // [40] 30
console.log(d.pop()); // [] 40
console.log(d.pop()); // null

d.push(10);
d.push(40);

console.log(d.front()); // [10, 40] 10
console.log('*', d.pop()); // [40] 10
console.log(d.pop()); // [] 40
console.log(d.front()); // null

d.push(40);
d.push(40);
d.push(40);
d.push(40);

console.log(d.getSize()); // [40, 40, 40, 40] 4
console.log(d.pop()); // [40, 40, 40] 40
console.log(d.getSize()); // 3