// 2. Жадный алгоритм https://www.hackerrank.com/challenges/jim-and-the-orders/problem (2 бала)

//ответ это сумма времени заказа и времени на приготовление булочки.
//сначала считаем сумму, потом сортируем по убыванию
function jimOrders(orders) {

    //создаем массив из номера по порядку (каким в очереди фанат пришел), времени его заказа и времени готовки
    let result = [];

    orders.forEach(function (item, i) {
        result.push([i + 1, item[0], item[0] + item[1]]);
    });

    // сортируем массив по времени готовки ([2])
    result.sort((a, b) => {

        if (a[2] !== b[2]) {
            return a[2] - b[2];
        } else {
            return 0;
        }
    });

    //выводим только номера фанатов
    let answer = [];

    result.forEach(function (item) {
        answer.push(item[0]);
    });

    return answer;
}

let orders = [
    [8, 1], //9
    [4, 2], //6
    [5, 6], //11
    [3, 1], //4
    [4, 3], //7
];

console.log(jimOrders(orders));
