// 1.Жадный алгоритм https://www.hackerrank.com/challenges/marcs-cakewalk/problem ( 1 бал )

//отсортировать кексы по убыванию калорий,
//потом посчитать по принципу:
//[10,7,5]
//(2^0 * 10) + (2^1 * 7) + (2^2 * 5) = 44
//формула:
// miles = (2**[i] * arr[i]) + (2**[i+1] * arr[i+1])...
function marcsCakewalk(calorie) {
    calorie.sort(function (a,b) {
        return b-a;
    });

    let miles = 0;

    calorie.forEach(function (item,i) {
        miles += (2**i * item);
    });

    return miles;

}

let cakes = [7, 4, 9, 6];
console.log(marcsCakewalk(cakes));