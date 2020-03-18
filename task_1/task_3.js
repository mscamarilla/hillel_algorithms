//3.Реализуйте бинарный поиск в массиве. (2 бала)
let arr = [1, 4, 8, 11, 21, 23, 24, 64, 70, 84, 125, 704, 1099, 1200, 1201, 1202, 2000];

binary_search(arr, 8); // YES
binary_search(arr, 10); // NO
binary_search(arr, 70); // YES
binary_search(arr, 1098); // NO
binary_search(arr, 1202); // YES
binary_search(arr, 1999); // NO

function binary_search(arr, k) {

    let l = 0;
    let r = arr.length - 1;
    let res = k + ' - NO';


    while (l <= r) {
        let m = Math.floor((l + r) / 2);

        if (arr[m] == k) {
            res = k + ' - YES';
        }

        if (arr[m] < k) {
            l = m + 1;
        } else {
            r = m - 1;
        }

    }

    console.log(res);

}
