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

function buy(n, goods, p) {
    let used = Array(...goods);
    let res = 0;

    for (let i = 0; i < goods.length; i++) {
        let sum = 0;
        used[i] = 0;

        for (let j = 0; j < goods.length; j++) {
            if (used[j] !== 0) {
                sum = goods[i] + goods[j];
                if (sum <= p) {
                    res++;
                }
            }
        }
    }

    return res;
}

console.log(buy(n, goods, p));