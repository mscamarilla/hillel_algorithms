//4. Задан отсортированный массив, необходимо подсчитать количество чисел, которые находятся в интервале [L; R].
// O(n) - 1 бал, O(logN) - 2 бала (итого 3 бала)
let arr = [1, 4, 8, 11, 21, 23, 24, 64, 70, 84, 125, 704, 1099, 1200, 1201, 1202, 2000];

count(arr, 1, 10); // 3   (подходят элементы 1, 4, 8)
count(arr, 200, 700); // 0   (в этом промежутке нет искомых чисел)
count(arr, 20, 100); // 6   (подходят элементы 21,23,24,64,70,84)
count(arr, 1000, 2000); // 5   (подходят элементы 1099, 1200, 1201, 1202, 2000)
count(arr, 84, 84); // 1   (подходит элемент 84)

//O(n)
function count1(arr, l, r) {

    let res = [];
    for (i = 0; i <= arr.length - 1; i++) {
        if (arr[i] >= l && arr[i] <= r) {
            res.push(arr[i]);
        }
    }

    console.log(res.length);

}

//O(logN)
function count(arr, left, right) {
    let l = 0;
    let r = arr.length - 1;
    let leftIndex;
    let rightIndex;

    while (l <= r) {
        let m = Math.floor((l + r) / 2);

        if (arr[m] >= left) {
            leftIndex = m;
        }

        if (arr[m] < left) {
            l = m + 1;
        } else {
            r = m - 1;
        }

    }

    l = 0;
    r = arr.length - 1;

    while (l <= r) {
        let m = Math.floor((l + r) / 2);

        if (arr[m] <= right) {
            rightIndex = m;
        }

        if (arr[m] < right) {
            l = m + 1;
        } else {
            r = m - 1;
        }

    }
    console.log(rightIndex - leftIndex + 1);

}
