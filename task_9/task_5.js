/* 5. ( 30 баллов) Есть N товаров. У каждого товара есть своя стоимость K[i].
Необходимо подсчитать количество различных пар товаров, которые мы можем купить имея в наличии P грн.
1 <= N <= 10^6
1 <= K[i] <= 10^6
0 <= P <= 10^6
 Пример:
5
4 3 1 5 2
5

Ответ: 4.
Пояснение: мы можем купить пары товары следующей стомости
1 2
1 3
1 4
2 3
* */

let n = 5;
let goods = [4, 3, 1, 5, 2];
let p = 5;

function findIndexes(right, current) {
    let l = 0;
    let r = right;

    while (l < r) {
        let m = (l + r) >> 1;

        if (goods[m] <= current) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }
    return goods[l] > current ? l - 1 : l;

}

function buy(n, goods, p) {
    let res = 0;

    goods.sort((a, b) => a - b);

    for (let i = 1; i < n; i++) {
        let current = p - goods[i];
        res += findIndexes(i - 1, current) + 1;
    }

    return res;
}

console.log(buy(n, goods, p));