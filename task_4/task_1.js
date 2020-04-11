// 1, Реализовать стек через массив ( 1 бал )
// stack  LIFO (англ. last in — first out, «последним пришёл — первым вышел»).
// у стека есть только "голова", которая всегда смотрит на последний добавленный элемент

/*
  push - добавление в стек
  pop - удаление из стека последнего добавленного
  getSize - получить размер
  back - получить последний добавленный элемент
  clear - очистить стек
 */


let head = -1;
let size = 0;

const stack = [];

function push(v) {
    stack[++head] = v;
    size++;
}


function getSize() {
    return size;
}

function clear() {
    head = -1;
    size = 0;
}

function pop() {
    if (head === -1) {
        return null;
    }
    let value = stack[head];

    head--;
    size--;

    return value;
}

function back() {
    if (head === -1) {
        return null;
    }

    return stack[head];
}


push(10);
push(20);
push(30);
push(40);

console.log(stack); // 10, 20, 30, 40
console.log(pop()); // [10, 20, 30] 40
console.log(pop()); // [10, 20] 30
console.log(pop()); // [10] 20
console.log(pop()); // [] 10
console.log(pop()); // null

push(10);
push(40);

console.log(back()); // [40, 40] 40
console.log(pop()); // [40] 40
console.log(pop()); // [] 40
console.log(back()); // null

push(40);
push(40);
push(40);
push(40);

console.log(getSize()); // [40, 40, 40, 40] 4
console.log(pop()); // [40, 40, 40] 40
console.log(getSize()); // 3
