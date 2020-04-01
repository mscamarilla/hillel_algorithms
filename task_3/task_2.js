// 2. Реализовать быструю сортировку.  (2 бал)
// Посчитать время выполнения на массивах длины 10, 100, 10^3, 10^5, 10^6, 10^7,
// массивы сгенерировать случайные ответ написать в мс (1 бал)

function quick_sort(arr, l = 0, r = arr.length - 1) {
    let l1 = l;
    let r1 = r;
    let x = arr[(l + r) >> 1];

    while (l <= r) {
        while (arr[l] < x) l++;
        while (arr[r] > x) r--;

        if (l <= r) {
            [arr[l], arr[r]] = [arr[r], arr[l]];
            l++;
            r--;
        }
    }

    if (l1 < r) {
        quick_sort(arr, l1, r);
    }

    if (l < r1) {
        quick_sort(arr, l, r1);
    }

    return arr;

}


function data_generate(n){
    let arr = [];

    for (let i = 0; i < n; i++) {
        const num = Math.random() * 100 >> 0;
        arr.push(num);
    }
    return arr;
}

//10
let arr = [];
arr = data_generate(10);
let start = Date.now();
quick_sort(arr);
console.log(Date.now() - start + ' - arr=10');

//100
arr = data_generate(100);
start = Date.now();
quick_sort(arr);
console.log(Date.now() - start + ' - arr=100');

//10^3
arr = data_generate(10**3);
start = Date.now();
quick_sort(arr);
console.log(Date.now() - start + ' - arr=10^3');

//10^5
arr = data_generate(10**5);
start = Date.now();
quick_sort(arr);
console.log(Date.now() - start + ' - arr=10^5');

//10^6
arr = data_generate(10**6);
start = Date.now();
quick_sort(arr);
console.log(Date.now() - start + ' - arr=10^6');

//10^7
arr = data_generate(10**7);
start = Date.now();
quick_sort(arr);
console.log(Date.now() - start + ' - arr=10^7');
