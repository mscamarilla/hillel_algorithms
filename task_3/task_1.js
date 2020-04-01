//1. Задача на рекурсию. Задано натуральное число n.
// От данного числа вычтем сумму цифр этого числа, от полученного числа опять вычтем сумму цифр и т.д.
// Данную операцию будем продолжать до тех пор, пока полученное число положительно.
// Сколько раз будем выполнять данную операцию? (1 бал)

console.log(count(21)); // 3
console.log(count(6)); // 1

function count(n, step = 0) {
    step++;

    if (n >= 0) {

        let sum = 0;
        let digits = String(n).slice('');

        for (let i = 0; i < digits.length; i++) {
            sum += +digits[i];

        }

        if (n < 11) {
            return step;
        } else {
            return count(n-sum, step);
        }

    }

}
