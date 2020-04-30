// 2. Дан массив чисел arr = [5, 8, 3, 8, 4, 3, 8, 1, 7];
// Необходимо подсчитать количество различных чисел в массиве (1 бал)

let arr = [5, 8, 3, 8, 4, 3, 8, 1, 7];

function countValues(arr) {
    let map = new Map();
    arr.forEach(function (item) {
        let count = map.has(item) ? map.get(item) : 0;
        count++;
        map.set(item, count);
    });
    return map;
}

console.log(countValues(arr));