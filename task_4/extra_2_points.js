// дополнительное задание. Бинарный поиск
// https://www.e-olymp.com/ru/problems/7329 2 балла

//считает, можно ли из части досок нарезать требуемое количество
function cut(Mid, n, arr) {
    if (Mid === 0) {
        return 0;
    }

    let res = 0;

    for (let i = 0; i < n; i++) {

        res += arr[i] / Mid;
    }

    return res;
}

function binary_search(n, m, arr) {
    // n - количество доступных досок
    // m - количество досок, из скольких должен состоять мостик
    // arr - длины всех имеющихся досок
    //массив сортируется для бинарного поиска
    arr.sort((a, b) => a - b);

    let l = 0;
    let r = n;

    while (r - l > 1) {
        let Mid = Math.floor((l + r) / 2);

        //Если из обрабатываемой части можно нарезать необходимое количество досок, то
        //передвигаем l. Иначе двигаем r.
        if (cut(Mid, n, arr) >= m) {
            l = Mid;
        } else {
            r = Mid;
        }
    }
    return l;

}

console.log(binary_search(4, 4, [5, 5, 3, 6, 2]));
