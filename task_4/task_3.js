// 3. Реализовать Дек через массив ( 5 баллов ). Должны быть реализованы следующие методы:
// Добавить в конец - push O(1)
// вернуть последний элемент - back O(1)
// Удалить последний элемент и вернуть его значение - pop O(1)
// добавить в начало - unshift O(1)
// вернуть первый элемент - front O(1)
// удалить первый элемент и вернуть его значение - shift O(1)
// вывести размер Дека - getSize O(1)
// Очистить Дек - clear O(1)
// Получить доступ по индексу - get(i) O(1)


let head = 1e6;
let tail = 1e6-1;
let queue = [];

function push(v) {
    queue[++tail] = v;
}

function back() {
    if (getSize() === 0) {
        return null;
    }

    return queue[tail];
}

function front() {
    if (getSize() === 0) {
        return null;
    }

    return queue[head];
}

function pop() {
    if (getSize() === 0) {
        return null;
    }
    let value = queue[tail];

    --tail;

    return value;
}

function unshift(v) {

    if (getSize() === 0) {
        queue[head] = v;
        tail++;
    } else {
        queue[--head] = v;
    }

}

function shift() {
    if (getSize() === 0) {
        return null;
    }

    const result = queue[head];

    if (getSize() === 1) {
        queue[tail] = null;
    }

    if (getSize() === 1) {
        queue[head] = queue[tail];
    }
    return result;
}

function getSize() {
    return tail - head + 1;
}

function clear() {
    queue = [];
    head = 1e6;
    tail = 1e6-1;

}

function get(i) {
    if (getSize() === 0) {
        return null;
    }

    return queue[i + head] || null;
}


unshift(5);
unshift(10);
unshift(40);
console.log(queue); // 40, 10, 5
console.log(front()); // 40
console.log(shift()); //40
console.log(queue);
console.log(pop()); //5
console.log(pop()); //10
console.log(front()); //40

console.log(getSize()); //1
console.log(pop()); //40
console.log(getSize()); //0
