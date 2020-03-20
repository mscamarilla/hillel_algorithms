//5. Написать функцию нахождения квадратного корня числа с точностью до 7 знаков после запятой с помощью бинарного поиска (2 бала)

sqrt(4); // 2;
sqrt(25); // 5;
sqrt(163); //  12.7671453


function sqrt(k) {
    let l = 0;
    let r = k;
    let res;


    while (l <= r) {
        let m = (l + r) / 2;

        if (k - (m * m) < 1e-6) {
            res = m.toFixed(7);
        }

        if (m * m < k) {
            l = m + 1e-6;
        } else {
            r = m - 1e-6;
        }

    }

    console.log(res);

}
