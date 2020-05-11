// дополнительное задание. Бинарный поиск
// https://www.e-olymp.com/ru/problems/7329 2 балла

// n - количество доступных досок,
// m - количество досок, из скольких должен состоять мостик,
// l - длины имеющихся в наличии досок.

const n = 4;
const m = 4;
const l = [5, 5, 3, 6];

function cut(mid) {
    if (mid === 0) {
        return 0;
    }

    let res = 0;

    l.forEach(function (item) {
        res += item / mid;
    });

    return res;
}


function bridge() {
    let left = 0;
    let right = n;

    while (right - left > 1) {

        let mid = Math.floor((left + right) / 2);

        if (cut(mid) >= m) {
            left = mid;
        } else {
            right = mid;
        }

    }

    return left;

}

console.log(bridge());
