//3. Реализовать бинарный поиск числа в массиве с помощью рекурсии (1 бал)

let arr = [1, 4, 8, 11, 21, 23, 24, 64, 70, 84, 125, 704, 1099, 1200, 1201, 1202, 2000];

console.log(search(arr, 8)); // YES
console.log(search(arr, 10)); // NO
console.log(search(arr, 70)); // YES
console.log(search(arr, 1098)); // NO
console.log(search(arr, 1202)); // YES
console.log(search(arr, 1999)); // NO


function search(arr, k, l = 0, r = arr.length -1) {
    if(l > r){
        return k + ' - NO';
    }

    let m = Math.floor((l + r) / 2);

    if (arr[m] === k) {
        return k + ' - YES';
    }

    if(arr[m] < k) {
        return search(arr, k, m + 1, r);
    } else {
        return search(arr, k, l, m - 1);
    }
}
