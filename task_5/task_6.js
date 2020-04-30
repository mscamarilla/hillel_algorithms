// 6. https://www.hackerrank.com/challenges/construct-the-array/problem - 2бала

function countArray(n, k, x) {
    //n - количество элементов в массиве
    //k - верхняя граница диапазона чисел. от 1 до k
    //x - последний элемент массива

    let m = 10**9+7;
    let last_one = 0; //x = 1
    let last_other = 1; //x!=1

    //n >= 3, так что можно считать с 3
    //пробегаемся по всему массиву
    for (let i = 3; i <= n; i++) {
        let temp = last_other * (k - 1) % m;
        last_other = (last_one + last_other * (k - 2)) % m;
        last_one = temp;
    }


    return x === 1 ? last_one : last_other;
}

console.log(countArray(4,3,2));